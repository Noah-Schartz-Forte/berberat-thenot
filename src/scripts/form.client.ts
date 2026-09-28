// Form enhancement for every <form data-form> (rendered by Form.astro).
//
// Progressive enhancement: without JS the form posts natively to
// /api/contact. With JS:
//   - inline French validation on submit, then live on input/blur for
//     fields already marked invalid; focus moves to the first invalid field
//   - fetch POST (JSON) with a pending state on the submit button
//   - API field errors (400 `fields`) are shown under the matching fields
//   - success: the form fields are replaced by the success panel (focused)
//   - 503 (form not yet activated), 429, 502 or network error: the API
//     message is shown with the three main phone numbers
// No animation beyond the CSS state changes, so reduced motion is safe.

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const MESSAGES = {
  required: 'Ce champ est obligatoire.',
  select: 'Choisissez une option.',
  email: 'Adresse e-mail invalide, par exemple nom@entreprise.fr.',
  tel: 'Numéro de téléphone invalide.',
  url: 'Lien invalide : il doit commencer par https://',
  minlength: (n: number) => `Écrivez au moins ${n} caractères.`,
  consent: 'Merci d’accepter le traitement de vos données pour envoyer le formulaire.',
  network: 'Connexion impossible. Vérifiez votre connexion ou appelez-nous directement.',
  generic: 'L’envoi a échoué. Réessayez dans quelques instants ou appelez-nous directement.',
  pending: 'Envoi en cours…',
  invalid: 'Certains champs sont à corriger.',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TEL_RE = /^\+?[0-9 .()\- ]{8,}$/;

function controlsOf(form: HTMLFormElement): Control[] {
  return Array.from(form.querySelectorAll<Control>('[data-field] input, [data-field] select, [data-field] textarea'));
}

function errorEl(control: Control): HTMLElement | null {
  return control.closest('[data-field]')?.querySelector<HTMLElement>('[data-field-error]') ?? null;
}

function setError(control: Control, message: string | null): void {
  const el = errorEl(control);
  if (message) {
    control.setAttribute('aria-invalid', 'true');
    if (el) {
      el.textContent = message;
      el.hidden = false;
    }
  } else {
    control.removeAttribute('aria-invalid');
    if (el) {
      el.textContent = '';
      el.hidden = true;
    }
  }
}

function validate(control: Control): string | null {
  if (control instanceof HTMLInputElement && control.type === 'checkbox') {
    return control.required && !control.checked ? MESSAGES.consent : null;
  }
  const value = control.value.trim();
  if (!value) {
    if (!control.required) return null;
    return control instanceof HTMLSelectElement ? MESSAGES.select : MESSAGES.required;
  }
  if (control instanceof HTMLInputElement) {
    if (control.type === 'email' && !EMAIL_RE.test(value)) return MESSAGES.email;
    if (control.type === 'tel' && !TEL_RE.test(value)) return MESSAGES.tel;
    if (control.type === 'url') {
      try {
        const u = new URL(value);
        if (u.protocol !== 'https:' && u.protocol !== 'http:') return MESSAGES.url;
      } catch {
        return MESSAGES.url;
      }
    }
  }
  if (!(control instanceof HTMLSelectElement)) {
    const min = Number.parseInt(control.getAttribute('minlength') ?? '', 10);
    if (Number.isFinite(min) && value.length < min) return MESSAGES.minlength(min);
  }
  return null;
}

function serialize(form: HTMLFormElement): Record<string, string | boolean> {
  const out: Record<string, string | boolean> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === 'string') out[key] = value;
  });
  const consent = form.querySelector<HTMLInputElement>('input[name="consent"]');
  if (consent) out.consent = consent.checked;
  return out;
}

function showStatus(form: HTMLFormElement, message: string, withPhones: boolean): void {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) return;
  status.textContent = '';
  const p = document.createElement('p');
  p.textContent = message;
  status.appendChild(p);
  if (withPhones) {
    const tpl = form.querySelector<HTMLTemplateElement>('template[data-form-phones]');
    if (tpl) status.appendChild(tpl.content.cloneNode(true));
  }
  status.hidden = false;
}

function hideStatus(form: HTMLFormElement): void {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  if (status) {
    status.hidden = true;
    status.textContent = '';
  }
}

function setPending(form: HTMLFormElement, pending: boolean): void {
  const button = form.querySelector<HTMLButtonElement>('[data-form-submit]');
  const label = form.querySelector<HTMLElement>('[data-form-label]');
  if (!button || !label) return;
  if (pending) {
    button.dataset.label = label.textContent ?? '';
    label.textContent = MESSAGES.pending;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
  } else {
    if (button.dataset.label) label.textContent = button.dataset.label;
    button.disabled = false;
    button.removeAttribute('aria-busy');
  }
}

function enhance(form: HTMLFormElement): void {
  if (form.dataset.enhanced) return;
  form.dataset.enhanced = 'true';
  // Our own French messages replace the browser bubbles.
  form.noValidate = true;
  const controls = controlsOf(form);

  // Live re-validation once a field has been flagged.
  controls.forEach((control) => {
    const recheck = () => {
      if (control.getAttribute('aria-invalid') === 'true') setError(control, validate(control));
    };
    control.addEventListener('input', recheck);
    control.addEventListener('change', recheck);
    control.addEventListener('blur', () => {
      if (control.value.trim() !== '' || control.getAttribute('aria-invalid') === 'true') {
        setError(control, validate(control));
      }
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.querySelector('[data-form-submit][disabled]')) return;
    hideStatus(form);

    let firstInvalid: Control | null = null;
    for (const control of controls) {
      const message = validate(control);
      setError(control, message);
      if (message && !firstInvalid) firstInvalid = control;
    }
    if (firstInvalid) {
      showStatus(form, MESSAGES.invalid, false);
      firstInvalid.focus();
      return;
    }

    setPending(form, true);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(serialize(form)),
      });
      let data: { ok?: boolean; message?: string; fields?: Record<string, string> } = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok && data.ok) {
        form.classList.add('is-sent');
        hideStatus(form);
        const success = form.querySelector<HTMLElement>('[data-form-success]');
        if (success) {
          success.hidden = false;
          success.focus({ preventScroll: true });
          success.scrollIntoView({ block: 'center', behavior: 'auto' });
        }
        form.reset();
        return;
      }

      if (response.status === 400 && data.fields) {
        let focusTarget: Control | null = null;
        for (const [name, message] of Object.entries(data.fields)) {
          const control = form.querySelector<Control>(`[name="${CSS.escape(name)}"]`);
          if (control && control.closest('[data-field]')) {
            setError(control, message);
            focusTarget ??= control;
          }
        }
        showStatus(form, data.message ?? MESSAGES.invalid, false);
        focusTarget?.focus();
        return;
      }

      // 503 unconfigured, 429, 502 or anything else: the API message + phones.
      showStatus(form, data.message ?? MESSAGES.generic, true);
    } catch {
      showStatus(form, MESSAGES.network, true);
    } finally {
      setPending(form, false);
    }
  });
}

export function initForms(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach(enhance);
}

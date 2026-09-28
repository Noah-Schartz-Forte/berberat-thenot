// Mobile menu (below 1280px).
//
// DOM hooks (rendered by Nav.astro)
//   [data-menu-toggle]  the burger <button> (aria-expanded, aria-controls)
//   [data-menu-panel]   the solid dark panel. Gets `.is-open`.
//
// Behaviour: aria-expanded stays truthful, the closed panel is `inert` so it
// cannot take focus, Tab is trapped inside the open panel, Escape closes and
// returns focus to the burger, <html> gets `.is-locked` so the page behind
// does not scroll. Crossing the 1280px breakpoint closes the panel.
// Interaction, not decoration: fully functional under reduced motion (CSS
// drops the transition).

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

let bound = false;

export function initMenu(): void {
  if (bound) return;
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return;
  bound = true;

  let open = false;

  const setOpen = (next: boolean, restoreFocus = false) => {
    open = next;
    toggle.setAttribute('aria-expanded', String(next));
    toggle.setAttribute('aria-label', next ? 'Fermer le menu' : 'Ouvrir le menu');
    panel.classList.toggle('is-open', next);
    panel.inert = !next;
    document.documentElement.classList.toggle('is-locked', next);
    if (next) panel.querySelector<HTMLElement>(FOCUSABLE)?.focus({ preventScroll: true });
    else if (restoreFocus) toggle.focus({ preventScroll: true });
  };
  setOpen(false);

  toggle.addEventListener('click', () => setOpen(!open, open));

  // Any link tap closes the panel (same-page anchors included).
  panel.addEventListener('click', (e) => {
    if (e.target instanceof Element && e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false, true);
      return;
    }
    if (e.key !== 'Tab') return;
    // Trap focus in panel + toggle (the toggle stays reachable to close).
    const items = [toggle, ...Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))];
    const first = items[0]!;
    const last = items[items.length - 1]!;
    const active = document.activeElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (active instanceof Node && !panel.contains(active) && active !== toggle) {
      e.preventDefault();
      first.focus();
    }
  });

  const desktop = window.matchMedia('(min-width: 1280px)');
  desktop.addEventListener('change', () => {
    if (desktop.matches && open) setOpen(false);
  });
}

// Vercel serverless function: POST /api/contact
//
// The Astro site is fully static; Vercel picks this file up on its own
// (repo-root /api, Node runtime, no Astro adapter).
//
// One endpoint, two forms, selected by the `type` field:
//   devis        societe?, nom, email, telephone, besoin, message, consent
//   candidature  nom, telephone, email, poste, message?, cv_url?, consent
// `_gotcha` is a honeypot: bots that fill it get a silent 200.
//
// Accepts JSON (the enhanced form, src/scripts/form.client.ts) or
// form-urlencoded (native no-JS POST, answered with a 303 back to the page).
//
// Responses (JSON)
//   200 {ok:true}
//   400 {ok:false, error:'invalid', message, fields:{name: message}}
//   405 {ok:false, error:'method'}
//   429 {ok:false, error:'rate', message}
//   502 {ok:false, error:'send_failed', message}
//   503 {ok:false, error:'unconfigured', message}  RESEND_API_KEY, CONTACT_TO or
//       CONTACT_FROM missing: the page shows the message and the phone numbers.
//
// Environment: RESEND_API_KEY, CONTACT_TO, CONTACT_FROM (see .env.example).
import { Resend } from 'resend';
import { z } from 'zod';

interface Req {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
}
interface Res {
  status(code: number): Res;
  setHeader(name: string, value: string): Res;
  json(body: unknown): void;
  end(): void;
}

const UNCONFIGURED = "Le formulaire n'est pas encore activé. Appelez-nous directement.";
const SEND_FAILED =
  "L'envoi a échoué. Réessayez dans quelques instants ou appelez-nous directement.";

const BESOINS = {
  transport: 'Transport',
  logistique: 'Logistique',
  gardiennage: 'Gardiennage',
  autre: 'Autre',
} as const;

const POSTES = {
  'conducteur-spl': 'Conducteur SPL',
  exploitation: 'Exploitation',
  'logistique-entrepot': 'Logistique et entrepôt',
  autre: 'Autre',
} as const;

// ------------------------------------------------------------------ //
// Validation (French messages, mirrored client-side)
// ------------------------------------------------------------------ //
const oneLine = (v: unknown) => (typeof v === 'string' ? v.replace(/[\r\n\t]+/g, ' ').trim() : v);
const multiLine = (v: unknown) => (typeof v === 'string' ? v.trim() : v);
const emptyToUndefined = (v: unknown) => {
  const s = oneLine(v);
  return s === '' ? undefined : s;
};
const toBool = (v: unknown) => v === true || v === 'on' || v === 'true' || v === '1';

const requiredText = (max: number, message: string) =>
  z.preprocess(oneLine, z.string({ error: message }).min(1, { error: message }).max(max, { error: 'Texte trop long.' }));

const nom = requiredText(120, 'Indiquez votre nom.');
const email = z.preprocess(
  oneLine,
  z
    .string({ error: 'Indiquez votre adresse e-mail.' })
    .min(1, { error: 'Indiquez votre adresse e-mail.' })
    .max(200, { error: 'Adresse e-mail trop longue.' })
    .pipe(z.email({ error: 'Adresse e-mail invalide, par exemple nom@entreprise.fr.' }))
);
const telephone = z.preprocess(
  oneLine,
  z
    .string({ error: 'Indiquez un numéro de téléphone.' })
    .min(1, { error: 'Indiquez un numéro de téléphone.' })
    .max(40, { error: 'Numéro trop long.' })
    .regex(/^\+?[0-9 .()\- ]{8,}$/, { error: 'Numéro de téléphone invalide.' })
);
const consent = z.preprocess(
  toBool,
  z.literal(true, { error: 'Merci d’accepter le traitement de vos données pour envoyer le formulaire.' })
);

const devisSchema = z.object({
  type: z.literal('devis'),
  societe: z.preprocess(emptyToUndefined, z.string().max(160, { error: 'Texte trop long.' }).optional()),
  nom,
  email,
  telephone,
  besoin: z.enum(Object.keys(BESOINS) as [keyof typeof BESOINS], { error: 'Choisissez le type de besoin.' }),
  message: z.preprocess(
    multiLine,
    z
      .string({ error: 'Décrivez votre besoin en quelques mots.' })
      .min(10, { error: 'Décrivez votre besoin en quelques mots (10 caractères minimum).' })
      .max(5000, { error: 'Message trop long (5 000 caractères maximum).' })
  ),
  consent,
});

const candidatureSchema = z.object({
  type: z.literal('candidature'),
  nom,
  telephone,
  email,
  poste: z.enum(Object.keys(POSTES) as [keyof typeof POSTES], { error: 'Choisissez le poste visé.' }),
  message: z.preprocess(
    (v) => (typeof v === 'string' && v.trim() === '' ? undefined : multiLine(v)),
    z.string().max(5000, { error: 'Message trop long (5 000 caractères maximum).' }).optional()
  ),
  cv_url: z.preprocess(
    emptyToUndefined,
    z
      .url({ protocol: /^https?$/, error: 'Lien invalide : il doit commencer par https://' })
      .max(500, { error: 'Lien trop long.' })
      .optional()
  ),
  consent,
});

const schema = z.discriminatedUnion('type', [devisSchema, candidatureSchema], {
  error: 'Type de formulaire inconnu.',
});

type Payload = z.infer<typeof schema>;

// ------------------------------------------------------------------ //
// Helpers
// ------------------------------------------------------------------ //
function header(req: Req, name: string): string {
  const v = req.headers[name];
  return Array.isArray(v) ? (v[0] ?? '') : (v ?? '');
}

function parseBody(req: Req): Record<string, unknown> {
  const body = req.body;
  if (body == null) return {};
  if (typeof body === 'object' && !Buffer.isBuffer(body)) return body as Record<string, unknown>;
  const text = Buffer.isBuffer(body) ? body.toString('utf8') : String(body);
  try {
    const parsed: unknown = JSON.parse(text);
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
  } catch {
    return Object.fromEntries(new URLSearchParams(text).entries());
  }
}

function wantsJson(req: Req): boolean {
  return header(req, 'accept').includes('application/json') || header(req, 'content-type').includes('application/json');
}

// Best-effort in-memory throttle: 5 submissions per IP per 10 minutes.
// Serverless instances are ephemeral and not shared, so this blunts naive
// floods; the honeypot and Resend's own limits back it up.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  }
  return recent.length > MAX_PER_WINDOW;
}

function buildEmail(data: Payload): { subject: string; text: string } {
  const lines: string[] = [];
  const add = (label: string, value: string | undefined) => {
    if (value) lines.push(`${label} : ${value}`);
  };
  if (data.type === 'devis') {
    add('Société', data.societe);
    add('Nom', data.nom);
    add('E-mail', data.email);
    add('Téléphone', data.telephone);
    add('Besoin', BESOINS[data.besoin]);
    lines.push('', 'Message :', data.message);
    lines.push('', 'Demande de devis envoyée depuis le site du Groupe Berberat Thenot.');
    return { subject: `[Devis] ${BESOINS[data.besoin]}, ${data.societe ?? data.nom}`, text: lines.join('\n') };
  }
  add('Nom', data.nom);
  add('Téléphone', data.telephone);
  add('E-mail', data.email);
  add('Poste visé', POSTES[data.poste]);
  add('CV (lien)', data.cv_url);
  if (data.message) lines.push('', 'Message :', data.message);
  lines.push('', 'Candidature envoyée depuis le site du Groupe Berberat Thenot.');
  return { subject: `[Candidature] ${POSTES[data.poste]}, ${data.nom}`, text: lines.join('\n') };
}

// ------------------------------------------------------------------ //
// Handler
// ------------------------------------------------------------------ //
export default async function handler(req: Req, res: Res): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }

  const raw = parseBody(req);

  // Honeypot: bots get a happy 200 and nothing is sent.
  if (typeof raw._gotcha === 'string' && raw._gotcha.trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  const ip = header(req, 'x-forwarded-for').split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({
      ok: false,
      error: 'rate',
      message: 'Trop de demandes envoyées. Réessayez dans quelques minutes ou appelez-nous directement.',
    });
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? 'form');
      if (!fields[key]) fields[key] = issue.message;
    }
    return res.status(400).json({
      ok: false,
      error: 'invalid',
      message: 'Certains champs sont à corriger.',
      fields,
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.log(`[contact] ${UNCONFIGURED} (RESEND_API_KEY, CONTACT_TO ou CONTACT_FROM manquant)`);
    return res.status(503).json({ ok: false, error: 'unconfigured', message: UNCONFIGURED });
  }

  const { subject, text } = buildEmail(parsed.data);
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(',').map((s) => s.trim()).filter(Boolean),
      subject: subject.slice(0, 180),
      text,
      replyTo: parsed.data.email,
    });
    if (error) {
      console.error('[contact] resend error:', error);
      return res.status(502).json({ ok: false, error: 'send_failed', message: SEND_FAILED });
    }
  } catch (err) {
    console.error('[contact] resend exception:', err);
    return res.status(502).json({ ok: false, error: 'send_failed', message: SEND_FAILED });
  }

  // No-JS fallback: a native form POST lands here; send people back.
  if (!wantsJson(req)) {
    const referer = header(req, 'referer');
    let back = '/';
    try {
      const url = new URL(referer);
      back = url.pathname;
    } catch {
      back = '/';
    }
    res.setHeader('Location', `${back}?envoye=1`);
    return res.status(303).end();
  }

  return res.status(200).json({ ok: true });
}

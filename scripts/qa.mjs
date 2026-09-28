// QA pass over the built site (dist/): npm run build && npm run qa
//
// Serves dist/ with a tiny static server that mimics Vercel (cleanUrls,
// trailing slash, 404.html with status 404), then for every route at 360,
// 390, 768 and 1440 px checks:
//   - no horizontal overflow (scrollWidth <= innerWidth)
//   - zero console errors / page errors
//   - zero failed requests (only /_vercel/insights/script.js is ignored
//     locally, it exists on Vercel only)
//   - exactly one <h1>
//   - aria-current="page" on the matching nav link (and nowhere else)
//   - no "m²" rendered inside a text-transform: uppercase context
// Plus, on /contact and /recrutement: an empty submit shows French inline
// errors; /contact?besoin=gardiennage preselects the need, unknown values
// are ignored.
// Exit code 1 on any failure.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const WIDTHS = [360, 390, 768, 1440];
const ROUTES = [
  '/',
  '/le-groupe/',
  '/histoire/',
  '/transport/',
  '/logistique/',
  '/services/',
  '/moyens/',
  '/groupement-flo/',
  '/recrutement/',
  '/contact/',
  '/mentions-legales/',
  '/politique-de-confidentialite/',
  '/cette-page-n-existe-pas/', // 404
];
const NAV_ROUTES = new Set([
  '/le-groupe',
  '/histoire',
  '/transport',
  '/logistique',
  '/services',
  '/moyens',
  '/groupement-flo',
  '/recrutement',
  '/contact',
]);
const IGNORED = ['/_vercel/insights/script.js'];

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
};

async function isFile(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}

function startServer() {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);
    const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
    let file = join(DIST, safe);
    if (!extname(safe) && !safe.endsWith('/') && (await isFile(join(file, 'index.html')))) {
      res.writeHead(308, { Location: `${pathname}/${url.search}` });
      return res.end();
    }
    if (safe.endsWith('/')) file = join(file, 'index.html');
    let status = 200;
    if (!(await isFile(file))) {
      status = 404;
      file = join(DIST, '404.html');
    }
    const body = await readFile(file);
    res.writeHead(status, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const server = await startServer();
const BASE = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
const failures = [];
const rows = [];

function fail(route, width, msg) {
  failures.push(`${route} @${width}: ${msg}`);
}

for (const route of ROUTES) {
  const row = { route, cells: [] };
  const expectedNav = NAV_ROUTES.has(route.replace(/\/$/, '')) ? route.replace(/\/$/, '') : null;
  for (const width of WIDTHS) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    const errors = [];
    const failed = [];
    page.on('console', (m) => {
      if (m.type() !== 'error') return;
      const where = m.location()?.url ?? '';
      if (IGNORED.some((p) => where.includes(p))) return;
      errors.push(`${m.text()}${where ? ` [${where}]` : ''}`);
    });
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('requestfailed', (r) => {
      if (!IGNORED.some((p) => r.url().includes(p))) failed.push(`${r.url()} (${r.failure()?.errorText})`);
    });
    page.on('response', (r) => {
      const u = new URL(r.url());
      if (IGNORED.some((p) => u.pathname === p)) return;
      if (r.status() >= 400 && !(r.request().isNavigationRequest() && r.url() === `${BASE}${route}`)) {
        failed.push(`${r.url()} (${r.status()})`);
      }
    });
    const response = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
    // Scroll through so lazy images and reveal scripts run.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle');
    // Console lines for the expected 404 document itself are not errors.
    const is404 = route.startsWith('/cette-page');
    const realErrors = errors.filter((e) => !(is404 && /status of 404/.test(e)));

    const info = await page.evaluate(() => {
      const navLinks = Array.from(document.querySelectorAll('.nav__links a, .nav__panel-links a'));
      const current = navLinks
        .filter((a) => a.getAttribute('aria-current') === 'page')
        .map((a) => a.getAttribute('href'));
      const upperUnits = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        if (!n.nodeValue.includes('m²') || !n.parentElement) continue;
        if (getComputedStyle(n.parentElement).textTransform === 'uppercase') {
          upperUnits.push(n.nodeValue.trim().slice(0, 60));
        }
      }
      return {
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        h1: document.querySelectorAll('h1').length,
        current,
        upperUnits,
      };
    });

    const problems = [];
    if (is404 && response.status() !== 404) problems.push(`status ${response.status()} (expected 404)`);
    if (!is404 && response.status() !== 200) problems.push(`status ${response.status()}`);
    if (info.scrollWidth > info.innerWidth) problems.push(`overflow ${info.scrollWidth}>${info.innerWidth}`);
    if (realErrors.length) problems.push(`console: ${realErrors.join(' | ')}`);
    if (failed.length) problems.push(`requests: ${failed.join(' | ')}`);
    if (info.h1 !== 1) problems.push(`h1 count ${info.h1}`);
    const navOk = expectedNav
      ? info.current.length > 0 && info.current.every((h) => h === expectedNav)
      : info.current.length === 0;
    if (!navOk) problems.push(`aria-current ${JSON.stringify(info.current)} (expected ${expectedNav ?? 'none'})`);
    if (info.upperUnits.length) problems.push(`uppercased m²: ${info.upperUnits.join(' | ')}`);
    problems.forEach((p) => fail(route, width, p));
    row.cells.push(problems.length ? 'FAIL' : 'ok');
    await context.close();
  }
  rows.push(row);
}

// Forms: empty submit shows French inline errors.
const formChecks = [];
for (const [route, selector] of [
  ['/contact/', '#devis form[data-form]'],
  ['/recrutement/', 'form[data-form]'],
]) {
  const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
  const form = page.locator(selector).first();
  await form.locator('[data-form-submit]').click();
  const errors = await form.locator('[data-field-error]:not([hidden])').allTextContents();
  const french = errors.length > 0 && errors.every((t) => /champ|Choisissez|Merci|Adresse|Numéro|Écrivez/.test(t));
  formChecks.push(`${route} empty submit: ${errors.length} inline errors, French=${french}`);
  if (!french) fail(route, 390, `empty submit errors: ${JSON.stringify(errors)}`);
  await context.close();
}

// ?besoin= preselect on /contact.
{
  const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/contact/?besoin=gardiennage#devis`, { waitUntil: 'networkidle' });
  const known = await page.locator('select[name="besoin"]').inputValue();
  await page.goto(`${BASE}/contact/?besoin=inconnu#devis`, { waitUntil: 'networkidle' });
  const unknown = await page.locator('select[name="besoin"]').inputValue();
  formChecks.push(`/contact ?besoin=gardiennage -> "${known}", ?besoin=inconnu -> "${unknown}"`);
  if (known !== 'gardiennage') fail('/contact/', 390, `preselect gave "${known}"`);
  if (unknown !== '') fail('/contact/', 390, `unknown besoin gave "${unknown}"`);
  await context.close();
}

await browser.close();
server.close();

const pad = (s, n) => String(s).padEnd(n);
console.log(`\n${pad('route', 34)}${WIDTHS.map((w) => pad(w, 7)).join('')}`);
for (const r of rows) console.log(`${pad(r.route, 34)}${r.cells.map((c) => pad(c, 7)).join('')}`);
console.log('');
formChecks.forEach((l) => console.log(l));
console.log(`\n${ROUTES.length} routes x ${WIDTHS.length} widths = ${ROUTES.length * WIDTHS.length} checks, ${failures.length} failure(s)`);
if (failures.length) {
  failures.forEach((f) => console.log(`  FAIL ${f}`));
  process.exit(1);
}

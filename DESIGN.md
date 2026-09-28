# DESIGN.md, Groupe Berberat Thenot

This is the guide for the page builders. The home page (`src/pages/index.astro`) is the visual reference: open it, copy its rhythm.

**Do not edit shared files** (`src/styles/tokens.css`, `src/layouts/Base.astro`, `src/components/Nav.astro`, `src/components/Footer.astro`, any existing component in `src/components/`, `src/config.ts`, `src/lib/images.ts`, `src/scripts/*`, `api/contact.ts`). If you need a change, report it to the orchestrator. Page-specific CSS goes in a `<style>` block inside your page.

## Hard rules (verbatim, from the agency owner)

- Design to the CLIENT's world: a serious, confident B2B transport and logistics group. Heavy, precise, industrial, premium. Big photography, big numbers, strong grid, bold UPPERCASE headline type (Montserrat 800), generous whitespace, thin rules, square or barely rounded corners (0 to 4 px), a red accent used sparingly (rules, kicker labels, the primary button, small marks), deep charcoal/black surfaces for dark bands, white and light grey elsewhere. Not a template look, no generic AI aesthetic, no purple gradients, no glassmorphism, no blobby rounded cards, no emoji.
- HARD: never put a brand-colour (red/blue/teal) filter or tint over photos. Legibility comes from a neutral dark gradient overlay (black, 0.35 to 0.7 alpha), a split layout, or a solid dark block.
- HARD: never use `text-shadow` or white glow for legibility.
- HARD: footer on EVERY page carries the signature `Conçu et propulsé par Noah Schartz Forte` linking to https://schartzforte.lu (already in `Footer.astro`, which `Base.astro` renders: always use `Base`).
- HARD: no em dash character (U+2014) anywhere (copy, alt text, code comments, commit messages, docs). Use comma, colon, full stop, or rephrase. Avoid the en dash in copy too.
- French typography: non-breaking space (`&nbsp;` or U+00A0) before `:` `;` `?` `!` and inside guillemets `«&nbsp;...&nbsp;»`; numbers like `20&nbsp;000&nbsp;m²` and `1,3&nbsp;Md€` with non-breaking spaces. All copy, labels, alt text, meta, aria-labels in French.
- Motion: subtle and purposeful (fade-up 12 px / 500 ms ease-out, count-up 1.2 s ease-out, hover 150 to 200 ms, press feedback scale 0.98). No scroll-jacking, no parallax, no animated blur, no permanent `will-change`, no `backdrop-filter` on fixed elements below 900 px. Mobile menu is a solid dark panel.
- Accessibility: semantic landmarks, visible focus rings (2 px red outline, offset), AA contrast, `aria-current="page"`, touch targets of at least 44 px, 16 px gutters on phones, no horizontal overflow at 360 px.
- Low-resolution photos (`archive-man-snow.jpg` 800x531, `flo-trailer.jpg` 800x600, `volvo-fh.jpg` 800x996) are never displayed wider than about 800 CSS px: use them only in half-width or card slots (the components cap the slot at the native width).

## Copy rules

- Facts come ONLY from `src/config.ts` (itself from the client's PDF). Never invent: no client names, no rates, no tonnage, no certifications other than BTE ISO 9001, no awards, no testimonials, no ratings, no fleet brands in copy.
- No e-mail addresses anywhere (none verified). Contact = phones + forms.
- Not claimed: cross-docking, température dirigée, any service not in the PDF.
- The history paragraphs in `HISTORY_TEXT` are verbatim from the client: reuse them as they are.
- Tone: "le groupe", sober, factual, short sentences. Headlines are statements, not slogans.
- Import numbers and phones from config instead of retyping them (they carry the right non-breaking spaces and `tel:+33...` hrefs).

## Tokens (`src/styles/tokens.css`)

| Token | Value | Use |
|---|---|---|
| `--red` | `#E31E25` (sampled from the Thenot logo, `ressources/assets/PALETTE.md`) | primary button, rules, marks, large text |
| `--red-hover` / `--red-press` | `#C8161C` / `#AD1318` | button states |
| `--red-text` | `#B5161B` | SMALL red text on light grounds (6.6:1). Never set small text in `--red` on dark: use a red mark next to white text |
| `--ink` / `--ink-2` / `--ink-3` | `#141414` / `#1E1E1E` / `#2A2A2A` | dark bands, raised panels |
| `--black` | `#0B0B0B` | footer |
| `--paper` / `--paper-2` / `--paper-3` | `#FFF` / `#F3F3F2` / `#E7E7E5` | light grounds |
| `--grey-600` / `--grey-500` | `#555` / `#6B6B6B` | body copy / captions on light |
| Semantic | `--bg --fg --fg-2 --fg-muted --rule --rule-strong --panel --accent-text` | use these in components: they flip automatically |

Surfaces: add `.is-dark` (charcoal) or `.is-grey` (light grey) to a section; the semantic tokens flip for everything inside.

Type (Montserrat 400/500/700/800, self-hosted): `--fs-display` (home H1), `--fs-h1` (inner H1), `--fs-h2`, `--fs-h3`, `--fs-lead`, `--fs-body`, `--fs-small`, `--fs-micro` (kickers, uppercase + `--track-caps`). All fluid from 360 to 1440 px.

Spacing: `--space-1` to `--space-10` (4 px base), `--section-y` (section padding, 64 to 128 px), `--section-y-tight`, `--gutter` (16 to 40 px). Containers: `.container` (1200), `.container--wide` (1440), `.container--text` (720). Radii: `--radius-0/1/2` (0, 2, 4 px). Motion: `--dur-fast` 150 ms, `--dur` 200 ms, `--dur-reveal` 500 ms, `--ease-out`.

Utility classes: `.section`, `.section--tight`, `.section--ruled`, `.is-dark`, `.is-grey`, `.kicker`, `.display`, `.h1`, `.h2`, `.h3`, `.lead`, `.prose`, `.muted`, `.small`, `.rule-red`, `.link-arrow`, `.reveal` (+ `data-reveal-delay="80"`), `.visually-hidden`.

## Page skeleton and rhythm

```astro
---
import Base from '../layouts/Base.astro';
import PageHead from '../components/PageHead.astro';
import SectionHead from '../components/SectionHead.astro';
import CtaBand from '../components/CtaBand.astro';
import warehouseAerial from '../images/photos/warehouse-aerial.jpg';
---
<Base title="Logistique" description="140 à 160 caractères, en français." path="/logistique">
  <PageHead kicker="Métier" title="Logistique & entreposage" lead="..."
            image={warehouseAerial} alt="..." crumbs={[{ label: 'Logistique' }]} />

  <section class="section" aria-labelledby="s1">
    <div class="container">
      <SectionHead id="s1" kicker="..." title="..." lead="..." />
      ...
    </div>
  </section>

  <section class="section is-grey" aria-labelledby="s2"> ... </section>

  <CtaBand />
</Base>
```

- Always `PageHead` first (the H1), `CtaBand` last. One H1 per page.
- Alternate grounds: white, `.is-grey`, white, one `.is-dark` band at most every three sections. Never two dark bands in a row (the footer is black: the last section before it should be light).
- Vertical rhythm comes from `.section` padding only; do not add margins between sections. Two white sections in a row: add `.section--ruled`.
- Headlines uppercase via the classes, keep them short (two lines on desktop).

## Components (import from `src/components/`)

### Base (`src/layouts/Base.astro`)
Props: `title`, `description`, `path?`, `ogImage?`, `jsonLd?` (extra JSON-LD nodes, e.g. BreadcrumbList or JobPosting), `noindex?`. Emits the group `Organization` (+ six `subOrganization`) JSON-LD on every page. Title renders as `Title | Groupe Berberat Thenot`.

### PageHead
Solid dark head for inner pages. Props: `kicker?`, `title`, `lead?`, `image?` + `alt?` (photo split on the right, sits next to the text, never under it), `crumbs?` ([{label, href?}], "Accueil" is prepended), `position?`. Slot `actions`.
```astro
<PageHead kicker="Recrutement" title="Rejoindre le groupe" lead="..." image={volvoFh}
          alt="..." crumbs={[{ label: 'Recrutement' }]}>
  <Button slot="actions" href="#candidature">Postuler</Button>
</PageHead>
```

### Hero
Full-bleed photo with neutral black gradient. For the home page (or one flagship page). Props: `image`, `alt`, `kicker?`, `title`, `lead?`, `primary?` / `secondary?` ({label, href}), `badge?`, `badgeHref?`, `position?`.
```astro
<Hero image={yardDrone} alt="..." title="..." primary={{ label: 'Demander un devis', href: '/contact#devis' }} />
```

### SectionHead
Props: `kicker?`, `title`, `lead?`, `align?` ('left' | 'center'), `level?` (2 | 3), `id?`. Slot `action` (right-aligned link from 900 px).
```astro
<SectionHead id="entites" kicker="Le groupe" title="Six sociétés, une offre globale">
  <a slot="action" class="link-arrow" href="/contact">Nous contacter <Icon name="arrow" /></a>
</SectionHead>
```

### Button
Props: `href?` (renders `<a>`, else `<button>`), `variant?` ('primary' | 'dark' | 'outline' | 'link'), `size?` ('md' | 'lg'), `icon?` (IconName, trailing), `type?`, `full?`. Extra attributes pass through. One `primary` per view; `outline` works on dark and light.
```astro
<Button href="/contact#devis" icon="arrow">Demander un devis</Button>
<Button href="/histoire" variant="link">Notre histoire</Button>
```

### StatBand
Props: `items` (Stat[] from config: `{ value, suffix?, label, group? }`), `tone?` ('dark' | 'light' | 'grey'), `chip?`, `title?`. Count-up runs once in view; the final value is server-rendered.
```astro
<StatBand items={KEY_FIGURES} chip="Parking sécurisé" />
<StatBand tone="light" items={[{ value: 90, label: 'moteurs' }, { value: 7, label: "sites d'exploitation" }]} />
```

### Pillars + Card
`Card` props: `title`, `text?`, `icon?`, `index?`, `items?` (check list), `href?` (whole card clickable), `linkLabel?`, `headingLevel?`. Default slot for extra content. `Pillars` props: `items` (Card props[]), `numbered?`.
```astro
<Pillars items={[{ icon: 'truck', title: 'Lots complets', text: '...', href: '/transport' }, ...]} />
<Card icon="parking" title="Parking sécurisé" text="..." />
```

### EntityGrid
Six logo cards (from `ENTITIES`). Props: `entities?`, `linkBase?` (default `/le-groupe`; use `""` on /le-groupe itself so cards link to `#slug`), `showContact?`, `headingLevel?`.
**/le-groupe must render one block per entity with `id={entity.slug}`** (`transports-berberat`, `transports-thenot`, `bte`, `btl`, `lgs`, `eurocap`): the home cards and the JSON-LD point there.
```astro
<EntityGrid linkBase="" showContact />
```

### Timeline
Props: `steps?` (default `TIMELINE`), `headingLevel?`. Horizontal from 900 px, vertical on phones. Inherits section colours.
```astro
<section class="section is-dark"><div class="container"><Timeline /></div></section>
```

### SplitSection
A full section: photo + text. Props: `image`, `alt`, `kicker?`, `title`, `tone?` ('light' | 'grey' | 'dark'), `reverse?`, `ratio?` ('4 / 3'), `position?`, `caption?`, `headingLevel?`, `id?`. Default slot = body paragraphs, slot `actions`.
```astro
<SplitSection image={archiveManSnow} alt="..." kicker="Histoire" title="Depuis 1971" tone="grey" reverse ratio="3 / 2">
  <p>...</p>
  <Button slot="actions" href="/histoire" variant="link">Notre histoire</Button>
</SplitSection>
```

### FloBand
A full section on the Groupement FLO with its six figures and the outbound link (new tab, `rel="noopener"`). Props: `kicker?`, `title?`, `text?`, `image?` + `alt?`, `tone?` ('grey' | 'light' | 'dark'), `showPageLink?` (set `false` on /groupement-flo), `headingLevel?`.

### CtaBand
Closing section: question, three main phones, one button. Props: `kicker?`, `title?`, `text?`, `button?` ({label, href}), `tone?`, `showPhones?`.
```astro
<CtaBand title="Un projet logistique&nbsp;?" button={{ label: 'Demander un devis', href: '/contact#devis' }} />
```
(When passing a title as a JS string, use ` ` before `?`.)

### SiteList
Verified sites with address and phone (`SITES`). Props: `sites?`, `columns?` (2 | 3), `headingLevel?`. Each item has `id="site-{id}"` (varney, cousances, bettancourt, saint-dizier, pompey).

### DeptSchematic
Schematic (not a map) of the three départements with the verified site towns: wide SVG from 720 px, stacked SVG below. Props: `caption?`. Use on /moyens, /le-groupe or /contact.

### Icon
Props: `name` ('truck' | 'warehouse' | 'shield' | 'parking' | 'exchange' | 'phone' | 'arrow' | 'check' | 'chevron' | 'clock' | 'pin' | 'external' | 'menu' | 'close'), `size?` (24), `label?` (decorative without it), `strokeWidth?`.

### Wordmark
Typographic group wordmark (no group logo exists). Props: `href?` (null for plain), `size?`. Already in Nav and Footer.

### Form + Field (forms to `/api/contact`)
`Form` props: `type` ('devis' | 'candidature'), `id?` (anchor, defaults to the type), `submitLabel?`, `successTitle?`, `successText?`. It adds the hidden `type`, the honeypot, the required consent checkbox, the submit button, the live status region and the success panel. Without JS the form posts natively with browser validation; with JS (`form.client.ts`) it validates inline in French, posts JSON, shows a pending state, maps API field errors, and on 503/429/502/network errors shows the message plus the three main phones.

`Field` props: `name`, `label`, `as?` ('input' | 'select' | 'textarea' | 'checkbox'), `type?` ('text' | 'email' | 'tel' | 'url' | 'number'), `required?`, `autocomplete?`, `hint?`, `placeholder?`, `options?` ([{value, label}]), `emptyOption?`, `rows?`, `minlength?`, `maxlength?`, `inputmode?`, `full?` (span both columns; default for textarea), `value?`, `idPrefix?`.
**Always set `idPrefix` to the form id** (ids become `{idPrefix}-{name}`; two forms on one page would otherwise collide).

Field names MUST match the API contract:
- `devis`: `societe` (optional), `nom`, `email`, `telephone`, `besoin` in [`transport`, `logistique`, `gardiennage`, `autre`], `message` (min 10 characters)
- `candidature`: `nom`, `telephone`, `email`, `poste` in [`conducteur-spl`, `exploitation`, `logistique-entrepot`, `autre`], `message` (optional), `cv_url` (optional, http(s) link)

Complete example (contact page):
```astro
---
import Form from '../components/Form.astro';
import Field from '../components/Field.astro';
---
<section class="section" id="devis-section" aria-labelledby="devis-titre">
  <div class="container container--text">
    <SectionHead id="devis-titre" kicker="Devis" title="Demander un devis" />
    <Form type="devis" id="devis" submitLabel="Envoyer la demande">
      <Field idPrefix="devis" name="societe" label="Société" autocomplete="organization" />
      <Field idPrefix="devis" name="nom" label="Nom et prénom" required autocomplete="name" />
      <Field idPrefix="devis" name="email" label="E-mail" type="email" required autocomplete="email" />
      <Field idPrefix="devis" name="telephone" label="Téléphone" type="tel" required autocomplete="tel" />
      <Field idPrefix="devis" name="besoin" label="Votre besoin" as="select" required full
        options={[
          { value: 'transport', label: 'Transport' },
          { value: 'logistique', label: 'Logistique' },
          { value: 'gardiennage', label: 'Gardiennage' },
          { value: 'autre', label: 'Autre' },
        ]} />
      <Field idPrefix="devis" name="message" label="Votre demande" as="textarea" required minlength={10}
        hint="Nature des marchandises, volumes, fréquence, départ et arrivée." />
    </Form>
  </div>
</section>
```
Candidature: same pattern with `type="candidature"`, `poste` select (the four values above), `cv_url` as `type="url"` with a hint ("Lien vers votre CV : Google Drive, Dropbox..." written with a non-breaking space before the colon). There is no file upload.

## Images

```ts
import { Picture } from 'astro:assets';
import { HALF_WIDTHS, HALF_SIZES, CARD_WIDTHS, CARD_SIZES, IMAGE_FORMATS, capWidths } from '../lib/images';
```
`<Picture src={img} alt="..." formats={IMAGE_FORMATS} widths={capWidths(img, HALF_WIDTHS)} sizes={HALF_SIZES} loading="lazy" decoding="async" />`. Only the LCP image (Hero or PageHead photo, handled by the components) is eager. Wrap low-res photos in a container with `style={`max-width: ${img.width}px`}`.

Available photos (`src/images/photos/`): `yard-drone.jpg` (2434x1368, home hero), `warehouse-aerial.jpg` (2592x1458), `archive-man-snow.jpg` (800x531), `flo-trailer.jpg` (800x600), `volvo-fh.jpg` (800x996, portrait). Logos: `src/images/logos/*.png` (use through `ENTITIES`). Alt text: describe what is visible, in French, no brand names of vehicles.

## Config imports (`src/config.ts`)

`SITE`, `NBSP`, `KEY_FIGURES`, `DEPARTMENTS`, `SITES`, `MAIN_SITES`, `ENTITIES`, `HISTORY_TEXT`, `TIMELINE`, `FLO`, `NAV`, `NAV_CTA`, `LEGAL_LINKS`, types `Stat`, `Site`, `Entity`, `Phone`, `Address`, `TimelineStep`.

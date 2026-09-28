// Single source of truth for the Groupe Berberat Thenot site.
//
// Every fact here comes from the client's own presentation PDF
// (ressources/presentation-groupe-berberat-thenot.pdf) or from the verified
// site list in the brief. Do NOT add a fact that is not in those sources:
// no client names, no rates, no e-mail addresses, no extra certifications.
//
// French typography: display strings use U+00A0 (non-breaking space) inside
// phone numbers and figures so they never wrap mid-number.

import type { ImageMetadata } from 'astro';
import logoBerberat from './images/logos/transports-berberat.png';
import logoThenot from './images/logos/transports-thenot.png';
import logoBte from './images/logos/bte.png';
import logoBtl from './images/logos/btl.png';
import logoLgs from './images/logos/lgs.png';
import logoEurocap from './images/logos/eurocap.png';

/** Non-breaking space, for French typography in strings built in code. */
export const NBSP = ' ';

export const SITE = {
  name: 'Groupe Berberat Thenot',
  shortName: 'Berberat Thenot',
  url: 'https://berberat-thenot.vercel.app',
  tagline: 'Partenaire Transport & Logistique depuis 1971',
  description:
    'Groupe familial de transport routier de marchandises, logistique et services associés en Meuse, Haute-Marne et Meurthe-et-Moselle. 110 collaborateurs, membre du Groupement FLO.',
  founded: 1971,
  employees: 110,
  locale: 'fr_FR',
  ogImage: '/og.jpg',
} as const;

export interface Phone {
  /** Display form, with non-breaking spaces: "03 29 78 78 78". */
  display: string;
  /** tel: href in international format. */
  href: string;
}

/** Build a Phone from a French 10-digit number written "03 29 78 78 78". */
function phone(national: string): Phone {
  const digits = national.replace(/\D/g, '');
  return {
    display: national.trim().split(/\s+/).join(NBSP),
    href: `tel:+33${digits.slice(1)}`,
  };
}

export interface Address {
  street: string;
  postalCode: string;
  locality: string;
  department: string;
}

// ------------------------------------------------------------------ //
// Key figures (PDF, slide "Nos moyens" and history)
// ------------------------------------------------------------------ //
export interface Stat {
  /** Final integer value (count-up target). */
  value: number;
  /** Literal after the number, e.g. " m²". Use NBSP, not a plain space. */
  suffix?: string;
  label: string;
  /** Group thousands with a narrow no-break space ("20 000"). */
  group?: boolean;
}

export const KEY_FIGURES: Stat[] = [
  { value: 110, label: 'collaborateurs' },
  { value: 90, label: 'moteurs' },
  { value: 20000, suffix: `${NBSP}m²`, label: 'de stockage intérieur', group: true },
  { value: 7, label: "sites d'exploitation" },
  { value: 3, label: 'départements' },
];

export const DEPARTMENTS = ['Meuse', 'Haute-Marne', 'Meurthe-et-Moselle'] as const;

// ------------------------------------------------------------------ //
// Verified sites (5 of the 7 sites d'exploitation are verified; the full
// list of 7 is to be validated with the client, see HANDOVER.md)
// ------------------------------------------------------------------ //
export interface Site {
  id: string;
  name: string;
  /** Entities operating from this site. */
  entities: string[];
  address: Address;
  phone?: Phone;
  /** Shown in the footer and the home contact band. */
  main: boolean;
}

export const SITES: Site[] = [
  {
    id: 'varney',
    name: 'Transports Berberat',
    entities: ['Transports Berberat (Berberat Père et Fils)'],
    address: {
      street: 'Devant le Bouchot, Varney',
      postalCode: '55000',
      locality: "Val-d'Ornain",
      department: 'Meuse',
    },
    phone: phone('03 29 78 78 78'),
    main: true,
  },
  {
    id: 'cousances',
    name: 'Transports Thenot',
    entities: ['Transports Thenot'],
    address: {
      street: "Parc d'Activités Éco de la Houpette, 5 rue des Confins",
      postalCode: '55170',
      locality: 'Cousances-les-Forges',
      department: 'Meuse',
    },
    phone: phone('03 29 70 10 10'),
    main: true,
  },
  {
    id: 'bettancourt',
    name: 'BTE et BTL',
    entities: ['Berberat Thenot Expertise', 'Berberat Thenot Logistique'],
    address: {
      street: "Parc d'Activités de Référence, rue Thomas Edison",
      postalCode: '52100',
      locality: 'Bettancourt-la-Ferrée',
      department: 'Haute-Marne',
    },
    phone: phone('03 25 55 84 07'),
    main: true,
  },
  {
    id: 'saint-dizier',
    name: 'Berberat Thenot Logistique',
    entities: ['Berberat Thenot Logistique'],
    address: {
      street: '65 rue des Clefmonts',
      postalCode: '52100',
      locality: 'Saint-Dizier',
      department: 'Haute-Marne',
    },
    main: false,
  },
  {
    id: 'pompey',
    name: 'Eurocap Transports',
    entities: ['Eurocap Transports'],
    address: {
      street: '104 rue Léonard de Vinci',
      postalCode: '54340',
      locality: 'Pompey',
      department: 'Meurthe-et-Moselle',
    },
    main: false,
  },
];

export const MAIN_SITES = SITES.filter((s) => s.main);

// ------------------------------------------------------------------ //
// The six entities
// ------------------------------------------------------------------ //
export interface Entity {
  /** Anchor id on /le-groupe (/le-groupe#slug). */
  slug: string;
  name: string;
  shortName: string;
  /** One sentence, French. */
  role: string;
  logo: ImageMetadata;
  /** French alt text for the logo. */
  logoAlt: string;
  founded?: number;
  phone?: Phone;
  /** Verified addresses only. */
  addresses: Address[];
  /** Extra verified detail, e.g. certification. */
  note?: string;
}

const addr = (id: string): Address => SITES.find((s) => s.id === id)!.address;

export const ENTITIES: Entity[] = [
  {
    slug: 'transports-berberat',
    name: 'Transports Berberat',
    shortName: 'Berberat',
    role: 'Transport routier de marchandises, depuis 1971 en Meuse.',
    logo: logoBerberat,
    logoAlt: 'Logo Berberat Transports',
    founded: 1971,
    phone: phone('03 29 78 78 78'),
    addresses: [addr('varney')],
  },
  {
    slug: 'transports-thenot',
    name: 'Transports Thenot',
    shortName: 'Thenot',
    role: 'Transport routier de marchandises, depuis 2007.',
    logo: logoThenot,
    logoAlt: 'Logo Transports Thenot',
    founded: 2007,
    phone: phone('03 29 70 10 10'),
    addresses: [addr('cousances')],
  },
  {
    slug: 'bte',
    name: 'Berberat Thenot Expertise',
    shortName: 'BTE',
    role: 'Transport de proximité pour l’industrie, la grande distribution et les matériaux de construction.',
    logo: logoBte,
    logoAlt: 'Logo BTE Transports, Berberat Thenot Expertise',
    founded: 2012,
    phone: phone('03 25 55 84 07'),
    addresses: [addr('bettancourt')],
    note: 'Certifié ISO 9001',
  },
  {
    slug: 'btl',
    name: 'Berberat Thenot Logistique',
    shortName: 'BTL',
    role: 'Logistique et entreposage.',
    logo: logoBtl,
    logoAlt: 'Logo Berberat Thenot Logistique, transport et logistique',
    founded: 2012,
    phone: phone('03 25 55 84 07'),
    addresses: [addr('bettancourt'), addr('saint-dizier')],
  },
  {
    slug: 'lgs',
    name: 'Logistique Gardiennage Services',
    shortName: 'LGS',
    role: 'Logistique, gardiennage et services.',
    logo: logoLgs,
    logoAlt: 'Logo LGS, Logistique Gardiennage Services',
    phone: phone('03 51 25 52 83'),
    addresses: [],
  },
  {
    slug: 'eurocap',
    name: 'Eurocap Transports',
    shortName: 'Eurocap',
    role: 'Affrètement et organisation de transports.',
    logo: logoEurocap,
    logoAlt: 'Logo Eurocap Transports',
    addresses: [addr('pompey')],
  },
];

// ------------------------------------------------------------------ //
// History (PDF, verbatim)
// ------------------------------------------------------------------ //
export const HISTORY_TEXT = [
  'Depuis 1971 et 2007, en Meuse et Haute-Marne, les Transports Berberat et les Transports Thenot développent une activité de transport routier de marchandises en s’appuyant sur la proximité avec leurs clients, la qualité de service et un savoir-faire reconnu.',
  'En 2012, les Transports Berberat et les Transports Thenot unissent leurs forces. Cette association permet de renforcer leurs compétences, de développer de nouvelles activités et de proposer une offre globale dans les domaines du transport, de la logistique et des services associés.',
  'Aujourd’hui, le Groupe poursuit son développement, avec ses 110 collaborateurs, tout en conservant les valeurs familiales qui font sa force depuis plus de 60 ans.',
];

export interface TimelineStep {
  year: string;
  title: string;
  text?: string;
}

export const TIMELINE: TimelineStep[] = [
  { year: '1971', title: 'Transports Berberat Père et Fils' },
  { year: '2007', title: 'Transports Thenot' },
  {
    year: '2012',
    title: 'Association des Transports Berberat et des Transports Thenot',
    text: 'Création de Berberat Thenot Logistique et de Berberat Thenot Expertise.',
  },
  {
    year: 'Aujourd’hui',
    title: 'Un groupe qui se développe',
    text: `Surface de logistique portée à 20${NBSP}000${NBSP}m², 90 moteurs, 7 sites d’exploitation, parking sécurisé.`,
  },
];

// ------------------------------------------------------------------ //
// Groupement FLO (PDF)
// ------------------------------------------------------------------ //
export const FLO = {
  name: 'Groupement FLO',
  fullName: 'France Lots Organisation',
  url: 'https://www.groupement-flo.com',
  figures: [
    { value: '101', label: 'sociétés indépendantes' },
    { value: `1,3${NBSP}Md€`, label: 'de chiffre d’affaires' },
    { value: `11${NBSP}200`, label: 'salariés' },
    { value: `7${NBSP}800`, label: 'véhicules moteurs' },
    { value: `9${NBSP}400`, label: 'véhicules non moteurs' },
    { value: `1,5${NBSP}M${NBSP}m²`, label: 'de capacité d’entreposage' },
  ],
} as const;

// ------------------------------------------------------------------ //
// Navigation
// ------------------------------------------------------------------ //
export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Le groupe', href: '/le-groupe' },
  { label: 'Histoire', href: '/histoire' },
  { label: 'Transport', href: '/transport' },
  { label: 'Logistique', href: '/logistique' },
  { label: 'Services', href: '/services' },
  { label: 'Moyens', href: '/moyens' },
  { label: 'Groupement FLO', href: '/groupement-flo' },
  { label: 'Recrutement', href: '/recrutement' },
  { label: 'Contact', href: '/contact' },
];

export const NAV_CTA: NavItem = { label: 'Demander un devis', href: '/contact#devis' };

export const FOOTER_METIERS: NavItem[] = [
  { label: 'Transport routier', href: '/transport' },
  { label: 'Logistique & entreposage', href: '/logistique' },
  { label: 'Services associés', href: '/services' },
  { label: 'Nos moyens', href: '/moyens' },
];

export const FOOTER_GROUPE: NavItem[] = [
  { label: 'Le groupe', href: '/le-groupe' },
  { label: 'Histoire', href: '/histoire' },
  { label: 'Groupement FLO', href: '/groupement-flo' },
  { label: 'Recrutement', href: '/recrutement' },
  { label: 'Contact', href: '/contact' },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
];

// ------------------------------------------------------------------ //
// JSON-LD (Organization + six subOrganizations). No e-mail, by rule.
// ------------------------------------------------------------------ //
function postal(a: Address) {
  return {
    '@type': 'PostalAddress',
    streetAddress: a.street,
    postalCode: a.postalCode,
    addressLocality: a.locality,
    addressRegion: a.department,
    addressCountry: 'FR',
  };
}

export function organizationJsonLd(origin: string): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': `${origin}/#organisation`,
    name: SITE.name,
    url: `${origin}/`,
    slogan: SITE.tagline,
    description: SITE.description,
    foundingDate: String(SITE.founded),
    numberOfEmployees: { '@type': 'QuantitativeValue', value: SITE.employees },
    areaServed: DEPARTMENTS.map((name) => ({ '@type': 'AdministrativeArea', name })),
    memberOf: { '@type': 'Organization', name: FLO.name, alternateName: FLO.fullName, url: FLO.url },
    subOrganization: ENTITIES.map((e) => {
      const node: Record<string, unknown> = {
        '@type': 'Organization',
        '@id': `${origin}/le-groupe/#${e.slug}`,
        name: e.name,
        alternateName: e.shortName,
        description: e.role,
        url: `${origin}/le-groupe/#${e.slug}`,
      };
      if (e.founded) node.foundingDate = String(e.founded);
      if (e.phone) node.telephone = e.phone.href.replace('tel:', '');
      if (e.addresses.length === 1) node.address = postal(e.addresses[0]!);
      if (e.addresses.length > 1) node.address = e.addresses.map(postal);
      return node;
    }),
  };
}

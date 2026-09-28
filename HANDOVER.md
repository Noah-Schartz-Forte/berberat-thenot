# HANDOVER, site du Groupe Berberat Thenot

Preview prévue : https://berberat-thenot.vercel.app (statique Astro, français uniquement).
Dépôt : https://github.com/Noah-Schartz-Forte/berberat-thenot

## Décisions prises

- Stack : Astro 7 en `output: 'static'`, TypeScript et CSS natifs, aucun framework UI. Formulaires servis par une fonction Vercel séparée (`api/contact.ts`), sans adaptateur Astro.
- Identité : aucun logo de groupe n'existe dans le PDF, le site utilise donc un logotype typographique (« GROUPE » au-dessus de « BERBERAT THENOT », carré rouge). Les logos des six sociétés restent sur leurs cartes.
- Rouge de marque : `#E31E25`, échantillonné sur le logo Transports Thenot (`ressources/assets/PALETTE.md`). Rouge plus sombre `#B5161B` pour les petits textes rouges sur fond clair (contraste AA).
- Police : Montserrat auto-hébergée (latin, 400, 500, 700, 800), aucune requête vers Google Fonts ou un CDN.
- Photos : jamais de filtre coloré, lisibilité par dégradé noir neutre, mise en page scindée ou bloc sombre. Les trois photos basse définition (800 px) ne dépassent jamais leur largeur native.
- Contenu : uniquement les faits du PDF client et des adresses vérifiées (voir `src/config.ts`, source unique). Aucune adresse e-mail publiée, ni sur le site ni dans le JSON-LD.
- Formulaire : un seul endpoint `/api/contact` pour deux formulaires (`devis`, `candidature`), validation zod côté serveur, pot de miel, limitation de débit en mémoire, messages en français. Sans clé Resend, réponse 503 et le site affiche « Le formulaire n'est pas encore activé. Appelez-nous directement. » avec les trois numéros principaux.
- Pas de dépôt de fichier pour les candidatures : champ lien vers un CV (facultatif).
- Mesure d'audience : Vercel Web Analytics (sans cookie, pas de bandeau nécessaire).
- JSON-LD : `Organization` du groupe (fondé en 1971, 110 salariés, trois départements, membre du Groupement FLO) avec les six sociétés en `subOrganization`.
- Schéma des départements : blocs schématiques en SVG, pas de carte ni d'intégration externe.

## À valider avec le client

- Numéro exact de chaque site (les trois numéros affichés en pied de page : 03 29 78 78 78 Varney, 03 29 70 10 10 Cousances-les-Forges, 03 25 55 84 07 Bettancourt-la-Ferrée ; aucun numéro publié pour Saint-Dizier et Pompey).
- LGS : adresse, activité détaillée et numéro 03 51 25 52 83 (seul le logo le mentionne).
- Adresses e-mail de réception des formulaires (devis et candidatures, éventuellement distinctes).
- Transports Thenot « depuis 2007 » : formulation du PDF à confirmer au regard du registre (date de création réelle ou date de reprise).
- Liste exacte des 7 sites d'exploitation : 5 sont vérifiés (Varney, Cousances-les-Forges, Bettancourt-la-Ferrée, Saint-Dizier, Pompey).
- Services NON revendiqués sur le site tant que le client ne les confirme pas : cross-docking, température dirigée, et tout service absent du PDF.
- Détail de l'offre logistique (le site parle de stockage, gestion de stock et préparation, sans plus).
- Photos supplémentaires en haute définition (entrepôt intérieur, équipes, parking sécurisé) et droits d'utilisation.
- Mentions légales : raison sociale, SIREN, siège, directeur de publication, hébergeur.

## Ouvert

- Variables d'environnement Vercel (voir `.env.example`, ne jamais committer de vraies valeurs) :
  - `RESEND_API_KEY` : clé Resend.
  - `CONTACT_TO` : destinataire(s), séparés par des virgules.
  - `CONTACT_FROM` : expéditeur sur un domaine vérifié dans Resend.
  Tant que l'une manque, le formulaire répond 503 et renvoie vers le téléphone.
- Changement de domaine : modifier `site` dans `astro.config.mjs` ET la ligne `Sitemap:` de `public/robots.txt` (et les URL de `public/llms.txt`).
- Pages à construire par les autres builders : /le-groupe (ancres `#transports-berberat`, `#transports-thenot`, `#bte`, `#btl`, `#lgs`, `#eurocap` obligatoires), /histoire, /transport, /logistique, /services, /moyens, /groupement-flo, /recrutement, /contact (ancre `#devis`), /mentions-legales, /politique-de-confidentialite.

## Déploiement

Laissé au builder de déploiement : créer le projet Vercel relié au dépôt GitHub `Noah-Schartz-Forte/berberat-thenot`, renseigner les variables ci-dessus, vérifier `/api/contact` en preview. `vercel.json` porte déjà `cleanUrls`, `trailingSlash`, les en-têtes de sécurité et le cache immuable de `/fonts/` et `/_astro/`. `.vercelignore` exclut `ressources/`, `screenshots/` et `scripts/` (motifs ancrés).

## Structure du projet

```
api/contact.ts            fonction Vercel du formulaire (Resend + zod)
public/                   polices, favicons, og.jpg, robots.txt, llms.txt
scripts/og.mjs            génère og.jpg et les favicons PNG (npm run og)
src/config.ts             source unique : sociétés, sites, chiffres, FLO, navigation, JSON-LD
src/styles/tokens.css     tokens, @font-face, reset, utilitaires
src/layouts/Base.astro    gabarit commun (SEO, Nav, Footer, scripts)
src/components/           composants partagés (voir DESIGN.md)
src/lib/images.ts         préréglages d'images responsives
src/scripts/              app, menu, reveal, countup, form (côté client)
src/pages/                index.astro (accueil de référence), 404.astro
src/images/               photos et logos extraits du PDF
ressources/               PDF client, extractions brutes, rendus, MANIFEST, PALETTE (ne pas modifier)
DESIGN.md                 guide des composants et règles pour les builders de pages
```

Commandes : `npm run dev`, `npm run build`, `npx astro check`, `npm run og`.

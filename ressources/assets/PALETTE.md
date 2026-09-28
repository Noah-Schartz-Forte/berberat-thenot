# PALETTE, Groupe Berberat Thenot

Toutes les valeurs sont échantillonnées sur les fichiers curatés de `src/images/` (médiane des pixels rouges purs, filtre r > 150, g < 90, b < 90), pas estimées à l'œil.

## Rouges des logos

| Logo | Zone échantillonnée | Pixels | Rouge |
|---|---|---|---|
| Transports Thenot | mot « THENOT » | 17 437 | `#E31E25` |
| Transports Thenot | pastille « T » | 15 699 | `#E21E25` |
| Transports Berberat | « TRANSPORTS » + flèche | 9 025 | `#E30814` |
| LGS | lignes rouges + téléphone | 26 251 | `#E31F25` |
| Eurocap | « TRANSPORTS » + flèche | 22 793 | `#D22000` (plus orangé, logo compressé) |

Thenot et Berberat sont très proches (même teinte, Berberat un peu plus saturé, moins de vert et de bleu). Thenot et LGS sont identiques.

**Rouge de marque recommandé pour le CSS : `#E31E25`** (rouge Thenot).
Variante si besoin d'un rouge plus « pur » : `#E30814` (Berberat). Ne pas utiliser `#D22000` (Eurocap), c'est un artefact de compression.

Note contraste : `#E31E25` sur blanc donne environ 4,6:1, suffisant pour du texte normal (AA), mais à éviter pour les petits textes fins ; texte blanc sur fond `#E31E25` : environ 4,6:1, OK pour boutons.

## Noirs et gris

| Source | Zone | Valeur |
|---|---|---|
| yard-drone.jpg | cabine noire Thenot (camion au premier plan) | `#1E1E1E` (médiane), ombres `#040404` |
| volvo-fh.jpg | flanc de cabine Volvo FH | `#171E28` (20e centile, noir légèrement bleuté) |
| transports-berberat.png | bandeau gris foncé du logo | `#504448` (gris chaud) |
| eurocap.png | bandeau gris foncé du logo | `#4D4948` |

**Quasi-noir recommandé : `#1E1E1E`** (neutre, cabine Thenot). Alternative froide : `#171E28` (Volvo).
Gris chaud secondaire possible : `#504448` (bandeau Berberat), cohérent avec BTE, BTL, Eurocap et LGS qui utilisent tous un bandeau gris foncé en dégradé.

## Fonds des logos

Aucun logo n'a de canal alpha (tous RGB, 3 canaux, sans transparence).

| Logo | Fond |
|---|---|
| transports-berberat.png | blanc pur `#FFFFFF` (carte blanche de la slide) |
| transports-thenot.png | quasi-blanc `#FEFEFE` (carte blanche de la slide), légère bande `#FCFCFC` derrière le logo, invisible sur carte blanche |
| bte.png | rectangle du logo lui-même : bandeau gris foncé en dégradé en haut, blanc en bas ; bords à fond perdu |
| btl.png | idem : bandeau gris dégradé + bande blanche ; bords à fond perdu |
| eurocap.png | idem : bandeau gris `#4D4948` + bande blanche ; bords à fond perdu |
| lgs.png | blanc, fichier brut du PDF (bandeau gris + texte rouge sur blanc) |

Aucun logo n'est posé sur la photo de fond : Berberat et Thenot sont sur des cartes blanches, les quatre autres sont des rectangles opaques autonomes.

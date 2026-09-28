# MANIFEST des assets, Groupe Berberat Thenot

## État: terminé

Terminé le 2026-09-28. Les 11 fichiers curatés existent. Aucun profil ICC, aucune donnée EXIF, aucun canal alpha, tous en sRGB.

| Fichier | Source | Dimensions finales | Octets | Contenu | Alt proposé (FR) |
|---|---|---|---|---|---|
| src/images/photos/yard-drone.jpg | raw/img-001-000.jpg | 2434 x 1368 | 579 634 | Vue au drone du parc poids lourds : rangée de tracteurs noirs Thenot à droite, camions blancs à gauche, hangar gris au fond, ciel bleu nuageux | Parc de stationnement des Transports Thenot, rangée de camions noirs et blancs devant le hangar |
| src/images/photos/warehouse-aerial.jpg | raw/img-002-003.png, bandes noires retirées (extract 0/81/2592/1458) | 2592 x 1458 | 559 589 | Vue aérienne de l'entrepôt Berberat Thenot Expertise : bardage gris et rouge, quais de chargement, parking, forêt en arrière-plan | Vue aérienne de l'entrepôt Berberat Thenot Expertise, avec ses quais de chargement et son parking |
| src/images/photos/archive-man-snow.jpg | raw/img-003-011.png | 800 x 531 | 52 684 | Photo d'archive désaturée : tracteur MAN blanc « BERBERAT » avec semi-remorque bâchée sur autoroute, paysage enneigé | Camion MAN des Transports Berberat sur l'autoroute, photo d'archive en hiver |
| src/images/photos/flo-trailer.jpg | raw/img-004-028.jpg | 800 x 600 | 60 145 | Semi-remorque bâchée sombre « FLO Groupement, Transports et logistique », contre-plongée grand angle, soleil rasant et reflet de lentille | Semi-remorque aux couleurs de FLO Groupement, « Transports et logistique » |
| src/images/photos/volvo-fh.jpg | raw/img-005-032.jpg | 800 x 996 | 113 283 | Tracteur Volvo FH noir avec semi-remorque bâchée noire, vue de trois quarts avant, ciel bleu (plaque masquée dans la source) | Tracteur Volvo FH noir et sa semi-remorque, à l'arrêt en bord de route |
| src/images/logos/transports-berberat.png | slides/slide-2.png, extract 1034/1174, 798 x 249 | 798 x 249 | 131 448 | Logo Transports Berberat : « BERBERAT » blanc sur bandeau gris foncé, « TRANSPORTS » rouge avec flèche, fond blanc | Logo Transports Berberat |
| src/images/logos/transports-thenot.png | slides/slide-2.png, extract 2588/1164, 824 x 272, puis extend 22 px à gauche et à droite (extendWith copy, fond quasi-blanc répété) | 868 x 272 | 94 500 | Logo Transports Thenot : « THENOT » rouge et pastille ronde « T » rouge et noire « Transports, 55 Cousances-les-Forges », fond quasi-blanc | Logo Transports Thenot |
| src/images/logos/bte.png | slides/slide-2.png, extract 3992/1147, 1222 x 288 | 1222 x 288 | 180 714 | Logo BTE : « BTE » blanc sur bandeau gris dégradé, « TRANSPORTS » rouge italique sur blanc ; rectangle à fond perdu | Logo Berberat Thenot Expertise (BTE) |
| src/images/logos/btl.png | slides/slide-2.png, extract 803/2149, 1262 x 264 | 1262 x 264 | 334 079 | Logo BTL : « Berberat Thenot Logistique » blanc sur bandeau gris dégradé, « Transport et logistique » rouge sur blanc ; rectangle à fond perdu | Logo Berberat Thenot Logistique (BTL) |
| src/images/logos/lgs.png | raw/img-002-007.png (brut, sans recadrage) | 615 x 357 | 90 756 | Logo LGS : « LGS » sur bandeau gris, « Logistique, Gardiennage, Services » en rouge, numéro 03 51 25 52 83, fond blanc | Logo LGS, Logistique Gardiennage Services |
| src/images/logos/eurocap.png | slides/slide-2.png, extract 3989/2093, 1253 x 335 | 1253 x 335 | 42 262 | Logo Eurocap : « EUROCAP » blanc sur bandeau gris foncé, « TRANSPORTS » rouge avec flèche sur blanc ; rectangle à fond perdu | Logo Eurocap Transports |

Notes pour les intégrateurs :
- BTE, BTL et Eurocap sont des rectangles opaques dont le dessin touche les bords (bandeau gris en haut, bande blanche en bas) : aucune marge n'est possible sans faire entrer la photo de fond de la slide. La marge doit venir du padding de la carte blanche en CSS. Berberat et Thenot ont une marge d'environ 4 % de la largeur du logo.
- BTE a des bords haut et droit légèrement adoucis (fondu d'origine du masque smask dans le PDF).
- Les logos recadrés depuis la slide sont des rendus 300 dpi de sources basse définition : nets jusqu'à environ 300 px de large affichés, légèrement mous au-delà. Afficher les logos à 160 à 260 px de large.
- Couleurs de marque : voir `PALETTE.md` (rouge `#E31E25`, quasi-noir `#1E1E1E`).
- Photos basse résolution (archive 800 x 531, FLO 800 x 600, Volvo 800 x 996) : ne pas les utiliser en pleine largeur ni en héros ; maximum environ 800 px affichés (400 px en rétina 2x). Héros possibles : yard-drone et warehouse-aerial uniquement.

## Historique du checkpoint (2026-09-26)

### Déjà fait
- PDF copié : `ressources/presentation-groupe-berberat-thenot.pdf`
- Extraction brute complète : `ressources/assets/raw/img-PPP-NNN.*` (33 fichiers, `pdfimages -all -p`)
- Rendus 300 dpi (6000 x 3375) : `ressources/assets/slides/slide-1.png` ... `slide-5.png`
- Identification des sources (vérifiée visuellement) :

| Fichier cible | Source brute | Taille brute | Remarque |
|---|---|---|---|
| photos/yard-drone.jpg | raw/img-001-000.jpg | 2434 x 1368 | cadre plus large que sur la slide |
| photos/warehouse-aerial.jpg | raw/img-002-003.png | 2592 x 1620 | bandes noires de 81 px en haut et en bas (letterbox), à retirer : image utile 2592 x 1458 |
| photos/archive-man-snow.jpg | raw/img-003-011.png | 800 x 531 | basse résolution, c'est la source maximale |
| photos/flo-trailer.jpg | raw/img-004-028.jpg | 800 x 600 | basse résolution |
| photos/volvo-fh.jpg | raw/img-005-032.jpg | 800 x 996 | basse résolution, portrait |
| logos/transports-berberat.png | raw/img-002-004.jpg | 395 x 220 | < 600 px : recadrer depuis slides/slide-2.png |
| logos/transports-thenot.png | raw/img-002-006.png | 338 x 188 | < 600 px : recadrer depuis slide-2.png |
| logos/bte.png | raw/img-002-009.png + smask img-002-010.png | 627 x 76 | le logo n'occupe que la partie gauche de l'image, le reste est masqué : recadrer depuis slide-2.png |
| logos/btl.png | raw/img-002-005.png | 492 x 102 | < 600 px : recadrer depuis slide-2.png |
| logos/lgs.png | raw/img-002-007.png | 615 x 357 | >= 600 px : utiliser le brut (fond blanc, pas d'alpha) |
| logos/eurocap.png | raw/img-002-008.png | 291 x 78 | < 600 px : recadrer depuis slide-2.png |

Aucune source brute n'a de profil ICC ni d'orientation EXIF. Le logo FLO existe aussi en brut (raw/img-001-001.png + smask img-001-002.png, 180 x 160). raw/img-005-031.jpg (bâtiment vitré, 2878 x 1915) est présent dans le PDF mais masqué sur la slide 5 : ne pas l'utiliser. Les fichiers raw/img-003-012 à 027 et img-004-029/030 sont des dégradés, bruits et masques de mise en page, sans intérêt.

### Manquant
Rien : les 11 fichiers et PALETTE.md sont écrits.

### Pipeline appliqué (exécuté tel quel, boîtes de logos affinées au pixel près ci-dessus)
1. Outil : projet sharp déjà installé dans le scratchpad `assets-work/` (sinon `npm init -y && npm i sharp` hors du projet).
2. Photos : pour chaque source ci-dessus, `sharp(src).rotate()` (+ `.extract({left:0,top:81,width:2592,height:1458})` pour warehouse-aerial uniquement) `.resize({width:3200,height:3200,fit:'inside',withoutEnlargement:true}).toColourspace('srgb').jpeg({quality:88,mozjpeg:true})`, sans métadonnées.
3. Logos : lgs depuis le brut ; les cinq autres recadrés dans slides/slide-2.png (6000 px de large, soit 3,75 x l'aperçu 1600 px). Boîtes approximatives en coordonnées 6000 px : Berberat x 990-1875 / y 1040-1530 ; Thenot x 2587-3413 / y 1072-1527 ; BTE x 3990-5220 / y 1140-1435 ; BTL x 800-2065 / y 2150-2412 ; Eurocap x 3985-5245 / y 2090-2430. Affiner avec `.extract()` puis vérifier visuellement, marge égale d'environ 4 % de la largeur, fond conservé tel quel (pas d'alpha dans ces logos, sauf le masque BTE).
4. Échantillonner le rouge des logos Thenot et Berberat, écrire PALETTE.md, compléter ce MANIFEST (tableau complet avec alt FR), puis `ls -la` et dimensions sharp des 11 fichiers.

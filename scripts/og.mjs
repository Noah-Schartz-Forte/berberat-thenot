// Builds public/og.jpg (1200x630) and the PNG favicons.
//   npm run og
// Photo: src/images/photos/yard-drone.jpg, darkened with a NEUTRAL black
// gradient (never a brand tint), wordmark and tagline as an SVG layer.
// Note: sharp's SVG renderer (librsvg) does not load web fonts, so the text
// is set in the system's bold sans-serif (Montserrat first if it is ever
// installed locally). The output file is committed, so the result is fixed.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;
const RED = '#E31E25';


const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>text { font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; }</style>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.7"/>
      <stop offset="0.55" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="72" y="200" width="22" height="118" fill="${RED}"/>
  <text x="120" y="232" font-size="26" font-weight="700" letter-spacing="11" fill="#fff">GROUPE</text>
  <text x="118" y="318" font-size="76" font-weight="800" fill="#fff">BERBERAT THENOT</text>
  <rect x="120" y="356" width="96" height="5" fill="${RED}"/>
  <text x="120" y="412" font-size="30" font-weight="500" fill="#fff">Partenaire transport &amp; logistique depuis 1971</text>
  <text x="120" y="540" font-size="20" font-weight="700" letter-spacing="4" fill="#fff" fill-opacity="0.85">MEUSE · HAUTE-MARNE · MEURTHE-ET-MOSELLE · GROUPEMENT FLO</text>
</svg>`;

await sharp(join(root, 'src/images/photos/yard-drone.jpg'))
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(join(root, 'public/og.jpg'));

// Favicons from the SVG (the svg favicon itself is hand-written in public/).
const favicon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <style>text { font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; }</style>
  <rect width="64" height="64" fill="${RED}"/>
  <text x="32" y="43" text-anchor="middle" font-size="30" font-weight="800" letter-spacing="-1" fill="#fff">BT</text>
</svg>`;
await sharp(Buffer.from(favicon(32)), { density: 72 }).resize(32, 32).png().toFile(join(root, 'public/favicon-32.png'));
await sharp(Buffer.from(favicon(180)), { density: 300 }).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));

console.log('og.jpg, favicon-32.png, apple-touch-icon.png written to public/');

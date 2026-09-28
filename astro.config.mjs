// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Groupe Berberat Thenot: static Astro site, vanilla TypeScript + CSS, no UI
// framework. French only. The contact form is a separate Vercel function in
// /api (no Astro adapter needed).
//
// Domain swap: when the final domain is known, change `site` here AND the
// Sitemap line in public/robots.txt (see HANDOVER.md, section "Ouvert").
export default defineConfig({
  site: 'https://berberat-thenot.vercel.app',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // CSS ships inline in each page's <head>: zero render-blocking stylesheet
    // requests, the biggest LCP lever on a throttled mobile connection.
    inlineStylesheets: 'always',
  },
});

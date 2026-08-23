// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// import.meta.env.BASE_URL echoes this value verbatim, so it must end in a
// trailing slash or root-relative hrefs built as `${BASE_URL}page` collide
// with the preceding path segment.
const rawBasePath = process.env.BASE_PATH ?? '/';
const basePath = rawBasePath.endsWith('/') ? rawBasePath : `${rawBasePath}/`;

// https://astro.build/config
export default defineConfig({
  // SITE_URL / BASE_PATH are set by the GitHub Pages workflow so that build
  // targets its username.github.io/<repo> URL. Locally and on Cloudflare
  // Pages (the eventual home, at the reversephysio.com custom domain)
  // these env vars are unset, so it falls back to the real domain at root.
  site: process.env.SITE_URL ?? 'https://reversephysio.com',
  base: basePath,
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});

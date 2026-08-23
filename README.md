# Reverse Physio — Marketing Site

A single-page marketing site for Reverse Physio, a physiotherapy clinic in Singapore, built with
Astro 7, Tailwind CSS 4, and React islands. WhatsApp is the sole booking/contact channel — there
is no contact form, database, or API route; the site is fully static.

## Before launch — replace the remaining `[PLACEHOLDER]` content

Search the codebase for `[PLACEHOLDER]` to find them. Only three things are genuinely unknown and
still need real assets:

- **Hero photo** — `src/components/Hero.astro` currently renders a styled placeholder block instead
  of a real in-action photo of Eugene treating or training a patient.
- **Headshot** — `src/components/About.astro` renders a placeholder block instead of Eugene's real
  headshot.
- **Testimonials** — `src/content/testimonials/*.md` holds three placeholder reviews marked for
  replacement with real, consented Google reviews. Add more by dropping in new Markdown files with
  the same frontmatter shape (`name`, `quote`, `rating`, `order`).

Also still placeholders, unrelated to the client content above:

- **`src/layouts/BaseLayout.astro`** — Google Analytics 4 Measurement ID (`G-PLACEHOLDER`) and the
  Google Search Console verification token.

## Commands

All commands run from the project root:

| Command             | Action                                          |
| :------------------- | :----------------------------------------------- |
| `npm install`         | Install dependencies                             |
| `npm run dev`         | Start the local dev server at `localhost:4321`   |
| `npm run build`       | Type-check and build the static site to `./dist/`|
| `npm run preview`     | Preview the production build locally             |
| `npx astro check`     | Run Astro/TypeScript diagnostics                 |

## Deploying

The site builds to fully static HTML/CSS/JS in `dist/` — no server or adapter required. Confirm
HTTPS is enabled at deploy time (Netlify/Vercel/Cloudflare Pages all provision it automatically for
static sites, but it's worth verifying rather than assuming).

**Netlify**
```bash
npm run build
```
Set build command to `npm run build` and publish directory to `dist` in the Netlify dashboard (or a
`netlify.toml`), or run `netlify deploy --prod` from the CLI after building.

**Vercel**
```bash
npm run build
```
Import the repo in Vercel and it will auto-detect the Astro static build (build command
`npm run build`, output directory `dist`), or run `vercel --prod`.

**Cloudflare Pages**
```bash
npm run build
```
Set the build command to `npm run build` and the output directory to `dist` in the Pages project
settings, or run `npx wrangler pages deploy dist`.

Point the `reversephysio.com` domain at whichever host you choose — `astro.config.mjs` and the
sitemap are already configured for that canonical URL.

## Project structure

```
src/
├── components/     # Section components (mostly static .astro; two React islands)
├── content/
│   └── testimonials/     # Testimonial content collection (Markdown, one file per review)
├── content.config.ts     # Schema for the testimonials collection
├── layouts/
│   └── BaseLayout.astro  # <head> SEO tags, dual MedicalBusiness JSON-LD, GA4/Search Console
├── lib/
│   ├── site-config.ts    # Business details — name, WhatsApp, locations, hours, nav
│   └── content.ts        # Service categories, practitioner profile, FAQ copy
├── pages/
│   ├── index.astro       # The single marketing page
│   └── privacy-policy.astro
└── styles/
    └── global.css        # Tailwind + font imports + design tokens
```

Only two components hydrate as React islands: `MobileMenu.tsx` (mobile nav toggle, `client:load`)
and `FaqAccordion.tsx` (FAQ accordion, `client:visible`). The services section's tabbed layout is
implemented with CSS-only radio/peer selectors, so it needs no JavaScript. Everything else is
zero-JS static Astro markup.

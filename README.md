# Margins — Stories & Books

An editorial literary journal and reading library built with Astro 7, TypeScript, Astro Content Collections, GSAP, and Lucide icons.

## Requirements
- Node.js 22.23.4+
- npm 10+

## Development
```bash
npm install
npm run dev
```

## Verification and production build
```bash
npm run check
npm run build
npm run preview
```

## Routes
- `/` — editorial homepage
- `/stories/` — story archive
- `/stories/[slug]/` — generated story pages
- `/books/` — library archive
- `/books/[slug]/` — generated book pages
- `/about/` — about the journal
- `/404.html` — not-found page

## Content
Add a Markdown file to `src/content/stories/` or `src/content/books/`. The collection schema in `src/content.config.ts` validates the frontmatter and the dynamic route generates a dedicated page at build time.

See [DESIGN.md](./DESIGN.md) for the visual system.

# Sunset Castle

A lifestyle companion website for **16 Sunset Drive, Nutley, NJ** — a user story showcasing the life someone could have living there. For price, floor plans, and the official listing, see the link in the site's closing section.

This is an ancillary site: it complements, and links out to, the official real estate listing rather than replacing it.

Built using Claude Sonnet 5.

## Tech Stack

- [Angular 19](https://angular.dev/) — standalone components, signals, no NgModules
- TypeScript, strict mode
- Hand-written CSS (no UI framework) — see [`src/styles.css`](src/styles.css) for the shared design tokens (fonts, color palette, section theming)
- [Angular ESLint](https://github.com/angular-eslint/angular-eslint) + [Prettier](https://prettier.io/) for linting/formatting
- `@angular/animations` (lazy-loaded) for the lightbox/modal transitions

No backend — the site is fully static once built.

## Prerequisites

- [Node.js](https://nodejs.org/) 22.22.3+ (or 24.15.0+) — check with `node -v`
- npm (comes with Node)

## Getting Started

```bash
npm install
npm start
```

This runs `ng serve` and serves the site at `http://localhost:4200/` with live reload.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the dev server (`ng serve`) |
| `npm run build` | Production build, output to `dist/sunset-castle` |
| `npm run watch` | Development build that rebuilds on file changes |
| `npm run lint` | Run Angular ESLint |
| `npm run format` | Format all `.ts`/`.html`/`.css` files with Prettier |
| `npm run format:check` | Check formatting without writing changes |
| `npm test` | Run unit tests (Karma/Jasmine) |

## Project Structure

```
src/
  app/
    components/     # Standalone, reusable UI components (nav, hero, photo grid, lightbox, modal, ...)
    data/           # site-content.data.ts — all page copy, section layout, and photo metadata lives here
    models/         # TypeScript interfaces for content sections, photos, modal content, etc.
    services/       # LightboxService and ModalService (signal-based shared UI state)
  styles.css        # Global design tokens and shared section theming
public/
  photos/           # All photos referenced by src/app/data/site-content.data.ts
design-reference-screenshots/
                    # Reference screenshots of the original photobook this site's design is based on
```

### Adding or editing content

Nearly all page content — section headings, intro copy, and photos (including captions, alt text, external links, and modal "additional material" like recipes) — is defined declaratively in [`src/app/data/site-content.data.ts`](src/app/data/site-content.data.ts). The page itself is built by iterating over this data with the reusable `PhotoCollageSectionComponent`, so adding a new section or photo rarely requires touching a template.

Photos referenced from that file must exist in `public/photos/` (Angular serves everything in `public/` from the site root).

## Deployment

`npm run build` produces a static `dist/sunset-castle/browser` directory that can be deployed to any static host (GitHub Pages, Netlify, Vercel, etc.) — no server runtime is required.

# NEXUM Website — React Migration Design

**Date:** 2026-07-24
**Status:** Approved for planning
**Sources of truth:** Claude Design project `300aafb5-6a43-4a56-a196-6c37bf39a686` (`NEXUM Section Mockups.dc.html` + NEXUM design system), `SRS-NEXUM-sitio-web_1.md`, legacy static site (`index.html`, to be preserved as `legacy/index-static.html`).

## Goal

Migrate the single-file static landing page to a Vite + React + TypeScript SPA that reproduces the approved section mockups 1:1, eliminates the base64-image and hardcoded-contact technical debt from the SRS, and deploys as static output on Vercel.

## Decisions (settled with the client)

| Decision | Choice |
|---|---|
| Stack | Vite + React 18 SPA (static `dist/` output; future platform phase accepts a later backend/framework step) |
| Language | TypeScript |
| Styling | CSS Modules per component + design-token CSS files verbatim; no styling framework |
| Carousel | `embla-carousel-react` (~7KB, unstyled, touch swipe) — the only runtime dependency beyond React |
| Carousel photos | Reuse existing design-project photos as stand-ins, mapped per case study |
| Legacy features | Keep floating WhatsApp button, back-to-top button, scroll-reveal animations |
| Folders | Categorized (mirror the design-system layout: core/cards/forms/navigation/sections) |
| Tests | No unit tests; manual verification in browser + clean `npm run build` |

## Project structure

```
NexumWebsite/
├── index.html                  # Vite entry shell
├── package.json / vite.config.ts / tsconfig.json
├── legacy/index-static.html    # current 2.8MB static site, committed for reference
├── public/
│   ├── logo/nexum-logo-white.png
│   └── photos/*.jpg            # separate optimized files from the design project
└── src/
    ├── main.tsx / App.tsx
    ├── styles/
    │   ├── tokens/             # colors.css, typography.css, spacing.css, effects.css (verbatim from DS)
    │   └── global.css          # reset, fonts, .container, section padding, responsive helpers, reveal classes
    ├── components/
    │   ├── core/        Button, Badge, Icon, IconTile
    │   ├── cards/       FeatureCard, MissionCard, ServiceCard, ValueCard, CargoTypeCard
    │   ├── forms/       QuoteForm
    │   ├── navigation/  Header, Footer
    │   └── sections/    SectionHeading, ProcessStep
    ├── sections/               # Hero, CaseStudies, About, MissionVision, Values, Services,
    │                           #   CargoTypes, Coverage, Process, Contact
    ├── content/
    │   ├── site.ts             # all copy/data arrays, typed
    │   ├── images.ts           # single image map: key → /photos/*.jpg
    │   └── contact.ts          # WhatsApp number, wa.me URL helper, email, phone, location
    └── hooks/                  # useScrollReveal, useScrolled
```

## Design system port

Each of the 14 components ports from the design-system bundle's JSX source (`_ds_bundle.js` ships originals) with inline styles moved to a co-located `.module.css`:

- **Button** — variants `primary` / `outline` / `outline-navy`, sizes `sm` / `md`; renders `<a>` when `href` is set (external links get `target="_blank" rel="noopener"`), else `<button>`. Hover states move from React state to CSS `:hover`.
- **Badge** — variants `on-dark`, `on-dark-solid`, `on-light`, `tinted`; optional icon.
- **Icon** — the DS's ~40 hand-drawn SVG paths kept as a typed name map; renders inline SVG.
- **IconTile** — variants `tint` / `navy` / `accent` / `glass`, numeric or named sizes, configurable radius.
- **SectionHeading** — eyebrow + title + optional text, `align` left/center, `inverse` for dark sections.
- **FeatureCard, MissionCard, ValueCard, CargoTypeCard, ServiceCard, ProcessStep** — direct ports; hover lift/zoom effects become CSS transitions.
- **QuoteForm** — controlled fields (name required; company, phone, cargo select, route, message), submit builds a prefilled message and opens `wa.me` in a new tab. Number and email come from `content/contact.ts`.
- **Header** — fixed; transparent over hero → solid `rgba(8,22,37,.94)` + blur + shadow when scrolled (`useScrolled`). Desktop: 6 anchor links + "Cotiza ahora" WhatsApp button. Mobile (≤1024px): hamburger opens full-width navy dropdown with links + CTA; closes on link tap.
- **Footer** — 3-column grid (brand + social circles / navigation / contact), bottom bar with dynamic year.

Components never contain copy, contact data, or image paths — all injected via props from `content/`.

## Page assembly & sections

`App.tsx` renders `Header`, the 10 sections in mockup order, `Footer`, `WhatsAppFloat`, `BackToTop`. Anchors: `#inicio`, `#nosotros`, `#servicios`, `#cobertura`, `#por-que-elegirnos`, `#contacto`.

1. **Hero** (`#inicio`) — gradient-over-photo background, eyebrow, H1 with orange highlight, lead, 2 CTAs (primary → wa.me, outline → `#servicios`), 3 on-dark badges; navy info strip (origin, coverage, email, phone).
2. **CaseStudies** — navy band, "Casos de éxito en movimiento", Embla carousel: 5 slides (photo + tag/title/text/route), prev/next arrows, dots (active = orange pill), loop, touch swipe, no autoplay.
3. **About** (`#nosotros`) — photo with floating Manzanillo card, SectionHeading, 2 paragraphs, 2×2 FeatureCards.
4. **MissionVision** — dark gradient over photo, centered inverse heading, 2 MissionCards, quote, 4 approach badges.
5. **Values** (`#por-que-elegirnos`) — light bg, centered heading, 3×2 ValueCards.
6. **Services** (`#servicios`) — heading + 2×2 ServiceCards (photo, tag, icon tile, title, text).
7. **CargoTypes** — navy gradient bg, centered inverse heading, 3×2 CargoTypeCards, closing line with WhatsApp link.
8. **Coverage** (`#cobertura`) — split layout (heading + 4 icon items / port photo + navy caption card), routes row: solid "Manzanillo" badge + 7 destination badges.
9. **Process** — centered heading, photo band with gradient caption, 5 ProcessSteps, 5 added-value tiles.
10. **Contact** (`#contacto`) — gradient-over-photo, left: heading + 3 contact links with glass icon tiles; right: QuoteForm.

## Behavior

- **Responsive breakpoints:** `1024px` — 3-col grids → 2, nav → hamburger; `768px` — 2-col grids/splits stack to 1, section padding 100px → 64px (token swap); `560px` — process steps and footer stack.
- **Scroll reveal:** `useScrollReveal` — IntersectionObserver toggles a `.revealed` class (CSS opacity/translate transition). Safety `setTimeout` reveals everything if the observer never fires; `prefers-reduced-motion` disables animation.
- **WhatsAppFloat:** fixed bottom-right, WhatsApp green, generic prefilled `wa.me` message.
- **BackToTop:** appears after ~600px scroll, smooth-scrolls to top.

## Content & assets

- All copy comes from the mockup's data script (already client-approved wording) into `content/site.ts`.
- Photos are downloaded from the design project into `public/photos/` as separate files (10 photos + logo). If any exceeds the 256KB transfer cap, extract the same photo from the legacy site's base64 as fallback. Hero image loads eagerly; all others `loading="lazy"` with `alt` text.
- Carousel photo mapping (stand-ins until real case photos exist): contenedores → `service-sencillo-contenedor`, maquinaria → `service-lowboy`, big bags → `strip-port-dusk`, rollos → `process-band-terminal`, doble remolque → `service-full-doble-remolque`.
- Google Fonts (Poppins + Inter) via the token CSS import; system-sans fallback.

## Error handling / edge cases

- Form: name required (native `required` + submit guard); optional fields simply omitted from the WhatsApp message.
- `wa.me` opens in a new tab; site state is unaffected if the user abandons it (same lead-loss limitation as today — documented in SRS §2.3, out of scope here).
- Unknown icon name renders nothing (DS behavior).

## Verification

No unit tests (client rule). Manual pass: dev server in browser — every section compared against its mockup frame at 1440px, mobile pass at 375px (hamburger, stacking, swipe), carousel controls, form submit → correct `wa.me` URL, anchors, floating buttons. `npm run build` must complete without errors and the `dist/` preview must render identically.

## Out of scope

Multi-language, real quote backend / lead persistence, CAPTCHA/anti-spam, image CDN pipeline, SEO work, auth/dashboard platform phase (future; SPA choice accepted knowing that phase will bring its own backend), professional photography.

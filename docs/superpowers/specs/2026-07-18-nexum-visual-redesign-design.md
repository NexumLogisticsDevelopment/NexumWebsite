# NEXUM — Visual Redesign (PoC)

| | |
|---|---|
| **Date** | 2026-07-18 |
| **Status** | Design approved, not yet implemented |
| **Scope** | Visual redesign of `index_8.html`, in place |
| **Nature** | Proof of concept — proves the art direction, not a production launch |

## 1. Purpose

Re-style the NEXUM Logistic Solutions one-pager so it reads as a modern, premium
operator rather than a template. The content is right; the execution is not.

This is a PoC. Its job is to demonstrate the art direction well enough to decide
whether to invest in it. It is not a production deliverable.

## 2. Scope

**In scope:** visual redesign of `index_8.html`, edited in place.

**Explicitly out of scope**, each deferred to its own future project:

- The Astro rebuild and any build tooling. The 2.8 MB single-file architecture stays.
- Image extraction, optimization, WebP/AVIF, lazy loading.
- SEO metadata, sitemap, robots.txt, schema.org, Open Graph.
- Deployment, hosting, DNS, HTTPS.
- Formal accessibility audit (Lighthouse/axe, screen-reader validation).
- Backend, lead persistence, real quoting, analytics.

Section order and copy do not change. This is a restyle, not a content rework.

## 3. Art direction

Approved direction is a hybrid of two explored options:

- **A — editorial cinematic:** dark, photographic, large light-weight headlines,
  generous negative space, orange used sparingly.
- **B — technical/infrastructure:** visible grid, monospace labels, real figures,
  precision over decoration.

The hybrid is deliberate. A's weakness is dependence on photo quality; B's
figure-and-grid layer carries weight where a photograph cannot.

### 3.1 Imagery constraint

All existing photographs were extracted from a client Canva PDF at roughly
1672×941 and are not licensed stock. No new photography is being sourced for the
PoC.

The design therefore treats low resolution as an art-direction choice rather than
a defect: photos are duotone-graded and gradient-overlaid so softness reads as
intentional. Crops tighten and overlays deepen wherever an image would otherwise
be shown large.

This is a PoC accommodation. A production relaunch should still commission real
photography of NEXUM's fleet.

### 3.2 Factual integrity

The precision layer uses **only figures already countable on the existing page**.
No new claims about the business are introduced.

| Figure | Source |
|---|---|
| 7 corredores | Guadalajara, Bajío, Querétaro, CDMX, San Luis Potosí, Saltillo, Monterrey |
| 6 tipos de carga | existing `#tipos-de-carga` section |
| 4 configuraciones | Full/doble remolque, Sencillo, 3.5 Ton, Lowboy |
| 5 pasos | existing process section |

Figures invented during exploration (fleet size, "24/7 monitoreo", years
operating, tonnage) are **not** to appear. If a new figure is wanted, it must be
verified with NEXUM first.

## 4. Design system

All changes route through `:root` custom properties. No colors, radii or spacing
are hardcoded at the rule level.

### 4.1 Typography — three roles

| Role | Font | Usage |
|---|---|---|
| Display | Space Grotesk or Archivo, weights 200–300 | Headlines, at large scale, tracking `-0.03em` |
| Body | Inter (unchanged) | Paragraphs, lists, form fields |
| Mono | JetBrains Mono or IBM Plex Mono | Eyebrows, figure labels, coordinates, section numbering |

Replacing 700-weight Poppins headlines with large light-weight display type is
the single highest-impact change in this design.

### 4.2 Color

Navy and orange are retained as brand colors. Two changes:

- The navy ramp extends downward with a near-black `--navy-990`, so dark sections
  have depth rather than one flat fill.
- **Orange is demoted.** It currently appears on every button, eyebrow, icon and
  badge, which flattens its impact. It is restricted to exactly three uses:
  primary CTA, active/current state, and one accent figure per section.
  Everything else currently orange becomes navy or a hairline rule.

### 4.3 Shape

`--radius` drops from 16px to 2–4px, and to 0 in places. Buttons lose the 50px
pill radius and the orange glow shadow. Card shadows are removed in favor of
hairline rules. Rounded corners and soft shadows are the dominant "dated
template" signal in the current design.

### 4.4 New primitives

Both are pure CSS and require no changes to the embedded images.

- `.duotone` — navy-to-transparent gradient plus a blend-mode layer over photos.
- `.grid-rule` — hairline grid and rule system for section framing and figure blocks.

## 5. Section treatment

Order and copy unchanged throughout.

| Section | Treatment |
|---|---|
| **Hero** (`#inicio`) | Full-bleed duotone photo. Light display headline at large scale. Mono eyebrow with Manzanillo coordinates. Four-figure row on a hairline rule at the bottom; the three current badge chips fold into it. |
| **Nosotros** (`#nosotros`) | Asymmetric split on a visible grid. Image in a hard-edged frame that deliberately breaks the grid; text in a narrow measure with generous leading. |
| **Misión y Visión** | Cards removed. Becomes a large pull-quote in light display type on the deepest navy, with the two statements as mono-labeled columns beneath. |
| **Por qué elegirnos** (`#por-que-elegirnos`) | Card grid loses shadows, radii and orange icons. Becomes a ruled grid: hairline dividers, mono numbering `01`–`06`, small navy icons, generous internal padding. |
| **Servicios** (`#servicios`) | Four cards go full-bleed image with duotone treatment, title over image, specs on a ruled list beneath. Tightest crops and heaviest overlays on the site — this is where photo weakness is most exposed. |
| **Tipos de carga** (`#tipos-de-carga`) | Stays navy. Cards become a numbered ruled index. |
| **Cobertura** (`#cobertura`) | Same asymmetric grid treatment as Nosotros. |
| **Valor agregado** | Same ruled-grid treatment as Por qué elegirnos. |
| **Contacto** (`#contacto`) | Form fields lose rounded borders, become underline-only inputs on navy. |
| **Footer** | Ruled, mono-labeled, orange removed except the WhatsApp action. |

## 6. Behavior

**Unchanged.** The quote form still builds a plain-text message and opens
`https://wa.me/523143588203` in a new tab. Only `#qName` is required. There is no
backend, no persistence, no validation beyond what exists today.

**Motion.** The `.reveal` mechanism keeps its current shape exactly: hidden only
after JS adds `js` to `<html>`, revealed by IntersectionObserver, with the 2.5s
`setTimeout` force-reveal safety net intact. Content must never be able to end up
permanently invisible when JS fails.

Two additions: easing is refined, siblings get a small stagger, and a
`prefers-reduced-motion` guard is added since the code is being touched anyway.

## 7. Implementation constraints

The file is 2.8 MB across 1102 lines. Lines **144, 171, 212, 383, 469, 526, 664,
675, 686, 697, 785, 819, 938** hold base64 data URIs of 95k–614k characters each.

- Never read the whole file. Never grep it with content output across those lines.
- Locate with `Grep -n` or `files_with_matches`; read short line ranges only.
- Edit via short unique snippets. Never paste a data URI into an edit.
- Survey structure with `awk 'length($0)<400' index_8.html`.

Because every image treatment is a CSS overlay, **no data URI line needs to be
touched at all.**

**Work distribution:** overwhelmingly the `<style>` block (lines 12–461). Markup
changes are limited to structural additions the new layouts require — figure row,
mono labels, grid wrappers, numbering — not a rewrite. The `<script>` block is
touched only for reveal easing and the reduced-motion guard.

**Preserved conventions:** the inline SVG `ICONS` registry and `renderIcons()`
hydration; no CDN beyond Google Fonts; `renderIcons()` called on any
runtime-injected markup; the progressive-enhancement shape of `.reveal`; the
WhatsApp form behavior; and `+523143588203` / `ventas@nexumlogisticmx.com`
repeated across the file, unchanged.

## 8. Verification

There is no test suite and this project does not add one. Verification is manual:

1. Open `index_8.html` over `file://`.
2. Check rendering at desktop, tablet and mobile widths.
3. Confirm all icons hydrate (no empty `.icon` spans).
4. Confirm the mobile nav toggle still swaps `bars`/`xmark` and re-renders icons.
5. Confirm all content is visible after the reveal safety net fires.
6. Check contrast on new navy-on-navy and text-over-duotone combinations.
7. Confirm the quote form still opens WhatsApp with a populated message.

Step 6 is the substantive risk of a dark editorial direction and should not be
skipped.

## 9. Risks

1. **Typography may be vetoed.** Poppins may be a client brand asset rather than a
   choice. Swapping the display face is the highest-impact change here and the most
   likely to be rejected. Confirm with NEXUM before implementation, not after.
   Fallback: Poppins at weight 300 for headlines, plus the mono layer only.
2. **Demoting orange** will make the site feel less "branded" at first glance to
   anyone used to the current version. Correct for a premium read, but it must be a
   communicated decision rather than a surprise.
3. **Two additional Google Fonts requests** on a page already shipping 2.8 MB in a
   single request. Marginal against that baseline, but it moves the wrong way on
   performance — a debt this project explicitly defers rather than fixes.

## 10. Open decisions

None blocking. Final font selection (Space Grotesk vs Archivo; JetBrains Mono vs
IBM Plex Mono) is an implementation-time choice within the constraints in §4.1.

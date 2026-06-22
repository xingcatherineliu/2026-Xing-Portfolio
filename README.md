# Handoff: Xing Liu — Portfolio Website

## Overview
A personal portfolio site for a senior product designer + builder. It has five top-level pages — **Work** (home), **About**, **Process**, **Resume** — plus **long-form case study** pages (Compass, Pulse live; Atlas, Field are "coming soon"). Visual language: warm off-white paper, near-black ink, a single configurable accent (default signal green), generous type, restrained motion (reveal-on-scroll). Clean, editorial, confident — not a template.

The goal of this handoff: take these HTML/React prototypes and rebuild them as a **real, deployable codebase** (recommended: **Vite + React + TypeScript**), then wire in real images/video and publish to **GitHub Pages**.

## About the Design Files
The files in `/files` are **design references**, not production code to ship as-is. They are React components compiled **in the browser via Babel** (`<script type="text/babel">`) — great for fast iteration, wrong for production (first-paint flash, no SEO, slow). Your job is to **recreate this design in a proper build environment** using the same component structure, the same content data, and the exact tokens documented below — but with a real bundler, real `<img>`/`<video>` assets, and routing.

If you keep React: lift the inline-style theme object into either CSS variables or a styled system; keep the component decomposition (it's already clean). If the team prefers another framework, the tokens + screen specs below are framework-agnostic.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, motion, and copy are all here. Recreate pixel-faithfully. The one deliberate placeholder: case-study imagery uses a striped `PlaceholderImg` component — replace those with real media.

---

## Architecture (current prototype)
- **`shared.jsx`** — all *content* + shared helpers, attached to `window`: `PROJECTS`, `PROCESS`, `ABOUT`, `CONTACT`, `RESUME`, and the `PlaceholderImg` component. **This is your content model** — port it to a typed data module (e.g. `src/data/`).
- **`portfolio-final.jsx`** — the main site app: `Nav`, `Hero`, `Work`, `About`, `Process`, `Resume`, `SiteFooter`, `App`. Theme tokens are computed in `useTheme(tweaks)`. Which page renders is selected by `window.PAGE` (`'work' | 'about' | 'process' | 'resume'`), set inline in each HTML file.
- **`case-study-compass.jsx`** — the case-study template. Content for every case lives in a `CASES` object keyed by slug (`compass.html`, `pulse.html`). Which case renders is selected by `window.CASE`. Sections: `Hero → Problem → Research → Pullquote → Approach → Exploration → Solution → Outcomes → Reflection → NextCase → SiteFooter`.
- **`tweaks-panel.jsx`** — a design-time control panel (accent color, font, dark mode, grid overlay). **Do not ship this** — it's an authoring tool. Drop it in production, or convert dark-mode into a real user toggle if you want one.
- **HTML files** — one per page (`index.html`=Work, `about.html`, `process.html`, `resume.html`, `compass.html`, `pulse.html`). Each sets `window.PAGE`/`window.CASE`, loads Google Fonts, base CSS, then the babel scripts.

### Page → route mapping (recommended)
| Prototype file | Route | `window.PAGE` / `window.CASE` |
|---|---|---|
| index.html | `/` | PAGE=work |
| about.html | `/about` | PAGE=about |
| process.html | `/process` | PAGE=process |
| resume.html | `/resume` | PAGE=resume |
| compass.html | `/work/compass` | CASE=compass.html |
| pulse.html | `/work/pulse` | CASE=pulse.html |

Replace the `window.PAGE`/`window.CASE` globals with real client-side routing (React Router) or file-based routes.

---

## Design Tokens

### Colors — light mode (default)
| Token | Value | Use |
|---|---|---|
| `bg` | `#f7f6f3` | page background (warm paper) |
| `paper` | `#ffffff` | cards, raised panels |
| `panel` | `#eef0eb` | secondary fill |
| `panel2` | `#f0eee9` | tertiary fill |
| `ink` | `#0a0a0a` | primary text, dark sections |
| `ink2` | `#2a2a2a` | body text |
| `muted` | `#6b6b6b` | labels, captions, eyebrows |
| `rule` | `rgba(10,10,10,0.12)` | borders / dividers |
| `ruleSoft` | `rgba(10,10,10,0.06)` | faint borders (tag chips) |
| `footerBg` | `#0a0a0a` | footer background |
| `footerInk` | `#f5f5f0` | footer text |
| `accent` | `#4caf50` | links, dots, arrows, selection (configurable) |

### Colors — dark mode
`bg #0c0d0a` · `paper #15171a` · `panel #1a1d18` · `panel2 #1c1b18` · `ink #f0efe9` · `ink2 #cfcec6` · `muted #8b8a82` · `rule rgba(240,239,233,0.12)` · `ruleSoft rgba(240,239,233,0.06)` · `footerBg #050605` · `footerInk #f5f5f0`. Accent unchanged.

### Accent options (curated)
`#4caf50` green (default) · `#e85a3a` orange · `#3b82f6` blue · `#a855f7` violet. Selection highlight uses accent with white text.

### Typography
- **Primary font:** **DM Sans** (Google Fonts, weights 400/500/600/700, optical sizing 9–40). Alternates offered: Plus Jakarta Sans, Manrope. Fallback stack: `-apple-system, BlinkMacSystemFont, system-ui, sans-serif`.
- **Mono (placeholders/labels only):** JetBrains Mono / ui-monospace.
- **Scale (px):**
  - Hero H1: **~112** desktop → **64** at ≤900px (`.hero-h1`), weight 500, letter-spacing −0.04em, line-height ~0.98
  - Section H2 / case titles: **56–88** → **36** at ≤900px (`.section-h2`), weight 500, letter-spacing −0.03em
  - Sub-section H3: 22–44, weight 500–600
  - Lead paragraph: 17, line-height 1.6, color `ink2`
  - Body: 15–16, line-height 1.55
  - Labels / eyebrows: 12, weight 600, letter-spacing 0.14em, UPPERCASE, color `muted`
  - Footer headings ("Contact Xing Liu", "let's work together"): 40, weight 500, letter-spacing −0.03em
- **Minimums:** body never below 15px.

### Spacing & layout
- Content container: `max-width: 1280px`, centered (`.page-container` / `.page`).
- Standard horizontal page padding: `32px`.
- Section vertical padding: `64–96px`.
- Nav height: `64px`, sticky, `backdrop-filter: blur(10px)`, background = `bg + 'ee'` (≈93% opacity), bottom border `rule`.
- Sticky footer: page is a `min-height:100vh` flex column with `main { flex:1 0 auto }` so the footer drops to the viewport bottom on short pages.

### Radius & shadow
- Card radius: 14–20px. Tag chips / buttons: 999px (pill). Avatar/social circles: 50%.
- Work-card hover shadow: `0 18px 40px rgba(10,10,10,0.08)`.

### Motion
- **Reveal-on-scroll:** elements start `opacity:0; translateY(14px)`, transition to `opacity:1; none` over `.7s` (opacity ease, transform `cubic-bezier(.2,.7,.3,1)`), triggered via IntersectionObserver adding `.is-in`. Stagger via `delay` prop. **Important:** in production, ensure content is visible without JS (SSR/no-JS fallback) so it isn't stuck invisible.
- Work card hover: `translateY(-3px)`, `.35s cubic-bezier(.2,.7,.3,1)`; its "Read" button nudges `translateX(4px)`.
- Nav link underline: scaleX 0→1 from left, `.25s ease`, on hover + active.
- Global link/button transitions: `.15s ease` on color/background/opacity/transform.
- Honor `prefers-reduced-motion`.

---

## Screens / Views

### Nav (all pages)
Sticky top bar. Left: green dot + "**Xing Liu** — Senior Product Designer" (the title in `muted`, weight 500). Center: links **Work / About / Process / Resume** (active link = `ink` with underline; others `muted`). Right (hidden ≤900px): three circular social icons — **LinkedIn, GitHub, Email**, in that order — 18px glyphs, `ink` color. Logo links home.

### Work (home — `index.html`)
- **Hero:** single full-width column. Huge H1 (the designer's positioning statement), lead paragraph, availability note. No side card (an "At a glance" card was deliberately removed).
- **Work list:** `PROJECTS` rendered as stacked cards. Each card: code (01–04), name + tag, role/year/org meta, blurb, metric, tag chips, and a CTA. Live projects show a black pill **"Read case study →"**; `comingSoon` projects show a muted outline pill **"Coming soon"** (non-interactive).

### About (`about.html`)
Bio + "currently" note + a **Skills** block grouped by Design / Build / Working with (tag chips on `paper` ground). No background fill or top/bottom border (matches Resume's plain-`bg` treatment). The old "Let's make something good" contact block was removed — contact lives only in the global footer now.

### Process (`process.html`)
The four `PROCESS` steps (01–04), each with title + description.

### Resume (`resume.html`)
- Header row: **"Xing Liu — Senior Product Designer"** (title in `muted`) on one line + a black pill **"Download PDF ↓"** that calls `window.print()`.
- Summary paragraph.
- Two-column body: left = **Experience** timeline (role, org, period, location, bullet points with accent em-dash); right rail = **Skills** (chips), **Education**, **Recognition**, **Contact** (email + LinkedIn as accent links).
- ⚠️ Experience/education/recognition are **placeholder content** — the owner will replace.

### Case study (`compass.html`, `pulse.html`)
Long-form, data-driven from `CASES[slug]`. Section order: **Hero** (code, name, tag, hero line, metric, meta row: org/role/timeline/team) → **Problem** (lead + paragraphs + "Where I started" stat card) → **Research** (3 insight cards, on `paper`) → **Pullquote** (large quote + citation, top/bottom rules) → **Approach** (3 numbered "bets") → **Exploration** (3 placeholder images + closing line, on `paper`) → **Solution** (1 large + 2 half placeholder images) → **Outcomes** (4 stat cards on dark `ink` ground) → **Reflection** (3 columns: What worked / What I'd redo / What I learned) → **NextCase** → **SiteFooter**.
- **NextCase pager:** Previous (left) / Next (right) with a vertical divider. Uses `PROJECTS` order. First project shows "All work" on the left, last shows it on the right; a `comingSoon` neighbor renders as a non-clickable "Coming soon" cell. Title 44px for real cases, 32px for the "All work"/"Coming soon" fallback.

### Global Footer (all pages)
Dark (`#0a0a0a`) band. Left column: heading **"Contact Xing Liu"** + email (`xing.catherine.liu@gmail.com`) + phone (`(305) 878-1966`) — both **white** (`rgba(245,245,240,0.85)`), as links (`mailto:` / `tel:`). Right column: heading **"let's work together"** + three **white circular** social buttons — **LinkedIn, GitHub, Email** (in that order). Headings use the section-h2 type (40px / weight 500 / −0.03em).

---

## Content Model (port verbatim from `shared.jsx`)
- **`PROJECTS[]`**: `{ code, name, tag, role, year, org, slug?, comingSoon?, blurb, metric, tags[] }`. Compass + Pulse have `slug`; Atlas + Field have `comingSoon: true`.
- **`PROCESS[]`**: `{ n, t, d }` ×4.
- **`ABOUT`**: `{ bio, current, skills: [{ g, items[] }] }`.
- **`CONTACT`**: `{ email: 'xing.catherine.liu@gmail.com', linkedin, linkedinUrl }`. Phone `(305) 878-1966` is currently hardcoded in the footer (`tel:+13058781966`) — **move it into `CONTACT`** when you refactor. Email + phone are intentionally public.
- **`RESUME`**: `{ summary, experience[], education[], recognition[] }` — placeholder, owner will edit.
- **`CASES`** (in `case-study-compass.jsx`): keyed by slug; each has `project, problem, research, pullquote, approach, exploration, solution, outcomes, reflection`. Adding a case = add a `CASES` entry + a route/page + (optionally) flip `comingSoon` off in `PROJECTS`.

---

## Assets & Media (the work to do)
- **Replace `PlaceholderImg`** (striped boxes) in the case-study Exploration/Solution sections with real `<img>`/`<video>`. The `CASES[slug].exploration.shots` and `.solution.shots` arrays currently hold caption strings — change them to `{ src, alt, caption }` and render real media.
- **Images:** put in `public/media/<case>/` (or import from `src/assets/`). Use responsive `srcset`, `loading="lazy"`, explicit width/height to avoid layout shift, and modern formats (AVIF/WebP with JPEG fallback).
- **Video:** prefer short, **muted, autoplay, loop, playsinline** mp4 (with a `poster` frame) for product demos; for longer pieces, embed YouTube/Vimeo. **Do not commit large media to Git** — files >50MB warn, >100MB are rejected by GitHub. Consider Git LFS or external hosting for anything big.
- **Fonts:** currently Google Fonts CDN. For production, optionally self-host DM Sans for performance/privacy.
- **Favicon / OG image:** add a favicon and a real `og:image` (currently none) before publishing.

---

## Build & Deploy (recommended path)
1. **Scaffold Vite + React + TS.** Recreate the components from the prototype; move content into `src/data/`, tokens into CSS variables or a theme module. Remove in-browser Babel and the splash screen.
2. **Routing:** React Router (or file-based). Map the table above. Keep nav active-state logic.
3. **Drop the tweaks panel** (authoring-only). Optionally keep a real dark-mode toggle.
4. **Insert media** as above.
5. **GitHub Pages:**
   - In `vite.config.ts` set `base: '/<repo-name>/'` (unless using a custom domain or a `<user>.github.io` repo, where `base: '/'`).
   - Add a GitHub Actions workflow that runs `npm ci && npm run build` and deploys `dist/` to Pages. Add a `404.html` copy of `index.html` (or hash routing) so client-side routes work on Pages.
   - For a custom domain, add a `CNAME` file and set `base: '/'`.
6. **Pre-launch checklist:** replace Resume placeholders; add real case-study media for Compass + Pulse; decide whether Atlas/Field stay "coming soon" or get hidden; confirm email + phone (both intentionally public); add favicon + OG image; run Lighthouse.

---

## Files in this bundle (`/files`)
- `index.html`, `about.html`, `process.html`, `resume.html` — page shells (Work/About/Process/Resume)
- `compass.html`, `pulse.html` — case-study shells
- `portfolio-final.jsx` — main site app + theme tokens
- `case-study-compass.jsx` — case-study template + `CASES` content
- `shared.jsx` — content model + `PlaceholderImg`
- `tweaks-panel.jsx` — authoring panel (reference only; do not ship)

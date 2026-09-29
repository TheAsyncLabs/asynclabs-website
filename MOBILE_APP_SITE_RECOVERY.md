# Mobile App Website Recovery Report

## 1. Problem statement

The Async Labs mobile app website (the "Flutter Development Studio" site) was no longer part of the main website repository, and the "App Development" entry on the main site linked out to a separate deployment (`https://theasynclabs.com/`). A teammate reported that the mobile app site still existed in Git history. The goal was to:

- find and recover that code,
- integrate it into the main website instead of keeping a separate deployment,
- add navigation from the main site to the mobile app section,
- confirm the project builds and the existing site is unaffected.

## 2. Root cause

The code was not deleted by a merge or an overwrite. The history of `main` is unrelated to the history of the mobile app site.

| Commit | Branch(es) | Description |
|---|---|---|
| `cca09bf` (2026-02-26) | `feature/ameesh`, `feature/omkar` | Initial Vite + React mobile app site |
| `36efbd7`, `85b6985` (2026-02-27) | `feature/ameesh`, `feature/omkar` | Sunset gradient palette, timeline animation |
| `e8b3127` (2026-03-05) | `feature/latest-omkar` | Latest changes; adds `PRD.md` and `EditorialNarrative` |
| `b9e5a35` (2026-03-05) | `feature/latest-omkar` | Moves code to repo root (**most complete version**) |
| `8a3b254` (2026-07-30) | `main` | "Initial commit from Create Next App". **Root commit with no parent** |
| `3bdacd6` (2026-09-24) | `main` | AI and Web Development vertical sites |

`main` was re-initialised as a new Next.js project with no shared ancestry with the older branches. The mobile app site stayed on the feature branches and was never carried into `main`.

The two codebases also use different stacks, so the old code could not be copied in as-is:

| | Old mobile site | Current `main` |
|---|---|---|
| Framework | Vite + React Router | Next.js 16 (App Router) |
| React | 18 | 19 |
| Tailwind | 3 | 4 |
| UI | shadcn/ui, Framer Motion | GSAP, Lenis |

The old site's Process, About and Case Studies pages were "coming soon" placeholders. The real content was the home page: hero, services, tech stack, 5-phase process, testimonials, FAQ.

## 3. Recovery source

- Branch: `origin/feature/latest-omkar`
- Commit: **`b9e5a35`** (most complete version)
- Earlier versions: `85b6985` (on `feature/ameesh` / `feature/omkar`)

## 4. How it was fixed

Because `main` already renders its AI and Web Development sites from a shared "vertical" data model and templates, the recovered content was ported into a third vertical instead of adding a second build system.

### Files added
- `src/data/verticals/app-development.ts` — recovered content (hero, 5 services, process phases, testimonials, FAQ, about) mapped to the shared `Vertical` type
- `src/app/app-development/` — 7 route files, mirroring the web-development routes:
  - `page.tsx`
  - `about/page.tsx`
  - `contact/page.tsx`
  - `process/page.tsx`
  - `portfolio/page.tsx`
  - `portfolio/[id]/page.tsx`
  - `services/[slug]/page.tsx`

### Files modified
- `src/components/Nav.tsx` — "App Development" now points to `/app-development` (was the external URL)
- `src/app/page.tsx` — the home page's App Development card is now an internal "Explore" link, with updated copy
- `src/components/templates/PortfolioListTemplate.tsx` — shows "Case studies coming soon" when a vertical has no projects (the original site had no real case studies, so none were invented)
- `next.config.ts` — added `allowedDevOrigins` for the LAN IP used during local testing (dev-only)

### Conflicts
There were no Git conflicts, because the histories were not merged. The stack differences were handled by porting content. The old visual styling (aurora hero, glass buttons) was not carried over; the pages use the current site's design system.

## 5. Verification

- `npm run build` passes, including type checks; all `/app-development/*` routes are generated.
- Production server smoke test: `/`, `/ai`, `/web-development`, and every `/app-development` page returned HTTP 200.
- The home page and nav contain links to `/app-development`.
- The portfolio page shows the empty-state message.

## 6. Known items and follow-ups

- **Not committed:** the changes above are in the working tree only.
- **Lint:** `npm run lint` reports 2 errors that already existed (`Nav.tsx:33` setState in effect, `SplitReveal.tsx:121` ref access during render); not caused by this work.
- **Testimonials** were copied from the original site and appear to be placeholders; replace with real ones or remove.
- **Preserve the legacy code:** `git tag legacy/mobile-site-vite b9e5a35 && git push origin legacy/mobile-site-vite`
- **Old branch cleanup:** `feature/latest-omkar` has `node_modules/.vite` committed by mistake.
- **Redirect:** once verified, point `theasynclabs.com` at `/app-development`.
- **Not restored:** the original visual design. See `PRD.md` on `feature/latest-omkar` if a fuller rebuild is wanted.
- **Contact form** posts to Slack via `SLACK_WEBHOOK_URL`; it returns an error if the variable is unset.
- `npm audit` reports 5 vulnerabilities (4 high, 1 critical) in dependencies; not reviewed here.

## 7. Suggested commits

1. `feat: add app-development vertical restored from feature/latest-omkar (b9e5a35)`
2. `feat: route App Development nav and hub card to /app-development, add empty portfolio state`
3. `chore: allow LAN origin in dev config`

# Product Requirements Document (PRD)
## Async Labs — Flutter Development Studio Website
**Version:** 1.0  
**Date:** March 5, 2026  
**Status:** In Development (~70% MVP)

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Target Audience & Goals](#2-target-audience--goals)
3. [Site Architecture & Navigation](#3-site-architecture--navigation)
4. [Page-by-Page Breakdown](#4-page-by-page-breakdown)
5. [Design Language](#5-design-language)
6. [UI/UX Flow](#6-uiux-flow)
7. [Animation Catalogue](#7-animation-catalogue)
8. [Glassy Effect Design System](#8-glassy-effect-design-system)
9. [Component Index](#9-component-index)
10. [Task List — Implementation Roadmap](#10-task-list--implementation-roadmap)
11. [Structural Blind Spots & Missing Systems](#11-structural-blind-spots--missing-systems)

---

## 1. Product Overview

**Async** is a Flutter development studio that builds scalable cross-platform apps using a structured 5-phase methodology. The website serves as the primary marketing and lead-generation surface — converting startups, founders, and enterprise buyers into consultation bookings.

**Core Value Proposition:**
> "We build scalable Flutter apps — The Right Way."

This means: structured architecture, transparent process, and a proven 5-phase lifecycle from Discovery → Launch.

**Tech Stack:**
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui (Radix UI)
- Framer Motion (animations)
- React Router v6 (routing)
- React Hook Form + Zod (forms)
- TanStack React Query (data fetching)

---

## 2. Target Audience & Goals

### Primary Users
| Persona | Description | Goal on Site |
|---------|-------------|--------------|
| **Startup Founder** | Non-technical, 0–seed stage, has app idea | Understand the process, book a consultation call |
| **CTO / Tech Lead** | Technical buyer, evaluating agency quality | Review architecture approach, case studies |
| **Product Manager** | Mid-market company, scaling existing app | Review services, understand timeline/budget |
| **Enterprise Buyer** | Large org, internal tools or customer app | Evaluate quality, trust signals, direct contact |

### Business Goals
1. **Primary:** Generate consultation booking leads via the Contact form and popup
2. **Secondary:** Communicate the 5-phase process as a trust/differentiator signal
3. **Tertiary:** Showcase case studies as social proof

### Success Metrics
- Consultation form submission rate
- ScrollDepth ≥ 70% (triggers popup)
- Time-on-site > 2 minutes
- Mobile engagement rate

---

## 3. Site Architecture & Navigation

### Route Map

```
/ (Home — Landing Page)
├── /process          (5-Phase Methodology Deep-Dive)
├── /case-studies     (Portfolio / Work)
├── /about            (Team, Mission, Story)
├── /contact          (Lead Form)
└── * (404 Not Found)
```

### Navigation Concept

The **Navbar** is a **fixed/sticky glassmorphic bar** at the top of every page. It:
- Persists across all scroll positions (z-index: 50)
- Uses a `glass` CSS utility class — backdrop blur + semi-transparent background
- Highlights the **active route** by changing link color from `muted-foreground` → `foreground`
- Collapses to a **hamburger menu** on mobile (< 768px) with animated drawer using Framer Motion `AnimatePresence`
- Contains a persistent **"Book Consultation"** CTA button (pill/rounded shape)

**Desktop Navigation Order:**
```
[Async Logo]    Home  Process  Case Studies  About  Contact  [Book Consultation →]
```

**Mobile Navigation:**
- Hamburger (☰) → tap opens animated slide-down drawer
- Contains all links stacked vertically + Book Consultation button
- Tap any link → closes drawer (`setMobileOpen(false)`)

### Conversion Entry Points
Every page has multiple paths to the contact/booking flow:
1. Navbar "Book Consultation" button → `/contact`
2. Hero "Start Your App Architecture" → `/contact`
3. Hero "Book Consultation" (secondary) → `/contact`
4. FloatingCTA button (fixed bottom-right, appears after 2s) → `/contact`
5. ConsultationPopup (modal, triggers at 40s or 70% scroll depth) → `/contact`
6. Testimonials "Book Your Consultation" → `/contact`
7. Footer links → all pages

---

## 4. Page-by-Page Breakdown

---

### 4.1 Home Page (`/`)

**Purpose:** Primary landing page. Communicates brand identity, services, process, testimonials, and drives consultation bookings.

**Section Stack (top to bottom):**

```
┌─────────────────────────────────┐
│  NAVBAR (fixed, glassmorphic)   │
├─────────────────────────────────┤
│  HERO                           │  ← Full-screen, aurora animated bg
│  "We Build Scalable Flutter     │
│   Apps — The Right Way."        │
│  [Start Architecture] [Book]    │
├─────────────────────────────────┤
│  SERVICES                       │  ← 5-service card grid
│  "Solutions That Scale"         │
│  E-Commerce | Booking | EdTech  │
│  SaaS | AI Integrated           │
├─────────────────────────────────┤
│  PROCESS PHASES                 │  ← 5-card accordion with scroll-anim
│  "5-Phase App Lifecycle"        │
│  Animated timeline line (sunset)│
│  ContainerScroll 3D effect      │
├─────────────────────────────────┤
│  TESTIMONIALS                   │  ← 3-column star-rated cards
│  "What Our Clients Say"         │
│  [Book Your Consultation]       │
├─────────────────────────────────┤
│  FAQ                            │  ← Accordion, 6 questions
│  "Common Questions"             │
├─────────────────────────────────┤
│  FOOTER                         │  ← 4-column footer + social links
├─────────────────────────────────┤
│  FLOATING CTA (fixed)           │  ← Bottom-right, appears at 2s
│  CONSULTATION POPUP (modal)     │  ← Triggers at 40s / 70% scroll
└─────────────────────────────────┘
```

**Hero Section Detail:**
- Background: `AuroraBackground` — animated aurora gradients (sunset orange, pink, amber, coral) with CSS `animate-aurora` keyframe, `blur-[10px]`, opacity 50%
- Headline: Inter Bold, 5xl → 7xl → 8xl responsive. "The Right Way." in `text-sunset` (coral/orange accent)
- Subline: muted-foreground, lg/xl, max-w-2xl centered
- CTA Group: two pill buttons in a flex row
  - Primary: `bg-sunset` fill, white text, ArrowRight icon with `group-hover:translate-x-1`
  - Secondary: `variant="outline"`, pill, "Book Consultation"

**Services Section Detail:**
- 5 cards in a responsive grid (1 → 2 → 3 cols)
- Each card: rounded-2xl, border, `bg-card`, `hover:bg-secondary/50`, `hover:shadow-lg`
- Icon container: `rounded-xl bg-secondary` → on hover transitions to `bg-primary text-primary-foreground`
- Icons: ShoppingCart, Calendar, GraduationCap, LayoutDashboard, Brain (Lucide)

**Process Phases Section Detail:**
- Wrapped in `ContainerScroll` — a 3D scroll-driven perspective transform animation
- Inside the scroll container: a vertical timeline with two layers:
  1. Static track line: `bg-border/50` — full height, 2px wide, absolute positioned
  2. Animated sunset line: `bg-sunset-vertical` gradient, `clipPath` driven by `useScroll` + `useTransform` (reveals from top as user scrolls)
- 5 `PhaseCard` components, alternating left/right stagger on desktop
- Each PhaseCard: click to expand (accordion-style `AnimatePresence` height animation)
- Expanded content: bullet points with `bg-sunset` dot markers, staggered `opacity 0→1` + `x -10→0`

**FAQ Section Detail:**
- Radix UI Accordion (single open at a time, collapsible)
- 6 items, each on a `rounded-xl border bg-card` base
- AccordionTrigger: text-base font-medium, `hover:no-underline`
- Content: `text-muted-foreground leading-relaxed`

---

### 4.2 Process Page (`/process`)

**Current State:** Stub/placeholder  
**Required State:** Full deep-dive into the 5-phase methodology

**Planned Layout:**
```
┌─────────────────────────────────┐
│  NAVBAR                         │
├─────────────────────────────────┤
│  HERO (page hero, no aurora)    │
│  "How We Work"                  │
│  Subtitle explaining structured │
│  methodology                    │
├─────────────────────────────────┤
│  PHASE DEEP-DIVE (x5)           │
│  Full-width phase breakdowns    │
│  with icons, deliverables,      │
│  timelines, and visuals         │
├─────────────────────────────────┤
│  TIMELINE VISUAL                │
│  Interactive / scrollable       │
│  project timeline diagram       │
├─────────────────────────────────┤
│  CTA BANNER                     │
│  "Ready to start?" → /contact   │
├─────────────────────────────────┤
│  FOOTER                         │
└─────────────────────────────────┘
```

---

### 4.3 Case Studies Page (`/case-studies`)

**Current State:** Stub/placeholder  
**Required State:** Portfolio grid with real or sample project case studies

**Planned Layout:**
```
┌─────────────────────────────────┐
│  NAVBAR                         │
├─────────────────────────────────┤
│  PAGE HERO                      │
│  "Work That Speaks"             │
├─────────────────────────────────┤
│  FILTER BAR                     │
│  All | Mobile | SaaS | E-Comm.. │
├─────────────────────────────────┤
│  CASE STUDY CARDS GRID          │
│  3-col on desktop, 1-col mobile │
│  Each card: cover image, title, │
│  client, tech tags, result stat │
├─────────────────────────────────┤
│  FEATURED STUDY (full-width)    │
│  Before/after metrics           │
├─────────────────────────────────┤
│  CTA → Book Consultation        │
├─────────────────────────────────┤
│  FOOTER                         │
└─────────────────────────────────┘
```

**Case Study Card Fields:**
- Project cover image/screenshot
- Client name + industry
- Problem statement (2–3 lines)
- Solution summary
- Key result metric (e.g., "Scaled to 100K users without architecture change")
- Tech tags (Flutter, Firebase, etc.)
- Link to full case study detail page

**Full Case Study Narrative Template** (used by Stripe, Linear, Vercel — founders trust systems more than screenshots):
```
┌─────────────────────────────────┐
│  HERO                           │
│  Client logo + one-line result  │
├─────────────────────────────────┤
│  PROBLEM                        │
│  What was broken before?        │
│  Why their previous approach    │
│  was failing at scale           │
├─────────────────────────────────┤
│  CONSTRAINTS                    │
│  Budget / timeline / technical  │
│  limitations they faced         │
├─────────────────────────────────┤
│  ARCHITECTURE DECISION          │
│  Why Flutter? Why this system?  │
│  Key engineering trade-offs     │
├─────────────────────────────────┤
│  BUILD PROCESS                  │
│  Key engineering moments,       │
│  decisions made mid-project     │
├─────────────────────────────────┤
│  OUTCOME METRICS                │
│  • Users / scale                │
│  • Performance gains            │
│  • Revenue / business impact    │
│  • Deployment numbers           │
├─────────────────────────────────┤
│  VISUALS                        │
│  App screens + system diagram   │
│  (architecture diagram is key — │
│  technical buyers read diagrams │
│  before they read words)        │
└─────────────────────────────────┘
```

---

### 4.4 About Page (`/about`)

**Current State:** Stub/placeholder  
**Required State:** Team, mission, values, studio story, and **founder trust layer**

> **Critical insight:** Early buyers trust people more than company brands. The About page must introduce the founder(s) with a personal narrative — not just a bio. Structure it around: why the problem of bad agency work exists, what the engineering philosophy is, and why Async was built as an answer.

**Planned Layout:**
```
┌─────────────────────────────────┐
│  NAVBAR                         │
├─────────────────────────────────┤
│  PAGE HERO                      │
│  "We Are Async"                 │
├─────────────────────────────────┤
│  MISSION STATEMENT              │
│  Large pull-quote style text    │
├─────────────────────────────────┤
│  VALUES (3-col cards)           │
│  Quality | Transparency | Scale │
├─────────────────────────────────┤
│  TEAM SECTION                   │
│  Avatar cards with roles        │
├─────────────────────────────────┤
│  STUDIO STORY / TIMELINE        │
│  How Async was founded          │
├─────────────────────────────────┤
│  STATS BAR                      │
│  X Apps Built | X Clients | X Years │
├─────────────────────────────────┤
│  CTA → Start a Project          │
├─────────────────────────────────┤
│  FOOTER                         │
└─────────────────────────────────┘
```

---

### 4.5 Contact Page (`/contact`)

**Current State:** Layout complete, form does not submit  
**Required State:** Form submits to API/email service (Formspree/Resend)

**Layout:**
```
┌─────────────────────────────────┐
│  NAVBAR                         │
├─────────────────────────────────┤
│  PAGE HERO                      │
│  "Let's Build Together"         │
├─────────────────────────────────┤
│  2-COLUMN LAYOUT                │
│  Left: 5-Phase Overview Cards   │
│  Right: Contact Form (sticky)   │
│    - Name + Email               │
│    - App Idea textarea          │
│    - Budget + Timeline selects  │
│    - [Send Message →]           │
│    - "Reply within 24 hours"    │
├─────────────────────────────────┤
│  FOOTER                         │
└─────────────────────────────────┘
```

**Form Fields (from `consultationSchema.ts`):**
- Step 1: firstName, lastName, email, phone, company (optional)
- Step 2: appType (dropdown from 15 options), appDescription, budget, timeline, preferredContact
- Step 3: referenceApp1/2/3 (optional), additionalInfo (max 5000 chars)

---

### 4.6 404 Not Found (`*`)

**Layout:** Centered, minimal — 404 message + link back to home. Logs attempted path to console.

---

## 5. Design Language

### 5.1 Color System

All colors are defined as HSL CSS variables in `src/index.css` and consumed via Tailwind.

**Light Mode:**
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `hsl(0 0% 100%)` | Page background (white) |
| `foreground` | `hsl(0 0% 8%)` | Body text (near-black) |
| `card` | `hsl(0 0% 100%)` | Card surfaces |
| `secondary` | `hsl(0 0% 96%)` | Section backgrounds, hover states |
| `muted-foreground` | `hsl(0 0% 45%)` | Subtext, labels, captions |
| `border` | `hsl(0 0% 92%)` | Component borders |
| `accent` | `hsl(220 70% 55%)` | Blue accent, ring focus |

**Dark Mode (`.dark` class):**
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `hsl(0 0% 4%)` | Near-black page bg |
| `card` | `hsl(0 0% 7%)` | Card surfaces (dark) |
| `secondary` | `hsl(0 0% 15%)` | Section alternates (dark) |
| `border` | `hsl(0 0% 18%)` | Dark borders |

**Brand Accent — "Sunset" Gradient:**
| Token | Hex | Usage |
|-------|-----|-------|
| `--sunset-orange` | `#F06B3A` | CTA buttons, dot markers, icons |
| `--sunset-pink` | `#E0337A` | Aurora bg, shadow accent |
| `--amber-warm` | `#F5A623` | Aurora gradient mid-stop |
| `--coral` | `#FF6B6B` | Aurora gradient end|

> The `text-sunset` and `bg-sunset` Tailwind classes reference these values. Sunset is used exclusively for: CTAs, "The Right Way." headline accent, phase number badges, bullet dot markers, star ratings, and the animated timeline line.

---

### 5.2 Typography

**Font Stack:** Inter (Google Fonts) → -apple-system → BlinkMacSystemFont → Segoe UI

| Element | Class | Size | Weight |
|---------|-------|------|--------|
| Hero H1 | `text-5xl md:text-7xl lg:text-8xl` | 48–96px | Bold 700 |
| Page H1 | `text-5xl md:text-6xl` | 48–60px | Bold 700 |
| Section H2 | `text-4xl md:text-5xl` | 36–48px | Bold 700 |
| Card H3 | `text-xl` | 20px | Semibold 600 |
| Body | `text-lg md:text-xl` | 18–20px | Regular 400 |
| Caption/Label | `text-sm tracking-widest uppercase` | 14px | Medium 500 |
| Small | `text-xs` | 12px | Regular 400 |

> All headings use `tracking-tight` (negative letter-spacing) for a premium, editorial feel. Labels and section eyebrows use `tracking-widest uppercase` (wide letter-spacing) for visual hierarchy contrast.

---

### 5.3 Spacing System

- Base padding for sections: `section-padding` custom utility (applied as `@apply` in `index.css`)
- Max content widths: `max-w-7xl` (1280px) for full-width sections, `max-w-4xl` (896px) for text-heavy pages, `max-w-3xl` for FAQ
- Page top padding: `pt-32` (128px) to clear the fixed navbar
- Consistent gap between cards: `gap-6` (24px)
- Internal card padding: `p-8` (32px) standard, `p-6` for compact

---

### 5.4 Border Radius System

Defined via `--radius: 0.75rem` CSS variable:
| Class | Value | Usage |
|-------|-------|-------|
| `rounded-2xl` | 16px | Cards, containers |
| `rounded-xl` | 12px | Phase cards, form inputs |
| `rounded-full` | 9999px | CTA buttons, phase badges |
| `rounded-lg` | `var(--radius)` = 12px | Standard component radius |

---

## 6. UI/UX Flow

### 6.1 Primary Conversion Flow

```
User arrives at /
    │
    ▼
Hero section — reads headline, sees CTA
    │
    ├── [Start Your App Architecture] ──────────────► /contact → fills form
    ├── [Book Consultation]           ──────────────► /contact → fills form
    │
    ▼
Scrolls through Services → sees relevant use case
    │
    ▼
Scrolls through Process Phases → understands methodology (trust building)
    │
    ▼
Testimonials → social proof
    │
    ▼
70% scroll depth OR 40s elapsed → ConsultationPopup appears
    │                                    │
    ▼                                    ▼
FAQ → answers remaining objections   [Book Consultation Call] → /contact
    │
    ▼
Footer → additional navigation
    │
    ▼
FloatingCTA (bottom-right) → always visible shortcut to /contact
```

### 6.2 Contact Form UX Flow

```
/contact
    │
    ▼
Page loads with 2-col layout:
  Left side: 5-Phase process cards (animated stagger, informational)
  Right side: Form card (sticky on scroll)
    │
    ▼
User fills: Name → Email → App Idea → Budget → Timeline
    │
    ▼
[Send Message] button clicked
    │
    ├── [CURRENT] → preventDefault, nothing happens (BUG)
    │
    └── [REQUIRED] → POST to API (Formspree/function)
            │
            ├── Success → toast "We'll be in touch within 24 hours!"
            └── Error   → toast "Something went wrong, please try again."
```

### 6.3 Navbar UX States

| State | Visual |
|-------|--------|
| Default (desktop) | Transparent-to-glass blur bar, muted nav links |
| Active route | That nav link becomes `text-foreground` (full opacity) |
| Hover | Link transitions `text-muted-foreground` → `text-foreground` |
| Mobile closed | Shows hamburger (☰) icon |
| Mobile open | Shows X icon, full-height animated drawer slides down via AnimatePresence |
| Mobile nav link tap | Closes drawer, navigates |

### 6.4 Micro-Interaction Flows

| Interaction | Behavior |
|-------------|----------|
| Hover on Service Card | `bg-card` → `bg-secondary/50`, shadow deepens, icon bg → `bg-primary text-primary-foreground` |
| Click Phase Card | Accordion expands (height: 0 → auto), chevron rotates 180°, bullet points stagger in |
| Click FAQ Item | Radix Accordion slides open/close smoothly |
| Hover on CTA button | ArrowRight icon translates +4px on X axis |
| FloatingCTA appears | Scale 0.8 → 1, opacity 0 → 1, ease out, 2s delay |
| PopupModal | Dialog fades and scales in via Radix Dialog |

---

## 7. Animation Catalogue

All animations use **Framer Motion** unless noted as CSS keyframes.

### 7.1 Page Entry Animations

| Component | Animation | Trigger | Duration |
|-----------|-----------|---------|----------|
| Hero headline div | `opacity: 0, y: 30` → `opacity: 1, y: 0` | On mount | 800ms |
| Hero subtext | `opacity: 0, y: 20` → `opacity: 1, y: 0` | On mount, delay 200ms | 800ms |
| Hero CTA buttons | `opacity: 0, y: 20` → `opacity: 1, y: 0` | On mount, delay 400ms | 800ms |
| Contact page header | `opacity: 0, y: 20` → `opacity: 1, y: 0` | On mount | 600ms |
| Contact left column | `opacity: 0, x: -30` → `opacity: 1, x: 0` | On mount, delay 100ms | 600ms |
| Contact right panel | `opacity: 0, x: 30` → `opacity: 1, x: 0` | On mount, delay 200ms | 600ms |
| Contact phase cards | `opacity: 0, y: 20` → `opacity: 1, y: 0` | Stagger delay 150ms + i*80ms | 400ms |

**Easing Used:**
- Primary: `[0.25, 0.46, 0.45, 0.94]` (ease-out-quart) — feels natural, not mechanical
- Secondary: `"easeInOut"` (Framer preset) — used for accordion expand/collapse

### 7.2 Scroll-Driven Animations

| Component | Animation | Mechanism |
|-----------|-----------|-----------|
| Phase Cards (ProcessPhases) | Slide in from left (even index) or right (odd index), x: ±50 → 0 | `whileInView`, `viewport: { once: true, margin: "-80px" }` |
| Timeline line (sunset colored) | Grows from top to bottom as section scrolls | `useScroll` on section ref, `useTransform` maps scrollYProgress to `clipPath: inset(0 0 100% 0)` → `inset(0 0 0% 0)` |
| ContainerScroll | 3D rotation + scale perspective transform on scroll | Custom component using `useScroll` and CSS `perspective` transforms |

### 7.3 Interactive (User-Triggered) Animations

| Interaction | Animation |
|-------------|-----------|
| Phase Card expand | `height: 0 → "auto"`, `opacity: 0 → 1` via AnimatePresence |
| Phase Card collapse | Reverse — `height: "auto" → 0`, `opacity: 1 → 0` |
| Bullet points stagger in | `x: -10 → 0`, stagger delay `i * 0.08s` each |
| Chevron rotate | `rotate: 0° → 180°` when expanded |
| Mobile menu open | `opacity: 0, height: 0` → `opacity: 1, height: "auto"` |
| Mobile menu close | Reverse via AnimatePresence exit |
| FloatingCTA entrance | `scale: 0.8, opacity: 0` → `scale: 1, opacity: 1`, delay 2s |

### 7.4 CSS Keyframe Animations (not Framer Motion)

| Animation | Keyframe Name | Usage |
|-----------|---------------|-------|
| Aurora background | `aurora` | `animate-aurora` class on AuroraBackground gradient div |
| Fade in | `fade-in` | `animate-fade-in` utility class |
| Scale in | `scale-in` | `animate-scale-in` utility class |
| Slide in right | `slide-in-right` | `animate-slide-in-right` utility class |
| Accordion open | `accordion-down` | Radix Accordion height transition |
| Accordion close | `accordion-up` | Radix Accordion height transition |

---

## 8. Glassy Effect Design System

> **Directive:** All primary CTA buttons should adopt a **glassmorphism** effect while retaining the sunset brand color identity.

### 8.1 Current Glass Utility (Navbar)

The `glass` class is currently used only on the Navbar. It provides:
```css
/* Conceptual glass effect */
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.7);  /* light mode */
background: rgba(0, 0, 0, 0.5);         /* dark mode */
border-bottom: 1px solid rgba(255,255,255,0.2);
```

### 8.2 Glassy Button Spec

New `glass-button` variant to be added to the design system:

```
Visual Recipe:
─────────────────────────────────────────────────────
Background:  rgba(240, 107, 58, 0.15)   ← sunset at 15% opacity
             + backdrop-filter: blur(8px)
Border:      1px solid rgba(240, 107, 58, 0.4)  ← sunset border at 40%
Text:        rgba(240, 107, 58, 1)  OR  white (depends on bg context)
Shadow:      0 4px 30px rgba(240, 107, 58, 0.15)
Border Radius: pill (rounded-full)

Hover State:
Background:  rgba(240, 107, 58, 0.25)   ← deepens on hover
Shadow:      0 8px 40px rgba(240, 107, 58, 0.3)   ← glow intensifies
Transform:   scale(1.02)

Active State:
Transform:   scale(0.98)
─────────────────────────────────────────────────────
```

**Where to Apply Glass Buttons:**
| Button | Location |
|--------|----------|
| "Start Your App Architecture" | Hero section |
| "Book Consultation" (hero secondary) | Hero section |
| "Book Consultation" | Navbar (desktop + mobile) |
| "Book Consultation" | FloatingCTA |
| "Book Consultation Call" | ConsultationPopup |
| "Send Message" | Contact form |
| "Book Your Consultation" | Testimonials section |

### 8.3 Glass Card Variant

Secondary cards (Phase cards on hover, Testimonial cards, FAQ items) can adopt a subtle frost-glass effect:
```
Background:  rgba(255, 255, 255, 0.05)   ← ultra-light frosted bg
backdrop-filter: blur(4px)
Border:      1px solid rgba(255, 255, 255, 0.1)
```
> This effect is most visible on dark mode or on top of the aurora background.

---

## 9. Component Index

| Component | File | Type | Status |
|-----------|------|------|--------|
| `<App />` | `src/App.tsx` | Root/Routing | Complete |
| `<Navbar />` | `src/components/Navbar.tsx` | Layout | Complete |
| `<Hero />` | `src/components/Hero.tsx` | Section | Complete |
| `<Services />` | `src/components/Services.tsx` | Section | Complete |
| `<ProcessPhases />` | `src/components/ProcessPhases.tsx` | Section | Complete |
| `<Testimonials />` | `src/components/Testimonials.tsx` | Section | Complete |
| `<FAQ />` | `src/components/FAQ.tsx` | Section | Complete |
| `<Footer />` | `src/components/Footer.tsx` | Layout | Complete |
| `<FloatingCTA />` | `src/components/FloatingCTA.tsx` | Overlay | Complete |
| `<ConsultationPopup />` | `src/components/ConsultationPopup.tsx` | Modal | Complete (logic) |
| `<NavLink />` | `src/components/NavLink.tsx` | Utility | Complete |
| `<AuroraBackground />` | `src/components/ui/aurora-background.tsx` | UI | Complete |
| `<ContainerScroll />` | `src/components/ui/container-scroll-animation.tsx` | UI | Complete |
| `Index` page | `src/pages/Index.tsx` | Page | Complete |
| `Process` page | `src/pages/Process.tsx` | Page | **Placeholder** |
| `CaseStudies` page | `src/pages/CaseStudies.tsx` | Page | **Placeholder** |
| `About` page | `src/pages/About.tsx` | Page | **Placeholder** |
| `Contact` page | `src/pages/Contact.tsx` | Page | **Form incomplete** |
| `NotFound` page | `src/pages/NotFound.tsx` | Page | Complete |

---

## 10. Task List — Implementation Roadmap

### PHASE 1 — Critical Fixes (Blocker for Production)
> These block the site from being usable in a production context.

- [ ] **TASK-01** — `index.html` SEO: Replace Lovable placeholder title with "Async — Flutter Development Studio"
- [ ] **TASK-02** — `index.html` SEO: Fill `og:title`, `og:description`, `twitter:site`, `twitter:image` meta tags with correct Async branding
- [ ] **TASK-03** — Contact form submission: Connect to Formspree (or Resend) and wire `onSubmit` with real API call
- [ ] **TASK-04** — Contact form: Add success toast ("We'll be in touch within 24h") and error toast on failure
- [ ] **TASK-05** — Add React Error Boundary: Wrap `<App />` root with fallback UI to prevent blank screens on crashes

---

### PHASE 2 — Design System & Glass Effect
> Implement the glassmorphic button system across all CTAs.

- [ ] **TASK-06** — Add `glass-button` variant to shadcn button component (`src/components/ui/button.tsx`)
- [ ] **TASK-07** — Apply glass-button to Hero CTA: "Start Your App Architecture"
- [ ] **TASK-08** — Apply glass-button to Hero secondary: "Book Consultation"
- [ ] **TASK-09** — Apply glass-button to Navbar "Book Consultation" (desktop + mobile)
- [ ] **TASK-10** — Apply glass-button to FloatingCTA
- [ ] **TASK-11** — Apply glass-button to ConsultationPopup "Book Consultation Call"
- [ ] **TASK-12** — Apply glass-button to Contact form "Send Message"
- [ ] **TASK-13** — Apply glass-button to Testimonials "Book Your Consultation"
- [ ] **TASK-14** — Add hover glow pulse animation to all glass buttons (subtle `box-shadow` transition)

---

### PHASE 3 — Placeholder Pages (Content Completion)
> Build out the three stub pages with real layouts and content.

- [ ] **TASK-15** — Process page: Build 5-phase deep-dive layout (full width phase sections, deliverables, interactive timeline)
- [ ] **TASK-16** — Process page: Add animated timeline visual showing project lifecycle
- [ ] **TASK-17** — Process page: Add CTA banner at bottom linking to `/contact`
- [ ] **TASK-18** — Case Studies page: Build filter bar (All / Mobile / SaaS / E-Comm / EdTech)
- [ ] **TASK-19** — Case Studies page: Build case study card component with cover image, title, metric, and tech tags
- [ ] **TASK-20** — Case Studies page: Add 3 sample case studies (TechVentures, BookEasy, EduFlow — from testimonials data)
- [ ] **TASK-21** — Case Studies page: Add full-width featured case study section
- [ ] **TASK-22** — About page: Build mission statement section with large pull-quote display text
- [ ] **TASK-23** — About page: Build values 3-col cards (Quality, Transparency, Scale)
- [ ] **TASK-24** — About page: Build team section with avatar cards and roles
- [ ] **TASK-25** — About page: Build stats bar (X Apps Built / X Clients / X Years)
- [ ] **TASK-26** — About page: Add CTA at bottom to `/contact`

---

### PHASE 4 — TypeScript Tightening
> Reduce type unsafety and enable strict checking.

- [ ] **TASK-27** — `tsconfig.app.json`: Enable `"noImplicitAny": true`
- [ ] **TASK-28** — `tsconfig.app.json`: Enable `"noUnusedLocals": true`
- [ ] **TASK-29** — `tsconfig.app.json`: Enable `"noUnusedParameters": true`
- [ ] **TASK-30** — Fix all TypeScript errors surfaced by enabling strict settings
- [ ] **TASK-31** — Replace `string` types on form selects with proper union types from `consultationSchema.ts` constants (use `typeof APP_TYPES[number]['value']` etc.)
- [ ] **TASK-32** — Add `ErrorBoundary` TypeScript interface for fallback props

---

### PHASE 5 — Dependency Cleanup
> Remove bloat and reduce bundle size.

- [ ] **TASK-33** — Remove `recharts` from `package.json` (unused, ~500KB)
- [ ] **TASK-34** — Remove `embla-carousel-react` from `package.json` (unused)
- [ ] **TASK-35** — Remove `react-resizable-panels` from `package.json` (unused)
- [ ] **TASK-36** — Audit remaining unused `src/components/ui/` files and remove any not imported by the app
- [ ] **TASK-37** — Run `bun install` / `npm install` after cleanup to regenerate lock file
- [ ] **TASK-38** — Verify build succeeds after cleanup with `bun run build`

---

### PHASE 6 — Testing
> Write minimum viable test coverage for key flows.

- [ ] **TASK-39** — Write unit tests for `src/lib/utils.ts` (`cn()` function)
- [ ] **TASK-40** — Write unit tests for `src/lib/consultationSchema.ts` (Zod validation — valid/invalid inputs)
- [ ] **TASK-41** — Write component test for `<ConsultationPopup />` (renders, closes, sessionStorage)
- [ ] **TASK-42** — Write component test for `<FAQ />` (accordion toggle behavior)
- [ ] **TASK-43** — Write component test for `<Navbar />` (renders links, mobile menu toggle)
- [ ] **TASK-44** — Write integration test for Contact form (submit success + error states)
- [ ] **TASK-45** — Write snapshot tests for `<Hero />` and `<Services />` (regression prevention)
- [ ] **TASK-46** — Configure coverage thresholds in `vitest.config.ts` (target: 60% coverage overall)

---

### PHASE 7 — Dark Mode & Theme Toggle
> Wire up the existing dark mode configuration to a user-facing toggle.

- [ ] **TASK-47** — Add theme toggle button to Navbar (moon/sun icon using `next-themes` `useTheme`)
- [ ] **TASK-48** — Verify all components render correctly in dark mode (glass effects, aurora, cards)
- [ ] **TASK-49** — Persist theme preference in localStorage (handled by `next-themes` automatically)

---

### PHASE 8 — Performance & SEO (Polish)
> Pre-production hardening.

- [ ] **TASK-50** — Add `robots.txt` improvements (currently minimal at `public/robots.txt`)
- [ ] **TASK-51** — Add `sitemap.xml` at `public/sitemap.xml` listing all 5 routes
- [ ] **TASK-52** — Add `rel="preconnect"` for Google Fonts in `index.html` for LCP optimization
- [ ] **TASK-53** — Audit Framer Motion imports — switch to `framer-motion/dist/framer-motion` tree-shaking or use `m` component alias
- [ ] **TASK-54** — Add `loading="lazy"` to any `<img>` tags added in Case Studies / About
- [ ] **TASK-55** — Verify Lighthouse score > 85 on mobile and desktop after all tasks complete

---

### PHASE 9 — Conversion Intelligence
> Lead qualification funnel, exit-intent recovery, and analytics tracking.

- [ ] **TASK-56** — Replace single-step Contact form with a **multi-step 4-step intake funnel**: Step 1 (App Type) → Step 2 (Budget) → Step 3 (Timeline) → Step 4 (Describe Idea + Name/Email). Show step progress indicator.
- [ ] **TASK-57** — Store intake form responses in Supabase (or forward to CRM via webhook — HubSpot free tier / Notion API). Every submission should be persisted and queryable.
- [ ] **TASK-58** — Add **exit-intent modal**: listen for `mouseleave` event when cursor crosses the top of the viewport (`clientY < 5px`) → trigger ConsultationPopup. Store dismissal in `sessionStorage` to avoid re-triggering. (Exit intent converts ~15–22% vs scroll-depth at ~4%.)
- [ ] **TASK-59** — Add analytics instrumentation with **PostHog** (open-source, self-hostable) or **Plausible** (privacy-first). Install SDK, wrap app, begin event capture.
- [ ] **TASK-60** — Define and fire these conversion events: `CTA_CLICK` (source: hero/nav/floating/popup), `PROCESS_SCROLL_70` (scroll depth milestone), `CONTACT_FORM_START` (first field focus), `CONTACT_FORM_SUBMIT` (success/error), `POPUP_DISMISSED`, `EXIT_INTENT_TRIGGERED`
- [ ] **TASK-61** — Add **Microsoft Clarity** (free) or Hotjar session recording + heatmap. Used to identify UI friction points in the contact form and hero CTA.

---

### PHASE 10 — Trust, Pricing & Narrative
> Human trust signals, pricing anchors, technology credibility, and editorial narrative.

- [ ] **TASK-62** — Add **founder narrative section** to About page: three sub-sections — (1) “Why Async Exists” (problem with agencies today), (2) “Our Engineering Philosophy” (structured > fast), (3) a short personal founder statement with photo. Human face = trust.
- [ ] **TASK-63** — Add **pricing anchor section** (not fixed pricing) to either Home or a `/pricing` route. Show three tiers with typical ranges: Prototype Apps ($8k–$15k), Startup MVPs ($20k–$60k), Full Platforms ($60k+). Include a “Get Exact Estimate” CTA. This filters unrealistic clients and reduces sales friction.
- [ ] **TASK-64** — Add **“Built With” technology trust strip** to Home page (between Services and Process sections). Display tech logos/icons: Flutter, Dart, Firebase, PostgreSQL, Cloud Run, Stripe, Supabase, GitHub Actions. Framed as authority signals, not a feature list.
- [ ] **TASK-65** — Add **system architecture diagram** to each Case Study (shows API layer, data flow, authentication, deployment). Use simple inline SVG or a Mermaid.js diagram. CTOs and tech leads read diagrams before they read words.
- [ ] **TASK-66** — Insert **3 editorial narrative blocks** between major Home page sections. These are short, single-sentence tension-builders — not headings, not CTAs. Pattern:
  - Before Services: *“Most apps fail before they scale. Not because of bad ideas. Because of bad architecture.”*
  - Before Process: *“Building fast and building right are not the same thing.”*
  - Before Testimonials: *“The difference between a $20k app and a $200k rebuild is a structured process.”*
- [ ] **TASK-67** — Build **interactive “Estimate Your App Architecture” mini-tool** (live on Home or `/contact`): user selects app type (e.g., marketplace), key features (auth, payments, real-time chat), and scale target (100 users / 10K users / 100K users) → tool generates a rough system diagram + complexity tier label (Prototype / MVP / Platform) + estimated phase count. Turns curiosity into commitment.

---

### PHASE 11 — SEO Content Infrastructure
> Long-term organic traffic from founders searching Google for answers.

- [ ] **TASK-68** — Create `/blog` route with blog infrastructure: index page (card grid of articles) + article detail template page. Use static MDX or a simple JSON-driven approach (no CMS required for initial version).
- [ ] **TASK-69** — Publish 3 seed articles targeting high-intent founder search queries:
  1. *“Flutter vs React Native in 2026 — The Honest Breakdown”*
  2. *“How Much Does a Flutter App Cost? A Founder’s Guide”*
  3. *“Flutter App Architecture Guide: How to Structure a Scalable Mobile App”*
- [ ] **TASK-70** — Update `public/sitemap.xml` with blog page entries; update `public/robots.txt` to reference sitemap URL. Add canonical tags to all pages.

---

### PHASE 12 — Performance Budget
> Define and enforce hard limits so the animation-heavy site doesn’t degrade.

- [ ] **TASK-71** — Define and document performance budget in `PRD.md` and `vite.config.ts` build warnings:
  - JS bundle (gzipped) < 200KB
  - Largest Contentful Paint (LCP) < 2.5s on 4G mobile
  - Animation frame rate ≥ 60fps (16ms frame budget)
  - Time to Interactive (TTI) < 4s
- [ ] **TASK-72** — Add bundle size check to build pipeline: use Vite’s `build.chunkSizeWarningLimit` setting and add a `bundlesize` script that fails CI if the limit is exceeded.
- [ ] **TASK-73** — Profile `AuroraBackground` and `ContainerScroll` on mid-range Android (Chrome DevTools Performance panel, CPU 4x slowdown throttle). Optimize: reduce blur radius on mobile via media query, reduce aurora gradient layers on `prefers-reduced-motion`.

---

## Summary Table

| Phase | # Tasks | Priority | Status |
|-------|---------|----------|---------|
| Phase 1 — Critical Fixes | 5 | 🔴 Blocker | Not started |
| Phase 2 — Glass Effect System | 9 | 🟠 High | Not started |
| Phase 3 — Placeholder Pages | 12 | 🟠 High | Not started |
| Phase 4 — TypeScript | 6 | 🟡 Medium | Not started |
| Phase 5 — Dependency Cleanup | 6 | 🟡 Medium | Not started |
| Phase 6 — Testing | 8 | 🟡 Medium | Not started |
| Phase 7 — Dark Mode | 3 | 🟢 Low | Not started |
| Phase 8 — Performance/SEO | 6 | 🟢 Low | Not started |
| Phase 9 — Conversion Intelligence | 6 | 🟠 High | Not started |
| Phase 10 — Trust, Pricing & Narrative | 6 | 🟠 High | Not started |
| Phase 11 — SEO Content Infrastructure | 3 | 🟢 Low | Not started |
| Phase 12 — Performance Budget | 3 | 🟡 Medium | Not started |
| **Total** | **73 tasks** | | **0/73 complete** |

---

*This PRD is the single source of truth for the Async Labs website. All development work should reference the task numbers (TASK-XX) in commit messages and PR descriptions.*

---

## 11. Structural Blind Spots & Missing Systems

> These are not mistakes in the original design. They are **missing systems** that will matter the moment real traffic arrives. Systems break where assumptions hide. The 10 blind spots below each target one of four conversion blockers: **uncertainty, risk, confusion, or cognitive load**.

---

### 11.1 No Lead Qualification Layer

**Problem:** Every CTA currently sends all visitors directly to the contact form with no filtering. This creates two compounding issues:
- You receive **low-intent leads** who aren't ready to buy
- Sales calls become **time filters** instead of deal conversations

**Root Cause:** A single form doesn't distinguish between a founder with $50k ready to spend and a student curious about app development.

**Solution — 4-Step Intake Funnel:**
```
Step 1: What are you building?
   ○ Startup product / new app idea
   ○ Internal business tool
   ○ Marketplace or on-demand platform
   ○ Mobile extension of an existing service

Step 2: Budget range?
   ○ Under $10k
   ○ $10k – $30k
   ○ $30k – $75k
   ○ $75k+

Step 3: Timeline?
   ○ ASAP (< 1 month)
   ○ 1 – 3 months
   ○ 3 – 6 months
   ○ No hard deadline

Step 4: Describe your idea + name + email
```

This turns the submission into **pre-sales intelligence**. Sales calls start with context, not discovery.

**Tasks:** TASK-56, TASK-57

---

### 11.2 Case Studies Lack Narrative Persuasion

**Problem:** The case study page structure is grid-correct but not persuasion-correct. A portfolio without a story is just a list of logos.

**Root Cause:** Screenshots and client names don't explain *why* the project succeeded. Technical buyers (CTOs, engineering leads) need systems evidence, not aesthetic evidence.

**Solution:** Each case study follows the narrative arc used by Stripe, Linear, and Vercel:

```
Problem → Constraints → Architecture Decision → Build Process → Outcome Metrics → System Diagram
```

The **system architecture diagram** is the highest-trust element for technical buyers. A diagram communicates:
- You understand infrastructure, not just UI
- The system was designed, not just coded
- The client's data flows through a thought-out structure

**Tasks:** TASK-65 (architecture diagrams per case study)

---

### 11.3 No Founder Trust Layer

**Problem:** Async appears as a faceless studio brand. In the early stages of an agency, buyers aren't buying the company — they're buying the **person** behind it.

**Root Cause:** The About page has a placeholder layout but no human element. Company descriptions don't convert; personal conviction does.

**Solution — Founder Narrative Structure:**
```
Why Async Exists
└── The problem: agencies optimize for billing, not architecture
└── The moment that created conviction

Engineering Philosophy
└── "We treat architecture like infrastructure, not afterthought"
└── 3 principles that guide every project decision

Personal Credibility
└── Founder photo + short personal bio
└── Specific past experience (not generic)
└── Direct email / LinkedIn — signals accessibility
```

**Tasks:** TASK-62

---

### 11.4 Zero Pricing Psychology

**Problem:** The site avoids pricing entirely. This creates a specific anxiety in buyers:

> "Is this $2k or $200k? I don't want to get on a call and be embarrassed by my budget."

**Root Cause:** Agencies avoid pricing to keep optionality. But the cost is high: qualified leads self-disqualify because they don't know if they can afford the service.

**Solution — Pricing Anchors (not fixed prices):**
```
┌────────────────────────────────────────────┐
│  What does a Flutter project typically     │
│  cost with Async?                          │
│                                            │
│  PROTOTYPE APPS      $8,000 – $15,000      │
│  Core flows, 1 platform, no backend        │
│                                            │
│  STARTUP MVPs        $20,000 – $60,000     │
│  Full auth, API, 2 platforms, cloud deploy │
│                                            │
│  FULL PLATFORMS      $60,000+              │
│  Enterprise scale, full infra, multi-team  │
│                                            │
│  [Get Exact Estimate →]                    │
└────────────────────────────────────────────┘
```

This filters unrealistic clients before the call. It also makes the $20k–$60k range feel _reasonable_ simply because a higher anchor ($60k+) exists.

**Tasks:** TASK-63

---

### 11.5 Missing Technology Trust Signals

**Problem:** The site tells visitors _what_ Async builds (apps) but not _with what_ or _at what scale_. Trust in a technical service provider is partly built through recognition of known-quality tools.

**Root Cause:** No technology stack summary is visible anywhere on the site.

**Solution — "Built With" Trust Strip:**
A horizontal logo strip placed prominently on the home page (between Services and Process):

```
Flutter  ·  Dart  ·  Firebase  ·  PostgreSQL  ·  Cloud Run  ·  Stripe  ·  Supabase  ·  GitHub Actions
```

**Framing matters:** Don't label it "Technologies We Use." Label it:
> "Every project is built on production-grade infrastructure."

This signals authority without self-congratulation.

**Tasks:** TASK-64

---

### 11.6 Weak Exit-Intent Recovery

**Problem:** The current popup triggers on time (40s) or scroll depth (70%). Both are passive signals — the user may simply be reading.

**Root Cause:** The highest-value trigger — exit intent — is missing. A user moving their cursor toward the browser close button or back button is showing the clearest signal of departure.

**Conversion rate comparison:**
| Trigger | Typical Conversion Rate |
|---------|------------------------|
| Time-based (40s) | 2 – 4% |
| Scroll-depth (70%) | 3 – 5% |
| Exit intent (cursor leaves top) | 10 – 22% |

**Solution:**
```typescript
// Detect cursor leaving viewport from the top
document.addEventListener('mouseleave', (e) => {
  if (e.clientY < 5 && !sessionStorage.getItem('popup-dismissed')) {
    triggerConsultationModal();
  }
});
```

Single `sessionStorage` flag prevents repeat triggers in the same session.

**Tasks:** TASK-58

---

### 11.7 No Analytics Intelligence Layer

**Problem:** Without event tracking, the site is a black box. You cannot answer: Which CTA converts best? Where do users drop off in the form? Does the mobile menu get used?

**Root Cause:** React Query is configured but no analytics or event tracking is wired.

**Solution — Event Taxonomy:**
```
┌─────────────────────────────────────────────────┐
│  AWARENESS EVENTS                               │
│  page_view (auto)                               │
│  scroll_depth_50, scroll_depth_70, scroll_depth_90│
│                                                 │
│  INTENT EVENTS                                  │
│  cta_click { source: hero | nav | floating |    │
│              popup | testimonials }             │
│  process_phase_expanded { phase: 1–5 }          │
│  faq_opened { question_index: 0–5 }             │
│                                                 │
│  CONVERSION EVENTS                              │
│  contact_form_start                             │
│  contact_form_step_complete { step: 1–4 }       │
│  contact_form_submit { success: true | false }  │
│                                                 │
│  DROP-OFF EVENTS                                │
│  popup_dismissed                                │
│  exit_intent_triggered                          │
│  exit_intent_dismissed                          │
└─────────────────────────────────────────────────┘
```

**Recommended Tools:**
- **PostHog** — open-source, self-hostable, free tier. Captures events, funnels, session replays.
- **Plausible** — privacy-first, GDPR-compliant, simple dashboard. Good for traffic metrics.
- **Microsoft Clarity** — free, session recording + heatmaps, no sampling.

**Tasks:** TASK-59, TASK-60, TASK-61

---

### 11.8 Missing Editorial Design Layer

**Problem:** The site explains *what* Async does and *how* they do it. But it doesn't communicate the *stakes* — why choosing the wrong approach is costly.

**Root Cause:** Every section immediately shows features or process. There are no narrative tension moments between sections to create emotional engagement.

**The Pattern (used by Apple, Stripe, Linear, Vercel):**
```
Strong claim → Evidence (feature/process section) → Implication
```

Current flow:
```
Hero → Services → Process → Testimonials
```

With editorial narrative blocks:
```
Hero
 ↓
[ "Most apps fail before they scale. Not because of bad ideas.
   Because of bad architecture." ]
 ↓
Services
 ↓
[ "Building fast and building right are not the same thing.
   The difference is a structured process." ]
 ↓
Process
 ↓
[ "The difference between a $20k app and a $200k rebuild
   is the decisions made in the first two weeks." ]
 ↓
Testimonials
```

These narrative blocks should be visually minimal — large centered type, no cards, no icons. The content does the work.

**Tasks:** TASK-66

---

### 11.9 No SEO Content Infrastructure

**Problem:** The site is a marketing brochure. All traffic must be paid for or directly referred. There is no organic growth mechanism.

**Root Cause:** No blog, no educational content, no long-tail keyword targeting.

**The Opportunity:** Founders and CTOs actively search Google for:
- "Flutter vs React Native 2026"
- "How much does a Flutter app cost"
- "Flutter app architecture best practices"
- "Should I use Flutter for my startup"

These are **high-intent, pre-purchase queries.** An article ranking on page 1 for any of those is always-on lead generation.

**Recommended Article Architecture:**
```
/blog
├── /flutter-vs-react-native-2026         (comparison, high volume)
├── /how-much-does-a-flutter-app-cost     (pricing intent, high conversion)
└── /flutter-app-architecture-guide       (technical depth, CTO trust)
```

Each article ends with: "Want us to architect your app? [Book a free consultation →]"

**Tasks:** TASK-68, TASK-69, TASK-70

---

### 11.10 No Performance Budget

**Problem:** Animation-heavy sites degrade silently. The aurora background, ContainerScroll 3D transform, and Framer Motion enter animations are all GPU-demanding. Without hard limits, a mid-range Android device can easily drop to 30fps or have a 4s+ Time to Interactive.

**Root Cause:** No performance budget is defined. No CI check enforces bundle size. No mobile audit has been run.

**Defined Performance Budget:**
```
┌────────────────────────────────────────────────┐
│  METRIC                    TARGET               │
│  ─────────────────────────────────────────────│
│  JS Bundle (gzipped)       < 200 KB             │
│  Largest Contentful Paint  < 2.5s (4G mobile)   │
│  Time to Interactive (TTI) < 4.0s (4G mobile)  │
│  Animation frame rate      ≥ 60fps              │
│  Frame budget              ≤ 16ms               │
│  Aurora blur on mobile     Reduced (≤ blur(4px))│
│  prefers-reduced-motion    Fully respected       │
└────────────────────────────────────────────────┘
```

**Worst offenders to audit first:**
1. `AuroraBackground` — multiple `blur()` filters + `mix-blend-difference` on every frame
2. `ContainerScroll` — 3D CSS transforms on scroll, expensive composite layer
3. Framer Motion bundles — ensure tree-shaking is working, not importing entire library

**Tasks:** TASK-71, TASK-72, TASK-73

---

### 11.11 Bonus Feature: Interactive App Architecture Estimator

> This is the single highest-leverage feature not in the original PRD.

**What it is:** A small interactive tool where a visitor answers 3 questions and receives a personalized rough system diagram + project complexity tier.

```
Question 1: What type of app?
   ○ E-commerce marketplace
   ○ Booking / scheduling platform
   ○ SaaS dashboard
   ○ Social / community app
   ○ EdTech platform
   ○ FinTech / payments

Question 2: Key features? (multi-select)
   ☐ User authentication
   ☐ Real-time data (chat, live updates)
   ☐ Payments (Stripe / in-app purchase)
   ☐ Push notifications
   ☐ Admin dashboard
   ☐ AI/ML features
   ☐ Offline mode

Question 3: Scale target?
   ○ Up to 1,000 users (early MVP)
   ○ 1,000 – 50,000 users (growth stage)
   ○ 50,000+ users (scale-ready)
```

**Output — auto-generated:**
```
┌──────────────────────────────────────────────┐
│  Your App: Booking Platform (Growth Stage)   │
│  Complexity: MVP → Platform                  │
│                                              │
│  [System Diagram — auto-generated SVG]       │
│  Client (Flutter) → API (Cloud Run)          │
│  → DB (PostgreSQL) + Auth (Firebase)         │
│  → Payments (Stripe) + Notifications (FCM)   │
│                                              │
│  Estimated Build:  Phase 1–4  (~14 weeks)    │
│  Estimated Range:  $35,000 – $55,000         │
│                                              │
│  [Get Exact Proposal →]  (links to /contact) │
└──────────────────────────────────────────────┘
```

**Why this converts:** It transforms passive browsing into active participation. The user invests 60 seconds filling in the tool, which creates **commitment bias** — they're now more likely to follow through with the consultation because they've already started the process.

**Tasks:** TASK-67

---

### Summary of Blind Spots

| # | Blind Spot | Conversion Blocker Addressed | Tasks |
|---|-----------|------------------------------|-------|
| 1 | No lead qualification layer | Cognitive load (wrong audience) | 56, 57 |
| 2 | Case studies lack narrative | Risk (no system evidence) | 65 |
| 3 | No founder trust layer | Uncertainty (who are these people?) | 62 |
| 4 | Zero pricing psychology | Uncertainty (can I afford this?) | 63 |
| 5 | Missing tech trust signals | Risk (are they production-grade?) | 64 |
| 6 | Weak exit-intent recovery | Cognitive load (passive trigger) | 58 |
| 7 | No analytics layer | Confusion (no data to improve) | 59, 60, 61 |
| 8 | Missing editorial narrative | Cognitive load (no emotional hook) | 66 |
| 9 | No SEO infrastructure | Uncertainty (no organic discovery) | 68, 69, 70 |
| 10 | No performance budget | Risk (broken on mobile) | 71, 72, 73 |
| + | Interactive architecture estimator | All four (commitment bias trigger) | 67 |

---

*This PRD is the single source of truth for the Async Labs website. All development work should reference the task numbers (TASK-XX) in commit messages and PR descriptions.*

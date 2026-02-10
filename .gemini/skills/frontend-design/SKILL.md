---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with exceptional design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

# Frontend Design

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with extraordinary attention to aesthetic details, technical precision, and creative vision.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Phase 1: Design Thinking (Before ANY Code)

Before writing a single line, spend real thought on these dimensions:

### Context Analysis
- **Purpose**: What problem does this interface solve? Who uses it? What's the emotional state of the user when they arrive?
- **Content hierarchy**: What's the ONE thing the user must see/do first? What's secondary? What's tertiary?
- **Device context**: Is this primarily mobile, desktop, or truly both? What's the likely environment (office, commute, couch)?

### Aesthetic Direction
Pick a BOLD, specific aesthetic — not a vague mood. Commit fully. Examples for inspiration (mix, mutate, invent your own):

| Direction | Characteristics | When to use |
|-----------|----------------|-------------|
| Brutalist/Raw | Exposed structure, system fonts used intentionally, harsh borders, no decoration | Developer tools, edgy brands, anti-establishment |
| Neo-Editorial | Magazine-quality typography, dramatic whitespace, column-based layouts, pull quotes | Content-heavy sites, luxury, publishing |
| Organic/Biomorphic | Fluid shapes, natural color palettes, soft gradients, blob morphs | Wellness, eco, creative agencies |
| Retro-Digital | Pixel aesthetics, CRT effects, monospace type, terminal green | Gaming, nostalgia, tech-forward irony |
| Swiss/International | Grid perfection, Helvetica-adjacent type, primary colors, mathematical spacing | Corporate, data-heavy, institutions |
| Art Deco Revival | Geometric patterns, gold accents, symmetry, ornamental borders | Luxury, events, premium products |
| Soft UI / Claymorphism | Pillow-like surfaces, subtle inner shadows, muted pastels, rounded everything | Consumer apps, friendly tools |
| Industrial/Utilitarian | Exposed grid, monospace, warning colors, functional-first | Dashboards, admin panels, monitoring |
| Maximalist Chaos | Layered elements, mixed media, clashing fonts (intentionally), overflow, collage | Art, music, youth culture, experimental |
| Dark Luxury | Deep blacks, metallic accents, hairline borders, restrained animation | Premium products, fintech, high-end SaaS |

**The test**: If you can't describe your aesthetic direction in one evocative sentence, you haven't committed enough. "Clean and modern" is NOT a direction. "Japanese zen garden meets Swiss engineering" IS.

### Differentiation Checkpoint
Ask yourself: **If someone saw this for 3 seconds, what would they remember?** If the answer is "nothing" — start over. Every interface needs ONE memorable element: a signature animation, an unexpected layout choice, a distinctive color, an unusual interaction pattern.

## Phase 2: Design System Foundation

Before building components, establish the DNA of the interface.

### Typography System

**Font Selection & Loading**
- Load from Google Fonts (`https://fonts.googleapis.com`) or use variable fonts for performance
- ALWAYS pair fonts intentionally: one display/heading + one body/reading font minimum
- For React artifacts: use ` @import` in a style tag or inline `<link>` in the component

**BANNED generic choices** (these scream "AI generated"):
Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, Nunito, Raleway, Source Sans Pro, Arial, Helvetica (unless doing intentional Swiss style)

**RECOMMENDED distinctive choices** (rotate — never default to the same ones):

*Display/Headings (pick ONE per project, vary between projects):*
- Dramatic serifs: Playfair Display, Cormorant Garamond, Libre Baskerville, DM Serif Display, Fraunces, Bodoni Moda
- Modern sans: Syne, Outfit, Urbanist, General Sans (via CDN), Satoshi (via CDN), Cabinet Grotesk, Plus Jakarta Sans, Instrument Sans
- Character fonts: Archivo Black, Bebas Neue, Oswald, Barlow Condensed, Big Shoulders Display
- Experimental: Space Mono, JetBrains Mono (for tech), Instrument Serif, Bricolage Grotesque, Familjen Grotesk
- Elegant: Cormorant, Tenor Sans, Spectral, Crimson Pro

*Body/Reading (pick ONE per project):*
- Clean reading: Source Serif 4, Literata, Newsreader, Lora, Merriweather
- Modern body: DM Sans, Albert Sans, Figtree, Geist (via CDN), Wix Madefor Text
- Neutral but distinctive: IBM Plex Sans, Manrope, Rubik, Karla, Overpass

**Fluid Typography Scale**
Use `clamp()` for responsive sizing without breakpoints:
```css
:root {
  --text-xs: clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem);
  --text-sm: clamp(0.8rem, 0.74rem + 0.3vw, 0.95rem);
  --text-base: clamp(0.95rem, 0.87rem + 0.4vw, 1.15rem);
  --text-lg: clamp(1.1rem, 0.95rem + 0.75vw, 1.5rem);
  --text-xl: clamp(1.35rem, 1.1rem + 1.25vw, 2rem);
  --text-2xl: clamp(1.7rem, 1.2rem + 2.5vw, 3rem);
  --text-3xl: clamp(2.2rem, 1.4rem + 4vw, 4.5rem);
  --text-hero: clamp(2.8rem, 1.5rem + 6.5vw, 7rem);
}
```

**Vertical Rhythm**: Maintain consistent line-height relationships. Body text: 1.5-1.7. Headings: 1.0-1.2. Set `margin-bottom` on text elements as multiples of base line-height.

**Letter-spacing**: Tighten headings (especially large ones): `-0.02em` to `-0.04em`. Uppercase text needs MORE spacing: `0.05em` to `0.12em`. Body text: leave at default or very subtle adjustments.

### Color System

**Build a purposeful palette using CSS custom properties:**
```css
:root {
  /* Core palette - 2-3 dominant colors max */
  --color-primary: ...;
  --color-secondary: ...;
  --color-accent: ...;       /* Use sparingly — this is your "pop" */

  /* Neutrals - build a full scale */
  --color-surface-0: ...;    /* Deepest background */
  --color-surface-1: ...;    /* Card/elevated surface */
  --color-surface-2: ...;    /* Hover states, subtle borders */
  --color-text-primary: ...;
  --color-text-secondary: ...;
  --color-text-muted: ...;
  --color-border: ...;

  /* Semantic */
  --color-success: ...;
  --color-warning: ...;
  --color-error: ...;
  --color-info: ...;
}
```

**Color rules from 30 years of experience:**
1. **Dominant + accent** beats evenly distributed palettes every time. 60-30-10 rule: 60% neutral, 30% primary, 10% accent
2. **Dark themes ≠ pure black**. Use `#0a0a0a`, `#111`, `#1a1a1a` — never `#000` as background
3. **Light themes ≠ pure white**. Warm whites (`#fafaf8`, `#f7f5f2`) or cool whites (`#f4f6f9`, `#f0f2f5`) add sophistication
4. **Test contrast ratios**: 4.5:1 minimum for body text, 3:1 for large text. This isn't optional
5. **Gradients**: Use subtle angles (135deg, 160deg), multiple color stops for smoothness, and avoid the purple-to-blue cliché. Mesh gradients via multiple radial-gradient layers create premium depth
6. **Shadows define elevation**: Use layered, colored shadows instead of generic gray: `box-shadow: 0 1px 2px rgba(primary, 0.05), 0 4px 12px rgba(primary, 0.08), 0 12px 32px rgba(primary, 0.06);`

### Spacing System

Use a consistent scale based on a base unit:
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.5rem;    /* 24px */
  --space-6: 2rem;      /* 32px */
  --space-8: 3rem;      /* 48px */
  --space-10: 4rem;     /* 64px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */
  --space-20: 10rem;    /* 160px */
}
```

**Spacing philosophy**: Generous whitespace between sections (use `--space-16` to `--space-20`). Tight spacing within components. The contrast between spacious and compact creates visual rhythm.

## Phase 3: Layout & Spatial Composition

### Modern CSS Layout Techniques

**Use the full power of modern CSS:**

```css
/* Container queries — component-level responsiveness */
.card-container {
  container-type: inline-size;
}
 @container (min-width: 400px) {
  .card { flex-direction: row; }
}

/* Subgrid — align nested elements to parent grid */
.grid-parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.grid-child {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}

/* Dynamic viewport units for mobile */
min-height: 100dvh;  /* Use dvh, not vh */

/* Fluid spacing with clamp */
padding: clamp(1rem, 3vw, 3rem);
gap: clamp(1rem, 2.5vw, 2.5rem);
```

### Layout Patterns That Break the Mold

Don't default to the same centered-content-max-width-container every time. Consider:

- **Asymmetric grids**: `grid-template-columns: 2fr 1fr` or `1fr 3fr` — offset content creates tension and visual interest
- **Overlapping elements**: Use negative margins, `position: relative` with offsets, or CSS Grid's ability to place items in the same cell
- **Full-bleed sections** alternating with contained content — creates rhythm
- **Diagonal/angled sections**: `clip-path: polygon()` or `transform: skewY(-3deg)` with counter-skew on children
- **Bento grid layouts**: Mixed-size cards in an irregular but intentional grid
- **Scroll-snapping sections**: `scroll-snap-type: y mandatory` for full-page section experiences
- **Sticky elements that transform**: Sticky headers that shrink, sticky sidebars, sticky CTAs
- **CSS columns** for masonry-like text layouts: `column-count`, `column-gap`, `break-inside: avoid`

### Responsive Design (Non-Negotiable)

**Mobile-first is not a suggestion.** Write base styles for mobile, then enhance:

```css
/* Base: mobile */
.grid { display: flex; flex-direction: column; gap: var(--space-4); }

/* Tablet */
 @media (min-width: 768px) {
  .grid { flex-direction: row; flex-wrap: wrap; }
  .grid > * { flex: 1 1 calc(50% - var(--space-4)); }
}

/* Desktop */
 @media (min-width: 1024px) {
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); }
}
```

**Key responsive techniques:**
- `clamp()` for fluid everything: font sizes, padding, gaps, widths
- `min()` and `max()` for smart constraints: `width: min(90vw, 1200px)`
- Container queries for component-level responsiveness
- `aspect-ratio` for maintaining proportions
- `dvh` / `svh` / `lvh` for proper mobile viewport handling

## Phase 4: Motion & Interaction Design

### Animation Performance Rules (Critical)

**ONLY animate these properties for 60fps:**
- `transform` (translate, scale, rotate, skew)
- `opacity`
- `filter` (with caution)
- `clip-path` (GPU-accelerated in modern browsers)

**NEVER animate**: `width`, `height`, `top`, `left`, `margin`, `padding`, `border-width`, `font-size`. These trigger layout recalculation.

```css
/* GOOD — compositor-only */
.card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

/* BAD — triggers layout */
.card:hover {
  margin-top: -4px;
  padding: 2rem;
}
```

### Animation Patterns

**Page Load — Staggered Reveal (High Impact)**
```css
 @keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.reveal:nth-child(1) { animation-delay: 0.05s; }
.reveal:nth-child(2) { animation-delay: 0.1s; }
.reveal:nth-child(3) { animation-delay: 0.15s; }
/* Stagger by 50-100ms — tighter feels more polished */
```

**Scroll-Driven Animations (Modern CSS — no JS needed)**
```css
 @keyframes parallax {
  from { transform: translateY(50px); opacity: 0.3; }
  to { transform: translateY(-50px); opacity: 1; }
}

.parallax-element {
  animation: parallax linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```

**Micro-interactions That Matter:**
- Button hover: subtle `scale(1.02)` + shadow elevation + background shift (not just color change)
- Focus states: custom outline with offset: `outline: 2px solid var(--color-accent); outline-offset: 3px;`
- Link hovers: underline animations using `background-size` transition on `background-image: linear-gradient(...)`
- Card hovers: slight lift + shadow expansion + optional border color shift
- Loading states: skeleton screens with gradient shimmer animation
- Input focus: border color + subtle glow via `box-shadow`

**Easing Reference:**
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);       /* Snappy — great for entrances */
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);    /* Playful overshoot */
--ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1);   /* Smooth — great for transforms */
--ease-spring: cubic-bezier(0.22, 1.4, 0.36, 1);       /* Bouncy spring feel */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);           /* Material-like */
```

### Accessibility in Motion (Mandatory)
```css
 @media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Phase 5: Visual Texture & Atmosphere

### Background Techniques (Beyond Solid Colors)

**Noise/Grain Texture (adds tactile quality):**
```css
.textured {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
}
```

**Mesh Gradient (premium depth):**
```css
.mesh-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(255, 100, 50, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(50, 100, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(255, 50, 150, 0.1) 0%, transparent 50%),
    var(--color-surface-0);
}
```

**Geometric Patterns:**
```css
.dots-pattern {
  background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
  background-size: 24px 24px;
}

.grid-pattern {
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

**Glassmorphism (use sparingly):**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Decorative Elements
- Gradient borders: `border-image` or pseudo-element technique with `background: linear-gradient(...)` behind a slightly smaller inner element
- Glowing accents: `box-shadow: 0 0 40px rgba(accent, 0.3), 0 0 80px rgba(accent, 0.1)`
- Divider lines: Don't use plain `<hr>`. Use gradient lines, dotted patterns, or decorative SVG dividers
- Icon integration: Use Lucide icons (available in React) or inline SVG. Never use emoji as UI icons in professional interfaces

## Phase 6: Component Craft

### Buttons
```css
/* Base button with intentional design */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: 0.01em;
  border-radius: 8px;          /* or 999px for pill, or 0 for brutalist */
  border: none;
  cursor: pointer;
  transition: all 0.2s var(--ease-out-expo);
  position: relative;
  overflow: hidden;
}

/* Hover state with multiple properties */
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Active state — feels "pressable" */
.btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}
```

### Cards
Build cards with these layers:
1. **Container**: Surface color, border/shadow, border-radius
2. **Media area**: Image with `object-fit: cover`, `aspect-ratio`
3. **Content area**: Proper padding, text hierarchy
4. **Interactive layer**: Hover lift, optional link overlay via `::after` pseudo-element
5. **Meta/footer**: Secondary info, actions

### Forms & Inputs
```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: var(--text-base);
  font-family: inherit;         /* ALWAYS inherit — don't let inputs use system fonts */
  color: var(--color-text-primary);
  background: var(--color-surface-1);
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(primary, 0.1);
}

.input::placeholder {
  color: var(--color-text-muted);
  font-style: italic;           /* Optional but distinguishes placeholder from value */
}
```

## Phase 7: Image & Media Handling

```css
/* Responsive images with proper aspect ratios */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  aspect-ratio: 16 / 9;        /* or 4/3, 1/1, 3/4 depending on context */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-expo);
}

/* Zoom on hover */
.image-container:hover img {
  transform: scale(1.05);
}
```

**Placeholder strategies for when no real images are available:**
- Gradient-filled divs matching the color palette
- SVG abstract illustrations
- CSS-only geometric art
- Use `https://images.unsplash.com/photo-ID?w=800&q=80` for realistic placeholders (when relevant)
- Subtle pattern backgrounds with centered icon/text

## Phase 8: Accessibility Baseline (Non-Negotiable)

These are NOT optional, regardless of aesthetic direction:

1. **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Use `<button>` for actions, `<a>` for navigation
2. **Heading hierarchy**: One `<h1>` per page, then `<h2>`, `<h3>` in order. Never skip levels
3. **Color contrast**: 4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+ regular)
4. **Focus indicators**: NEVER remove outlines without providing an alternative. Style them to match your aesthetic
5. **Alt text**: Every `<img>` gets meaningful alt text (or `alt=""` if purely decorative)
6. **Interactive elements**: All clickable things must be focusable and have appropriate ARIA labels if not self-describing
7. **Reduced motion**: Always include `prefers-reduced-motion` media query
8. **Font sizing**: Use `rem` for font sizes, never `px` (respects user browser settings)

## Phase 9: Code Architecture

### HTML Artifacts (Single-File)
Structure as:
```html
<!DOCTYPE html>
<html lang="en">  <!-- Always set language -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Title</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
  <style>
    /* Reset */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* Design tokens */
    :root { ... }

    /* Base styles */
    body { ... }

    /* Components (ordered by page flow) */
    ...

    /* Responsive overrides */
    @media (min-width: 768px) { ... }
    @media (min-width: 1024px) { ... }

    /* Motion preferences */
    @media (prefers-reduced-motion: reduce) { ... }
  </style>
</head>
<body>
  <!-- Semantic HTML structure -->
</body>
</html>
```

### React Artifacts (Single-File JSX)
Structure as:
```jsx
import { useState, useEffect, useRef } from "react";

// Constants & data at the top
const ITEMS = [...];

// Sub-components defined before main
function Card({ title, description }) { ... }

// Main component with default export
export default function App() {
  // Hooks
  // Handlers
  // Render
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=...');

        :root { /* design tokens */ }

        /* All styles here */
      `}</style>

      <div className="app">
        {/* Semantic structure */}
      </div>
    </>
  );
}
```

## Anti-Patterns Checklist (The "AI Slop" Detector)

Before finalizing ANY design, verify you haven't fallen into these traps:

### ❌ NEVER DO:
- [ ] Purple/blue gradient hero on white background (the #1 AI cliché)
- [ ] Generic card grid with identical rounded corners and light shadows
- [ ] "Welcome to [Product]" with a subtitle and centered CTA button (every AI landing page ever)
- [ ] Emoji as section headers or decorative elements in professional UIs
- [ ] Using 5+ colors with equal weight
- [ ] Gradients on every surface
- [ ] Border-radius: 12-16px on everything uniformly
- [ ] Shadows that are all identical gray
- [ ] Stock "hero illustration" vibes — generic isometric or blob illustrations
- [ ] Using "Get Started" or "Learn More" as the only CTA text
- [ ] Same hover effect on every interactive element
- [ ] Perfectly symmetric layouts with no visual tension
- [ ] Components that look like Material UI or Shadcn defaults without customization
- [ ] Dark mode that's just "invert the colors"

### ✅ ALWAYS DO:
- [ ] Have ONE signature visual element that makes this unmistakably unique
- [ ] Use at least one unexpected design choice (unusual font pairing, asymmetric layout, unique color, creative animation)
- [ ] Create clear visual hierarchy — squint test: does the layout read correctly blurred?
- [ ] Test the design mentally at 320px and 1440px — does it work?
- [ ] Use font sizes that create real contrast (don't be afraid of 4rem+ headings)
- [ ] Make interactive elements feel physically responsive (not just color changes)
- [ ] Build visual rhythm through alternating section density, spacing, and color

## Final Execution Notes

### Complexity Calibration
Match code complexity to the aesthetic vision:
- **Maximalist design** = elaborate code with many CSS layers, multiple animations, SVG decorations, complex grid structures
- **Minimalist design** = restrained code with meticulous spacing, perfect typography, and maybe 1-2 subtle animations
- **The quality bar is the same** — minimalism is NOT an excuse for less effort. A minimal design done well requires extreme precision in every `rem`, every color value, every transition timing

### Variety Mandate
**NEVER converge on the same design twice.** Rotate between:
- Light vs dark themes
- Serif vs sans-serif heading fonts
- Warm vs cool color temperatures
- Dense vs spacious layouts
- Animated vs static presentations
- Organic vs geometric aesthetics

Track what you've used recently and deliberately choose differently.

---

*Remember: Claude is capable of extraordinary creative work. Every interface is an opportunity to create something genuinely memorable. Don't settle for "good enough" — push for "I can't believe an AI made this."*
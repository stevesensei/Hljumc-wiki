# HLJUMC Docs Design System

## 0. Research Log

- Embedded references: shortlisted `notion.md`, `linear.app.md`, and `mintlify.md`; the current homepage additionally follows the user-supplied VitePress reference image: deep dark canvas, gradient-lit hero, asymmetric visual focus, and a four-card entry grid.
- Official implementation reference: VitePress navigation, local search, Markdown containers, and theme extension guidance from `vitepress.dev`.
- Skipped lanes: image-generation and product-screen research — the user supplied a concrete homepage reference and the source logo, so implementation is based on those artifacts instead of generated artwork.

## 1. Atmosphere & Identity

HLJUMC Docs should feel like a focused campus game server portal: dependable and easy to scan, with a dark technical canvas, blue-to-violet light in the hero, and the real Heilongjiang University Minecraft emblem as the visual anchor. The signature is a four-card route grid that connects visitors to the setup journey.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | `--surface-primary` | `#191a1f` | `#191a1f` | Page canvas |
| Surface/secondary | `--surface-secondary` | `#202127` | `#202127` | Navigation and secondary blocks |
| Surface/elevated | `--surface-elevated` | `#22232a` | `#22232a` | Feature cards and code panels |
| Text/primary | `--text-primary` | `#f7f4ee` | `#f7f4ee` | Headings and body |
| Text/secondary | `--text-secondary` | `#a3adbe` | `#a3adbe` | Explanations and metadata |
| Text/tertiary | `--text-tertiary` | `#778196` | `#778196` | Captions and navigation |
| Border/default | `--border-default` | `#343741` | `#343741` | Cards and dividers |
| Border/subtle | `--border-subtle` | `#282a31` | `#282a31` | Quiet separation |
| Accent/primary | `--accent-primary` | `#4d6fe8` | `#4d6fe8` | Primary buttons and links |
| Accent/hover | `--accent-hover` | `#8da1ff` | `#8da1ff` | Hover and active states |
| Status/success | `--status-success` | `#66c49a` | `#66c49a` | Completed setup notes |
| Status/warning | `--status-warning` | `#f0c36b` | `#f0c36b` | Email and login cautions |
| Status/error | `--status-error` | `#f58b95` | `#f58b95` | Blocking troubleshooting |
| Status/info | `--status-info` | `#68b8ff` | `#68b8ff` | General information |

### Rules

- Use `--accent-primary` only for interactive elements and the setup route marker.
- Use dark surfaces to separate chapters; reserve blue-violet gradients and glow for the homepage hero focal point.
- Borders are one-pixel whispers. Cards use tonal contrast and restrained hover lift rather than heavy framing.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | `clamp(2.25rem, 5vw, 4rem)` | 700 | 1.04 | Home hero |
| H1 | `2rem` | 700 | 1.15 | Page title |
| H2 | `1.5rem` | 650 | 1.25 | Major sections |
| H3 | `1.125rem` | 650 | 1.35 | Card titles |
| Body/lg | `1.125rem` | 400 | 1.65 | Leads |
| Body | `1rem` | 400 | 1.7 | Reading copy |
| Body/sm | `0.875rem` | 500 | 1.55 | Metadata and navigation |
| Caption | `0.75rem` | 600 | 1.4 | Labels |

### Font Stack

- Primary: `Noto Sans SC`, `PingFang SC`, `Microsoft YaHei`, `Helvetica Neue`, `Arial`, sans-serif.
- Display: `Noto Serif SC`, `Songti SC`, serif, used sparingly on the home hero.
- Mono: `SFMono-Regular`, `Cascadia Code`, `JetBrains Mono`, monospace.

## 4. Spacing & Layout

### Base Unit

All spacing derives from a base of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Inline icon and label gap |
| `--space-2` | 8px | Compact groups |
| `--space-3` | 12px | Small card padding |
| `--space-4` | 16px | Standard content gap |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Chapter separation |
| `--space-12` | 48px | Large section separation |
| `--space-16` | 64px | Home hero rhythm |

### Grid

- Max content width: 1200px.
- Reading measure: 760px for long-form instructions.
- Breakpoints: 640px, 768px, 1024px, 1280px.
- Mobile pages collapse to one readable column with no horizontal overflow.

## 5. Components

### Route Card

- **Structure**: linked card with step label, title, description, and trailing arrow.
- **Variants**: primary setup, secondary reference, caution.
- **Spacing**: `--space-6` padding and `--space-4` internal gap.
- **States**: default, hover, focus-visible, active.
- **Accessibility**: semantic link, visible focus ring, descriptive link text.
- **Motion**: only transform and border-color on hover, 160ms ease-out.
- **Layout**: responsive grid.

### Home Hero Visual

- **Structure**: asymmetric two-column hero with a short title block and one square Minecraft scene image.
- **Material**: dark canvas, blue primary action, charcoal cards, and a simple rounded image surface.
- **Accessibility**: meaningful image alt text; the image remains a normal semantic `<img>`.
- **Responsive**: collapses to one column below 900px and centers the rounded image.

### Info Callout

- **Structure**: VitePress custom container with title and body.
- **Variants**: tip, warning, danger, details.
- **Spacing**: `--space-4` padding.
- **States**: default and open for details.
- **Accessibility**: preserve native details summary behavior; warning copy remains readable without color.
- **Motion**: none beyond native disclosure.
- **Layout**: block flow.

### Configuration Table

- **Structure**: two-column table with a semantic header and monospace values.
- **Variants**: authentication settings and server settings.
- **Spacing**: `--space-3` cell padding.
- **States**: static.
- **Accessibility**: use table headers and keep URLs copyable.
- **Motion**: none.
- **Layout**: overflow-safe block on small screens.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 120ms | ease-out | Link and card feedback |
| Standard | 220ms | ease-in-out | Theme surface changes |

- Animate only `transform`, `opacity`, and color variables.
- Respect `prefers-reduced-motion` by removing non-essential transitions.
- No ambient animation is used; the content is task-focused.

## 7. Depth & Surface

Strategy: `mixed`, biased toward tonal shift with a single image focal point.

- Cards use `--surface-elevated` with no default border and a small hover lift.
- Hero uses a deep dark canvas with one rounded image focal point and no image frame, stroke, glow, or shadow.
- Shadows are reserved for keyboard focus reinforcement.

## 8. Accessibility Constraints & Accepted Debt

### Constraints

- WCAG 2.2 AA target.
- Body text remains at least 16px with a 1.7 line height.
- Every interactive element has a visible keyboard focus state.
- Chinese copy must wrap naturally at narrow widths; URLs and server addresses use break-word where needed.
- Reduced motion is respected.

### Accepted Debt

| Item | Location | Why accepted | Owner / Exit |
|------|----------|--------------|--------------|
| Source images are imported from Feishu assets | `docs/public/assets/` | Keeps the migrated guide self-contained and avoids broken hotlinked images | Re-export only when the source screenshots change |

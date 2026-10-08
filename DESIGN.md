---
name: Architectural Tech System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4753'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707884'
  outline-variant: '#bfc7d5'
  surface-tint: '#0061a5'
  primary: '#0061a5'
  on-primary: '#ffffff'
  primary-container: '#0099ff'
  on-primary-container: '#002f54'
  inverse-primary: '#9fcaff'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#565e74'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d94ad'
  on-tertiary-container: '#252d41'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#9fcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497e'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  margin-desktop-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies corporate engineering precision, structured minimalism, and high-assurance technical authority. Designed for enterprise systems architecture and mission-critical infrastructure consulting, the visual language balances pure architectural white surfaces with structured high-contrast midnight typography and vivid electric azure accents.

The aesthetic fuses modern Swiss rationalism with refined technological clarity:
- **Systematic Precision:** Utilitarian neo-grotesque typography, rigid vertical cadence, and strict geometric bounds.
- **Architectural Clarity:** Layered white-on-slate planes, ultra-fine boundary definition, and calibrated atmospheric elevation.
- **Controlled Luminescence:** Restrained use of electric cyan and high-energy azure solely for operational states, focused data vectors, and focal interaction affordances.

## Colors

The color architecture creates a stark, luminous environment with clear visual priority.

- **Primary (`#0099FF`):** Pure Azure. Drives primary interactive anchors, actionable data states, and high-priority directional indicators.
- **Secondary (`#00D2FF`):** Electric Cyan. Reserved for active state indicators, subtle perimeter glow strokes, telemetry data points, and dynamic accents.
- **Tertiary (`#0F172A`):** Deep Midnight Navy. Anchors headline typography, high-contrast badges, structural framing, and high-density terminal layers.
- **Neutral (`#64748B`):** Architectural Slate. Manages secondary copy, inactive structural frames, metadata, and structural divider rules.

### Surface Architecture
- **Base Canvas:** `#F8FAFC` (Slate 50) provides a soft, clinical base that prevents optical glare.
- **Elevated Surfaces:** Pure `#FFFFFF` card layers to project crisp, clean boundaries against the canvas.
- **Dividers & Strokes:** `#E2E8F0` (Slate 200) for standard layout grids; `#F1F5F9` (Slate 100) for internal card subdivisions.
- **Text Hierarchies:** `#0F172A` for primary headlines, `#334155` for high-legibility body prose, and `#64748B` for tertiary captions.

## Typography

Typography relies entirely on the neo-grotesque precision of Inter to achieve engineering clarity. Strict negative tracking on large display tiers delivers a cohesive, technical silhouette, while neutral metrics at smaller sizes preserve data density and reading comfort.

- **Weight Discipline:** Restrict styling to Regular (`400`), Medium (`500`), Semi-Bold (`600`), and Bold (`700`). Avoid non-standard weights.
- **Uppercase Labels:** The `label-sm` role uses an uppercase transform with expanded tracking (`0.05em`) for infrastructure tags, data metrics, status trackers, and architectural metadata.
- **Tabular Numerics:** Enforce `font-feature-settings: "tnum"` on all metric displays, financial tables, and operational readouts to maintain horizontal grid alignment.

## Layout & Spacing

The structural layout uses an architectural 12-column grid system bounded by explicit margins and proportional gutters.

- **Column System:** 12 columns across desktop (`>= 1024px`), 8 columns for tablet (`>= 768px`), and 4 columns for mobile (`< 768px`).
- **Base Rhythm:** Built strictly on a 4px/8px incremental grid. All component padding, internal module margins, and stack containers must resolve to direct multiples of the spacing scale.
- **Section Rhythm:** Major architectural sections separate along `space-2xl` boundaries on desktop and compress to `space-xl` on handheld displays.
- **Container Anchors:** Max structural application width is capped at 1440px with auto-centering to prevent excessive line lengths on ultrawide monitors.

## Elevation & Depth

Visual hierarchy uses architectural planar separation rather than heavy physical drops:

- **Surface Planes (Level 0):** `#F8FAFC` base application canvas with zero shadow.
- **Layered Enclosures (Level 1):** `#FFFFFF` surfaces bounded by a crisp `1px solid #E2E8F0` stroke. Shadow is minimal: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Interactive Focus & Flyouts (Level 2):** Elevated panels, modal overlays, and active cards utilize calibrated depth: `0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)` combined with a `1px solid #CBD5E1` boundary.
- **Electric Cyan Glow:** For high-priority status modules or primary active items, subtle atmospheric lighting accents apply: `0 0 16px -2px rgba(0, 210, 255, 0.25)`.

## Shapes

The system uses a refined, soft-geometry shape standard (`roundedness: 1`):

- **Micro Components (Badges, Buttons, Inputs):** 0.25rem (`4px`) corner radii. Maintains an engineered, industrial edge.
- **Card Containers & Modules (`rounded-lg`):** 0.5rem (`8px`) corner radii for structured white card containers, enterprise data tables, and modal frames.
- **Outer Shells & Overlays (`rounded-xl`):** 0.75rem (`12px`) corner radii strictly for top-level application containers and high-tier dialogs.
- **Sharp Technical Boundary Rule:** Roundedness must never exceed `0.75rem`. Rounded pill shapes (`rounded-full`) are reserved exclusively for circular avatars and compact status indicators.

## Components

### Buttons
- **Primary:** Solid `#0099FF` fill, `#FFFFFF` text, `4px` border radius, semi-bold typography. Hover shifts to `#0088EE` accompanied by a localized ambient shadow (`0 0 12px rgba(0, 153, 255, 0.35)`). Active state scales to `0.99`.
- **Secondary:** `#FFFFFF` fill, `#0F172A` text, structural `1px solid #E2E8F0` border. Hover transitions border to `#0099FF` with text tinted `#0099FF`.
- **Ghost:** Transparent background, `#334155` text. Hover introduces `#F1F5F9` background fill with neutral `#0F172A` text.

### Cards & Data Containers
- Pure `#FFFFFF` background set against `#F8FAFC` canvas.
- Perimeter definition: `1px solid #E2E8F0`. 
- Padding: `1.5rem` (`space-lg`) on desktop; `1rem` (`space-md`) on mobile.
- Headers within cards feature a bottom border (`1px solid #F1F5F9`) separating metadata from card contents.

### Chips & Glow Badges
- **Status Badges:** Translucent backgrounds (e.g., `#0099FF` at 10% opacity) bounded by a crisp matching stroke (`rgba(0, 153, 255, 0.3)`). Text in matching solid hue.
- **Active Telemetry Badge:** Pure white background, `1px solid #00D2FF`, paired with an active pulsing electric cyan dot (`4px`) and an exterior cyan glow (`box-shadow: 0 0 8px rgba(0, 210, 255, 0.4)`).
- Typography strictly uppercase `label-sm` with `0.05em` letter spacing.

### Input Fields
- Surface: `#FFFFFF`. Border: `1px solid #CBD5E1`.
- Typography: `body-md` in `#0F172A`. Inactive placeholders in `#94A3B8`.
- Focus State: Outline-free with an intentional `1px solid #0099FF` border and a clean ring blur: `0 0 0 3px rgba(0, 153, 255, 0.15)`.

### Lists & Tables
- Enterprise data rows are separated by sharp horizontal dividers (`1px solid #F1F5F9`).
- Row hover states apply a subtle `#F8FAFC` background tint.
- Column headers leverage `label-sm` in `#64748B`, uppercase tracking, aligned strictly to the data column axis.

### Selection Controls (Checkboxes & Radios)
- Fixed dimensions: `16px x 16px` with a `2px` radius for checkboxes; fully circular for radios.
- Unchecked: `#FFFFFF` fill, `1px solid #94A3B8`.
- Checked: `#0099FF` fill, crisp white interior indicator. Focus ring mirrors input field focus states.
---
name: Monolith Aesthetic
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffffff'
  on-tertiary: '#213145'
  tertiary-container: '#d3e4fe'
  on-tertiary-container: '#56657c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 96px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system is built for a high-end digital agency, prioritizing architectural precision and editorial clarity. The brand personality is authoritative yet understated—it doesn't shout for attention but earns it through meticulous craft. 

The aesthetic is a fusion of **Minimalism** and **Glassmorphism**. It utilizes a monochrome palette to allow the agency's work and content to remain the primary focus. High-end visual cues such as wide letter-spacing, expansive negative space, and "frosted" structural elements create a sense of digital luxury and technical mastery. The emotional response should be one of absolute trust, sophistication, and modernity.

## Colors

The color strategy follows the **Golden Ratio (60-30-10)** to ensure a balanced, high-contrast environment. 
- **60% Dominant (Base):** Deep black (#000000) and Charcoal (#1A1A1A) for background surfaces, providing a limitless canvas.
- **30% Secondary (Accents & Glass):** Shades of Slate and Silver for structural borders, secondary text, and inactive states. 
- **10% Highlight:** Crisp White (#FFFFFF) reserved for primary typography, calls to action, and core branding elements to ensure maximum impact.

The "Bridge" between these tones is achieved through semi-transparent overlays (Glassmorphism), allowing background gradients or content to subtly bleed through structural layers.

## Typography

The typographic hierarchy utilizes **Montserrat** for impactful headlines and **Inter** for utilitarian body text. 

Headlines use tight tracking and bold weights to feel like architectural landmarks on the page. In contrast, labels and small caps are given generous letter spacing (0.1em) to evoke a premium, gallery-style feel. Large display type should be scaled down intelligently for mobile using the `-mobile` tokens to ensure readability without losing the "big type" aesthetic.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain a cinematic, controlled composition, transitioning to a fluid model for mobile devices.

- **Desktop:** 12-column grid with a 1440px max-width. Margins are intentionally wide (80px) to create a luxurious sense of "breathing room."
- **Section Gaps:** Vertical rhythm is driven by the Golden Ratio; large sections are separated by 160px (Section Gap) to emphasize the distinction between different service offerings or case studies.
- **Rhythm:** All spacing (padding, margins, internal component gaps) must be multiples of the 8px base unit.

## Elevation & Depth

Depth is achieved through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

1.  **Base Layer:** Solid Black (#000000).
2.  **Surface Layer:** Charcoal (#1A1A1A) with a 1px Slate border.
3.  **Floating Layer (Glass):** `backdrop-filter: blur(20px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.05)`). This is used for navigation bars, modals, and hovering cards.
4.  **Accents:** Thin, high-contrast white outlines are used for focus states and primary buttons to "lift" them off the dark background.

## Shapes

To maintain a professional and "engineered" look, the design system uses a **Soft (0.25rem)** roundedness. 

Corners are sharp enough to feel precise and modern, but just rounded enough to prevent the UI from feeling aggressive. Larger components like cards and hero images should utilize `rounded-lg` (0.5rem), while buttons and input fields stick to the base 0.25rem (4px) radius.

## Components

### Buttons
- **Primary:** Solid White background with Black text. 4px border radius. No shadow.
- **Secondary:** Ghost style. Transparent background with a 1px Silver border. White text.
- **Glass:** Blurred background with a 1px white border at 10% opacity.

### Input Fields
- Dark Charcoal background with a 1px Slate border. 
- Focus state: Border changes to White with a subtle 2px outer "glow" (blur, no spread).
- Labels are always `label-sm` (uppercase, tracked out) positioned above the field.

### Cards
- Utilizes the "Floating Layer" style. 
- Subtle hover interaction: The border opacity increases from 10% to 40%, and the background blur deepens.

### Navigation Bridge
- The header should be a persistent glassmorphic bar. It acts as the "bridge" across the site, floating at the top with a 1px bottom border (`glass_stroke`).

### Chips/Tags
- Small, rectangular with 2px radius. 
- Slate background with Silver text for a low-key, professional metadata look.
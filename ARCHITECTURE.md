# Technical Architecture: Transpo Landing Page

This document provides a high-level technical overview of the Transpo landing page, detailing the core systems, animation patterns, and data integration.

---

## 🏗 High-Level Architecture

The application is built on **Next.js 15+** using the **App Router** paradigm. It is designed as a single-page scrolling application with distinct sections orchestrated through a custom layout and motion engine.

### Core Stack
- **Framework**: Next.js (React 19)
- **Styling**: Tailwind CSS v4 (Alpha/Stable)
- **Animations**: Framer Motion
- **CMS**: Sanity.io

---

## 🎬 Animation & Motion System

### Splash-to-Hero Expansion
The entry experience is controlled by the `SplashHeroTransition` component.
- **Initial State**: A centered rectangular div matching the brand gradient is displayed on a white background.
- **Orchestration**:
  1.  A `1.2s` hold allows for asset preloading.
  2.  The `isExpanding` state triggers a `1.0s` spring transition.
  3.  The div expands from `90vw/vh` to `100vw/vh`, while `borderRadius` drops from `32px` to `0`.
  4.  The splash layer fades out, revealing the main landing page content which uses an identical `AnimatedBackground` for a seamless "cut".

### Ambient Background
The `AnimatedBackground` component uses `framer-motion` to drive low-performance-impact radial gradients.
- **Implementation**: Multiple overscaled `motion.div` elements with heavy `blur` and `opacity` oscillate slowly in the background.
- **Mix-blend Modes**: Utilizes `mix-blend-screen` and `mix-blend-overlay` alongside a fractal noise SVG filter to create a premium, "living" texture.

---

## 🧭 Navigation & Layout

### ScrollSpy Layout
The `ScrollSpyLayout` tracks the user's position relative to the landing page sections.
- **Detection**: Uses a single `IntersectionObserver` configured with a `0.5` threshold.
- **Indicator**: A sticky side-container (`xl:flex`) remains stationary while the user scrolls. It displays the "TRANSPO" brand alongside the current active section title, separated by a vertical line and a glowing dot.

### Symmetric Navbar
The sticky Navbar follows a "capsule" or "pill" design pattern.
- **Mobile Logic**: Standard links collapse into an animated hamburger menu on small screens. The "Sign Up" CTA is moved inside the dropdown for mobile accessibility.
- **Logo Replay**: Clicking the logo triggers the `SplashHeroTransition` again by resetting state in the root `Home` component.

---

## 🖥 Component Highlights

### Browser Mockup (Demo UI)
The `DemoCard` component provides a high-fidelity visual of the Transpo extension.
- **Logic**: Simulates a YouTube environment with animated "loading" skeletons.
- **State Simulation**: Features a `setInterval` driven mock detection system that cycles through musical keys.
- **Shadows & Layers**: Uses nested `shadow` and `border` properties to replicate the Chrome browser's native feel.

---

## 📝 Data & CMS (Sanity.io)

### Form Submissions
User inputs in the **Feedback** and **Sign Up** sections are handled by custom API route handlers:
1.  **Client-side**: Standard `fetch` POST to `/api/feedback` or `/api/signup`.
2.  **Server-side**: The Next.js route handler checks for a `SANITY_API_WRITE_TOKEN`.
3.  **Handling**: 
    - If the token is found, data is committed to the Sanity production dataset.
    - If no token is configured, the system logs a warning and returns a **mock success response**, allowing for UI testing without mandatory CMS connectivity.

### Self-Hosted Studio
A complete Sanity Studio is embedded at the `/admin` route using the Next.js `[[...index]]` catch-all pattern, allowing for content management directly within the application deployment.

---

## 🎨 Design System

### Typography
- **Headings**: `Calistoga` - A serif font chosen for its unique, music-inspired character.
- **Body**: `Inter` - Standard sans-serif for high readability.

### Color Palette (CSS Variables)
Colors are parameterized in `globals.css` using the Tailwind v4 `@theme` block:
- `--color-brand-orange`: `#E65100` (Burnt Orange)
- `--color-brand-yellow`: `#E1A33C` (Gradient gold)
- `--color-brand-cta`: `#1B263B` (Deep Navy)

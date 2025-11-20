## Objectives
- Dark mode: black background with white stars (all pages)
- Light mode: white background with black stars (all pages)
- Change colors only; do not alter content, images, layout, or data
- User-selectable toggle with system preference default; persists choice

## Theme Foundation
- Add `data-theme` to `<html>`: `light` or `dark`
- Define color variables for both themes:
  - `:root[data-theme="dark"]` → `--bg-primary: #000`, `--text-primary: #fff`, `--text-secondary`, `--accent-*`
  - `:root[data-theme="light"]` → `--bg-primary: #fff`, `--text-primary: #000`, `--text-secondary`, `--accent-*`
- Replace remaining hard-coded `#000/#fff/#666` with variables across Home, Projects, Project Overview, About, Contact, YouTube

## Starfield Unification
- Provide theme-aware props to `ThreeBackground`:
  - Dark: `{ colorPrimary: '#ffffff', blendingMode: 'additive' }`
  - Light: `{ colorPrimary: '#000000', blendingMode: 'normal' }`
- Wire these props on all six pages via a small helper (computed) using current theme
- Keep existing densities/sizes; only color/blending changes per theme

## Navbar & Icons
- Keep navbar background transparent in both themes
- Icons switch color via CSS (white in dark, black in light); no asset changes
- Maintain existing spacing/hover states, driven by variables

## Toggle & Persistence
- Add a compact sun/moon toggle in the navbar:
  - On load: use `localStorage.theme` else `prefers-color-scheme`
  - On toggle: update `document.documentElement.dataset.theme` and persist
  - Accessible: `aria-pressed`, descriptive label

## Accessibility & Performance
- Ensure text contrast meets WCAG AA in both themes
- Respect reduced motion; starfield already checks `prefers-reduced-motion`
- No API changes; minimal CSS/JS footprint

## Verification
- Test both themes across Home, Projects, Project Overview, About, Contact, YouTube for:
  - Correct background + star color
  - Navbar and text legibility
  - No content/image changes
  - Toggle persistence across routes and reloads

## Delivery
- Implement changes locally and show in preview
- Wait for your approval before making any commit or push
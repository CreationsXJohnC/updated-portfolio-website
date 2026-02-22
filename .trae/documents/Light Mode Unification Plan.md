## Objectives

* Light mode: white backgrounds with black stars across ALL pages

* Icons and text use dark palette; content/images unchanged

* Toggle retains Dark/Light switch and persists choice

## Pages To Align

* Home, Projects, Project Overview, About, Contact, YouTube

## Color Rules (Light)

* Backgrounds: `var(--bg-primary)` (white)

* Text: `var(--text-primary)` (black)

* Starfield: black stars on white (`NormalBlending`), driven by theme

* Navbar: icons black via existing `.invert-icons` logic

## Assets (Light)

* About logos: Ori `Ori-Badge01.png`, Watermark `Watermark with Slogan GREY.png`

* Skills: Next.js icon stays black

* Contact arrow image stays black

* Buttons: leave as-is

## Implementation Steps

1. Audit and replace hard-coded colors with variables where needed:

   * Videos: hero background/text → `var(--bg-primary)`/`var(--text-primary)`

   * Projects: hero subtitle, headings, scroll indicator already overridden; keep buttons unchanged

   * Project Overview: ensure headings/body text use variables; gradient overlays remain

   * About/Contact: already variable-driven; verify any remaining greys/black text outside forms
2. Starfield theme sync

   * Confirm `ThreeBackground` uses theme (black stars/white space in Light; white/black in Dark)

   * Ensure each page passes defaults (no per-page color overrides needed)
3. Navbar & icons

   * Keep transparent nav

   * `.invert-icons` applies only in Light for pages with light backgrounds (already wired)
4. Verification

   * Toggle between Light/Dark and confirm:

     * All pages: backgrounds/text/icons/stars reflect theme

     * No content or image changes beyond specified assets

     * Accessibility: readable contrast (black text on white in Light)

## Deliverables

* Local preview showing unified Light mode with black stars and dark text across all pages

* No commits until you approve


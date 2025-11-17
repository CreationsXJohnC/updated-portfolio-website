## Goal

Integrate a lightweight three.js background scene into the Home page and then start the dev server to provide a live preview.

## Changes

1. Add `three` to `integrated-portfolio/client/package.json` dependencies.
2. Create `src/components/ThreeBackground.vue` that lazy‑loads `three`, sets up a transparent renderer, ambient+directional lights, and a simple animated geometry (or particle field). Respect `prefers‑reduced‑motion`, cap pixel ratio, pause on tab hidden, and dispose on unmount.
3. Update `src/views/HomeView.vue` to render `<ThreeBackground />` inside the `.hero-section`, positioned absolutely behind content (`pointer-events: none; z-index: 0`), while logo/tagline remain above (`z-index: 1`).
4. Optional: Add `three` to a dedicated vendor chunk and to `optimizeDeps.include` in `integrated-portfolio/client/vite.config.js`.

## Verification & Preview

* From the repo root, run `npm run dev` (starts server and Vite client).

* Verify the Home hero shows a smooth animated background without layout shifts.

* Provide the preview URL `http://localhost:5173/` once the client dev server is running.

## Rollout

* Phase 1: Implement minimal scene and preview.

* Phase 2 (optional): Add variants (wireframe sphere vs particle field), subtle mouse responsiveness, and future GLTF logo support.


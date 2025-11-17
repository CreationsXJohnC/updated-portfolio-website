## Concept
Make the About page feel 3D and engaging using the existing outer‑space vibe without heavy GLTF assets. Lean on subtle depth, parallax, interactive constellations, and hologram‑style panels.

## Feature Set
1. Parallax Nebula Header
- Multi‑layer starfield using your existing ThreeBackground with a parallax stack (near/far sprites) and gentle camera drift.
- Optional subtle “orbit” of the profile avatar (capsule glow) to hint depth.

2. Constellation Navigation
- A constellation line map that connects section anchors (Bio, Skills, Experience, Contact) with twinkling nodes.
- Nodes glow and pulse on hover; clicking scrolls to sections (smooth scroll, hash anchors).

3. Orbital Timeline
- Experience milestones shown as orbiting satellites around a central “planet” node.
- Hover reveals year/role in a small HUD; click expands a hologram card.

4. Hologram Panels
- Bio/skills rendered in floating, glassy HUD panels with 3D transforms (CSS perspective, tilt on hover) and soft bloom.
- IntersectionObserver reveals with staggered fade/scale; respects reduced‑motion.

5. Skill Galaxy
- Your 28 skill icons placed on a starfield plane as constellations; twinkle animation and cluster grouping (frontend, backend, design).
- Click a cluster → filtered skills overlay.

6. Ambient Space Effects
- Shooting stars occasionally (rare, subtle), comet trail on section transitions.
- Contact CTA styled as a “transmission panel” (no telephone model).

## Technical Approach (Lightweight)
- Reuse ThreeBackground with a near/far stars variant and parallax; add minor camera drift via rAF.
- Constellation lines: Canvas or SVG overlay anchored to section positions; glow via filter.
- Orbital timeline: Small three.js points + lines or pure SVG paths with transform animations; keep mesh count low.
- Hologram panels: CSS transforms (perspective, translateZ, tilt) + glass blur; no 3D models.
- Skill galaxy: Three.js points grid with clickable hotspots (raycaster) or a CSS grid with twinkle overlay for mobile fallback.
- Accessibility: Tooltips/aria labels, reduced‑motion handling, keyboard focus in overlays.

## Implementation Plan (Phased)
### Phase 1 (Quick Win)
- Add Parallax Nebula Header to About (ThreeBackground variant).
- Implement Hologram Panels for Bio and Skills sections (CSS 3D transforms, glow).
- Add Constellation Navigation overlay linking to anchors.

### Phase 2
- Build Orbital Timeline component for Experience (satellites, hover HUD).
- Integrate Skill Galaxy clusters with overlays and filtering.

### Phase 3
- Add ambient effects (shooting stars, comet trails, subtle camera drift).
- Fine‑tune performance (pixel ratio caps, pause on hidden tab), and polish mobile fallbacks.

## Deliverables
- SpaceHeader.vue (parallax starfield header)
- ConstellationNav.vue (SVG/canvas constellation overlay)
- HologramPanel.css (utility styles for glass HUD panels)
- OrbitTimeline.vue (orbiting milestones)
- SkillGalaxy.vue (twinkling skill clusters)

## Verification
- Confirm LCP/CLS unchanged, animations smooth, reduced‑motion honored.
- Hover/keyboard accessibility for constellation nodes and timeline satellites.
- Mobile fallback: simple grid + lightweight starfield background.

## Notes
- No heavy GLTF models required; visuals rely on sprites, SVG, and CSS perspective.
- Matches Home’s outer‑space mood while keeping About informative and fast.

If you approve, I’ll implement Phase 1 (header + hologram panels + constellation nav) first, then iterate with Phase 2/3 as desired.
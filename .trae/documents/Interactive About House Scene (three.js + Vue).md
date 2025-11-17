## Goals
- Add a three.js scene to the About page with an exterior → interior transition.
- Inside the living-room/creative space, make objects clickable to show existing About content in overlay panels.
- Telephone click navigates to Contact; computer screen click navigates to Projects.

## Deliverables in Phase 1
- New component `src/components/AboutScene.vue` (lazy-loaded) with:
  - Renderer, camera, lights, and a basic room built from lightweight primitives (walls, floor, desk, couch, TV, coffee table + lamp, framed photo, picture frames, photography corner, telephone, computer).
  - Raycasting for hover/click; hover highlight via emissive or outline.
  - Camera transition from outside door into the room.
  - Overlay panels wired to About data (bio/profile/skills/experience) and simple embeds for YouTube content.
  - Router navigation for telephone (`/contact`) and computer screen (`/projects`).

## Integration
- Update `src/views/AboutView.vue` to mount `<AboutScene />` at the top, keeping the existing textual layout below as a fallback (toggle button: “Switch to classic About”).
- Create optional composable `src/composables/useAboutData.ts` to reuse existing GraphQL query results between the view and scene overlays.

## Interaction Mapping
- Desk → Bio/Journey overlay (existing `bio` content).
- Framed photo → Profile card (name, title, avatar).
- TV → YouTube embed (channel link or featured uploads from VideosView).
- Wall frames → Skills/Experience panels (existing sections, rendered as framed content).
- Lamp → Ambient light toggle.
- Photography corner → Skills gallery focusing creative tools.
- Telephone → Navigate to `/contact` with a short ring animation.
- Computer screen → Navigate to `/projects` (Projects Overview page).

## Technical Choices
- Three.js dynamically imported in `AboutScene.vue`.
- Use `Raycaster` for picking; debounce hover state.
- Keep materials simple (MeshStandard/Phong) with small WEBP textures; later swap for GLTF assets.
- Camera easing via small tweens or `OrbitControls` limited to interior.

## Performance & Accessibility
- Lazy initialize when About view enters viewport; pause when tab hidden.
- Cap pixel ratio; respect `prefers-reduced-motion` to skip camera animations.
- Overlay panels are keyboard-focusable; each interactive object has an aria-label tooltip.
- Dispose all geometries/materials/textures on unmount.

## Milestone Steps
1. Scaffold `AboutScene.vue`: renderer/camera/lights, exterior door + interior room, raycast hover/click.
2. Implement clickable objects and overlay panels; wire to existing About data.
3. Add telephone and computer routing, and basic TV/photography corner.
4. Polish lighting, hover highlights, camera transitions; add fallback toggle to classic layout.

## Verification
- Run dev, confirm scene mounts, interactions work, overlays show correct content, telephone/computer routing works.
- Check performance and reduced-motion behavior.

## Next Phases (Optional)
- Replace primitives with optimized GLTF assets (desk, couch, camera).
- Add additional rooms or details; refine materials and textures.
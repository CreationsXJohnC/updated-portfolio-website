## Status Check
- Inspect existing terminals to confirm the client dev server and API are running
- Verify preview endpoint `http://localhost:5173/` and API `http://localhost:4000/graphql`

## Start Client Dev Server (if needed)
- From `integrated-portfolio/client`, run `npm run dev`
- Ensure Vite reports a local URL (expected: `http://localhost:5173/`)

## Start API Server (if needed)
- From `integrated-portfolio/server`, run `npm run dev` (nodemon)
- Confirm GraphQL responds at `http://localhost:4000/graphql`

## Open the Preview
- Use the Vite dev server URL: `http://localhost:5173/`
- Confirm pages load and starfields render (Home, About, Projects, Contact, YouTube)

## Quick Verification
- Check that Apollo requests succeed (no 500s); if not, confirm `VITE_API_URL`
- Ignore third‑party kit load warnings if they don’t affect functionality

## If Issues Occur
- Restart both servers in their respective folders
- Hard refresh the browser and clear cache if necessary
- Review console/network logs for blocked requests or missing assets
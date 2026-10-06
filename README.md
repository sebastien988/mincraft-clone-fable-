# Voxelcraft

An infinite, procedurally generated voxel world you can dig, build and explore, running entirely in the browser on WebGL2.

Live: https://voxelcraft-peach.vercel.app/

## Layout

- `index.html`, `style.css` — page and UI
- `src/main.js` — renderer, input, game loop
- `src/worker.js` — world generation / meshing in a Web Worker
- `assets/` — block texture atlas (`blocks.png`, `blocks.json`) and icon
- `vercel.json` — clean URLs and cache headers

## Running locally

No build step. Serve the folder with any static server, e.g.:

```sh
npx serve .
# or
python3 -m http.server
```

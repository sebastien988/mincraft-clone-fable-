# Voxelcraft

An infinite, procedurally generated voxel world you can dig, build and explore, running entirely in the browser on WebGL2.

Live: https://voxelcraft-peach.vercel.app/

## Game modes

Pick one on the title screen (saved worlds remember their mode):

- **Survival** — 10 hearts, fall damage, drowning, slow health regeneration. Hold left click to
  mine; harder blocks take longer and bedrock can't be broken. Mined blocks go into your
  inventory (grass/stone drop dirt/cobblestone; leaves, glass, ice and plants drop nothing)
  and placing uses them up. No flying. You respawn at world spawn when you die and keep your blocks.
- **Creative** — fly (`F` / double-tap Space), instant breaking, every block available.

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

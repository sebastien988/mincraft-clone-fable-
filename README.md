# Voxelcraft

An infinite, procedurally generated voxel world you can dig, build and explore, running entirely in the browser on WebGL2.

Live: https://voxelcraft-peach.vercel.app/

## Game modes

Pick one on the title screen (saved worlds remember their mode):

- **Survival** — 10 hearts, fall damage, drowning, slow health regeneration. Hold left click to
  mine; harder blocks take longer and bedrock can't be broken. Mined blocks go into your
  inventory (grass/stone drop dirt/cobblestone; leaves, glass, ice and plants drop nothing)
  and placing uses them up. No flying. You respawn at world spawn when you die and keep your blocks.

### Survival inventory & crafting

`E` opens a 36-slot inventory (hotbar + 27 storage, stacks of 64) with a 2×2 crafting grid.
Right-click a placed **Crafting Table** for a 3×3 grid. Left click takes/places a stack, right
click splits a stack or places one item, shift-click moves a stack between hotbar and storage
(or crafts as many as fit when used on the result slot).

| Recipe | Result |
| --- | --- |
| Log | 4 Planks |
| 2 Planks (stacked vertically) | 4 Sticks |
| 2×2 Planks | Crafting Table |
| Coal over Stick | 4 Torches |
| 2×2 Sand / 2×2 Clay | Sandstone / Bricks |
| 3 Planks or Cobblestone over 2 Sticks (T shape) | Pickaxe (3×3) |
| Axe / Shovel shapes with Planks or Cobblestone | Axe / Shovel |

Tools mine their blocks faster (stone tools more so) and wear out (wood 60 uses, stone 132).
Stone, cobblestone, ores, bricks, sandstone and obsidian need a pickaxe to drop anything.
Coal ore drops coal.

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

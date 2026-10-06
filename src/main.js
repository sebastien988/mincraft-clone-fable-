var Pe = Object.defineProperty;
var Pt = (i, t, e) => () => {
  if (e) throw e[0];
  try {
    return (i && (t = i((i = 0))), t);
  } catch (s) {
    throw ((e = [s]), s);
  }
};
var Fe = (i, t) => {
  for (var e in t) Pe(i, e, { get: t[e], enumerable: !0 });
};
function Be(i, t, e) {
  return Object.assign(
    {
      id: i,
      name: t,
      tex: _(A.stone),
      render: I.SOLID,
      solid: !0,
      opaque: !0,
      opacity: 15,
      emit: 0,
      liquid: !1,
      hardness: 1,
      icon: null,
    },
    e,
  );
}
function E(i, t, e) {
  let s = Be(i, t, e);
  (s.icon === null && (s.icon = s.tex[2]), (Z[i] = s));
}
function ie(i) {
  let t = ft[i];
  return i === p.AIR || t === I.LIQUID || t === I.CROSS;
}
var J,
  A,
  I,
  p,
  _,
  ht,
  Z,
  tt,
  se,
  K,
  ct,
  et,
  lt,
  ft,
  At,
  ut,
  Ft,
  G = Pt(() => {
    ((J = [
      "stone",
      "dirt",
      "grass_top",
      "grass_side",
      "sand",
      "sandstone_side",
      "sandstone_top",
      "gravel",
      "log_side",
      "log_top",
      "leaves",
      "planks",
      "cobblestone",
      "mossy_cobblestone",
      "bricks",
      "glass",
      "water",
      "bedrock",
      "coal_ore",
      "iron_ore",
      "gold_ore",
      "diamond_ore",
      "snow",
      "snow_side",
      "ice",
      "cactus_side",
      "cactus_top",
      "glowstone",
      "obsidian",
      "clay",
      "flower_red",
      "flower_yellow",
      "tall_grass",
      "dead_bush",
      "torch",
    ]),
      (A = {}));
    J.forEach((i, t) => {
      A[i] = t;
    });
    ((I = { NONE: 0, SOLID: 1, CUTOUT: 2, LIQUID: 3, CROSS: 4, TORCH: 5 }),
      (p = {
        AIR: 0,
        STONE: 1,
        GRASS: 2,
        DIRT: 3,
        COBBLESTONE: 4,
        MOSSY_COBBLESTONE: 5,
        PLANKS: 6,
        SAND: 7,
        SANDSTONE: 8,
        GRAVEL: 9,
        LOG: 10,
        LEAVES: 11,
        GLASS: 12,
        WATER: 13,
        BEDROCK: 14,
        COAL_ORE: 15,
        IRON_ORE: 16,
        GOLD_ORE: 17,
        DIAMOND_ORE: 18,
        SNOW_GRASS: 19,
        SNOW: 20,
        ICE: 21,
        CACTUS: 22,
        BRICKS: 23,
        GLOWSTONE: 24,
        OBSIDIAN: 25,
        CLAY: 26,
        FLOWER_RED: 27,
        FLOWER_YELLOW: 28,
        TALL_GRASS: 29,
        DEAD_BUSH: 30,
        TORCH: 31,
      }),
      (_ = (i) => [i, i, i, i, i, i]),
      (ht = (i, t, e) => [t, t, i, e, t, t]));
    Z = [];
    E(p.AIR, "Air", { render: I.NONE, solid: !1, opaque: !1, opacity: 0, tex: _(0) });
    E(p.STONE, "Stone", { tex: _(A.stone), hardness: 3 });
    E(p.GRASS, "Grass Block", { tex: ht(A.grass_top, A.grass_side, A.dirt) });
    E(p.DIRT, "Dirt", { tex: _(A.dirt) });
    E(p.COBBLESTONE, "Cobblestone", { tex: _(A.cobblestone), hardness: 3 });
    E(p.MOSSY_COBBLESTONE, "Mossy Cobblestone", { tex: _(A.mossy_cobblestone), hardness: 3 });
    E(p.PLANKS, "Planks", { tex: _(A.planks), hardness: 2 });
    E(p.SAND, "Sand", { tex: _(A.sand) });
    E(p.SANDSTONE, "Sandstone", {
      tex: ht(A.sandstone_top, A.sandstone_side, A.sandstone_top),
      hardness: 2,
    });
    E(p.GRAVEL, "Gravel", { tex: _(A.gravel) });
    E(p.LOG, "Log", { tex: ht(A.log_top, A.log_side, A.log_top), hardness: 2 });
    E(p.LEAVES, "Leaves", {
      tex: _(A.leaves),
      render: I.CUTOUT,
      opaque: !1,
      opacity: 2,
      hardness: 0.5,
    });
    E(p.GLASS, "Glass", {
      tex: _(A.glass),
      render: I.CUTOUT,
      opaque: !1,
      opacity: 0,
      hardness: 0.5,
    });
    E(p.WATER, "Water", {
      tex: _(A.water),
      render: I.LIQUID,
      solid: !1,
      opaque: !1,
      opacity: 2,
      liquid: !0,
      hardness: 100,
    });
    E(p.BEDROCK, "Bedrock", { tex: _(A.bedrock), hardness: 1e3 });
    E(p.COAL_ORE, "Coal Ore", { tex: _(A.coal_ore), hardness: 3 });
    E(p.IRON_ORE, "Iron Ore", { tex: _(A.iron_ore), hardness: 3 });
    E(p.GOLD_ORE, "Gold Ore", { tex: _(A.gold_ore), hardness: 3 });
    E(p.DIAMOND_ORE, "Diamond Ore", { tex: _(A.diamond_ore), hardness: 4 });
    E(p.SNOW_GRASS, "Snowy Grass", { tex: ht(A.snow, A.snow_side, A.dirt) });
    E(p.SNOW, "Snow Block", { tex: _(A.snow) });
    E(p.ICE, "Ice", { tex: _(A.ice), render: I.CUTOUT, opaque: !1, opacity: 1, hardness: 0.5 });
    E(p.CACTUS, "Cactus", { tex: ht(A.cactus_top, A.cactus_side, A.cactus_top), hardness: 0.5 });
    E(p.BRICKS, "Bricks", { tex: _(A.bricks), hardness: 3 });
    E(p.GLOWSTONE, "Glowstone", { tex: _(A.glowstone), emit: 14, hardness: 1 });
    E(p.OBSIDIAN, "Obsidian", { tex: _(A.obsidian), hardness: 10 });
    E(p.CLAY, "Clay", { tex: _(A.clay) });
    E(p.FLOWER_RED, "Red Flower", {
      tex: _(A.flower_red),
      render: I.CROSS,
      solid: !1,
      opaque: !1,
      opacity: 0,
      hardness: 0.1,
    });
    E(p.FLOWER_YELLOW, "Yellow Flower", {
      tex: _(A.flower_yellow),
      render: I.CROSS,
      solid: !1,
      opaque: !1,
      opacity: 0,
      hardness: 0.1,
    });
    E(p.TALL_GRASS, "Tall Grass", {
      tex: _(A.tall_grass),
      render: I.CROSS,
      solid: !1,
      opaque: !1,
      opacity: 0,
      hardness: 0.1,
    });
    E(p.DEAD_BUSH, "Dead Bush", {
      tex: _(A.dead_bush),
      render: I.CROSS,
      solid: !1,
      opaque: !1,
      opacity: 0,
      hardness: 0.1,
    });
    E(p.TORCH, "Torch", {
      tex: _(A.torch),
      render: I.TORCH,
      solid: !1,
      opaque: !1,
      opacity: 0,
      emit: 14,
      hardness: 0.1,
    });
    ((tt = Z.length),
      (se = new Uint8Array(tt)),
      (K = new Uint8Array(tt)),
      (ct = new Uint8Array(tt)),
      (et = new Uint8Array(tt)),
      (lt = new Uint8Array(tt)),
      (ft = new Uint8Array(tt)),
      (At = new Uint8Array(tt * 6)));
    for (let i = 0; i < tt; i++) {
      let t = Z[i];
      ((se[i] = t.opaque ? 1 : 0),
        (K[i] = t.solid ? 1 : 0),
        (ct[i] = t.liquid ? 1 : 0),
        (et[i] = t.opacity),
        (lt[i] = t.emit),
        (ft[i] = t.render));
      for (let e = 0; e < 6; e++) At[i * 6 + e] = t.tex[e];
    }
    ((ut = [p.GRASS, p.STONE, p.COBBLESTONE, p.PLANKS, p.LOG, p.LEAVES, p.SAND, p.GLASS, p.TORCH]),
      (Ft = [
        p.GRASS,
        p.DIRT,
        p.STONE,
        p.COBBLESTONE,
        p.MOSSY_COBBLESTONE,
        p.BRICKS,
        p.PLANKS,
        p.LOG,
        p.LEAVES,
        p.SAND,
        p.SANDSTONE,
        p.GRAVEL,
        p.CLAY,
        p.SNOW,
        p.SNOW_GRASS,
        p.ICE,
        p.OBSIDIAN,
        p.BEDROCK,
        p.COAL_ORE,
        p.IRON_ORE,
        p.GOLD_ORE,
        p.DIAMOND_ORE,
        p.GLOWSTONE,
        p.GLASS,
        p.CACTUS,
        p.TORCH,
        p.FLOWER_RED,
        p.FLOWER_YELLOW,
        p.TALL_GRASS,
        p.DEAD_BUSH,
        p.WATER,
      ]));
  });
function ot(i) {
  let t = i >>> 0;
  return function () {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function oe(i) {
  let t = 2166136261;
  for (let e = 0; e < i.length; e++) ((t ^= i.charCodeAt(e)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function ne(i, t, e, s) {
  let o = (s ^ 2654435769) >>> 0;
  return (
    (o = Math.imul(o ^ (i | 0), 2246822507) >>> 0),
    (o = Math.imul(o ^ (t | 0), 3266489909) >>> 0),
    (o = Math.imul(o ^ (e | 0), 668265263) >>> 0),
    (o ^= o >>> 15),
    (o = Math.imul(o, 625341585) >>> 0),
    (o ^= o >>> 13),
    (o >>> 0) / 4294967296
  );
}
var nt = Pt(() => {});
var ae = {};
Fe(ae, {
  Painter: () => dt,
  RECIPES: () => Q,
  TILE: () => m,
  generateAtlasData: () => He,
  generateLayer: () => Ve,
});
function re(i, t, e) {
  i.clear(0);
  for (let n = 9; n < m; n++) (i.set(7, n, 62, 122, 48, 255), i.set(8, n, 74, 138, 56, 255));
  (i.set(5, 11, 68, 132, 52, 255), i.set(10, 13, 68, 132, 52, 255));
  let s = 7.5,
    o = 6;
  for (let n = 2; n <= 9; n++)
    for (let r = 3; r < 13; r++) {
      let a = Math.hypot(r - s, n - o);
      if (a > 3.6) continue;
      let h = (i.rand() - 0.5) * 26;
      a < 1.4 ? i.set(r, n, e[0], e[1], e[2], 255) : i.set(r, n, t[0] + h, t[1] + h, t[2] + h, 255);
    }
  i.bleedAlpha();
}
function He(i = 1337) {
  let t = J.length,
    e = m * m * 4,
    s = new Uint8Array(e * t);
  return (
    J.forEach((o, n) => {
      let r = new dt((i + n * 7919) >>> 0),
        a = Q[o];
      (a ? a(r) : r.fill([255, 0, 220], 20), s.set(r.d, n * e));
    }),
    { data: s, layers: t, tile: m }
  );
}
function Ve(i, t = 1337) {
  let e = J.indexOf(i),
    s = new dt((t + e * 7919) >>> 0);
  return (Q[i](s), s.d);
}
var m,
  dt,
  Bt,
  ze,
  vt,
  Q,
  he = Pt(() => {
    G();
    nt();
    ((m = 16),
      (dt = class {
        constructor(t) {
          ((this.d = new Uint8ClampedArray(m * m * 4)), (this.rand = ot(t)));
        }
        set(t, e, s, o, n, r = 255) {
          if (t < 0 || e < 0 || t >= m || e >= m) return;
          let a = (e * m + t) * 4;
          ((this.d[a] = s), (this.d[a + 1] = o), (this.d[a + 2] = n), (this.d[a + 3] = r));
        }
        get(t, e) {
          let s = ((e & 15) * m + (t & 15)) * 4;
          return [this.d[s], this.d[s + 1], this.d[s + 2], this.d[s + 3]];
        }
        clear(t = 0) {
          for (let e = 0; e < this.d.length; e += 4)
            ((this.d[e] = this.d[e + 1] = this.d[e + 2] = 0), (this.d[e + 3] = t));
        }
        fill(t, e = 0, s = 255) {
          for (let o = 0; o < m; o++)
            for (let n = 0; n < m; n++) {
              let r = (this.rand() - 0.5) * 2 * e;
              this.set(n, o, t[0] + r, t[1] + r, t[2] + r, s);
            }
        }
        blobs(t, e, s, o = 10, n = 255) {
          for (let r = 0; r < e; r++) {
            let a = this.rand() * m,
              h = this.rand() * m,
              l = s * (0.6 + this.rand() * 0.8);
            for (let c = Math.floor(h - l); c <= h + l; c++)
              for (let f = Math.floor(a - l); f <= a + l; f++) {
                let u = f - a,
                  d = c - h;
                if (u * u + d * d > l * l) continue;
                let g = (this.rand() - 0.5) * 2 * o;
                this.set((f + m) % m, (c + m) % m, t[0] + g, t[1] + g, t[2] + g, n);
              }
          }
        }
        specks(t, e, s = 8) {
          for (let o = 0; o < e; o++) {
            let n = (this.rand() - 0.5) * 2 * s;
            this.set((this.rand() * m) | 0, (this.rand() * m) | 0, t[0] + n, t[1] + n, t[2] + n);
          }
        }
        cells(t, e, s, o = 20) {
          let n = [],
            r = [],
            a = [];
          for (let h = 0; h < e; h++)
            (n.push(this.rand() * m), r.push(this.rand() * m), a.push((this.rand() - 0.5) * 2 * o));
          for (let h = 0; h < m; h++)
            for (let l = 0; l < m; l++) {
              let c = 1e9,
                f = 1e9,
                u = 0;
              for (let g = 0; g < e; g++) {
                let x = Math.abs(l + 0.5 - n[g]);
                x > m / 2 && (x = m - x);
                let y = Math.abs(h + 0.5 - r[g]);
                y > m / 2 && (y = m - y);
                let R = x * x + y * y;
                R < c ? ((f = c), (c = R), (u = g)) : R < f && (f = R);
              }
              if (Math.sqrt(f) - Math.sqrt(c) < 0.85) this.set(l, h, s[0], s[1], s[2]);
              else {
                let g = a[u] + (this.rand() - 0.5) * 8;
                this.set(l, h, t[0] + g, t[1] + g, t[2] + g);
              }
            }
        }
        rect(t, e, s, o, n, r = 255) {
          for (let a = e; a < e + o; a++)
            for (let h = t; h < t + s; h++) this.set(h, a, n[0], n[1], n[2], r);
        }
        bleedAlpha() {
          let t = new Uint8ClampedArray(this.d);
          for (let e = 0; e < 4; e++) {
            for (let s = 0; s < m; s++)
              for (let o = 0; o < m; o++) {
                let n = (s * m + o) * 4;
                if (t[n + 3] > 0) continue;
                let r = 0,
                  a = 0,
                  h = 0,
                  l = 0;
                for (let c = -1; c <= 1; c++)
                  for (let f = -1; f <= 1; f++) {
                    let u = o + f,
                      d = s + c;
                    if (u < 0 || d < 0 || u >= m || d >= m) continue;
                    let g = (d * m + u) * 4;
                    (t[g + 3] === 0 && !(t[g] || t[g + 1] || t[g + 2])) ||
                      ((r += t[g]), (a += t[g + 1]), (h += t[g + 2]), l++);
                  }
                l && ((this.d[n] = r / l), (this.d[n + 1] = a / l), (this.d[n + 2] = h / l));
              }
            t.set(this.d);
          }
        }
      }),
      (Bt = [128, 128, 131]),
      (ze = [134, 96, 67]),
      (vt = [92, 156, 58]),
      (Q = {
        stone(i) {
          (i.fill(Bt, 14),
            i.blobs([112, 112, 116], 5, 3, 8),
            i.specks([150, 150, 154], 20),
            i.specks([100, 100, 104], 20));
        },
        dirt(i) {
          (i.fill(ze, 16),
            i.blobs([120, 84, 56], 6, 3, 10),
            i.specks([100, 70, 46], 26),
            i.specks([158, 118, 84], 18));
        },
        grass_top(i) {
          (i.fill(vt, 18),
            i.blobs([78, 138, 46], 7, 3.2, 10),
            i.blobs([110, 176, 70], 5, 2.4, 10),
            i.specks([70, 124, 42], 26));
        },
        grass_side(i) {
          Q.dirt(i);
          for (let t = 0; t < m; t++) {
            let e = 3 + Math.floor(i.rand() * 3);
            for (let s = 0; s < e; s++) {
              let o = (i.rand() - 0.5) * 30;
              i.set(t, s, vt[0] + o, vt[1] + o, vt[2] + o);
            }
          }
        },
        sand(i) {
          (i.fill([219, 207, 163], 10),
            i.specks([200, 187, 143], 30),
            i.specks([234, 224, 186], 20));
        },
        sandstone_side(i) {
          i.fill([216, 203, 155], 7);
          for (let t = 0; t < m; t++) t % 5 === 0 && i.rect(0, t, m, 1, [196, 182, 136]);
          i.specks([228, 216, 172], 18);
        },
        sandstone_top(i) {
          (i.fill([221, 209, 162], 9), i.specks([202, 189, 145], 22));
        },
        gravel(i) {
          (i.fill([131, 127, 124], 12),
            i.blobs([104, 100, 98], 9, 2.4, 10),
            i.blobs([158, 154, 150], 7, 1.8, 10),
            i.specks([84, 80, 78], 22));
        },
        log_side(i) {
          i.fill([106, 84, 52], 10);
          for (let t = 0; t < m; t++)
            if (i.rand() < 0.42) {
              let e = i.rand() < 0.5 ? -22 : 18;
              for (let s = 0; s < m; s++)
                if (i.rand() < 0.82) {
                  let o = i.get(t, s);
                  i.set(t, s, o[0] + e, o[1] + e, o[2] + e);
                }
            }
        },
        log_top(i) {
          i.fill([160, 130, 84], 8);
          let t = 7.5,
            e = 7.5;
          for (let s = 0; s < m; s++)
            for (let o = 0; o < m; o++) {
              let n = Math.hypot(o - t, s - e);
              if (n > 7.2) {
                i.set(o, s, 106, 84, 52);
                continue;
              }
              let a = (Math.sin(n * 2.1) * 0.5 + 0.5) * 26 - 13 + (i.rand() - 0.5) * 8;
              i.set(o, s, 160 + a, 130 + a * 0.85, 84 + a * 0.7);
            }
        },
        leaves(i) {
          i.clear(0);
          for (let t = 0; t < m; t++)
            for (let e = 0; e < m; e++) {
              if (i.rand() < 0.17) continue;
              let s = (i.rand() - 0.5) * 46,
                o = i.rand() < 0.3 ? -24 : 0;
              i.set(e, t, 56 + s + o, 128 + s + o, 44 + s + o, 255);
            }
          i.bleedAlpha();
        },
        planks(i) {
          i.fill([160, 130, 82], 9);
          for (let t = 0; t < m; t++)
            t % 4 === 3
              ? i.rect(0, t, m, 1, [124, 98, 60])
              : t % 4 === 0 && i.rect(0, t, m, 1, [176, 145, 96]);
          for (let t = 0; t < 4; t++) {
            let e = (i.rand() * m) | 0;
            for (let s = t * 4; s < t * 4 + 3; s++) i.set(e, s, 124, 98, 60);
          }
          i.specks([140, 112, 70], 16);
        },
        cobblestone(i) {
          i.cells(Bt, 9, [78, 78, 82], 26);
        },
        mossy_cobblestone(i) {
          (i.cells(Bt, 9, [70, 78, 66], 26), i.blobs([76, 118, 58], 8, 2.6, 14));
        },
        bricks(i) {
          i.fill([166, 168, 168], 4);
          for (let t = 0; t < 4; t++) {
            let e = t % 2 ? 0 : 4;
            for (let s = -1; s < 3; s++) {
              let o = s * 8 + e,
                n = (i.rand() - 0.5) * 18;
              for (let r = t * 4; r < t * 4 + 3; r++)
                for (let a = o; a < o + 7; a++) {
                  let h = (i.rand() - 0.5) * 10;
                  i.set((a + m) % m, r, 150 + n + h, 82 + n * 0.6 + h, 64 + n * 0.5 + h);
                }
            }
          }
        },
        glass(i) {
          i.clear(0);
          for (let t = 0; t < m; t++)
            (i.set(t, 0, 214, 232, 240, 190),
              i.set(t, m - 1, 214, 232, 240, 190),
              i.set(0, t, 214, 232, 240, 190),
              i.set(m - 1, t, 214, 232, 240, 190));
          for (let t = 2; t < 7; t++) i.set(t, t + 1, 240, 250, 255, 150);
          for (let t = 9; t < 13; t++) i.set(t, t - 5, 240, 250, 255, 110);
          i.bleedAlpha();
        },
        water(i) {
          (i.fill([46, 96, 186], 9, 200),
            i.blobs([62, 118, 208], 6, 3.4, 8, 200),
            i.specks([80, 140, 220], 14));
          for (let t = 3; t < i.d.length; t += 4) i.d[t] = 200;
        },
        bedrock(i) {
          (i.fill([78, 78, 80], 10),
            i.blobs([44, 44, 46], 10, 3.2, 10),
            i.blobs([116, 116, 120], 7, 2.2, 12));
        },
        coal_ore(i) {
          (Q.stone(i), i.blobs([32, 32, 34], 4, 2.6, 10));
        },
        iron_ore(i) {
          (Q.stone(i), i.blobs([196, 148, 116], 4, 2.4, 12));
        },
        gold_ore(i) {
          (Q.stone(i), i.blobs([236, 204, 84], 4, 2.3, 14));
        },
        diamond_ore(i) {
          (Q.stone(i), i.blobs([96, 232, 226], 4, 2.2, 14));
        },
        snow(i) {
          (i.fill([246, 249, 252], 6), i.specks([228, 234, 242], 16));
        },
        snow_side(i) {
          Q.dirt(i);
          for (let t = 0; t < m; t++) {
            let e = 3 + Math.floor(i.rand() * 3);
            for (let s = 0; s < e; s++) {
              let o = (i.rand() - 0.5) * 12;
              i.set(t, s, 246 + o, 249 + o, 252 + o);
            }
          }
        },
        ice(i) {
          i.fill([146, 190, 236], 8, 205);
          for (let t = 0; t < 5; t++) {
            let e = (i.rand() * m) | 0,
              s = (i.rand() * m) | 0;
            for (let o = 0; o < 8; o++)
              (i.set(e, s, 186, 218, 248, 215),
                (e = (e + (i.rand() < 0.5 ? 1 : 0) + m) % m),
                (s = (s + 1) % m));
          }
          for (let t = 3; t < i.d.length; t += 4) i.d[t] = 205;
        },
        cactus_side(i) {
          (i.fill([74, 122, 56], 9),
            i.rect(0, 0, 1, m, [56, 96, 42]),
            i.rect(m - 1, 0, 1, m, [56, 96, 42]));
          for (let t = 0; t < m; t += 3)
            (i.set(3 + ((i.rand() * 2) | 0), t, 190, 196, 176),
              i.set(11 + ((i.rand() * 2) | 0), t + 1, 190, 196, 176));
        },
        cactus_top(i) {
          i.fill([88, 140, 66], 8);
          for (let t = 0; t < m; t++)
            for (let e = 0; e < m; e++)
              Math.hypot(e - 7.5, t - 7.5) > 6.4 && i.set(e, t, 62, 104, 46);
        },
        glowstone(i) {
          (i.fill([148, 116, 66], 10),
            i.blobs([252, 226, 140], 9, 2.6, 14),
            i.specks([255, 244, 190], 18));
        },
        obsidian(i) {
          (i.fill([26, 22, 36], 7), i.specks([70, 56, 96], 22), i.blobs([16, 14, 24], 5, 2.6, 6));
        },
        clay(i) {
          (i.fill([162, 168, 180], 9), i.specks([144, 150, 164], 20));
        },
        flower_red(i) {
          re(i, [214, 60, 56], [246, 232, 96]);
        },
        flower_yellow(i) {
          re(i, [232, 206, 70], [252, 248, 180]);
        },
        tall_grass(i) {
          i.clear(0);
          for (let t = 0; t < 7; t++) {
            let e = 1 + ((i.rand() * 14) | 0),
              s = 7 + ((i.rand() * 7) | 0),
              o = e;
            for (let n = m - 1; n > m - 1 - s; n--) {
              let r = (i.rand() - 0.5) * 30;
              (i.set(o, n, 74 + r, 142 + r, 52 + r, 255),
                i.rand() < 0.3 && (o += i.rand() < 0.5 ? 1 : -1));
            }
          }
          i.bleedAlpha();
        },
        dead_bush(i) {
          i.clear(0);
          for (let t = 0; t < 5; t++) {
            let e = 3 + ((i.rand() * 10) | 0),
              s = 6 + ((i.rand() * 6) | 0);
            for (let o = m - 1; o > m - 1 - s; o--) {
              let n = (i.rand() - 0.5) * 24;
              (i.set(e, o, 132 + n, 104 + n, 52 + n, 255),
                i.rand() < 0.45 && (e += i.rand() < 0.5 ? 1 : -1));
            }
          }
          i.bleedAlpha();
        },
        torch(i) {
          i.clear(0);
          for (let t = 6; t < m; t++) {
            let e = (i.rand() - 0.5) * 16;
            (i.set(7, t, 118 + e, 88 + e, 48 + e, 255), i.set(8, t, 138 + e, 104 + e, 58 + e, 255));
          }
          for (let t = 3; t < 6; t++)
            for (let e = 6; e < 10; e++) {
              let s = 1 - (t - 3) / 4;
              i.set(e, t, 255, 190 + s * 60, 60 + s * 90, 255);
            }
          (i.set(7, 2, 255, 244, 190, 255), i.set(8, 2, 255, 236, 170, 255), i.bleedAlpha());
        },
      }));
  });
var qt = `#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in uint aPos;
layout(location = 1) in uint aTex;

uniform mat4 uViewProj;
uniform vec3 uChunkOrigin;
uniform vec3 uCameraPos;
uniform vec3 uSkyLightColor;
uniform float uDaylight;
uniform float uTime;
uniform float uWave;

out vec2 vUV;
out float vLayer;
out vec3 vLight;
out float vDist;
out vec3 vWorldPos;
out vec3 vNormal;

// Per-face brightness: +X, -X, +Y, -Y, +Z, -Z.
const float SHADE[6] = float[6](0.72, 0.72, 1.0, 0.52, 0.86, 0.86);
const vec3 NORMALS[6] = vec3[6](
  vec3(1, 0, 0), vec3(-1, 0, 0), vec3(0, 1, 0),
  vec3(0, -1, 0), vec3(0, 0, 1), vec3(0, 0, -1));

void main() {
  // Positions are stored in eighths of a block.
  vec3 local = vec3(
    float(aPos & 0xFFu),
    float((aPos >> 8) & 0x7FFu),
    float((aPos >> 19) & 0xFFu)) * 0.125;

  uint face = (aPos >> 27) & 7u;
  float ao = float((aPos >> 30) & 3u) / 3.0;

  float u = float(aTex & 0xFFu);
  float v = float((aTex >> 8) & 0xFFu);
  vLayer = float((aTex >> 16) & 0xFFu);
  float sky = float((aTex >> 24) & 15u) / 15.0;
  float blk = float((aTex >> 28) & 15u) / 15.0;

  vec3 world = uChunkOrigin + local;

  // Foliage sway. Only the upper vertices of a plant quad move, so the base
  // stays planted in the ground.
  if (uWave > 0.5 && v < 0.5) {
    float t = uTime * 1.9;
    world.x += sin(t + world.x * 0.7 + world.z * 0.9) * 0.055;
    world.z += cos(t * 0.85 + world.x * 0.5 + world.z * 0.6) * 0.055;
  }

  // Sky light is scaled by time of day; block light is warm and constant.
  // They add rather than max() so a torch still brightens a lit surface.
  vec3 lit = uSkyLightColor * pow(sky, 1.35) * uDaylight
           + vec3(1.0, 0.74, 0.46) * pow(blk, 1.55) * 1.15;
  lit = min(lit + 0.028, vec3(1.32));

  vUV = vec2(u, v);
  vLight = lit * SHADE[int(face)] * (0.5 + 0.5 * ao);
  vNormal = NORMALS[int(face)];
  vWorldPos = world;
  vDist = length(world - uCameraPos);
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,
  $t = `#version 300 es
precision highp float;
precision highp sampler2DArray;

in vec2 vUV;
in float vLayer;
in vec3 vLight;
in float vDist;
in vec3 vWorldPos;
in vec3 vNormal;

uniform sampler2DArray uAtlas;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uFogStart;
uniform float uAlphaCutoff;
uniform float uOpacity;
uniform vec2 uUVScroll;
uniform float uSpecular;
uniform float uMipSharpen;
uniform vec3 uSunDir;
uniform vec3 uCameraPos;

out vec4 fragColor;

void main() {
  vec2 uv = vUV + uUVScroll;
  // Explicit gradients rather than texture(): the array layer must never take
  // part in mip selection, which some drivers get wrong where two blocks with
  // different textures meet. Scaling them down biases towards a sharper level,
  // which suits the pixel-art look without reintroducing distant shimmer.
  vec2 ddx = dFdx(uv) * uMipSharpen;
  vec2 ddy = dFdy(uv) * uMipSharpen;
  vec4 texel = textureGrad(uAtlas, vec3(uv, vLayer), ddx, ddy);
  if (texel.a < uAlphaCutoff) discard;

  vec3 color = texel.rgb * vLight;

  // Sun glint on water.
  if (uSpecular > 0.0) {
    vec3 view = normalize(uCameraPos - vWorldPos);
    vec3 h = normalize(view + uSunDir);
    float spec = pow(max(dot(vNormal, h), 0.0), 48.0);
    color += vec3(1.0, 0.97, 0.88) * spec * uSpecular;
  }

  // Exponential-squared distance fog, held off until uFogStart so nearby
  // geometry keeps full contrast.
  float d = max(vDist - uFogStart, 0.0) * uFogDensity;
  float fog = clamp(exp(-d * d), 0.0, 1.0);
  color = mix(uFogColor, color, fog);

  fragColor = vec4(color, texel.a * uOpacity);
}
`,
  Zt = `#version 300 es
precision highp float;
out vec2 vNDC;
void main() {
  // Oversized triangle covering the viewport, no vertex buffer needed.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vNDC = p * 2.0 - 1.0;
  gl_Position = vec4(vNDC, 1.0, 1.0);
}
`,
  Qt = `#version 300 es
precision highp float;

in vec2 vNDC;

uniform mat4 uInvViewProj;
uniform vec3 uCameraPos;
uniform vec3 uSunDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSunColor;
uniform float uStarFade;
uniform float uTime;
uniform float uCloudCover;

out vec4 fragColor;

float hash13(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float valueNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash13(vec3(i, 0.0));
  float b = hash13(vec3(i + vec2(1, 0), 0.0));
  float c = hash13(vec3(i + vec2(0, 1), 0.0));
  float d = hash13(vec3(i + vec2(1, 1), 0.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * valueNoise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec4 far = uInvViewProj * vec4(vNDC, 1.0, 1.0);
  vec3 dir = normalize(far.xyz / far.w - uCameraPos);

  // Vertical gradient, tightened near the horizon.
  float h = clamp(dir.y, -1.0, 1.0);
  float t = pow(clamp(h * 0.5 + 0.5, 0.0, 1.0), 0.55);
  vec3 color = mix(uHorizon, uZenith, smoothstep(0.42, 0.92, t));

  // Warm band hugging the horizon on the sun's side, which is what sells
  // sunrise and sunset.
  float sunAlign = max(dot(dir, normalize(vec3(uSunDir.x, 0.0, uSunDir.z))), 0.0);
  float band = pow(1.0 - abs(h), 7.0) * sunAlign;
  color = mix(color, uSunColor, band * 0.55);

  // Stars, quantised into direction cells and faded out by daylight.
  if (uStarFade > 0.01 && dir.y > -0.05) {
    vec3 cell = floor(dir * 210.0);
    float s = hash13(cell);
    if (s > 0.9965) {
      float twinkle = 0.65 + 0.35 * sin(uTime * 2.7 + s * 90.0);
      color += vec3(0.9, 0.93, 1.0) * (s - 0.9965) * 260.0 * twinkle * uStarFade;
    }
  }

  // Sun and moon discs with a soft bloom.
  float sunDot = dot(dir, uSunDir);
  color += uSunColor * pow(max(sunDot, 0.0), 620.0) * 4.0;
  color += uSunColor * pow(max(sunDot, 0.0), 26.0) * 0.16;
  float moonDot = dot(dir, -uSunDir);
  color += vec3(0.82, 0.86, 1.0) * pow(max(moonDot, 0.0), 900.0) * 3.2 * uStarFade;

  // Clouds on a plane above the world, faded out towards the horizon so the
  // layer never visibly ends.
  const float CLOUD_Y = 168.0;
  if (dir.y > 0.02 && uCameraPos.y < CLOUD_Y) {
    float dist = (CLOUD_Y - uCameraPos.y) / dir.y;
    vec2 cp = (uCameraPos.xz + dir.xz * dist) * 0.0016 + vec2(uTime * 0.0035, 0.0);
    float n = fbm(cp * 3.0);
    float cloud = smoothstep(0.52 - uCloudCover * 0.22, 0.78, n);
    float horizonFade = smoothstep(0.02, 0.30, dir.y);
    float depthFade = 1.0 - smoothstep(2200.0, 7000.0, dist);
    vec3 cloudColor = mix(uHorizon, vec3(1.0), 0.72) * (0.55 + 0.45 * (1.0 - uStarFade));
    color = mix(color, cloudColor, cloud * horizonFade * depthFade * 0.85);
  }

  fragColor = vec4(color, 1.0);
}
`,
  jt = `#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform vec3 uOffset;
uniform float uScale;
void main() {
  vec3 p = uOffset + (aPos - 0.5) * uScale + 0.5;
  gl_Position = uViewProj * vec4(p, 1.0);
}
`,
  Jt = `#version 300 es
precision highp float;
uniform vec4 uColor;
out vec4 fragColor;
void main() { fragColor = uColor; }
`,
  te = `#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUV;      // texel offset within the block texture
layout(location = 2) in vec2 aMeta;    // x: layer, y: size in pixels

uniform mat4 uViewProj;
uniform vec3 uCameraPos;

out vec2 vUV;
out float vLayer;

void main() {
  vUV = aUV;
  vLayer = aMeta.x;
  vec4 clip = uViewProj * vec4(aPos, 1.0);
  gl_Position = clip;
  float dist = max(length(aPos - uCameraPos), 0.5);
  gl_PointSize = clamp(aMeta.y / dist, 1.0, 24.0);
}
`,
  ee = `#version 300 es
precision highp float;
precision highp sampler2DArray;

in vec2 vUV;
in float vLayer;

uniform sampler2DArray uAtlas;
uniform vec3 uFogColor;
uniform float uLight;

out vec4 fragColor;

void main() {
  // Each particle shows one small patch of its block's texture.
  vec2 uv = vUV + gl_PointCoord * 0.18;
  vec4 texel = texture(uAtlas, vec3(uv, vLayer));
  if (texel.a < 0.5) discard;
  fragColor = vec4(texel.rgb * uLight, 1.0);
}
`;
G();
var F = 16,
  zt = "assets/blocks.png";
async function Ye() {
  let i = await fetch(zt, { cache: "force-cache" });
  if (!i.ok) throw new Error(`${zt}: HTTP ${i.status}`);
  let t = await createImageBitmap(await i.blob(), {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none",
    }),
    e = Math.round(t.height / F);
  if (t.width !== F || e !== J.length)
    throw new Error(
      `${zt} is ${t.width}x${t.height}, expected ${F}x${F * J.length} \u2014 re-run "npm run assets"`,
    );
  let s = document.createElement("canvas");
  ((s.width = F), (s.height = t.height));
  let o = s.getContext("2d", { willReadFrequently: !0 });
  o.drawImage(t, 0, 0);
  let n = new Uint8Array(o.getImageData(0, 0, F, t.height).data.buffer.slice(0));
  return (t.close(), { data: n, layers: e });
}
async function ce(i) {
  let t,
    e = !0;
  try {
    t = await Ye();
  } catch (h) {
    console.warn("[textures] falling back to procedural generation:", h.message);
    let { generateAtlasData: l } = await Promise.resolve().then(() => (he(), ae)),
      c = l(1337);
    ((t = { data: c.data, layers: c.layers }), (e = !1));
  }
  let { data: s, layers: o } = t,
    n = i.createTexture();
  (i.bindTexture(i.TEXTURE_2D_ARRAY, n),
    i.pixelStorei(i.UNPACK_ALIGNMENT, 4),
    i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1),
    i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
  let r = Math.log2(F) + 1;
  (i.texStorage3D(i.TEXTURE_2D_ARRAY, r, i.RGBA8, F, F, o),
    i.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, F, F, o, i.RGBA, i.UNSIGNED_BYTE, s),
    i.generateMipmap(i.TEXTURE_2D_ARRAY),
    i.texParameteri(i.TEXTURE_2D_ARRAY, i.TEXTURE_MAG_FILTER, i.NEAREST),
    i.texParameteri(i.TEXTURE_2D_ARRAY, i.TEXTURE_MIN_FILTER, i.NEAREST_MIPMAP_LINEAR),
    i.texParameteri(i.TEXTURE_2D_ARRAY, i.TEXTURE_WRAP_S, i.REPEAT),
    i.texParameteri(i.TEXTURE_2D_ARRAY, i.TEXTURE_WRAP_T, i.REPEAT));
  let a = i.getExtension("EXT_texture_filter_anisotropic");
  if (a) {
    let h = i.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    i.texParameterf(i.TEXTURE_2D_ARRAY, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, h));
  }
  return { tex: n, layers: o, data: s, fromAssets: e };
}
G();
var N = (i, t, e) => (t * 16 + e) * 16 + i;
var j = (i, t) => `${i},${t}`;
function le(i, t, e, s) {
  let o = new Uint8Array(42120),
    n = new Uint8Array(42120),
    r = 324;
  for (let a = -1; a < 17; a++)
    for (let h = -1; h < 17; h++) {
      let l = t * 16 + h,
        c = e * 16 + a,
        f = i(l >> 4, c >> 4),
        u = (a + 1) * 18 + (h + 1);
      if (!f) {
        for (let y = 0; y <= 128; y++) o[(y + 1) * r + u] = s;
        continue;
      }
      let d = N(l & 15, 0, c & 15),
        g = 1 * r + u;
      for (let y = 0; y < 128; y++)
        ((o[g] = f.blocks[d]), (n[g] = f.light[d]), (d += 256), (g += r));
      o[u] = s;
      let x = 129 * r + u;
      ((o[x] = 0), (n[x] = 240));
    }
  return { blocks: o, light: n };
}
var St = class {
  constructor(t, e) {
    ((this.cx = t),
      (this.cz = e),
      (this.blocks = new Uint8Array(32768)),
      (this.light = new Uint8Array(32768)),
      (this.heightmap = new Uint8Array(256)),
      (this.generated = !1),
      (this.lit = !1),
      (this.dirty = !0),
      (this.meshing = !1),
      (this.revision = 0),
      (this.meshRevision = -1),
      (this.gl = null),
      (this.edits = null));
  }
  getBlock(t, e, s) {
    return e < 0 || e >= 128 ? 0 : this.blocks[N(t, e, s)];
  }
  setBlock(t, e, s, o) {
    e < 0 || e >= 128 || (this.blocks[N(t, e, s)] = o);
  }
  getSky(t) {
    return this.light[t] >> 4;
  }
  getBlockLight(t) {
    return this.light[t] & 15;
  }
  setSky(t, e) {
    this.light[t] = (this.light[t] & 15) | (e << 4);
  }
  setBlockLight(t, e) {
    this.light[t] = (this.light[t] & 240) | e;
  }
  recordEdit(t, e, s, o) {
    (this.edits || (this.edits = new Map()), this.edits.set(N(t, e, s), o));
  }
  applyEdits(t) {
    if (t) {
      this.edits = t;
      for (let [e, s] of t) this.blocks[e] = s;
      this.recomputeHeightmap();
    }
  }
  recomputeHeightmap() {
    let { blocks: t, heightmap: e } = this;
    for (let s = 0; s < 16; s++)
      for (let o = 0; o < 16; o++) {
        let n = 0;
        for (let r = 127; r >= 0; r--)
          if (t[N(o, r, s)] !== 0) {
            n = r;
            break;
          }
        e[s * 16 + o] = n;
      }
  }
};
var rt = { OPAQUE: 0, CUTOUT: 1, CROSS: 2, LIQUID: 3 },
  Ht = 4;
function pt() {
  let i = new Float32Array(16);
  return ((i[0] = i[5] = i[10] = i[15] = 1), i);
}
function fe(i, t, e) {
  let s = t[0],
    o = t[1],
    n = t[2],
    r = t[3],
    a = t[4],
    h = t[5],
    l = t[6],
    c = t[7],
    f = t[8],
    u = t[9],
    d = t[10],
    g = t[11],
    x = t[12],
    y = t[13],
    R = t[14],
    w = t[15];
  for (let b = 0; b < 4; b++) {
    let S = e[b * 4],
      v = e[b * 4 + 1],
      k = e[b * 4 + 2],
      C = e[b * 4 + 3];
    ((i[b * 4] = S * s + v * a + k * f + C * x),
      (i[b * 4 + 1] = S * o + v * h + k * u + C * y),
      (i[b * 4 + 2] = S * n + v * l + k * d + C * R),
      (i[b * 4 + 3] = S * r + v * c + k * g + C * w));
  }
  return i;
}
function ue(i, t, e, s, o) {
  let n = 1 / Math.tan(t / 2);
  return (
    i.fill(0),
    (i[0] = n / e),
    (i[5] = n),
    (i[10] = (o + s) / (s - o)),
    (i[11] = -1),
    (i[14] = (2 * o * s) / (s - o)),
    i
  );
}
function de(i, t, e, s, o, n) {
  let r = Math.cos(n),
    a = Math.sin(n),
    h = Math.cos(o),
    l = Math.sin(o),
    c = -l * r,
    f = a,
    u = -h * r,
    d = h,
    g = 0,
    x = -l,
    y = l * a,
    R = r,
    w = h * a;
  return (
    (i[0] = d),
    (i[4] = g),
    (i[8] = x),
    (i[12] = -(d * t + g * e + x * s)),
    (i[1] = y),
    (i[5] = R),
    (i[9] = w),
    (i[13] = -(y * t + R * e + w * s)),
    (i[2] = -c),
    (i[6] = -f),
    (i[10] = -u),
    (i[14] = c * t + f * e + u * s),
    (i[3] = 0),
    (i[7] = 0),
    (i[11] = 0),
    (i[15] = 1),
    i
  );
}
function pe(i, t) {
  let e = t[0],
    s = t[1],
    o = t[2],
    n = t[3],
    r = t[4],
    a = t[5],
    h = t[6],
    l = t[7],
    c = t[8],
    f = t[9],
    u = t[10],
    d = t[11],
    g = t[12],
    x = t[13],
    y = t[14],
    R = t[15],
    w = e * a - s * r,
    b = e * h - o * r,
    S = e * l - n * r,
    v = s * h - o * a,
    k = s * l - n * a,
    C = o * l - n * h,
    U = c * x - f * g,
    D = c * y - u * g,
    P = c * R - d * g,
    B = f * y - u * x,
    Y = f * R - d * x,
    z = u * R - d * y,
    M = w * z - b * Y + S * B + v * P - k * D + C * U;
  return M
    ? ((M = 1 / M),
      (i[0] = (a * z - h * Y + l * B) * M),
      (i[1] = (o * Y - s * z - n * B) * M),
      (i[2] = (x * C - y * k + R * v) * M),
      (i[3] = (u * k - f * C - d * v) * M),
      (i[4] = (h * P - r * z - l * D) * M),
      (i[5] = (e * z - o * P + n * D) * M),
      (i[6] = (y * S - g * C - R * b) * M),
      (i[7] = (c * C - u * S + d * b) * M),
      (i[8] = (r * Y - a * P + l * U) * M),
      (i[9] = (s * P - e * Y - n * U) * M),
      (i[10] = (g * k - x * S + R * w) * M),
      (i[11] = (f * S - c * k - d * w) * M),
      (i[12] = (a * D - r * B - h * U) * M),
      (i[13] = (e * B - s * D + o * U) * M),
      (i[14] = (x * b - g * v - y * w) * M),
      (i[15] = (c * v - f * b + u * w) * M),
      i)
    : null;
}
var Vt = (i, t, e) => (i < t ? t : i > e ? e : i),
  at = (i, t, e) => i + (t - i) * e;
function gt(i, t, e, s) {
  return (
    (i[0] = t[0] + (e[0] - t[0]) * s),
    (i[1] = t[1] + (e[1] - t[1]) * s),
    (i[2] = t[2] + (e[2] - t[2]) * s),
    i
  );
}
var Et = class {
  constructor() {
    this.planes = new Float32Array(24);
  }
  fromMatrix(t) {
    let e = this.planes,
      s = (o, n, r, a, h) => {
        let l = 1 / (Math.hypot(n, r, a) || 1);
        ((e[o * 4] = n * l),
          (e[o * 4 + 1] = r * l),
          (e[o * 4 + 2] = a * l),
          (e[o * 4 + 3] = h * l));
      };
    return (
      s(0, t[3] + t[0], t[7] + t[4], t[11] + t[8], t[15] + t[12]),
      s(1, t[3] - t[0], t[7] - t[4], t[11] - t[8], t[15] - t[12]),
      s(2, t[3] + t[1], t[7] + t[5], t[11] + t[9], t[15] + t[13]),
      s(3, t[3] - t[1], t[7] - t[5], t[11] - t[9], t[15] - t[13]),
      s(4, t[3] + t[2], t[7] + t[6], t[11] + t[10], t[15] + t[14]),
      s(5, t[3] - t[2], t[7] - t[6], t[11] - t[10], t[15] - t[14]),
      this
    );
  }
  containsAABB(t, e, s, o, n, r) {
    let a = this.planes;
    for (let h = 0; h < 6; h++) {
      let l = a[h * 4],
        c = a[h * 4 + 1],
        f = a[h * 4 + 2],
        u = a[h * 4 + 3],
        d = l >= 0 ? o : t,
        g = c >= 0 ? n : e,
        x = f >= 0 ? r : s;
      if (l * d + c * g + f * x + u < 0) return !1;
    }
    return !0;
  }
};
var bt = 1 << 17,
  We = [0.015, 0.025, 0.075],
  Ke = [0.045, 0.055, 0.125],
  Ge = [0.26, 0.5, 0.92],
  Xe = [0.7, 0.83, 0.98],
  qe = [0.92, 0.52, 0.3],
  $e = [1, 0.97, 0.9],
  Ze = [1, 0.52, 0.22],
  Qe = [0.09, 0.27, 0.46];
function ge(i, t, e, s) {
  let o = i.createShader(t);
  if ((i.shaderSource(o, e), i.compileShader(o), !i.getShaderParameter(o, i.COMPILE_STATUS))) {
    let n = i.getShaderInfoLog(o);
    throw (
      i.deleteShader(o),
      new Error(`${s} failed to compile:
${n}`)
    );
  }
  return o;
}
function wt(i, t, e, s) {
  let o = i.createProgram(),
    n = ge(i, i.VERTEX_SHADER, t, `${s} vertex shader`),
    r = ge(i, i.FRAGMENT_SHADER, e, `${s} fragment shader`);
  if (
    (i.attachShader(o, n),
    i.attachShader(o, r),
    i.linkProgram(o),
    i.deleteShader(n),
    i.deleteShader(r),
    !i.getProgramParameter(o, i.LINK_STATUS))
  ) {
    let l = i.getProgramInfoLog(o);
    throw (
      i.deleteProgram(o),
      new Error(`${s} failed to link:
${l}`)
    );
  }
  let a = {},
    h = i.getProgramParameter(o, i.ACTIVE_UNIFORMS);
  for (let l = 0; l < h; l++) {
    let c = i.getActiveUniform(o, l).name.replace(/\[0\]$/, "");
    a[c] = i.getUniformLocation(o, c);
  }
  return { prog: o, u: a };
}
var Ct = class i {
  constructor(t) {
    let e = t.getContext("webgl2", {
      antialias: !0,
      alpha: !1,
      depth: !0,
      powerPreference: "high-performance",
    });
    if (!e) throw new Error("WebGL2 is not available in this browser.");
    ((this.canvas = t),
      (this.gl = e),
      (this.terrain = wt(e, qt, $t, "terrain")),
      (this.sky = wt(e, Zt, Qt, "sky")),
      (this.line = wt(e, jt, Jt, "line")),
      (this.particle = wt(e, te, ee, "particle")),
      this.buildIndexBuffer(),
      this.buildSelectionBox(),
      this.buildParticleBuffer(),
      (this.proj = pt()),
      (this.view = pt()),
      (this.viewProj = pt()),
      (this.invViewProj = pt()),
      (this.frustum = new Et()),
      (this.emptyVAO = e.createVertexArray()),
      (this.visible = []),
      (this.stats = { drawCalls: 0, chunksDrawn: 0, quadsDrawn: 0 }),
      (this.fov = 70));
  }
  async init() {
    let t = await ce(this.gl);
    return ((this.atlas = t), t);
  }
  buildIndexBuffer() {
    let t = this.gl,
      e = new Uint32Array(bt * 6);
    for (let s = 0, o = 0, n = 0; s < bt; s++, n += 4)
      ((e[o++] = n),
        (e[o++] = n + 1),
        (e[o++] = n + 2),
        (e[o++] = n),
        (e[o++] = n + 2),
        (e[o++] = n + 3));
    ((this.ibo = t.createBuffer()),
      t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.ibo),
      t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
      t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null));
  }
  buildSelectionBox() {
    let t = this.gl,
      e = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ],
      s = [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7],
      o = new Float32Array(s.length * 3);
    (s.forEach((r, a) => {
      ((o[a * 3] = e[r][0]), (o[a * 3 + 1] = e[r][1]), (o[a * 3 + 2] = e[r][2]));
    }),
      (this.boxVAO = t.createVertexArray()),
      t.bindVertexArray(this.boxVAO));
    let n = t.createBuffer();
    (t.bindBuffer(t.ARRAY_BUFFER, n),
      t.bufferData(t.ARRAY_BUFFER, o, t.STATIC_DRAW),
      t.enableVertexAttribArray(0),
      t.vertexAttribPointer(0, 3, t.FLOAT, !1, 12, 0),
      t.bindVertexArray(null),
      (this.boxVertexCount = s.length));
  }
  buildParticleBuffer() {
    let t = this.gl;
    ((this.particleVAO = t.createVertexArray()),
      t.bindVertexArray(this.particleVAO),
      (this.particleVBO = t.createBuffer()),
      t.bindBuffer(t.ARRAY_BUFFER, this.particleVBO));
    let e = 28;
    (t.enableVertexAttribArray(0),
      t.vertexAttribPointer(0, 3, t.FLOAT, !1, e, 0),
      t.enableVertexAttribArray(1),
      t.vertexAttribPointer(1, 2, t.FLOAT, !1, e, 12),
      t.enableVertexAttribArray(2),
      t.vertexAttribPointer(2, 2, t.FLOAT, !1, e, 20),
      t.bindVertexArray(null));
  }
  uploadChunkMesh(t, e) {
    let s = this.gl;
    t.gl || (t.gl = { sections: new Array(Ht).fill(null) });
    for (let o = 0; o < Ht; o++) {
      let n = e[o],
        r = t.gl.sections[o],
        a = n.length / 8;
      if (!n.length) {
        r && (s.deleteBuffer(r.vbo), s.deleteVertexArray(r.vao), (t.gl.sections[o] = null));
        continue;
      }
      a > bt && console.warn(`chunk ${t.cx},${t.cz} section ${o} has ${a} quads`);
      let h = r;
      (h ||
        ((h = { vao: s.createVertexArray(), vbo: s.createBuffer(), quads: 0 }),
        s.bindVertexArray(h.vao),
        s.bindBuffer(s.ARRAY_BUFFER, h.vbo),
        s.enableVertexAttribArray(0),
        s.vertexAttribIPointer(0, 1, s.UNSIGNED_INT, 8, 0),
        s.enableVertexAttribArray(1),
        s.vertexAttribIPointer(1, 1, s.UNSIGNED_INT, 8, 4),
        s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, this.ibo),
        s.bindVertexArray(null),
        (t.gl.sections[o] = h)),
        s.bindBuffer(s.ARRAY_BUFFER, h.vbo),
        s.bufferData(s.ARRAY_BUFFER, n, s.STATIC_DRAW),
        (h.quads = Math.min(a, bt)));
    }
  }
  freeChunk(t) {
    if (!t.gl) return;
    let e = this.gl;
    for (let s of t.gl.sections) s && (e.deleteBuffer(s.vbo), e.deleteVertexArray(s.vao));
    t.gl = null;
  }
  resize() {
    let t = Math.min(window.devicePixelRatio || 1, 2),
      e = Math.floor(this.canvas.clientWidth * t),
      s = Math.floor(this.canvas.clientHeight * t);
    return (
      (this.canvas.width !== e || this.canvas.height !== s) &&
        ((this.canvas.width = e), (this.canvas.height = s)),
      { w: this.canvas.width, h: this.canvas.height }
    );
  }
  setCamera(t, e) {
    let { w: s, h: o } = this.resize(),
      n = Math.max(180, (e + 1) * 16 * 1.6);
    (ue(this.proj, ((t.fov ?? this.fov) * Math.PI) / 180, s / Math.max(o, 1), 0.08, n),
      de(this.view, t.x, t.y, t.z, t.yaw, t.pitch),
      fe(this.viewProj, this.proj, this.view),
      pe(this.invViewProj, this.viewProj),
      this.frustum.fromMatrix(this.viewProj),
      (this.far = n));
  }
  static skyState(t) {
    let e = (t - 0.25) * Math.PI * 2,
      s = [Math.cos(e) * 0.94, Math.sin(e), Math.cos(e) * 0.34],
      o = Math.hypot(s[0], s[1], s[2]) || 1;
    ((s[0] /= o), (s[1] /= o), (s[2] /= o));
    let n = s[1],
      r = Math.max(0.17, Math.min(1, n * 2.1 + 0.22)),
      a = Math.max(0, 1 - Math.abs(n) * 3.2),
      h = Math.max(0, Math.min(1, n * 3 + 0.35)),
      l = [0, 0, 0],
      c = [0, 0, 0],
      f = [0, 0, 0];
    (gt(l, We, Ge, h),
      gt(c, Ke, Xe, h),
      gt(c, c, qe, a * 0.8 * h),
      gt(f, Ze, $e, Math.min(1, Math.max(0, n * 3.5))));
    let u = Math.max(0, Math.min(1, 0.35 - n * 2.2)),
      d = Math.max(0, Math.min(1, -n * 3 + 0.25)),
      g = [at(1, 0.62, d), at(at(1, 0.86, a * 0.8), 0.72, d), at(at(1, 0.74, a * 0.9), 1, d)];
    return {
      sun: s,
      daylight: r,
      zenith: l,
      horizon: c,
      sunColor: f,
      starFade: u,
      skyLightColor: g,
    };
  }
  drawSky(t, e) {
    let s = this.gl,
      { sky: o } = this;
    (s.depthMask(!1),
      s.disable(s.DEPTH_TEST),
      s.disable(s.CULL_FACE),
      s.useProgram(o.prog),
      s.uniformMatrix4fv(o.u.uInvViewProj, !1, this.invViewProj),
      s.uniform3f(o.u.uCameraPos, e.x, e.y, e.z),
      s.uniform3f(o.u.uSunDir, t.sun[0], t.sun[1], t.sun[2]),
      s.uniform3f(o.u.uZenith, ...t.zenith),
      s.uniform3f(o.u.uHorizon, ...t.horizon),
      s.uniform3f(o.u.uSunColor, ...t.sunColor),
      s.uniform1f(o.u.uStarFade, t.starFade),
      s.uniform1f(o.u.uTime, t.time),
      s.uniform1f(o.u.uCloudCover, t.cloudCover ?? 0.5),
      s.bindVertexArray(this.emptyVAO),
      s.drawArrays(s.TRIANGLES, 0, 3),
      s.bindVertexArray(null),
      s.enable(s.DEPTH_TEST),
      s.depthMask(!0),
      this.stats.drawCalls++);
  }
  render(t) {
    let {
        world: e,
        camera: s,
        timeOfDay: o,
        underwater: n,
        selection: r,
        particles: a,
        cloudCover: h,
        time: l,
      } = t,
      c = this.gl;
    ((this.stats.drawCalls = 0),
      (this.stats.chunksDrawn = 0),
      (this.stats.quadsDrawn = 0),
      this.setCamera(s, e.renderDistance));
    let f = i.skyState(o);
    ((f.time = l), (f.cloudCover = h));
    let u = e.renderDistance * 16,
      d = n ? Qe : f.horizon,
      g = n ? 0.5 : u * 0.72,
      x = n ? 0.055 : 2.6 / Math.max(u * 0.28, 1);
    (c.viewport(0, 0, this.canvas.width, this.canvas.height),
      c.enable(c.DEPTH_TEST),
      c.depthFunc(c.LEQUAL),
      c.clearColor(d[0], d[1], d[2], 1),
      c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT),
      n || this.drawSky(f, s),
      this.collectVisibleChunks(e, s));
    let y = this.terrain;
    (c.useProgram(y.prog),
      c.activeTexture(c.TEXTURE0),
      c.bindTexture(c.TEXTURE_2D_ARRAY, this.atlas.tex),
      c.uniform1i(y.u.uAtlas, 0),
      c.uniformMatrix4fv(y.u.uViewProj, !1, this.viewProj),
      c.uniform3f(y.u.uCameraPos, s.x, s.y, s.z),
      c.uniform3f(y.u.uSkyLightColor, ...f.skyLightColor),
      c.uniform1f(y.u.uDaylight, f.daylight),
      c.uniform3f(y.u.uFogColor, ...d),
      c.uniform1f(y.u.uFogDensity, x),
      c.uniform1f(y.u.uFogStart, g),
      c.uniform1f(y.u.uTime, l),
      c.uniform3f(y.u.uSunDir, f.sun[0], f.sun[1], f.sun[2]),
      c.uniform1f(y.u.uMipSharpen, 0.62),
      c.enable(c.CULL_FACE),
      c.cullFace(c.BACK),
      c.disable(c.BLEND),
      c.depthMask(!0),
      c.uniform1f(y.u.uAlphaCutoff, 0.5),
      c.uniform1f(y.u.uOpacity, 1),
      c.uniform2f(y.u.uUVScroll, 0, 0),
      c.uniform1f(y.u.uSpecular, 0),
      c.uniform1f(y.u.uWave, 0),
      this.drawSection(rt.OPAQUE),
      this.drawSection(rt.CUTOUT),
      c.disable(c.CULL_FACE),
      c.uniform1f(y.u.uWave, 1),
      this.drawSection(rt.CROSS),
      c.uniform1f(y.u.uWave, 0),
      c.enable(c.BLEND),
      c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA),
      c.depthMask(!1),
      c.uniform1f(y.u.uAlphaCutoff, 0.02),
      c.uniform1f(y.u.uOpacity, 1),
      c.uniform2f(y.u.uUVScroll, l * 0.045, l * 0.03),
      c.uniform1f(y.u.uSpecular, n ? 0 : 0.55),
      this.drawSection(rt.LIQUID, !0),
      c.uniform1f(y.u.uSpecular, 0),
      c.uniform2f(y.u.uUVScroll, 0, 0),
      c.depthMask(!0),
      r && this.drawSelection(r),
      a && a.count && this.drawParticles(a, f, d),
      c.disable(c.BLEND),
      c.bindVertexArray(null));
  }
  collectVisibleChunks(t, e) {
    let s = this.visible;
    s.length = 0;
    for (let o of t.chunks.values()) {
      if (!o.gl) continue;
      let n = o.cx * 16,
        r = o.cz * 16;
      if (!this.frustum.containsAABB(n, 0, r, n + 16, 128, r + 16)) continue;
      let a = n + 16 / 2 - e.x,
        h = r + 16 / 2 - e.z;
      ((o.viewDist = a * a + h * h), s.push(o));
    }
    s.sort((o, n) => o.viewDist - n.viewDist);
  }
  drawSection(t, e = !1) {
    let s = this.gl,
      o = this.terrain,
      n = this.visible,
      r = n.length;
    for (let a = 0; a < r; a++) {
      let h = n[e ? r - 1 - a : a],
        l = h.gl && h.gl.sections[t];
      !l ||
        !l.quads ||
        (s.uniform3f(o.u.uChunkOrigin, h.cx * 16, 0, h.cz * 16),
        s.bindVertexArray(l.vao),
        s.drawElements(s.TRIANGLES, l.quads * 6, s.UNSIGNED_INT, 0),
        this.stats.drawCalls++,
        (this.stats.quadsDrawn += l.quads),
        t === rt.OPAQUE && this.stats.chunksDrawn++);
    }
  }
  drawSelection(t) {
    let e = this.gl,
      s = this.line;
    (e.useProgram(s.prog),
      e.uniformMatrix4fv(s.u.uViewProj, !1, this.viewProj),
      e.uniform3f(s.u.uOffset, t.x, t.y, t.z),
      e.uniform1f(s.u.uScale, 1.008),
      e.uniform4f(s.u.uColor, 0.05, 0.05, 0.06, 0.85),
      e.bindVertexArray(this.boxVAO),
      e.enable(e.BLEND),
      e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA),
      e.drawArrays(e.LINES, 0, this.boxVertexCount),
      e.disable(e.BLEND),
      this.stats.drawCalls++);
  }
  drawParticles(t, e, s) {
    let o = this.gl,
      n = this.particle;
    (o.useProgram(n.prog),
      o.uniformMatrix4fv(n.u.uViewProj, !1, this.viewProj),
      o.uniform1i(n.u.uAtlas, 0),
      o.uniform3f(n.u.uFogColor, ...s),
      o.uniform1f(n.u.uLight, Math.max(0.25, e.daylight)),
      o.activeTexture(o.TEXTURE0),
      o.bindTexture(o.TEXTURE_2D_ARRAY, this.atlas.tex),
      o.bindVertexArray(this.particleVAO),
      o.bindBuffer(o.ARRAY_BUFFER, this.particleVBO),
      o.bufferData(o.ARRAY_BUFFER, t.buffer.subarray(0, t.count * 7), o.DYNAMIC_DRAW),
      o.drawArrays(o.POINTS, 0, t.count),
      this.stats.drawCalls++);
  }
};
G();
var V = 15,
  Rt = class {
    constructor(t = 16384) {
      ((this.x = new Int32Array(t)),
        (this.y = new Int32Array(t)),
        (this.z = new Int32Array(t)),
        (this.l = new Uint8Array(t)),
        (this.head = 0),
        (this.tail = 0));
    }
    get size() {
      return this.tail - this.head;
    }
    clear() {
      this.head = this.tail = 0;
    }
    push(t, e, s, o) {
      (this.tail === this.x.length && this.grow(),
        (this.x[this.tail] = t),
        (this.y[this.tail] = e),
        (this.z[this.tail] = s),
        (this.l[this.tail] = o),
        this.tail++);
    }
    grow() {
      let t = this.tail - this.head,
        e = t * 2 > this.x.length ? this.x.length * 2 : this.x.length,
        s = new Int32Array(e),
        o = new Int32Array(e),
        n = new Int32Array(e),
        r = new Uint8Array(e);
      (s.set(this.x.subarray(this.head, this.tail)),
        o.set(this.y.subarray(this.head, this.tail)),
        n.set(this.z.subarray(this.head, this.tail)),
        r.set(this.l.subarray(this.head, this.tail)),
        (this.x = s),
        (this.y = o),
        (this.z = n),
        (this.l = r),
        (this.head = 0),
        (this.tail = t));
    }
  },
  _t = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ],
  Ot = class {
    constructor(t) {
      ((this.world = t),
        (this.add = new Rt()),
        (this.remove = new Rt()),
        (this.touched = new Set()));
    }
    chunkFor(t, e) {
      return this.world.getChunkAt(t >> 4, e >> 4);
    }
    getBlock(t, e, s) {
      if (e < 0 || e >= 128) return e < 0 ? p.BEDROCK : p.AIR;
      let o = this.chunkFor(t, s);
      return o ? o.blocks[N(t & 15, e, s & 15)] : p.BEDROCK;
    }
    markDirty(t, e, s) {
      if (
        (t.dirty || ((t.dirty = !0), t.revision++),
        this.touched.add(t),
        e === 0 || e === 15 || s === 0 || s === 15)
      )
        for (let o = -1; o <= 1; o++)
          for (let n = -1; n <= 1; n++) {
            if (!n && !o) continue;
            let r = this.world.getChunkAt(t.cx + n, t.cz + o);
            r && !r.dirty && ((r.dirty = !0), r.revision++, this.touched.add(r));
          }
    }
    getLight(t, e, s, o) {
      if (e >= 128) return o ? V : 0;
      if (e < 0) return 0;
      let n = this.chunkFor(t, s);
      if (!n) return 0;
      let r = n.light[N(t & 15, e, s & 15)];
      return o ? r >> 4 : r & 15;
    }
    setLight(t, e, s, o, n) {
      if (e < 0 || e >= 128) return;
      let r = this.chunkFor(t, s);
      if (!r) return;
      let a = t & 15,
        h = s & 15,
        l = N(a, e, h);
      ((r.light[l] = o ? (r.light[l] & 15) | (n << 4) : (r.light[l] & 240) | n),
        this.markDirty(r, a, h));
    }
    propagate(t) {
      let e = this.add;
      for (; e.head < e.tail;) {
        let s = e.x[e.head],
          o = e.y[e.head],
          n = e.z[e.head],
          r = e.l[e.head];
        if ((e.head++, !(r <= 1) && !(this.getLight(s, o, n, t) > r)))
          for (let a = 0; a < 6; a++) {
            let [h, l, c] = _t[a],
              f = s + h,
              u = o + l,
              d = n + c;
            if (u < 0 || u >= 128) continue;
            let g = et[this.getBlock(f, u, d)];
            if (g >= V) continue;
            let x = t && l === -1 && r === V && g === 0 ? V : r - 1 - g;
            x <= 0 ||
              this.getLight(f, u, d, t) >= x ||
              (this.setLight(f, u, d, t, x), e.push(f, u, d, x));
          }
      }
      e.clear();
    }
    unpropagate(t) {
      let e = this.remove;
      for (; e.head < e.tail;) {
        let s = e.x[e.head],
          o = e.y[e.head],
          n = e.z[e.head],
          r = e.l[e.head];
        e.head++;
        for (let a = 0; a < 6; a++) {
          let [h, l, c] = _t[a],
            f = s + h,
            u = o + l,
            d = n + c;
          if (u < 0 || u >= 128) continue;
          let g = this.getLight(f, u, d, t);
          if (g === 0) continue;
          g < r || (t && l === -1 && r === V && g === V)
            ? (this.setLight(f, u, d, t, 0), e.push(f, u, d, g))
            : this.add.push(f, u, d, g);
        }
      }
      (e.clear(), this.propagate(t));
    }
    lightChunk(t) {
      let { blocks: e, light: s } = t,
        o = t.cx * 16,
        n = t.cz * 16;
      s.fill(0);
      let r = 0;
      for (let h = 0; h < t.heightmap.length; h++) t.heightmap[h] > r && (r = t.heightmap[h]);
      let a = Math.min(127, r + 1);
      for (let h = 0; h < 16; h++)
        for (let l = 0; l < 16; l++) {
          let c = V;
          for (let f = 127; f >= 0; f--) {
            let u = N(l, f, h),
              d = et[e[u]];
            if ((d >= V ? (c = 0) : d > 0 && (c = Math.max(0, c - d)), c === 0 && d >= V)) {
              for (; f >= 0; f--) s[N(l, f, h)] = 0;
              break;
            }
            ((s[u] = c << 4), c > 1 && f <= a && this.add.push(o + l, f, n + h, c));
          }
        }
      this.propagate(!0);
      for (let h = 0; h < 128; h++)
        for (let l = 0; l < 16; l++)
          for (let c = 0; c < 16; c++) {
            let f = lt[e[N(c, h, l)]];
            if (!f) continue;
            let u = N(c, h, l);
            ((s[u] = (s[u] & 240) | f), this.add.push(o + c, h, n + l, f));
          }
      (this.propagate(!1), this.seedFromNeighbours(t), (t.lit = !0), this.flushDirty());
    }
    seedFromNeighbours(t) {
      let e = [
        [-1, 0, 15, 0],
        [1, 0, 0, 0],
        [0, -1, 0, 15],
        [0, 1, 0, 0],
      ];
      for (let [s, o, n, r] of e) {
        let a = this.world.getChunkAt(t.cx + s, t.cz + o);
        if (!a || !a.lit) continue;
        let h = a.cx * 16,
          l = a.cz * 16;
        for (let c = 0; c < 128; c++)
          for (let f = 0; f < 16; f++) {
            let u = s === 0 ? f : n,
              d = o === 0 ? f : r,
              g = a.light[N(u, c, d)] >> 4;
            g > 1 && this.add.push(h + u, c, l + d, g);
          }
        this.propagate(!0);
        for (let c = 0; c < 128; c++)
          for (let f = 0; f < 16; f++) {
            let u = s === 0 ? f : n,
              d = o === 0 ? f : r,
              g = a.light[N(u, c, d)] & 15;
            g > 1 && this.add.push(h + u, c, l + d, g);
          }
        this.propagate(!1);
      }
    }
    onBlockChanged(t, e, s, o, n) {
      let r = et[o] >= V,
        a = et[n] >= V,
        h = lt[o];
      if (h > 0)
        (this.setLight(t, e, s, !1, 0), this.remove.push(t, e, s, h), this.unpropagate(!1));
      else if (a && !r) {
        let u = this.getLight(t, e, s, !1);
        u > 0 &&
          (this.setLight(t, e, s, !1, 0), this.remove.push(t, e, s, u), this.unpropagate(!1));
      }
      let l = lt[n];
      if (l > 0) (this.setLight(t, e, s, !1, l), this.add.push(t, e, s, l), this.propagate(!1));
      else if (r && !a) {
        for (let [u, d, g] of _t) {
          let x = this.getLight(t + u, e + d, s + g, !1);
          x > 1 && this.add.push(t + u, e + d, s + g, x);
        }
        this.propagate(!1);
      }
      let c = this.getLight(t, e, s, !0);
      if (
        (c > 0 &&
          (this.setLight(t, e, s, !0, 0), this.remove.push(t, e, s, c), this.unpropagate(!0)),
        et[n] < V)
      ) {
        for (let [u, d, g] of _t) {
          let x = this.getLight(t + u, e + d, s + g, !0);
          x > 0 && this.add.push(t + u, e + d, s + g, x);
        }
        (e + 1 >= 128 && (this.setLight(t, e, s, !0, V), this.add.push(t, e, s, V)),
          this.propagate(!0));
      }
      let f = this.chunkFor(t, s);
      (f && this.markDirty(f, t & 15, s & 15), this.flushDirty());
    }
    flushDirty() {
      for (let t of this.touched) (t.lit || t.generated) && (t.dirty = !0);
      this.touched.clear();
    }
  };
G();
var me = 15,
  Tt = class {
    constructor(t) {
      let {
        seed: e = 1337,
        renderDistance: s = 8,
        workerCount: o = je(),
        onMeshReady: n = () => {},
        onChunkUnload: r = () => {},
      } = t || {};
      ((this.seed = e >>> 0),
        (this.renderDistance = s),
        (this.onMeshReady = n),
        (this.onChunkUnload = r),
        (this.chunks = new Map()),
        (this.light = new Ot(this)),
        (this.pendingLight = []),
        (this.requested = new Set()),
        (this.centerX = 0),
        (this.centerZ = 0),
        (this.offsets = []),
        this.setRenderDistance(s),
        (this.savedEdits = new Map()),
        (this.stats = {
          chunks: 0,
          meshJobs: 0,
          genJobs: 0,
          quads: 0,
          pendingGen: 0,
          pendingMesh: 0,
        }),
        (this.workers = []),
        (this.idle = []),
        (this.genQueue = []),
        (this.meshQueue = []),
        (this.inFlight = new Map()),
        (this.destroyed = !1),
        this.spawnWorkers(o));
    }
    spawnWorkers(t) {
      for (let e = 0; e < t; e++) {
        let s = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
        ((s.onmessage = (o) => this.onWorkerMessage(s, o.data)),
          (s.onerror = (o) => console.error("[worker]", o.message || o)),
          this.workers.push(s),
          this.idle.push(s));
      }
    }
    destroy() {
      this.destroyed = !0;
      for (let t of this.workers) t.terminate();
      ((this.workers.length = 0), (this.idle.length = 0));
    }
    setRenderDistance(t) {
      this.renderDistance = t;
      let e = [];
      for (let s = -t; s <= t; s++)
        for (let o = -t; o <= t; o++) {
          let n = Math.hypot(o, s);
          n <= t + 0.5 && e.push({ dx: o, dz: s, dist: n });
        }
      (e.sort((s, o) => s.dist - o.dist), (this.offsets = e));
    }
    getChunkAt(t, e) {
      return this.chunks.get(j(t, e));
    }
    getBlock(t, e, s) {
      if (e < 0 || e >= 128) return p.AIR;
      let o = this.chunks.get(j(t >> 4, s >> 4));
      return !o || !o.generated ? p.AIR : o.blocks[N(t & 15, e, s & 15)];
    }
    isSolid(t, e, s) {
      return K[this.getBlock(t, e, s)] === 1;
    }
    isLoaded(t, e) {
      let s = this.chunks.get(j(t >> 4, e >> 4));
      return !!(s && s.generated);
    }
    getLightAt(t, e, s) {
      if (e >= 128) return { sky: me, block: 0 };
      if (e < 0) return { sky: 0, block: 0 };
      let o = this.chunks.get(j(t >> 4, s >> 4));
      if (!o) return { sky: me, block: 0 };
      let n = o.light[N(t & 15, e, s & 15)];
      return { sky: n >> 4, block: n & 15 };
    }
    setBlock(t, e, s, o, n = !0) {
      if (e < 0 || e >= 128) return !1;
      let r = this.chunks.get(j(t >> 4, s >> 4));
      if (!r || !r.generated) return !1;
      let a = t & 15,
        h = s & 15,
        l = N(a, e, h),
        c = r.blocks[l];
      if (c === o) return !1;
      ((r.blocks[l] = o), n && r.recordEdit(a, e, h, o));
      let f = h * 16 + a;
      if (o !== p.AIR && e > r.heightmap[f]) r.heightmap[f] = e;
      else if (o === p.AIR && e === r.heightmap[f]) {
        let u = 0;
        for (let d = e; d >= 0; d--)
          if (r.blocks[N(a, d, h)] !== p.AIR) {
            u = d;
            break;
          }
        r.heightmap[f] = u;
      }
      return (this.light.onBlockChanged(t, e, s, c, o), this.markDirtyAround(t, e, s), !0);
    }
    markDirtyAround(t, e, s) {
      let o = t >> 4,
        n = s >> 4;
      for (let r = -1; r <= 1; r++)
        for (let a = -1; a <= 1; a++) {
          let h = this.getChunkAt(o + a, n + r);
          if (!h) continue;
          if (a === 0 && r === 0) {
            ((h.dirty = !0), h.revision++);
            continue;
          }
          let l = t & 15,
            c = s & 15,
            f = (a === -1 && l === 0) || (a === 1 && l === 15),
            u = (r === -1 && c === 0) || (r === 1 && c === 15);
          (a === 0 || f) && (r === 0 || u) && ((h.dirty = !0), h.revision++);
        }
    }
    update(t, e, s = 4) {
      this.destroyed ||
        ((this.centerX = Math.floor(t) >> 4),
        (this.centerZ = Math.floor(e) >> 4),
        this.requestChunks(),
        this.processLighting(s),
        this.queueMeshJobs(),
        this.pumpWorkers(),
        this.unloadDistant(),
        (this.stats.chunks = this.chunks.size),
        (this.stats.pendingGen = this.genQueue.length),
        (this.stats.pendingMesh = this.meshQueue.length));
    }
    requestChunks() {
      let t = this.workers.length * 3;
      if (!(this.genQueue.length >= t))
        for (let { dx: e, dz: s } of this.offsets) {
          let o = this.centerX + e,
            n = this.centerZ + s,
            r = j(o, n);
          if (
            !(this.chunks.has(r) || this.requested.has(r)) &&
            (this.requested.add(r),
            this.genQueue.push({ type: "gen", cx: o, cz: n, seed: this.seed, key: r }),
            this.genQueue.length >= t)
          )
            return;
        }
    }
    processLighting(t) {
      if (!this.pendingLight.length) return;
      let e = performance.now();
      for (
        this.pendingLight.sort((s, o) => this.distance2(s) - this.distance2(o));
        this.pendingLight.length;
      ) {
        let s = this.pendingLight.shift();
        if (this.chunks.has(j(s.cx, s.cz)) && (this.light.lightChunk(s), performance.now() - e > t))
          break;
      }
    }
    distance2(t) {
      let e = t.cx - this.centerX,
        s = t.cz - this.centerZ;
      return e * e + s * s;
    }
    neighboursReady(t, e) {
      for (let s = -1; s <= 1; s++)
        for (let o = -1; o <= 1; o++) {
          if (!o && !s) continue;
          let n = this.getChunkAt(t + o, e + s);
          if (!n || !n.generated) return !1;
        }
      return !0;
    }
    queueMeshJobs() {
      let t = this.workers.length * 2;
      if (this.meshQueue.length >= t) return;
      let e = [];
      for (let s of this.chunks.values())
        !s.dirty ||
          s.meshing ||
          !s.lit ||
          this.distance2(s) > (this.renderDistance + 1) ** 2 ||
          (this.neighboursReady(s.cx, s.cz) && e.push(s));
      if (e.length) {
        e.sort((s, o) => this.distance2(s) - this.distance2(o));
        for (let s of e) {
          if (this.meshQueue.length >= t) break;
          let { blocks: o, light: n } = le((r, a) => this.getChunkAt(r, a), s.cx, s.cz, p.BEDROCK);
          ((s.meshing = !0),
            (s.dirty = !1),
            this.meshQueue.push({
              type: "mesh",
              cx: s.cx,
              cz: s.cz,
              revision: s.revision,
              blocks: o,
              light: n,
            }));
        }
      }
    }
    pumpWorkers() {
      for (; this.idle.length && (this.meshQueue.length || this.genQueue.length);) {
        let t = this.idle.pop(),
          e = this.meshQueue.length ? this.meshQueue.shift() : this.genQueue.shift();
        (this.inFlight.set(t, e),
          e.type === "mesh"
            ? (this.stats.meshJobs++, t.postMessage(e, [e.blocks.buffer, e.light.buffer]))
            : (this.stats.genJobs++, t.postMessage(e)));
      }
    }
    onWorkerMessage(t, e) {
      (this.inFlight.delete(t),
        this.destroyed || this.idle.push(t),
        e.type === "gen" ? this.onChunkGenerated(e) : e.type === "mesh" && this.onChunkMeshed(e),
        this.pumpWorkers());
    }
    onChunkGenerated(t) {
      let e = j(t.cx, t.cz);
      if (
        (this.requested.delete(e),
        this.chunks.has(e) || this.distanceToCenter(t.cx, t.cz) > this.renderDistance + 2)
      )
        return;
      let s = new St(t.cx, t.cz);
      ((s.blocks = t.blocks),
        (s.heightmap = t.heightmap),
        (s.biomes = t.biomes),
        (s.generated = !0),
        s.applyEdits(this.savedEdits.get(e)),
        this.chunks.set(e, s),
        this.pendingLight.push(s));
      for (let o = -1; o <= 1; o++)
        for (let n = -1; n <= 1; n++) {
          if (!n && !o) continue;
          let r = this.getChunkAt(t.cx + n, t.cz + o);
          r && r.lit && (r.dirty = !0);
        }
    }
    onChunkMeshed(t) {
      let e = this.getChunkAt(t.cx, t.cz);
      e &&
        ((e.meshing = !1),
        t.revision !== e.revision && (e.dirty = !0),
        (e.meshRevision = t.revision),
        (this.stats.quads += t.quads),
        this.onMeshReady(e, t.sections));
    }
    distanceToCenter(t, e) {
      return Math.hypot(t - this.centerX, e - this.centerZ);
    }
    unloadDistant() {
      let t = this.renderDistance + 2;
      for (let [e, s] of this.chunks)
        this.distanceToCenter(s.cx, s.cz) <= t ||
          s.meshing ||
          (s.edits && s.edits.size && this.savedEdits.set(e, s.edits),
          this.chunks.delete(e),
          this.onChunkUnload(s));
    }
    collectEdits() {
      let t = new Map(this.savedEdits);
      for (let [e, s] of this.chunks) s.edits && s.edits.size && t.set(e, s.edits);
      return t;
    }
    loadEdits(t) {
      this.savedEdits = t || new Map();
    }
    isReadyAt(t, e) {
      let s = this.getChunkAt(t >> 4, e >> 4);
      return !!(s && s.lit && s.meshRevision >= 0);
    }
  };
function je() {
  let i = (typeof navigator < "u" && navigator.hardwareConcurrency) || 4;
  return Math.max(2, Math.min(6, i - 1));
}
G();
var X = 0.3,
  Yt = 1.8,
  ye = 1.62,
  xe = 32,
  Je = 9,
  ts = 4.317,
  es = 5.9,
  ss = 1.6,
  is = 12,
  os = 26,
  ns = 3.2,
  Ae = 78,
  rs = 0.82,
  as = 0.06,
  hs = 0.34,
  cs = 0.35,
  kt = class {
    constructor(t = 0, e = 80, s = 0) {
      ((this.x = t),
        (this.y = e),
        (this.z = s),
        (this.vx = 0),
        (this.vy = 0),
        (this.vz = 0),
        (this.yaw = 0),
        (this.pitch = 0),
        (this.onGround = !1),
        (this.inWater = !1),
        (this.headInWater = !1),
        (this.flying = !1),
        (this.sprinting = !1),
        (this.sneaking = !1),
        (this.fov = 70),
        (this.targetFov = 70),
        (this.selectedSlot = 0));
    }
    get eyeY() {
      return this.y + (this.sneaking ? ye - 0.18 : ye);
    }
    camera() {
      return {
        x: this.x,
        y: this.eyeY,
        z: this.z,
        yaw: this.yaw,
        pitch: this.pitch,
        fov: this.fov,
      };
    }
    lookDirection() {
      let t = Math.cos(this.pitch);
      return [-Math.sin(this.yaw) * t, Math.sin(this.pitch), -Math.cos(this.yaw) * t];
    }
    addLook(t, e, s = 0.0022) {
      ((this.yaw -= t * s),
        (this.pitch = Vt(this.pitch - e * s, -Math.PI / 2 + 0.001, Math.PI / 2 - 0.001)),
        this.yaw > Math.PI
          ? (this.yaw -= Math.PI * 2)
          : this.yaw < -Math.PI && (this.yaw += Math.PI * 2));
    }
    update(t, e, s) {
      ((s = Math.min(s, 0.05)),
        (this.sneaking = e.sneak && !this.flying),
        (this.sprinting = e.sprint && e.forward > 0),
        this.sampleFluid(t));
      let o = this.flying
          ? e.sprint
            ? os
            : is
          : this.inWater
            ? ns
            : this.sneaking
              ? ss
              : this.sprinting
                ? es
                : ts,
        n = Math.sin(this.yaw),
        r = Math.cos(this.yaw),
        a = -n * e.forward + r * e.right,
        h = -r * e.forward - n * e.right,
        l = Math.hypot(a, h);
      l > 1 && ((a /= l), (h /= l));
      let c = a * o,
        f = h * o,
        u = this.flying ? 0.12 : this.inWater ? 0.22 : this.onGround ? as : hs,
        d = 1 - Math.pow(u, s * 60);
      if (((this.vx += (c - this.vx) * d), (this.vz += (f - this.vz) * d), this.flying)) {
        let g = 0;
        (e.jump && (g += o), e.sneak && (g -= o), (this.vy += (g - this.vy) * d));
      } else
        this.inWater
          ? ((this.vy -= xe * 0.28 * s),
            e.jump && (this.vy += 26 * s),
            (this.vy *= Math.pow(rs, s * 60)),
            (this.vy = Vt(this.vy, -6, 5.5)))
          : (e.jump && this.onGround && ((this.vy = Je), (this.onGround = !1)),
            (this.vy -= xe * s),
            this.vy < -Ae && (this.vy = -Ae));
      (this.moveWithCollisions(t, this.vx * s, this.vy * s, this.vz * s),
        (this.targetFov = 70 + (this.sprinting ? 6 : 0) + (this.flying && e.sprint ? 10 : 0)),
        (this.fov += (this.targetFov - this.fov) * Math.min(1, s * 8)));
    }
    sampleFluid(t) {
      let e = t.getBlock(Math.floor(this.x), Math.floor(this.y + 0.1), Math.floor(this.z)),
        s = t.getBlock(Math.floor(this.x), Math.floor(this.eyeY), Math.floor(this.z));
      ((this.inWater = ct[e] === 1 || ct[s] === 1), (this.headInWater = ct[s] === 1));
    }
    moveWithCollisions(t, e, s, o) {
      let n = Math.ceil(Math.max(Math.abs(e), Math.abs(s), Math.abs(o)) / cs) || 1,
        r = e / n,
        a = s / n,
        h = o / n;
      for (let l = 0; l < n; l++)
        (this.moveAxis(t, 1, a), this.moveAxis(t, 0, r), this.moveAxis(t, 2, h));
    }
    moveAxis(t, e, s) {
      if (s === 0) return;
      (e === 0 ? (this.x += s) : e === 1 ? (this.y += s) : (this.z += s),
        e === 1 && (this.onGround = !1));
      let o = Math.floor(this.x - X),
        n = Math.floor(this.x + X),
        r = Math.floor(this.y),
        a = Math.floor(this.y + Yt),
        h = Math.floor(this.z - X),
        l = Math.floor(this.z + X);
      for (let c = r; c <= a; c++)
        if (!(c < 0 || c >= 128)) {
          for (let f = h; f <= l; f++)
            for (let u = o; u <= n; u++)
              if (K[t.getBlock(u, c, f)]) {
                e === 0
                  ? ((this.x = s > 0 ? u - X - 1e-4 : u + 1 + X + 1e-4), (this.vx = 0))
                  : e === 1
                    ? (s > 0 ? (this.y = c - Yt - 1e-4) : ((this.y = c + 1), (this.onGround = !0)),
                      (this.vy = 0))
                    : ((this.z = s > 0 ? f - X - 1e-4 : f + 1 + X + 1e-4), (this.vz = 0));
                return;
              }
        }
    }
    intersectsBlock(t, e, s) {
      return (
        t + 1 > this.x - X &&
        t < this.x + X &&
        e + 1 > this.y &&
        e < this.y + Yt &&
        s + 1 > this.z - X &&
        s < this.z + X
      );
    }
    settleOnGround(t) {
      for (let e = Math.min(126, Math.ceil(this.y) + 8); e > 0; e--)
        if (K[t.getBlock(Math.floor(this.x), e, Math.floor(this.z))])
          return ((this.y = e + 1), (this.vy = 0), !0);
      return !1;
    }
    serialize() {
      return {
        x: this.x,
        y: this.y,
        z: this.z,
        yaw: this.yaw,
        pitch: this.pitch,
        flying: this.flying,
        slot: this.selectedSlot,
      };
    }
    restore(t) {
      t &&
        ((this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.yaw = t.yaw ?? 0),
        (this.pitch = t.pitch ?? 0),
        (this.flying = !!t.flying),
        (this.selectedSlot = t.slot ?? 0));
    }
  };
G();
var st = 52,
  ve = 4,
  Lt = class {
    constructor(t, e) {
      ((this.canvas = t),
        (this.ctx = t.getContext("2d")),
        (this.atlasData = e),
        (this.icons = new Map()),
        (this.messages = []),
        (this.inventoryOpen = !1),
        (this.dpr = 1));
    }
    icon(t) {
      let e = this.icons.get(t);
      return (e || ((e = ls(this.atlasData, Z[t], 96)), this.icons.set(t, e)), e);
    }
    resize() {
      let t = Math.min(window.devicePixelRatio || 1, 2),
        e = Math.floor(this.canvas.clientWidth * t),
        s = Math.floor(this.canvas.clientHeight * t);
      ((this.canvas.width !== e || this.canvas.height !== s) &&
        ((this.canvas.width = e), (this.canvas.height = s)),
        (this.dpr = t),
        (this.w = this.canvas.clientWidth),
        (this.h = this.canvas.clientHeight));
    }
    message(t, e = 2.2) {
      this.messages.push({ text: t, ttl: e });
    }
    tick(t) {
      for (let e of this.messages) e.ttl -= t;
      this.messages = this.messages.filter((e) => e.ttl > 0);
    }
    draw(t) {
      this.resize();
      let e = this.ctx;
      (e.setTransform(this.dpr, 0, 0, this.dpr, 0, 0),
        e.clearRect(0, 0, this.w, this.h),
        t.underwater && this.drawUnderwaterTint(),
        this.drawVignette(),
        t.hurtFlash > 0 && this.drawHurtFlash(t.hurtFlash),
        this.inventoryOpen || this.drawCrosshair(),
        this.inventoryOpen || !(t.mineProgress > 0) || this.drawMiningProgress(t.mineProgress),
        this.drawHotbar(t),
        t.survival && this.drawVitals(t),
        this.inventoryOpen && this.drawInventory(t),
        t.debug && this.drawDebug(t),
        this.drawMessages());
    }
    drawUnderwaterTint() {
      let t = this.ctx;
      ((t.fillStyle = "rgba(28, 96, 158, 0.34)"), t.fillRect(0, 0, this.w, this.h));
    }
    drawVignette() {
      let t = this.ctx,
        e = t.createRadialGradient(
          this.w / 2,
          this.h / 2,
          Math.min(this.w, this.h) * 0.35,
          this.w / 2,
          this.h / 2,
          Math.max(this.w, this.h) * 0.75,
        );
      (e.addColorStop(0, "rgba(0,0,0,0)"),
        e.addColorStop(1, "rgba(0,0,0,0.30)"),
        (t.fillStyle = e),
        t.fillRect(0, 0, this.w, this.h));
    }
    drawCrosshair() {
      let t = this.ctx,
        e = Math.round(this.w / 2),
        s = Math.round(this.h / 2);
      (t.save(),
        (t.globalCompositeOperation = "difference"),
        (t.fillStyle = "#fff"),
        t.fillRect(e - 9, s - 1, 18, 2),
        t.fillRect(e - 1, s - 9, 2, 18),
        t.restore());
    }
    drawHotbar(t) {
      let e = this.ctx,
        s = t.hotbar || ut,
        o = s.length * st + (s.length - 1) * ve,
        n = Math.round((this.w - o) / 2),
        r = Math.round(this.h - st - 18);
      for (let h = 0; h < s.length; h++) {
        let l = n + h * (st + ve),
          c = h === t.selectedSlot;
        (Mt(e, l, r, st, st, 6),
          (e.fillStyle = c ? "rgba(20,20,24,0.78)" : "rgba(20,20,24,0.52)"),
          e.fill(),
          (e.lineWidth = c ? 2.5 : 1),
          (e.strokeStyle = c ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.24)"),
          e.stroke());
        let f = s[h];
        if (f) {
          let u = this.icon(f),
            d = 7;
          (e.drawImage(u, l + d, r + d, st - d * 2, st - d * 2),
            t.counts && this.drawCount(t.counts.get(f) || 0, l + st - 5, r + st - 6));
        }
        ((e.font = "600 11px ui-monospace, Menlo, Consolas, monospace"),
          (e.fillStyle = "rgba(255,255,255,0.55)"),
          e.fillText(String(h + 1), l + 5, r + 14));
      }
      let a = s[t.selectedSlot];
      if (a && t.heldNameAlpha > 0.01) {
        ((e.globalAlpha = Math.min(1, t.heldNameAlpha)),
          (e.font = "600 15px system-ui, -apple-system, Segoe UI, sans-serif"),
          (e.textAlign = "center"));
        let h = Z[a].name;
        ((e.fillStyle = "rgba(0,0,0,0.55)"),
          e.fillText(h, this.w / 2 + 1, r - 13),
          (e.fillStyle = "#fff"),
          e.fillText(h, this.w / 2, r - 14),
          (e.textAlign = "left"),
          (e.globalAlpha = 1));
      }
    }
    drawInventory(t) {
      let e = this.ctx,
        s = 8,
        o = 56,
        v = t.inventoryList || Ft,
        n = Math.max(1, Math.ceil(v.length / s)),
        r = s * o + 24,
        a = n * o + 66,
        h = Math.round((this.w - r) / 2),
        l = Math.round((this.h - a) / 2) - 30;
      ((e.fillStyle = "rgba(8,10,14,0.86)"),
        Mt(e, h, l, r, a, 12),
        e.fill(),
        (e.strokeStyle = "rgba(255,255,255,0.16)"),
        (e.lineWidth = 1),
        e.stroke(),
        (e.font = "600 15px system-ui, -apple-system, Segoe UI, sans-serif"),
        (e.fillStyle = "rgba(255,255,255,0.82)"),
        e.fillText(
          (t.survival ? "Inventory" : "Blocks") +
            (v.length
              ? "  \u2014  click to put in slot " + (t.selectedSlot + 1)
              : "  \u2014  empty, go mine some blocks"),
          h + 14,
          l + 26,
        ),
        (this.inventoryRects = []),
        v.forEach((c, f) => {
          let u = h + 12 + (f % s) * o,
            d = l + 42 + Math.floor(f / s) * o,
            g =
              t.pointer &&
              t.pointer.x >= u &&
              t.pointer.x < u + o - 4 &&
              t.pointer.y >= d &&
              t.pointer.y < d + o - 4;
          (Mt(e, u, d, o - 4, o - 4, 6),
            (e.fillStyle = g ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.05)"),
            e.fill(),
            e.drawImage(this.icon(c), u + 6, d + 6, o - 16, o - 16),
            t.counts && this.drawCount(t.counts.get(c) || 0, u + o - 9, d + o - 10),
            this.inventoryRects.push({ id: c, x: u, y: d, w: o - 4, h: o - 4 }),
            g &&
              ((e.font = "600 13px system-ui, -apple-system, Segoe UI, sans-serif"),
              (e.fillStyle = "#fff"),
              (e.textAlign = "center"),
              e.fillText(Z[c].name, this.w / 2, l + a - 14),
              (e.textAlign = "left")));
        }));
    }
    drawCount(count, right, bottom) {
      let e = this.ctx;
      ((e.font = "700 13px ui-monospace, Menlo, Consolas, monospace"),
        (e.textAlign = "right"),
        (e.fillStyle = "rgba(0,0,0,0.7)"),
        e.fillText(String(count), right + 1, bottom + 1),
        (e.fillStyle = "#fff"),
        e.fillText(String(count), right, bottom),
        (e.textAlign = "left"));
    }
    drawHurtFlash(amount) {
      let e = this.ctx;
      ((e.fillStyle = `rgba(190, 20, 20, ${Math.min(0.45, amount * 0.45)})`),
        e.fillRect(0, 0, this.w, this.h));
    }
    drawMiningProgress(progress) {
      let e = this.ctx,
        x = this.w / 2,
        y = this.h / 2;
      (e.beginPath(),
        e.arc(x, y, 16, 0, Math.PI * 2),
        (e.strokeStyle = "rgba(0,0,0,0.35)"),
        (e.lineWidth = 4),
        e.stroke(),
        e.beginPath(),
        e.arc(x, y, 16, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, progress)),
        (e.strokeStyle = "rgba(255,255,255,0.9)"),
        e.stroke());
    }
    drawVitals(t) {
      let e = this.ctx,
        width = 9 * st + 8 * ve,
        left = Math.round((this.w - width) / 2),
        top = Math.round(this.h - st - 18) - 24,
        size = 16,
        gap = 2;
      for (let i = 0; i < MAX_HEALTH / 2; i++) {
        let hp = t.health - i * 2,
          x = left + i * (size + gap),
          // flash empty outlines briefly when hurt
          shake = t.hurtFlash > 0.3 ? (Math.random() - 0.5) * 2 : 0;
        (drawHeart(e, x + size / 2, top + size / 2 + shake, size, "rgba(0,0,0,0.55)", 1),
          hp >= 2
            ? drawHeart(e, x + size / 2, top + size / 2 + shake, size - 4, "#e0302c", 1)
            : hp === 1 &&
              drawHeart(e, x + size / 2, top + size / 2 + shake, size - 4, "#e0302c", 0.5));
      }
      if (t.air < MAX_AIR)
        for (let i = 0; i < 10; i++) {
          let x = left + width - (i + 1) * (size + gap) + gap;
          i < Math.ceil((t.air / MAX_AIR) * 10) &&
            (e.beginPath(),
            e.arc(x + size / 2, top + size / 2, size / 2 - 2, 0, Math.PI * 2),
            (e.fillStyle = "rgba(120, 190, 255, 0.85)"),
            e.fill(),
            (e.strokeStyle = "rgba(255,255,255,0.8)"),
            (e.lineWidth = 1.5),
            e.stroke());
        }
    }
    hitTestInventory(t, e) {
      if (!this.inventoryOpen || !this.inventoryRects) return null;
      for (let s of this.inventoryRects)
        if (t >= s.x && t < s.x + s.w && e >= s.y && e < s.y + s.h) return s.id;
      return null;
    }
    drawDebug(t) {
      let e = this.ctx,
        s = t.debugLines;
      e.font = "12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
      let o = 8,
        n = 0;
      for (let r of s) n = Math.max(n, e.measureText(r).width);
      ((e.fillStyle = "rgba(6,8,12,0.62)"),
        Mt(e, 10, 10, n + o * 2, s.length * 16 + o * 2, 8),
        e.fill(),
        (e.fillStyle = "#d8f0c8"),
        s.forEach((r, a) => {
          e.fillText(r, 10 + o, 10 + o + 12 + a * 16);
        }));
    }
    drawMessages() {
      let t = this.ctx;
      ((t.textAlign = "center"),
        (t.font = "600 14px system-ui, -apple-system, Segoe UI, sans-serif"),
        this.messages.forEach((e, s) => {
          ((t.globalAlpha = Math.min(1, e.ttl * 2)),
            (t.fillStyle = "rgba(0,0,0,0.5)"),
            t.fillText(e.text, this.w / 2 + 1, this.h * 0.3 + s * 22 + 1),
            (t.fillStyle = "#fff"),
            t.fillText(e.text, this.w / 2, this.h * 0.3 + s * 22));
        }),
        (t.globalAlpha = 1),
        (t.textAlign = "left"));
    }
  };
// Heart centred on (cx, cy); `part` < 1 fills only the left half.
function drawHeart(ctx, cx, cy, size, color, part) {
  let s = size / 16;
  (ctx.save(),
    part < 1 && (ctx.beginPath(), ctx.rect(cx - size, cy - size, size, size * 2), ctx.clip()),
    ctx.beginPath(),
    ctx.moveTo(cx, cy + 6 * s),
    ctx.bezierCurveTo(cx - 9 * s, cy - 1 * s, cx - 6 * s, cy - 8 * s, cx, cy - 3.5 * s),
    ctx.bezierCurveTo(cx + 6 * s, cy - 8 * s, cx + 9 * s, cy - 1 * s, cx, cy + 6 * s),
    ctx.closePath(),
    (ctx.fillStyle = color),
    ctx.fill(),
    ctx.restore());
}
function Mt(i, t, e, s, o, n) {
  (i.beginPath(),
    i.moveTo(t + n, e),
    i.arcTo(t + s, e, t + s, e + o, n),
    i.arcTo(t + s, e + o, t, e + o, n),
    i.arcTo(t, e + o, t, e, n),
    i.arcTo(t, e, t + s, e, n),
    i.closePath());
}
function ls(i, t, e) {
  let s = document.createElement("canvas");
  s.width = s.height = e;
  let o = s.getContext("2d"),
    n = o.createImageData(e, e),
    r = n.data,
    a = F * F * 4,
    h = (S, v, k) => {
      let C = S * a + ((k & 15) * F + (v & 15)) * 4;
      return [i[C], i[C + 1], i[C + 2], i[C + 3]];
    },
    l = e * 0.9,
    c = l * 0.5,
    f = l * 0.25,
    u = -l * 0.5,
    d = l * 0.25,
    g = -l * 0.5,
    x = e / 2,
    y = e / 2,
    R = Math.max(1, Math.round(e / 20)),
    w = (S, v, k, C, U) => {
      for (let D = 0; D < R; D++)
        for (let P = 0; P < R; P++) {
          let B = (S | 0) + P,
            Y = (v | 0) + D;
          if (B < 0 || Y < 0 || B >= e || Y >= e) continue;
          let z = (Y * e + B) * 4;
          ((r[z] = k), (r[z + 1] = C), (r[z + 2] = U), (r[z + 3] = 255));
        }
    },
    b = (S, v, k) => {
      let C = 1 / (e * 1.4);
      for (let U = 0; U <= 1; U += C)
        for (let D = 0; D <= 1; D += C) {
          let [P, B, Y, z] = h(S, Math.floor(U * F), Math.floor(D * F));
          if (z < 128) continue;
          let [M, xt] = k(U, D);
          w(M, xt, P * v, B * v, Y * v);
        }
    };
  return (
    b(t.tex[4], 0.68, (S, v) => [x + S * c + u, y + S * f + d + g * (1 - v)]),
    b(t.tex[0], 0.86, (S, v) => [x + c + S * u, y + f + S * d + g * (1 - v)]),
    b(t.tex[2], 1, (S, v) => [x + S * c + v * u, y + S * f + v * d + g]),
    o.putImageData(n, 0, 0),
    s
  );
}
G();
nt();
var fs = 26,
  Se = 7,
  Dt = class {
    constructor(t = 1200) {
      ((this.max = t),
        (this.count = 0),
        (this.buffer = new Float32Array(t * Se)),
        (this.px = new Float32Array(t)),
        (this.py = new Float32Array(t)),
        (this.pz = new Float32Array(t)),
        (this.vx = new Float32Array(t)),
        (this.vy = new Float32Array(t)),
        (this.vz = new Float32Array(t)),
        (this.life = new Float32Array(t)),
        (this.u = new Float32Array(t)),
        (this.v = new Float32Array(t)),
        (this.layer = new Float32Array(t)),
        (this.rand = ot(2654435769)));
    }
    spawnBlockBreak(t, e, s, o, n = 22) {
      let r = At[o * 6 + 2];
      for (let a = 0; a < n; a++) {
        if (this.count >= this.max) return;
        let h = this.count++;
        ((this.px[h] = t + 0.15 + this.rand() * 0.7),
          (this.py[h] = e + 0.15 + this.rand() * 0.7),
          (this.pz[h] = s + 0.15 + this.rand() * 0.7),
          (this.vx[h] = (this.rand() - 0.5) * 3.4),
          (this.vy[h] = 1.6 + this.rand() * 3.6),
          (this.vz[h] = (this.rand() - 0.5) * 3.4),
          (this.life[h] = 0.7 + this.rand() * 0.7),
          (this.u[h] = Math.floor(this.rand() * 4) * 0.2),
          (this.v[h] = Math.floor(this.rand() * 4) * 0.2),
          (this.layer[h] = r));
      }
    }
    update(t, e) {
      let s = this.count;
      for (let o = 0; o < s; o++) {
        if (((this.life[o] -= e), this.life[o] <= 0)) {
          (s--, this.copy(s, o), o--);
          continue;
        }
        this.vy[o] -= fs * e;
        let n = this.px[o] + this.vx[o] * e,
          r = this.py[o] + this.vy[o] * e,
          a = this.pz[o] + this.vz[o] * e;
        (K[t.getBlock(Math.floor(n), Math.floor(this.py[o]), Math.floor(this.pz[o]))]
          ? (this.vx[o] *= -0.3)
          : (this.px[o] = n),
          K[t.getBlock(Math.floor(this.px[o]), Math.floor(r), Math.floor(this.pz[o]))]
            ? ((this.vy[o] *= -0.26), (this.vx[o] *= 0.7), (this.vz[o] *= 0.7))
            : (this.py[o] = r),
          K[t.getBlock(Math.floor(this.px[o]), Math.floor(this.py[o]), Math.floor(a))]
            ? (this.vz[o] *= -0.3)
            : (this.pz[o] = a));
      }
      ((this.count = s), this.pack());
    }
    copy(t, e) {
      ((this.px[e] = this.px[t]),
        (this.py[e] = this.py[t]),
        (this.pz[e] = this.pz[t]),
        (this.vx[e] = this.vx[t]),
        (this.vy[e] = this.vy[t]),
        (this.vz[e] = this.vz[t]),
        (this.life[e] = this.life[t]),
        (this.u[e] = this.u[t]),
        (this.v[e] = this.v[t]),
        (this.layer[e] = this.layer[t]));
    }
    pack() {
      let t = this.buffer;
      for (let e = 0, s = 0; e < this.count; e++, s += Se)
        ((t[s] = this.px[e]),
          (t[s + 1] = this.py[e]),
          (t[s + 2] = this.pz[e]),
          (t[s + 3] = this.u[e]),
          (t[s + 4] = this.v[e]),
          (t[s + 5] = this.layer[e]),
          (t[s + 6] = 90 * Math.min(1, this.life[e] * 1.6)));
    }
    clear() {
      this.count = 0;
    }
  };
G();
function Ee(i, t, e, s, o, n, r, a = 6, h = !1) {
  let l = Math.floor(t),
    c = Math.floor(e),
    f = Math.floor(s),
    u = o > 0 ? 1 : -1,
    d = n > 0 ? 1 : -1,
    g = r > 0 ? 1 : -1,
    x = Math.abs(1 / o),
    y = Math.abs(1 / n),
    R = Math.abs(1 / r),
    w = Wt(t, o) * x,
    b = Wt(e, n) * y,
    S = Wt(s, r) * R,
    v = 0,
    k = 0,
    C = 0,
    U = 0;
  for (; U <= a;) {
    let D = i.getBlock(l, c, f);
    if (D !== p.AIR) {
      let P = ft[D];
      if (
        P === I.SOLID ||
        P === I.CUTOUT ||
        P === I.CROSS ||
        P === I.TORCH ||
        (h && P === I.LIQUID)
      )
        return { x: l, y: c, z: f, nx: v, ny: k, nz: C, block: D };
    }
    w < b && w < S
      ? ((l += u), (U = w), (w += x), (v = -u), (k = 0), (C = 0))
      : b < S
        ? ((c += d), (U = b), (b += y), (v = 0), (k = -d), (C = 0))
        : ((f += g), (U = S), (S += R), (v = 0), (k = 0), (C = -g));
  }
  return null;
}
function Wt(i, t) {
  if (t === 0) return 1 / 0;
  let e = i - Math.floor(i);
  return t > 0 ? 1 - e : e;
}
nt();
var mt = new Int8Array([
    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1,
    1, 0, 1, -1, 0, -1, -1,
  ]),
  yt = (i) => i * i * i * (i * (i * 6 - 15) + 10),
  q = class {
    constructor(t) {
      let e = ot(t >>> 0),
        s = new Uint8Array(256);
      for (let o = 0; o < 256; o++) s[o] = o;
      for (let o = 255; o > 0; o--) {
        let n = (e() * (o + 1)) | 0,
          r = s[o];
        ((s[o] = s[n]), (s[n] = r));
      }
      ((this.perm = new Uint8Array(512)), (this.permMod12 = new Uint8Array(512)));
      for (let o = 0; o < 512; o++)
        ((this.perm[o] = s[o & 255]), (this.permMod12[o] = this.perm[o] % 12));
    }
    noise2(t, e) {
      let s = this.perm,
        o = this.permMod12,
        n = Math.floor(t) & 255,
        r = Math.floor(e) & 255;
      ((t -= Math.floor(t)), (e -= Math.floor(e)));
      let a = yt(t),
        h = yt(e),
        l = s[n] + r,
        c = s[n + 1] + r,
        f = (w, b, S) => {
          let v = o[w] * 3;
          return mt[v] * b + mt[v + 1] * S;
        },
        u = f(l, t, e),
        d = f(c, t - 1, e),
        g = f(l + 1, t, e - 1),
        x = f(c + 1, t - 1, e - 1),
        y = u + a * (d - u),
        R = g + a * (x - g);
      return (y + h * (R - y)) * 1.4;
    }
    noise3(t, e, s) {
      let o = this.perm,
        n = this.permMod12,
        r = Math.floor(t) & 255,
        a = Math.floor(e) & 255,
        h = Math.floor(s) & 255;
      ((t -= Math.floor(t)), (e -= Math.floor(e)), (s -= Math.floor(s)));
      let l = yt(t),
        c = yt(e),
        f = yt(s),
        u = o[r] + a,
        d = o[u] + h,
        g = o[u + 1] + h,
        x = o[r + 1] + a,
        y = o[x] + h,
        R = o[x + 1] + h,
        w = (De, Ne, Ie, Ue) => {
          let Ut = n[De] * 3;
          return mt[Ut] * Ne + mt[Ut + 1] * Ie + mt[Ut + 2] * Ue;
        },
        b = w(d, t, e, s),
        S = w(y, t - 1, e, s),
        v = w(g, t, e - 1, s),
        k = w(R, t - 1, e - 1, s),
        C = w(d + 1, t, e, s - 1),
        U = w(y + 1, t - 1, e, s - 1),
        D = w(g + 1, t, e - 1, s - 1),
        P = w(R + 1, t - 1, e - 1, s - 1),
        B = b + l * (S - b),
        Y = v + l * (k - v),
        z = C + l * (U - C),
        M = D + l * (P - D),
        xt = B + c * (Y - B),
        Le = z + c * (M - z);
      return (xt + f * (Le - xt)) * 1.15;
    }
    fbm2(t, e, s, o = 2, n = 0.5) {
      let r = 1,
        a = 1,
        h = 0,
        l = 0;
      for (let c = 0; c < s; c++)
        ((h += r * this.noise2(t * a, e * a)), (l += r), (r *= n), (a *= o));
      return h / l;
    }
    fbm3(t, e, s, o, n = 2, r = 0.5) {
      let a = 1,
        h = 1,
        l = 0,
        c = 0;
      for (let f = 0; f < o; f++)
        ((l += a * this.noise3(t * h, e * h, s * h)), (c += a), (a *= r), (h *= n));
      return l / c;
    }
    ridged3(t, e, s, o, n = 2, r = 0.5) {
      let a = 1,
        h = 1,
        l = 0,
        c = 0;
      for (let f = 0; f < o; f++) {
        let u = 1 - Math.abs(this.noise3(t * h, e * h, s * h));
        ((l += a * u * u), (c += a), (a *= r), (h *= n));
      }
      return l / c;
    }
    ridged2(t, e, s, o = 2, n = 0.5) {
      let r = 1,
        a = 1,
        h = 0,
        l = 0;
      for (let c = 0; c < s; c++) {
        let f = 1 - Math.abs(this.noise2(t * a, e * a));
        ((h += r * f * f), (l += r), (r *= n), (a *= o));
      }
      return h / l;
    }
  };
nt();
G();
var it = { OCEAN: 0, BEACH: 1, PLAINS: 2, FOREST: 3, DESERT: 4, SNOWY: 5, MOUNTAIN: 6 },
  we = ["Ocean", "Beach", "Plains", "Forest", "Desert", "Snowy Tundra", "Mountains"],
  us = (i) => (i <= 0 ? 0 : i >= 1 ? 1 : i * i * (3 - 2 * i)),
  be = (i, t, e) => (i < t ? t : i > e ? e : i),
  Kt = class {
    constructor(t) {
      ((this.seed = t >>> 0),
        (this.continent = new q(t + 1)),
        (this.hills = new q(t + 2)),
        (this.mountains = new q(t + 3)),
        (this.temperature = new q(t + 4)),
        (this.humidity = new q(t + 5)),
        (this.caves = new q(t + 6)),
        (this.caveRooms = new q(t + 7)),
        (this.ore = new q(t + 8)),
        (this.dirtDepth = new q(t + 9)));
    }
    heightAt(t, e) {
      let s = this.continent.fbm2(t * 0.0016, e * 0.0016, 4),
        o = this.hills.fbm2(t * 0.0085, e * 0.0085, 4),
        n = us((s - 0.12) * 2.6),
        r = this.mountains.ridged2(t * 0.0035, e * 0.0035, 4),
        a =
          this.hills.noise2(t * 0.195, e * 0.195) * 0.85 +
          this.dirtDepth.noise2(t * 0.062, e * 0.062) * 1.9 +
          this.mountains.noise2(t * 0.018, e * 0.018) * 2.2,
        h = 62 + s * 26 + o * 7 + n * r * 52 + a;
      return (h < 62 && (h = 62 - (62 - h) * 0.62), be(Math.round(h), 1, 116));
    }
    biomeAt(t, e, s) {
      if (s < 61) return it.OCEAN;
      if (s <= 63) return it.BEACH;
      if (s > 96) return it.MOUNTAIN;
      let o = this.temperature.fbm2(t * 9e-4, e * 9e-4, 3),
        n = this.humidity.fbm2(t * 0.0011, e * 0.0011, 3);
      return o < -0.32
        ? it.SNOWY
        : o > 0.28 && n < 0
          ? it.DESERT
          : n > 0.18
            ? it.FOREST
            : it.PLAINS;
    }
    isCave(t, e, s) {
      if (e < 2 || e > 108) return !1;
      let o = this.caves.ridged3(t * 0.012, e * 0.02, s * 0.012, 2),
        n = this.caves.ridged3((t + 419) * 0.012, e * 0.02, (s - 271) * 0.012, 2);
      if (o > 0.86 && n > 0.86) return !0;
      let r = this.caveRooms.fbm3(t * 0.019, e * 0.03, s * 0.019, 3),
        a = be((40 - e) / 40, 0, 1) * 0.1;
      return r > 0.56 - a;
    }
    oreAt(t, e, s) {
      if (this.ore.fbm3(t * 0.09, e * 0.09, s * 0.09, 2) < 0.62) return 0;
      let n = ne(t, e, s, this.seed ^ 1374496523);
      return e < 16 && n < 0.1
        ? p.DIAMOND_ORE
        : e < 30 && n < 0.22
          ? p.GOLD_ORE
          : e < 52 && n < 0.48
            ? p.IRON_ORE
            : e < 72
              ? p.COAL_ORE
              : 0;
    }
  },
  Nt = null;
function ds(i) {
  return ((!Nt || Nt.seed !== i >>> 0) && (Nt = new Kt(i)), Nt);
}
function Ce(i) {
  let t = ds(i);
  for (let e = 0; e < 4e3; e += 8)
    for (let s = 0; s < 8; s++) {
      let o = (s / 8) * Math.PI * 2,
        n = Math.round(Math.cos(o) * e),
        r = Math.round(Math.sin(o) * e),
        a = t.heightAt(n, r);
      if (a > 63 && a < 92) return { x: n + 0.5, y: a + 2.2, z: r + 0.5 };
    }
  return { x: 0.5, y: 74, z: 0.5 };
}
G();
nt();
var ps = "voxelcraft";
var It = "worlds",
  _e = "default";
function Re() {
  return new Promise((i, t) => {
    let e = indexedDB.open(ps, 1);
    ((e.onupgradeneeded = () => {
      let s = e.result;
      s.objectStoreNames.contains(It) || s.createObjectStore(It);
    }),
      (e.onsuccess = () => i(e.result)),
      (e.onerror = () => t(e.error)));
  });
}
function Oe(i, t, e) {
  return new Promise((s, o) => {
    let n = i.transaction(It, t),
      r = e(n.objectStore(It));
    ((n.oncomplete = () => s(r && r.result)),
      (n.onerror = () => o(n.error)),
      (n.onabort = () => o(n.error)));
  });
}
function gs(i) {
  let t = [];
  for (let [e, s] of i) {
    if (!s || !s.size) continue;
    let o = new Uint32Array(s.size),
      n = new Uint8Array(s.size),
      r = 0;
    for (let [a, h] of s) ((o[r] = a), (n[r] = h), r++);
    t.push({ key: e, indices: o, ids: n });
  }
  return t;
}
function ms(i) {
  let t = new Map();
  if (!i) return t;
  for (let { key: e, indices: s, ids: o } of i) {
    let n = new Map();
    for (let r = 0; r < s.length; r++) n.set(s[r], o[r]);
    t.set(e, n);
  }
  return t;
}
async function Te({ seed: i, player: t, edits: e, timeOfDay: s, settings: o }) {
  try {
    let n = await Re();
    return (
      await Oe(n, "readwrite", (r) =>
        r.put(
          {
            seed: i,
            player: t,
            timeOfDay: s,
            settings: o,
            edits: gs(e),
            savedAt: Date.now(),
            version: 1,
          },
          _e,
        ),
      ),
      n.close(),
      !0
    );
  } catch (n) {
    return (console.warn("[storage] save failed:", n), !1);
  }
}
async function ke() {
  try {
    let i = await Re(),
      t = await Oe(i, "readonly", (e) => e.get(_e));
    return (
      i.close(),
      t
        ? {
            seed: t.seed,
            player: t.player,
            timeOfDay: t.timeOfDay ?? 0.3,
            settings: t.settings || {},
            edits: ms(t.edits),
            savedAt: t.savedAt,
          }
        : null
    );
  } catch (i) {
    return (console.warn("[storage] load failed:", i), null);
  }
}
var Gt = {
  get(i, t) {
    try {
      let e = localStorage.getItem(`voxelcraft.${i}`);
      return e === null ? t : JSON.parse(e);
    } catch {
      return t;
    }
  },
  set(i, t) {
    try {
      localStorage.setItem(`voxelcraft.${i}`, JSON.stringify(t));
    } catch {}
  },
};
// Survival tuning
var MAX_HEALTH = 20, // max health (10 hearts)
  MAX_AIR = 10, // seconds of air underwater
  MINE_SECONDS_PER_HARDNESS = 0.45,
  SAFE_FALL = 3, // blocks you can fall without damage
  REGEN_DELAY = 4,
  REGEN_INTERVAL = 2.5;
// What a block turns into when mined in survival (0 = nothing).
var DROPS = null;
function dropFor(id) {
  return (
    DROPS ||
      (DROPS = {
        [p.GRASS]: p.DIRT,
        [p.SNOW_GRASS]: p.DIRT,
        [p.STONE]: p.COBBLESTONE,
        [p.LEAVES]: 0,
        [p.GLASS]: 0,
        [p.ICE]: 0,
        [p.TALL_GRASS]: 0,
        [p.DEAD_BUSH]: 0,
      }),
    id in DROPS ? DROPS[id] : id
  );
}
var ys = 600,
  xs = 3,
  As = 30,
  T = (i) => document.getElementById(i),
  W = new URLSearchParams(location.search),
  Xt = class {
    constructor() {
      ((this.glCanvas = T("gl")),
        (this.hudCanvas = T("hud")),
        (this.renderer = null),
        (this.world = null),
        (this.player = new kt()),
        (this.particles = new Dt()),
        (this.hud = null),
        (this.running = !1),
        (this.paused = !1),
        (this.loading = !1),
        (this.time = 0),
        (this.timeOfDay = 0.32),
        (this.frames = 0),
        (this.fps = 0),
        (this.fpsClock = 0),
        (this.lastFrame = 0),
        (this.autosaveClock = 0),
        (this.heldNameAlpha = 0),
        (this.debug = W.get("debug") === "1"),
        (this.uploadQueue = []),
        (this.selection = null),
        (this.pointer = { x: 0, y: 0 }),
        (this.hotbar = ut.slice()),
        (this.keys = new Set()),
        (this.lastSpaceTap = 0),
        (this.frameTimes = []),
        (this.mode = "creative"),
        (this.inv = new Map()),
        (this.health = MAX_HEALTH),
        (this.air = MAX_AIR),
        (this.hurtFlash = 0),
        (this.sinceHurt = 0),
        (this.regenClock = 0),
        (this.drownClock = 0),
        (this.fallPeak = null),
        (this.mining = !1),
        (this.mineKey = ""),
        (this.mineProgress = 0));
    }
    get survival() {
      return this.mode === "survival";
    }
    async boot() {
      try {
        this.renderer = new Ct(this.glCanvas);
      } catch (s) {
        this.fatal(s.message + " Try a recent Chrome, Edge, Firefox or Safari.");
        return;
      }
      let t = await this.renderer.init();
      ((this.hud = new Lt(this.hudCanvas, t.data)),
        t.fromAssets ||
          (T("support").textContent =
            "Note: assets/blocks.png could not be fetched, so textures were generated in the browser instead."),
        this.bindUI(),
        this.bindInput());
      let e = await ke();
      (e &&
        ((this.save = e),
        (T("continue").hidden = !1),
        (T("continue").textContent =
          `Continue ${e.settings?.mode || "creative"} (seed ${e.seed}, ${Es(e.savedAt)})`)),
        W.get("autostart") === "1" &&
          this.start({
            seed: W.has("seed") ? Me(W.get("seed")) : 1337,
            renderDistance: Number(W.get("rd") || 8),
            mode: W.get("mode") || "creative",
          }),
        (window.__voxelcraft = this));
    }
    fatal(t) {
      ((T("fatalText").textContent = t), (T("fatal").hidden = !1), (T("menu").hidden = !0));
    }
    bindUI() {
      let t = T("rd");
      ((t.value = Gt.get("renderDistance", 8)),
        (T("rdValue").textContent = t.value),
        t.addEventListener("input", () => {
          T("rdValue").textContent = t.value;
        }),
        (() => {
          let m = Gt.get("mode", "survival"),
            r = document.querySelector(`input[name="mode"][value="${m}"]`);
          r && (r.checked = !0);
        })(),
        T("play").addEventListener("click", () => {
          let e = T("seed").value.trim(),
            m = document.querySelector('input[name="mode"]:checked')?.value || "survival";
          (Gt.set("mode", m),
            this.start({
              seed: e ? Me(e) : (Math.random() * 4294967295) >>> 0,
              renderDistance: Number(t.value),
              mode: m,
            }));
        }),
        T("continue").addEventListener("click", () => {
          this.start({ seed: this.save.seed, renderDistance: Number(t.value), save: this.save });
        }),
        T("resume").addEventListener("click", () => this.resume()),
        T("saveNow").addEventListener("click", () => this.save_()),
        T("quit").addEventListener("click", () => this.quit()));
    }
    start({ seed: t, renderDistance: e, save: s, mode: m }) {
      this.mode = s ? s.settings?.mode || "creative" : m === "survival" ? "survival" : "creative";
      this.resetSurvivalState();
      this.spawn = Ce(t >>> 0);
      if (
        (Gt.set("renderDistance", e),
        (T("menu").hidden = !0),
        (T("loading").hidden = !1),
        (this.loading = !0),
        (this.seed = t >>> 0),
        (this.world = new Tt({
          seed: this.seed,
          renderDistance: e,
          onMeshReady: (o, n) => this.uploadQueue.push({ chunk: o, sections: n }),
          onChunkUnload: (o) => this.renderer.freeChunk(o),
        })),
        s)
      )
        (this.world.loadEdits(s.edits),
          this.player.restore(s.player),
          (this.timeOfDay = s.timeOfDay),
          (this.hotbar = s.settings?.hotbar || (this.survival ? Array(9).fill(0) : ut.slice())),
          this.survival &&
            ((this.inv = new Map(s.settings?.inv || [])),
            (this.health = s.settings?.health ?? MAX_HEALTH),
            (this.air = s.settings?.air ?? MAX_AIR),
            (this.player.flying = !1)));
      else {
        this.hotbar = this.survival ? Array(9).fill(0) : ut.slice();
        let o = this.spawn;
        ((this.player.x = o.x),
          (this.player.y = o.y),
          (this.player.z = o.z),
          (this.player.yaw = 0),
          (this.player.pitch = -0.15));
      }
      (bs(this.player),
        W.has("time") && (this.timeOfDay = Number(W.get("time"))),
        W.has("fly") && !this.survival && (this.player.flying = W.get("fly") === "1"),
        (this.loadTarget = Math.max(1, this.world.offsets.filter((o) => o.dist <= e - 1).length)),
        (this.loadingClock = 0),
        (this.running = !0),
        (this.paused = !1),
        (this.spawnSettled = !1),
        (this.lastFrame = performance.now()),
        requestAnimationFrame(this.frame));
    }
    resetSurvivalState() {
      ((this.player.flying = !1),
        (this.inv = new Map()),
        (this.health = MAX_HEALTH),
        (this.air = MAX_AIR),
        (this.hurtFlash = 0),
        (this.sinceHurt = 99),
        (this.fallPeak = null),
        (this.mining = !1),
        (this.mineProgress = 0));
    }
    quit() {
      if ((this.save_(), (this.running = !1), this.world)) {
        for (let t of this.world.chunks.values()) this.renderer.freeChunk(t);
        (this.world.destroy(), (this.world = null));
      }
      ((this.uploadQueue.length = 0),
        this.particles.clear(),
        document.exitPointerLock?.(),
        (T("pause").hidden = !0),
        (T("menu").hidden = !1));
    }
    async save_() {
      if (!this.world) return;
      let t = await Te({
        seed: this.seed,
        player: this.player.serialize(),
        edits: this.world.collectEdits(),
        timeOfDay: this.timeOfDay,
        settings: {
          hotbar: this.hotbar,
          mode: this.mode,
          inv: [...this.inv],
          health: this.health,
          air: this.air,
        },
      });
      ((T("saveInfo").textContent = t ? "World saved." : "Save failed (storage blocked?)."),
        t && this.hud.message("World saved"));
    }
    pause() {
      !this.running ||
        this.paused ||
        ((this.paused = !0), (T("pause").hidden = !1), document.exitPointerLock?.());
    }
    resume() {
      ((this.paused = !1), (T("pause").hidden = !0), this.glCanvas.requestPointerLock?.());
    }
    bindInput() {
      let t = this.glCanvas;
      (t.addEventListener("click", () => {
        this.running && !this.paused && !this.hud.inventoryOpen && t.requestPointerLock?.();
      }),
        document.addEventListener("pointerlockchange", () => {
          !(document.pointerLockElement === t) &&
            this.running &&
            !this.paused &&
            !this.hud.inventoryOpen &&
            this.pause();
        }),
        document.addEventListener("mousemove", (e) => {
          document.pointerLockElement === t
            ? this.player.addLook(e.movementX, e.movementY)
            : ((this.pointer.x = e.clientX), (this.pointer.y = e.clientY));
        }),
        document.addEventListener("mousedown", (e) => {
          if (!(!this.running || this.paused)) {
            if (this.hud.inventoryOpen) {
              let s = this.hud.hitTestInventory(e.clientX, e.clientY);
              s &&
                this.survival &&
                (this.hotbar = this.hotbar.map((h, i) =>
                  h === s && i !== this.player.selectedSlot ? 0 : h,
                ));
              s && ((this.hotbar[this.player.selectedSlot] = s), (this.heldNameAlpha = 2.2));
              return;
            }
            document.pointerLockElement === t &&
              (e.button === 0
                ? this.survival
                  ? (this.mining = !0)
                  : this.breakBlock()
                : e.button === 2
                  ? this.placeBlock()
                  : e.button === 1 && (this.pickBlock(), e.preventDefault()));
          }
        }),
        document.addEventListener("mouseup", (e) => {
          e.button === 0 && (this.mining = !1);
        }),
        document.addEventListener("contextmenu", (e) => {
          this.running && e.preventDefault();
        }),
        document.addEventListener(
          "wheel",
          (e) => {
            if (!this.running || this.paused || this.hud.inventoryOpen) return;
            let s = Math.sign(e.deltaY);
            ((this.player.selectedSlot =
              (this.player.selectedSlot + s + this.hotbar.length) % this.hotbar.length),
              (this.heldNameAlpha = 2.2));
          },
          { passive: !0 },
        ),
        document.addEventListener("keydown", (e) => {
          if (e.repeat) {
            e.code === "F3" && e.preventDefault();
            return;
          }
          switch ((this.keys.add(e.code), e.code)) {
            case "Escape":
              this.hud.inventoryOpen
                ? this.toggleInventory()
                : this.running && !this.paused
                  ? this.pause()
                  : this.paused && this.resume();
              break;
            case "KeyE":
              this.running && this.toggleInventory();
              break;
            case "F3":
              (e.preventDefault(), (this.debug = !this.debug));
              break;
            case "KeyF":
              this.running && this.toggleFly();
              break;
            case "Space": {
              let s = performance.now();
              (s - this.lastSpaceTap < 280 && this.toggleFly(), (this.lastSpaceTap = s));
              break;
            }
            default:
              /^Digit[1-9]$/.test(e.code) &&
                ((this.player.selectedSlot = Number(e.code.slice(5)) - 1),
                (this.heldNameAlpha = 2.2));
          }
        }),
        document.addEventListener("keyup", (e) => this.keys.delete(e.code)),
        window.addEventListener("blur", () => {
          (this.keys.clear(), (this.mining = !1));
        }),
        window.addEventListener("beforeunload", () => {
          this.world && this.save_();
        }));
    }
    toggleInventory() {
      ((this.hud.inventoryOpen = !this.hud.inventoryOpen),
        document.body.classList.toggle("inventory", this.hud.inventoryOpen),
        this.hud.inventoryOpen
          ? document.exitPointerLock?.()
          : this.glCanvas.requestPointerLock?.());
    }
    toggleFly() {
      if (this.survival) return;
      ((this.player.flying = !this.player.flying),
        (this.player.vy = 0),
        this.hud.message(this.player.flying ? "Flying enabled" : "Flying disabled", 1.2));
    }
    readInput() {
      let t = this.keys,
        e = (...s) => s.some((o) => t.has(o));
      return this.paused || this.hud.inventoryOpen
        ? { forward: 0, right: 0, jump: !1, sneak: !1, sprint: !1 }
        : {
            forward: (e("KeyW", "ArrowUp") ? 1 : 0) - (e("KeyS", "ArrowDown") ? 1 : 0),
            right: (e("KeyD", "ArrowRight") ? 1 : 0) - (e("KeyA", "ArrowLeft") ? 1 : 0),
            jump: e("Space"),
            sneak: e("ShiftLeft", "ShiftRight"),
            sprint: e("ControlLeft", "ControlRight"),
          };
    }
    currentTarget() {
      let t = this.player,
        [e, s, o] = t.lookDirection();
      return Ee(this.world, t.x, t.eyeY, t.z, e, s, o, 6);
    }
    breakBlock() {
      let t = this.selection;
      if (!t) return;
      let e = this.world.getBlock(t.x, t.y, t.z);
      if (e === p.BEDROCK) {
        this.hud.message("Bedrock cannot be broken", 1.2);
        return;
      }
      this.world.setBlock(t.x, t.y, t.z, p.AIR) &&
        (this.particles.spawnBlockBreak(t.x, t.y, t.z, e),
        this.survival && this.collect(dropFor(e)));
    }
    collect(id) {
      if (!id) return;
      if ((this.inv.set(id, (this.inv.get(id) || 0) + 1), this.hotbar.includes(id))) return;
      let i = this.hotbar.findIndex((h) => !h);
      i >= 0 && (this.hotbar[i] = id);
    }
    consume(id) {
      let n = (this.inv.get(id) || 0) - 1;
      n > 0
        ? this.inv.set(id, n)
        : (this.inv.delete(id), (this.hotbar = this.hotbar.map((h) => (h === id ? 0 : h))));
    }
    inventoryList() {
      let have = [...this.inv.keys()];
      return Ft.filter((id) => this.inv.has(id)).concat(have.filter((id) => !Ft.includes(id)));
    }
    updateMining(dt) {
      let t = this.selection;
      if (!this.mining || !t || document.pointerLockElement !== this.glCanvas) {
        ((this.mineProgress = 0), (this.mineKey = ""));
        return;
      }
      let key = `${t.x},${t.y},${t.z}`;
      key !== this.mineKey && ((this.mineKey = key), (this.mineProgress = 0));
      let hardness = Z[t.block].hardness;
      if (t.block === p.BEDROCK) {
        (this.mineProgress === 0 && this.hud.message("Bedrock cannot be broken", 1.2),
          (this.mineProgress = 1e-6));
        return;
      }
      ((this.mineProgress += dt / Math.max(0.05, hardness * MINE_SECONDS_PER_HARDNESS)),
        this.mineProgress >= 1 &&
          (this.breakBlock(), (this.mineProgress = 0), (this.mineKey = "")));
    }
    hurt(amount, reason) {
      amount <= 0 ||
        ((this.health = Math.max(0, this.health - amount)),
        (this.hurtFlash = 1),
        (this.sinceHurt = 0),
        this.health <= 0 && this.die(reason));
    }
    die(reason) {
      this.hud.message(`You ${reason}! Respawning at world spawn\u2026`, 3);
      let s = this.spawn;
      ((this.player.x = s.x),
        (this.player.y = s.y),
        (this.player.z = s.z),
        (this.player.vx = this.player.vy = this.player.vz = 0),
        this.player.settleOnGround(this.world),
        (this.health = MAX_HEALTH),
        (this.air = MAX_AIR),
        (this.fallPeak = null),
        (this.mining = !1));
    }
    updateSurvival(dt) {
      let pl = this.player;
      ((this.sinceHurt += dt), (this.hurtFlash = Math.max(0, this.hurtFlash - dt * 2.5)));
      // Fall damage: remember the highest point since we last stood on ground / were in water.
      pl.onGround || pl.inWater
        ? (this.fallPeak !== null &&
            pl.onGround &&
            !pl.inWater &&
            this.hurt(Math.floor(this.fallPeak - pl.y - SAFE_FALL), "fell from a high place"),
          (this.fallPeak = null))
        : (this.fallPeak = Math.max(this.fallPeak ?? pl.y, pl.y));
      // Drowning
      pl.headInWater
        ? ((this.air = Math.max(0, this.air - dt)),
          this.air <= 0 &&
            ((this.drownClock += dt),
            this.drownClock >= 1 && ((this.drownClock = 0), this.hurt(2, "drowned"))))
        : ((this.air = Math.min(MAX_AIR, this.air + dt * 5)), (this.drownClock = 0));
      // Slow natural regeneration
      this.health < MAX_HEALTH && this.sinceHurt > REGEN_DELAY
        ? ((this.regenClock += dt),
          this.regenClock >= REGEN_INTERVAL && ((this.regenClock = 0), (this.health += 1)))
        : (this.regenClock = 0);
    }
    placeBlock() {
      let t = this.selection;
      if (!t) return;
      let e = this.hotbar[this.player.selectedSlot];
      if (!e || (this.survival && !this.inv.get(e))) return;
      let s = t.x + t.nx,
        o = t.y + t.ny,
        n = t.z + t.nz;
      o < 0 ||
        o >= 128 ||
        !ie(this.world.getBlock(s, o, n)) ||
        (K[e] && this.player.intersectsBlock(s, o, n)) ||
        (this.world.setBlock(s, o, n, e) && this.survival && this.consume(e));
    }
    pickBlock() {
      let t = this.selection;
      if (!t) return;
      let e = this.world.getBlock(t.x, t.y, t.z);
      if (e && this.survival) {
        if (!this.inv.get(e)) return;
        let i = this.hotbar.indexOf(e);
        if (i >= 0) {
          ((this.player.selectedSlot = i), (this.heldNameAlpha = 2.2));
          return;
        }
      }
      e && ((this.hotbar[this.player.selectedSlot] = e), (this.heldNameAlpha = 2.2));
    }
    frame = (t) => {
      if (!this.running) return;
      requestAnimationFrame(this.frame);
      let e = Math.min(0.1, (t - this.lastFrame) / 1e3);
      ((this.lastFrame = t),
        (this.time += e),
        this.trackFps(e),
        this.drainUploads(),
        this.paused ||
          ((this.timeOfDay = (this.timeOfDay + e / ys) % 1),
          this.player.update(this.world, this.readInput(), e),
          this.particles.update(this.world, e),
          (this.autosaveClock += e),
          this.autosaveClock > As && ((this.autosaveClock = 0), this.save_())),
        this.world.update(this.player.x, this.player.z, this.paused ? 8 : 4),
        this.loading && this.updateLoading(e),
        (this.selection = this.paused || this.hud.inventoryOpen ? null : this.currentTarget()),
        this.survival &&
          (this.paused || this.loading || this.updateSurvival(e),
          this.paused || this.hud.inventoryOpen ? (this.mineProgress = 0) : this.updateMining(e)),
        (this.heldNameAlpha = Math.max(0, this.heldNameAlpha - e)),
        this.renderer.render({
          world: this.world,
          camera: this.player.camera(),
          timeOfDay: this.timeOfDay,
          underwater: this.player.headInWater,
          selection: this.selection,
          particles: this.particles,
          cloudCover: 0.5,
          time: this.time,
        }),
        this.hud.tick(e),
        this.hud.draw({
          hotbar: this.hotbar,
          selectedSlot: this.player.selectedSlot,
          underwater: this.player.headInWater,
          heldNameAlpha: this.heldNameAlpha,
          debug: this.debug,
          pointer: this.pointer,
          survival: this.survival,
          counts: this.survival ? this.inv : null,
          inventoryList: this.survival ? this.inventoryList() : null,
          health: this.health,
          air: this.air,
          hurtFlash: this.hurtFlash,
          mineProgress: this.mineProgress,
          debugLines: this.debug ? this.debugLines() : null,
        }));
    };
    trackFps(t) {
      (this.frames++,
        (this.fpsClock += t),
        this.fpsClock >= 0.5 &&
          ((this.fps = Math.round(this.frames / this.fpsClock)),
          (this.frames = 0),
          (this.fpsClock = 0)));
    }
    drainUploads() {
      let t = 0;
      for (; this.uploadQueue.length && t < xs;) {
        let { chunk: e, sections: s } = this.uploadQueue.shift();
        this.world.getChunkAt(e.cx, e.cz) === e && (this.renderer.uploadChunkMesh(e, s), t++);
      }
    }
    updateLoading(t) {
      let e = this.world,
        s = this.loadTarget;
      this.loadingClock += t;
      let o = 0;
      for (let a of e.chunks.values()) a.meshRevision >= 0 && o++;
      let n = Math.min(100, Math.round((o / s) * 100));
      ((T("bar").style.width = `${n}%`),
        !this.spawnSettled &&
          e.isLoaded(Math.floor(this.player.x), Math.floor(this.player.z)) &&
          (W.has("y") || this.player.settleOnGround(e), (this.spawnSettled = !0)));
      let r = this.loadingClock > 25;
      this.spawnSettled &&
        (o >= s || r) &&
        ((this.loading = !1),
        (T("loading").hidden = !0),
        W.get("autostart") !== "1" && this.glCanvas.requestPointerLock?.(),
        this.hud.message(
          this.survival
            ? "Survival: hold left click to mine, right click to build"
            : "Creative: left click to break, right click to build, F to fly",
          3.5,
        ));
    }
    debugLines() {
      let t = this.player,
        e = this.world,
        s = this.renderer.stats,
        o = e.getChunkAt(Math.floor(t.x) >> 4, Math.floor(t.z) >> 4),
        n =
          o && o.biomes
            ? we[o.biomes[(Math.floor(t.z) & 15) * 16 + (Math.floor(t.x) & 15)]]
            : "\u2014",
        r = e.getLightAt(Math.floor(t.x), Math.floor(t.y + 1), Math.floor(t.z)),
        a = this.selection,
        h = Ss(this.timeOfDay);
      return [
        `Voxelcraft   ${this.fps} fps   seed ${this.seed}   ${this.mode}`,
        `xyz  ${t.x.toFixed(2)} ${t.y.toFixed(2)} ${t.z.toFixed(2)}`,
        `chunk ${Math.floor(t.x) >> 4}, ${Math.floor(t.z) >> 4}   biome ${n}`,
        `facing ${vs(t.yaw)}  yaw ${((t.yaw * 180) / Math.PI).toFixed(0)}\xB0  pitch ${((t.pitch * 180) / Math.PI).toFixed(0)}\xB0`,
        `light  sky ${r.sky}  block ${r.block}   time ${h}`,
        `chunks ${e.stats.chunks} loaded, ${s.chunksDrawn} drawn   queue g${e.stats.pendingGen}/m${e.stats.pendingMesh}`,
        `draws ${s.drawCalls}   quads ${(s.quadsDrawn / 1e3).toFixed(1)}k`,
        `state ${t.flying ? "flying" : t.onGround ? "grounded" : "airborne"}${t.inWater ? ", in water" : ""}${t.sprinting ? ", sprinting" : ""}`,
        a ? `looking at ${Z[a.block].name} @ ${a.x} ${a.y} ${a.z}` : "looking at \u2014",
        `sea level ${62}   render distance ${e.renderDistance}`,
      ];
    }
  };
function Me(i) {
  let t = Number(i);
  return Number.isFinite(t) && i !== "" ? t >>> 0 : oe(i);
}
function vs(i) {
  let t = ((((i * 180) / Math.PI) % 360) + 360) % 360;
  return ["north", "north-west", "west", "south-west", "south", "south-east", "east", "north-east"][
    Math.round(t / 45) % 8
  ];
}
function Ss(i) {
  let t = Math.floor(i * 24 * 60),
    e = String(Math.floor(t / 60)).padStart(2, "0"),
    s = String(t % 60).padStart(2, "0");
  return `${e}:${s}`;
}
function Es(i) {
  if (!i) return "unknown";
  let t = (Date.now() - i) / 1e3;
  return t < 90
    ? "just now"
    : t < 3600
      ? `${Math.round(t / 60)} min ago`
      : t < 86400
        ? `${Math.round(t / 3600)} h ago`
        : `${Math.round(t / 86400)} d ago`;
}
function bs(i) {
  let t = (e, s) => (W.has(e) ? Number(W.get(e)) : s);
  ((i.x = t("x", i.x)),
    (i.y = t("y", i.y)),
    (i.z = t("z", i.z)),
    (i.yaw = t("yaw", i.yaw)),
    (i.pitch = t("pitch", i.pitch)));
}
var ws = new Xt();
ws.boot();

function xt(s) {
  let e = s >>> 0;
  return function () {
    e = (e + 1831565813) >>> 0;
    let t = e;
    return (
      (t = Math.imul(t ^ (t >>> 15), t | 1)),
      (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
function ut(s, e, t, r) {
  let o = (r ^ 2654435769) >>> 0;
  return (
    (o = Math.imul(o ^ (s | 0), 2246822507) >>> 0),
    (o = Math.imul(o ^ (e | 0), 3266489909) >>> 0),
    (o = Math.imul(o ^ (t | 0), 668265263) >>> 0),
    (o ^= o >>> 15),
    (o = Math.imul(o, 625341585) >>> 0),
    (o ^= o >>> 13),
    (o >>> 0) / 4294967296
  );
}
function ct(s, e, t) {
  return ut(s, 0, e, t);
}
var ht = new Int8Array([
    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1,
    1, 0, 1, -1, 0, -1, -1,
  ]),
  Ot = (s) => s * s * s * (s * (s * 6 - 15) + 10),
  F = class {
    constructor(e) {
      let t = xt(e >>> 0),
        r = new Uint8Array(256);
      for (let o = 0; o < 256; o++) r[o] = o;
      for (let o = 255; o > 0; o--) {
        let h = (t() * (o + 1)) | 0,
          O = r[o];
        ((r[o] = r[h]), (r[h] = O));
      }
      ((this.perm = new Uint8Array(512)), (this.permMod12 = new Uint8Array(512)));
      for (let o = 0; o < 512; o++)
        ((this.perm[o] = r[o & 255]), (this.permMod12[o] = this.perm[o] % 12));
    }
    noise2(e, t) {
      let r = this.perm,
        o = this.permMod12,
        h = Math.floor(e) & 255,
        O = Math.floor(t) & 255;
      ((e -= Math.floor(e)), (t -= Math.floor(t)));
      let p = Ot(e),
        S = Ot(t),
        i = r[h] + O,
        f = r[h + 1] + O,
        c = (m, g, x) => {
          let U = o[m] * 3;
          return ht[U] * g + ht[U + 1] * x;
        },
        l = c(i, e, t),
        R = c(f, e - 1, t),
        N = c(i + 1, e, t - 1),
        a = c(f + 1, e - 1, t - 1),
        u = l + p * (R - l),
        A = N + p * (a - N);
      return (u + S * (A - u)) * 1.4;
    }
    noise3(e, t, r) {
      let o = this.perm,
        h = this.permMod12,
        O = Math.floor(e) & 255,
        p = Math.floor(t) & 255,
        S = Math.floor(r) & 255;
      ((e -= Math.floor(e)), (t -= Math.floor(t)), (r -= Math.floor(r)));
      let i = Ot(e),
        f = Ot(t),
        c = Ot(r),
        l = o[O] + p,
        R = o[l] + S,
        N = o[l + 1] + S,
        a = o[O + 1] + p,
        u = o[a] + S,
        A = o[a + 1] + S,
        m = (J, z, j, v) => {
          let Y = h[J] * 3;
          return ht[Y] * z + ht[Y + 1] * j + ht[Y + 2] * v;
        },
        g = m(R, e, t, r),
        x = m(u, e - 1, t, r),
        U = m(N, e, t - 1, r),
        _ = m(A, e - 1, t - 1, r),
        w = m(R + 1, e, t, r - 1),
        M = m(u + 1, e - 1, t, r - 1),
        H = m(N + 1, e, t - 1, r - 1),
        B = m(A + 1, e - 1, t - 1, r - 1),
        k = g + i * (x - g),
        X = U + i * (_ - U),
        I = w + i * (M - w),
        K = H + i * (B - H),
        L = k + f * (X - k),
        D = I + f * (K - I);
      return (L + c * (D - L)) * 1.15;
    }
    fbm2(e, t, r, o = 2, h = 0.5) {
      let O = 1,
        p = 1,
        S = 0,
        i = 0;
      for (let f = 0; f < r; f++)
        ((S += O * this.noise2(e * p, t * p)), (i += O), (O *= h), (p *= o));
      return S / i;
    }
    fbm3(e, t, r, o, h = 2, O = 0.5) {
      let p = 1,
        S = 1,
        i = 0,
        f = 0;
      for (let c = 0; c < o; c++)
        ((i += p * this.noise3(e * S, t * S, r * S)), (f += p), (p *= O), (S *= h));
      return i / f;
    }
    ridged3(e, t, r, o, h = 2, O = 0.5) {
      let p = 1,
        S = 1,
        i = 0,
        f = 0;
      for (let c = 0; c < o; c++) {
        let l = 1 - Math.abs(this.noise3(e * S, t * S, r * S));
        ((i += p * l * l), (f += p), (p *= O), (S *= h));
      }
      return i / f;
    }
    ridged2(e, t, r, o = 2, h = 0.5) {
      let O = 1,
        p = 1,
        S = 0,
        i = 0;
      for (let f = 0; f < r; f++) {
        let c = 1 - Math.abs(this.noise2(e * p, t * p));
        ((S += O * c * c), (i += O), (O *= h), (p *= o));
      }
      return S / i;
    }
  };
var Mt = [
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
    "crafting_table_top",
    "crafting_table_side",
    "crafting_table_front",
  ],
  E = {};
Mt.forEach((s, e) => {
  E[s] = e;
});
var T = { NONE: 0, SOLID: 1, CUTOUT: 2, LIQUID: 3, CROSS: 4, TORCH: 5 },
  n = {
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
    CRAFTING_TABLE: 32,
  },
  C = (s) => [s, s, s, s, s, s],
  St = (s, e, t) => [e, e, s, t, e, e];
function Ht(s, e, t) {
  return Object.assign(
    {
      id: s,
      name: e,
      tex: C(E.stone),
      render: T.SOLID,
      solid: !0,
      opaque: !0,
      opacity: 15,
      emit: 0,
      liquid: !1,
      hardness: 1,
      icon: null,
    },
    t,
  );
}
var Rt = [];
function d(s, e, t) {
  let r = Ht(s, e, t);
  (r.icon === null && (r.icon = r.tex[2]), (Rt[s] = r));
}
d(n.AIR, "Air", { render: T.NONE, solid: !1, opaque: !1, opacity: 0, tex: C(0) });
d(n.STONE, "Stone", { tex: C(E.stone), hardness: 3 });
d(n.GRASS, "Grass Block", { tex: St(E.grass_top, E.grass_side, E.dirt) });
d(n.DIRT, "Dirt", { tex: C(E.dirt) });
d(n.COBBLESTONE, "Cobblestone", { tex: C(E.cobblestone), hardness: 3 });
d(n.MOSSY_COBBLESTONE, "Mossy Cobblestone", { tex: C(E.mossy_cobblestone), hardness: 3 });
d(n.PLANKS, "Planks", { tex: C(E.planks), hardness: 2 });
d(n.SAND, "Sand", { tex: C(E.sand) });
d(n.SANDSTONE, "Sandstone", {
  tex: St(E.sandstone_top, E.sandstone_side, E.sandstone_top),
  hardness: 2,
});
d(n.GRAVEL, "Gravel", { tex: C(E.gravel) });
d(n.LOG, "Log", { tex: St(E.log_top, E.log_side, E.log_top), hardness: 2 });
d(n.LEAVES, "Leaves", {
  tex: C(E.leaves),
  render: T.CUTOUT,
  opaque: !1,
  opacity: 2,
  hardness: 0.5,
});
d(n.GLASS, "Glass", { tex: C(E.glass), render: T.CUTOUT, opaque: !1, opacity: 0, hardness: 0.5 });
d(n.WATER, "Water", {
  tex: C(E.water),
  render: T.LIQUID,
  solid: !1,
  opaque: !1,
  opacity: 2,
  liquid: !0,
  hardness: 100,
});
d(n.BEDROCK, "Bedrock", { tex: C(E.bedrock), hardness: 1e3 });
d(n.COAL_ORE, "Coal Ore", { tex: C(E.coal_ore), hardness: 3 });
d(n.IRON_ORE, "Iron Ore", { tex: C(E.iron_ore), hardness: 3 });
d(n.GOLD_ORE, "Gold Ore", { tex: C(E.gold_ore), hardness: 3 });
d(n.DIAMOND_ORE, "Diamond Ore", { tex: C(E.diamond_ore), hardness: 4 });
d(n.SNOW_GRASS, "Snowy Grass", { tex: St(E.snow, E.snow_side, E.dirt) });
d(n.SNOW, "Snow Block", { tex: C(E.snow) });
d(n.ICE, "Ice", { tex: C(E.ice), render: T.CUTOUT, opaque: !1, opacity: 1, hardness: 0.5 });
d(n.CACTUS, "Cactus", { tex: St(E.cactus_top, E.cactus_side, E.cactus_top), hardness: 0.5 });
d(n.BRICKS, "Bricks", { tex: C(E.bricks), hardness: 3 });
d(n.GLOWSTONE, "Glowstone", { tex: C(E.glowstone), emit: 14, hardness: 1 });
d(n.OBSIDIAN, "Obsidian", { tex: C(E.obsidian), hardness: 10 });
d(n.CLAY, "Clay", { tex: C(E.clay) });
d(n.FLOWER_RED, "Red Flower", {
  tex: C(E.flower_red),
  render: T.CROSS,
  solid: !1,
  opaque: !1,
  opacity: 0,
  hardness: 0.1,
});
d(n.FLOWER_YELLOW, "Yellow Flower", {
  tex: C(E.flower_yellow),
  render: T.CROSS,
  solid: !1,
  opaque: !1,
  opacity: 0,
  hardness: 0.1,
});
d(n.TALL_GRASS, "Tall Grass", {
  tex: C(E.tall_grass),
  render: T.CROSS,
  solid: !1,
  opaque: !1,
  opacity: 0,
  hardness: 0.1,
});
d(n.DEAD_BUSH, "Dead Bush", {
  tex: C(E.dead_bush),
  render: T.CROSS,
  solid: !1,
  opaque: !1,
  opacity: 0,
  hardness: 0.1,
});
d(n.TORCH, "Torch", {
  tex: C(E.torch),
  render: T.TORCH,
  solid: !1,
  opaque: !1,
  opacity: 0,
  emit: 14,
  hardness: 0.1,
});
d(n.CRAFTING_TABLE, "Crafting Table", {
  tex: [
    E.crafting_table_front,
    E.crafting_table_side,
    E.crafting_table_top,
    E.planks,
    E.crafting_table_front,
    E.crafting_table_side,
  ],
  hardness: 2.5,
});
var ot = Rt.length,
  At = new Uint8Array(ot),
  wt = new Uint8Array(ot),
  Kt = new Uint8Array(ot),
  Pt = new Uint8Array(ot),
  Bt = new Uint8Array(ot),
  it = new Uint8Array(ot),
  Nt = new Uint8Array(ot * 6);
for (let s = 0; s < ot; s++) {
  let e = Rt[s];
  ((At[s] = e.opaque ? 1 : 0),
    (wt[s] = e.solid ? 1 : 0),
    (Kt[s] = e.liquid ? 1 : 0),
    (Pt[s] = e.opacity),
    (Bt[s] = e.emit),
    (it[s] = e.render));
  for (let t = 0; t < 6; t++) Nt[s * 6 + t] = e.tex[t];
}
function mt(s, e) {
  if (e === n.AIR) return !0;
  if (At[e]) return !1;
  if (s === e) {
    let t = it[s];
    return !(t === T.LIQUID || t === T.CUTOUT);
  }
  return !0;
}
var $t = [n.GRASS, n.STONE, n.COBBLESTONE, n.PLANKS, n.LOG, n.LEAVES, n.SAND, n.GLASS, n.TORCH],
  Jt = [
    n.GRASS,
    n.DIRT,
    n.STONE,
    n.COBBLESTONE,
    n.MOSSY_COBBLESTONE,
    n.BRICKS,
    n.PLANKS,
    n.LOG,
    n.LEAVES,
    n.SAND,
    n.SANDSTONE,
    n.GRAVEL,
    n.CLAY,
    n.SNOW,
    n.SNOW_GRASS,
    n.ICE,
    n.OBSIDIAN,
    n.BEDROCK,
    n.COAL_ORE,
    n.IRON_ORE,
    n.GOLD_ORE,
    n.DIAMOND_ORE,
    n.GLOWSTONE,
    n.GLASS,
    n.CACTUS,
    n.TORCH,
    n.FLOWER_RED,
    n.FLOWER_YELLOW,
    n.TALL_GRASS,
    n.DEAD_BUSH,
    n.WATER,
  ];
var at = (s, e, t) => (e * 16 + t) * 16 + s;
var b = { OCEAN: 0, BEACH: 1, PLAINS: 2, FOREST: 3, DESERT: 4, SNOWY: 5, MOUNTAIN: 6 };
var Gt = (s) => (s <= 0 ? 0 : s >= 1 ? 1 : s * s * (3 - 2 * s)),
  Dt = (s, e, t) => (s < e ? e : s > t ? t : s),
  Ut = class {
    constructor(e) {
      ((this.seed = e >>> 0),
        (this.continent = new F(e + 1)),
        (this.hills = new F(e + 2)),
        (this.mountains = new F(e + 3)),
        (this.temperature = new F(e + 4)),
        (this.humidity = new F(e + 5)),
        (this.caves = new F(e + 6)),
        (this.caveRooms = new F(e + 7)),
        (this.ore = new F(e + 8)),
        (this.dirtDepth = new F(e + 9)));
    }
    heightAt(e, t) {
      let r = this.continent.fbm2(e * 0.0016, t * 0.0016, 4),
        o = this.hills.fbm2(e * 0.0085, t * 0.0085, 4),
        h = Gt((r - 0.12) * 2.6),
        O = this.mountains.ridged2(e * 0.0035, t * 0.0035, 4),
        p =
          this.hills.noise2(e * 0.195, t * 0.195) * 0.85 +
          this.dirtDepth.noise2(e * 0.062, t * 0.062) * 1.9 +
          this.mountains.noise2(e * 0.018, t * 0.018) * 2.2,
        S = 62 + r * 26 + o * 7 + h * O * 52 + p;
      return (S < 62 && (S = 62 - (62 - S) * 0.62), Dt(Math.round(S), 1, 116));
    }
    biomeAt(e, t, r) {
      if (r < 61) return b.OCEAN;
      if (r <= 63) return b.BEACH;
      if (r > 96) return b.MOUNTAIN;
      let o = this.temperature.fbm2(e * 9e-4, t * 9e-4, 3),
        h = this.humidity.fbm2(e * 0.0011, t * 0.0011, 3);
      return o < -0.32 ? b.SNOWY : o > 0.28 && h < 0 ? b.DESERT : h > 0.18 ? b.FOREST : b.PLAINS;
    }
    isCave(e, t, r) {
      if (t < 2 || t > 108) return !1;
      let o = this.caves.ridged3(e * 0.012, t * 0.02, r * 0.012, 2),
        h = this.caves.ridged3((e + 419) * 0.012, t * 0.02, (r - 271) * 0.012, 2);
      if (o > 0.86 && h > 0.86) return !0;
      let O = this.caveRooms.fbm3(e * 0.019, t * 0.03, r * 0.019, 3),
        p = Dt((40 - t) / 40, 0, 1) * 0.1;
      return O > 0.56 - p;
    }
    oreAt(e, t, r) {
      if (this.ore.fbm3(e * 0.09, t * 0.09, r * 0.09, 2) < 0.62) return 0;
      let h = ut(e, t, r, this.seed ^ 1374496523);
      return t < 16 && h < 0.1
        ? n.DIAMOND_ORE
        : t < 30 && h < 0.22
          ? n.GOLD_ORE
          : t < 52 && h < 0.48
            ? n.IRON_ORE
            : t < 72
              ? n.COAL_ORE
              : 0;
    }
  },
  _t = null;
function Wt(s) {
  return ((!_t || _t.seed !== s >>> 0) && (_t = new Ut(s)), _t);
}
function Yt(s, e, t, r) {
  switch (s) {
    case b.OCEAN:
      return t === 0 ? (e < 56 ? n.GRAVEL : n.SAND) : t <= r ? n.SAND : n.STONE;
    case b.BEACH:
      return t <= r + 1 ? n.SAND : n.SANDSTONE;
    case b.DESERT:
      return t <= 1 ? n.SAND : t <= r + 2 ? n.SANDSTONE : n.STONE;
    case b.SNOWY:
      return t === 0 ? n.SNOW_GRASS : t <= r ? n.DIRT : n.STONE;
    case b.MOUNTAIN:
      return e > 108
        ? t === 0
          ? n.SNOW
          : n.STONE
        : e > 100
          ? n.STONE
          : t === 0
            ? n.GRASS
            : t <= r - 1
              ? n.DIRT
              : n.STONE;
    default:
      return t === 0 ? n.GRASS : t <= r ? n.DIRT : n.STONE;
  }
}
var Ct = 3;
function yt(s) {
  switch (s) {
    case b.FOREST:
      return 0.055;
    case b.PLAINS:
      return 0.006;
    case b.MOUNTAIN:
      return 0.004;
    case b.SNOWY:
      return 0.01;
    default:
      return 0;
  }
}
function et(s, e, t, r, o, h = !1) {
  if (e < 0 || e >= 16 || r < 0 || r >= 16 || t < 0 || t >= 128) return;
  let O = at(e, t, r);
  (!h && s[O] !== n.AIR) || (s[O] = o);
}
function kt(s, e, t, r, o, h, O, p) {
  let S = ct(h * 7 + 13, O * 11 - 5, o ^ 31292),
    i = 4 + Math.floor(S * 3),
    f = t + i;
  for (let c = -2; c <= 1; c++) {
    let l = f + c,
      R = c >= 1 ? 1 : c === 0 ? 1.6 : 2.4;
    for (let N = -3; N <= 3; N++)
      for (let a = -3; a <= 3; a++) {
        let u = Math.hypot(a, N);
        u > R || (u > R - 0.5 && ut(h + a, l, O + N, o) < 0.35) || et(s, e + a, l, r + N, n.LEAVES);
      }
  }
  for (let c = t; c < f; c++) et(s, e, c, r, n.LOG, !0);
  if (p)
    for (let c = -1; c <= 1; c++) for (let l = -1; l <= 1; l++) et(s, e + l, f + 2, r + c, n.SNOW);
}
function Xt(s, e, t, r, o, h, O) {
  let p = 2 + Math.floor(ct(h, O, o ^ 11033) * 3);
  for (let S = t; S < t + p; S++) et(s, e, S, r, n.CACTUS, !0);
}
function It(s, e, t) {
  let r = Wt(t),
    o = new Uint8Array(2048 * 16),
    h = new Uint8Array(256),
    O = new Uint8Array(256),
    p = s * 16,
    S = e * 16;
  for (let i = 0; i < 16; i++)
    for (let f = 0; f < 16; f++) {
      let c = p + f,
        l = S + i,
        R = r.heightAt(c, l),
        N = r.biomeAt(c, l, R),
        a = 3 + Math.floor((r.dirtDepth.noise2(c * 0.05, l * 0.05) + 1) * 1.5);
      O[i * 16 + f] = N;
      for (let u = 0; u <= Math.max(R, 62); u++) {
        let A = n.AIR;
        if (u <= R) {
          let m = R - u;
          if (((A = Yt(N, u, m, a)), m > 0 && r.isCave(c, u, l))) A = n.AIR;
          else if (A === n.STONE) {
            let g = r.oreAt(c, u, l);
            g && (A = g);
          }
        } else u <= 62 && (A = n.WATER);
        (u === 0 ? (A = n.BEDROCK) : u < 4 && ut(c, u, l, t) < 0.72 - u * 0.18 && (A = n.BEDROCK),
          (o[at(f, u, i)] = A));
      }
      N === b.SNOWY && o[at(f, 62, i)] === n.WATER && (o[at(f, 62, i)] = n.ICE);
    }
  for (let i = -Ct; i < 16 + Ct; i++)
    for (let f = -Ct; f < 16 + Ct; f++) {
      let c = p + f,
        l = S + i,
        R = r.heightAt(c, l);
      if (R <= 62) continue;
      let N = r.biomeAt(c, l, R),
        a = R + 1,
        u = ct(c, l, t ^ 523124044);
      if (u < yt(N)) {
        ct(c >> 1, l >> 1, t ^ 43981) < 0.72 && kt(o, f, a, i, t, c, l, N === b.SNOWY);
        continue;
      }
      if (N === b.DESERT && u > 0.988) {
        Xt(o, f, a, i, t, c, l);
        continue;
      }
      if (f < 0 || f >= 16 || i < 0 || i >= 16) continue;
      let A = ct(c + 8191, l - 4093, t ^ 24301);
      N === b.PLAINS || N === b.FOREST
        ? A < 0.16
          ? et(o, f, a, i, n.TALL_GRASS)
          : A < 0.175
            ? et(o, f, a, i, n.FLOWER_RED)
            : A < 0.19 && et(o, f, a, i, n.FLOWER_YELLOW)
        : N === b.DESERT
          ? A < 0.02 && et(o, f, a, i, n.DEAD_BUSH)
          : N === b.SNOWY && A < 0.05 && et(o, f, a, i, n.DEAD_BUSH);
    }
  for (let i = 0; i < 16; i++)
    for (let f = 0; f < 16; f++) {
      let c = 0;
      for (let l = 127; l >= 0; l--)
        if (o[at(f, l, i)] !== n.AIR) {
          c = l;
          break;
        }
      h[i * 16 + f] = c;
    }
  return { blocks: o, heightmap: h, biomes: O };
}
var Et = { OPAQUE: 0, CUTOUT: 1, CROSS: 2, LIQUID: 3 };
var Q = 8,
  ft = class {
    constructor(e = 4096) {
      ((this.data = new Uint32Array(e)), (this.length = 0));
    }
    push2(e, t) {
      if (this.length + 2 > this.data.length) {
        let r = new Uint32Array(this.data.length * 2);
        (r.set(this.data), (this.data = r));
      }
      ((this.data[this.length++] = e), (this.data[this.length++] = t));
    }
    finish() {
      return this.data.slice(0, this.length);
    }
  },
  pt = (s, e, t, r, o) =>
    ((s & 255) | ((e & 2047) << 8) | ((t & 255) << 19) | ((r & 7) << 27) | ((o & 3) << 30)) >>> 0,
  dt = (s, e, t, r, o) =>
    ((s & 255) | ((e & 255) << 8) | ((t & 255) << 16) | ((r & 15) << 24) | ((o & 15) << 28)) >>> 0,
  rt = (s, e, t) => ((e + 1) * 18 + (t + 1)) * 18 + (s + 1);
function bt(s, e) {
  let t = [new ft(), new ft(), new ft(), new ft()],
    r = 0,
    o = [16, 128, 16],
    h = Math.max(o[0] * o[1], o[1] * o[2], o[0] * o[2]),
    O = new Int32Array(h),
    p = new Uint8Array(h),
    S = new Uint16Array(h),
    i = new Uint16Array(h),
    f = (a, u, A) => At[s[rt(a, u, A)]];
  function c(a, u, A, m, g, x, U, _, w) {
    let M = a + m,
      H = u + g,
      B = A + x,
      k = a + U,
      X = u + _,
      I = A + w,
      K = a + m + U,
      L = u + g + _,
      D = A + x + w,
      J = f(M, H, B),
      z = f(k, X, I),
      j = f(K, L, D),
      v = J && z ? 0 : 3 - (J + z + j),
      Y = 0,
      G = 0,
      V = 0,
      nt = (tt, q, P) => {
        if (At[s[rt(tt, q, P)]]) return;
        let W = e[rt(tt, q, P)];
        ((Y += W >> 4), (G += W & 15), V++);
      };
    if ((nt(a, u, A), nt(M, H, B), nt(k, X, I), (J && z) || nt(K, L, D), V === 0)) {
      let tt = e[rt(a, u, A)];
      return [v, tt >> 4, tt & 15];
    }
    return [v, Math.round(Y / V), Math.round(G / V)];
  }
  let l = [0, 0, 0],
    R = [0, 0, 0];
  for (let a = 0; a < 3; a++) {
    let u = (a + 1) % 3,
      A = (a + 2) % 3,
      m = o[u],
      g = o[A];
    ((R[0] = R[1] = R[2] = 0), (R[a] = 1));
    let x = [0, 0, 0];
    x[u] = 1;
    let U = [0, 0, 0];
    for (U[A] = 1, l[a] = -1; l[a] < o[a]; l[a]++) {
      let _ = 0;
      for (l[A] = 0; l[A] < g; l[A]++)
        for (l[u] = 0; l[u] < m; l[u]++, _++) {
          O[_] = 0;
          let w = l[0],
            M = l[1],
            H = l[2],
            B = w + R[0],
            k = M + R[1],
            X = H + R[2],
            I = s[rt(w, M, H)],
            K = s[rt(B, k, X)],
            L = it[I],
            D = it[K],
            J = L === T.SOLID || L === T.CUTOUT || L === T.LIQUID,
            z = D === T.SOLID || D === T.CUTOUT || D === T.LIQUID,
            j = 0,
            v = 0,
            Y,
            G,
            V;
          if (J && mt(I, K)) ((j = I), (v = 1), (Y = B), (G = k), (V = X));
          else if (z && mt(K, I)) ((j = K), (v = 0), (Y = w), (G = M), (V = H));
          else continue;
          let nt = a * 2 + (v ? 0 : 1),
            tt = Nt[j * 6 + nt],
            q = c(Y, G, V, -x[0], -x[1], -x[2], -U[0], -U[1], -U[2]),
            P = c(Y, G, V, x[0], x[1], x[2], -U[0], -U[1], -U[2]),
            W = c(Y, G, V, x[0], x[1], x[2], U[0], U[1], U[2]),
            lt = c(Y, G, V, -x[0], -x[1], -x[2], U[0], U[1], U[2]);
          ((O[_] = j | (v << 8) | (tt << 9) | 0),
            (p[_] = q[0] | (P[0] << 2) | (W[0] << 4) | (lt[0] << 6)),
            (S[_] = q[1] | (P[1] << 4) | (W[1] << 8) | (lt[1] << 12)),
            (i[_] = q[2] | (P[2] << 4) | (W[2] << 8) | (lt[2] << 12)));
        }
      _ = 0;
      for (let w = 0; w < g; w++)
        for (let M = 0; M < m;) {
          let H = O[_];
          if (H === 0) {
            (M++, _++);
            continue;
          }
          let B = p[_],
            k = S[_],
            X = i[_],
            I = 1;
          for (; M + I < m && O[_ + I] === H && p[_ + I] === B && S[_ + I] === k && i[_ + I] === X;)
            I++;
          let K = 1;
          t: for (; w + K < g;) {
            let L = _ + K * m;
            for (let D = 0; D < I; D++)
              if (O[L + D] !== H || p[L + D] !== B || S[L + D] !== k || i[L + D] !== X) break t;
            K++;
          }
          (N(a, u, A, l, M, w, I, K, H, B, k, X), r++);
          for (let L = 0; L < K; L++) for (let D = 0; D < I; D++) O[_ + L * m + D] = 0;
          ((M += I), (_ += I));
        }
    }
  }
  function N(a, u, A, m, g, x, U, _, w, M, H, B) {
    let k = w & 255,
      X = (w >> 8) & 1,
      I = (w >> 9) & 255,
      K = a * 2 + (X ? 0 : 1),
      L = [0, 0, 0];
    ((L[a] = m[a] + 1), (L[u] = g), (L[A] = x));
    let D = [M & 3, (M >> 2) & 3, (M >> 4) & 3, (M >> 6) & 3],
      J = [H & 15, (H >> 4) & 15, (H >> 8) & 15, (H >> 12) & 15],
      z = [B & 15, (B >> 4) & 15, (B >> 8) & 15, (B >> 12) & 15],
      j = [0, U, U, 0],
      v = [0, 0, _, _],
      Y = (q) => {
        let P = j[q],
          W = v[q];
        return a === 1 ? [P, W] : a === 0 ? [W, U - P] : [P, _ - W];
      },
      G = X ? [0, 1, 2, 3] : [0, 3, 2, 1];
    D[0] + D[2] > D[1] + D[3] && (G = [G[1], G[2], G[3], G[0]]);
    let nt = Ft(k),
      tt = t[nt];
    for (let q = 0; q < 4; q++) {
      let P = G[q],
        W = [L[0], L[1], L[2]];
      ((W[u] += j[P]), (W[A] += v[P]));
      let [lt, gt] = Y(P);
      tt.push2(pt(W[0] * Q, W[1] * Q, W[2] * Q, K, D[P]), dt(lt, gt, I, J[P], z[P]));
    }
  }
  for (let a = 0; a < 128; a++)
    for (let u = 0; u < 16; u++)
      for (let A = 0; A < 16; A++) {
        let m = s[rt(A, a, u)],
          g = it[m];
        if (g !== T.CROSS && g !== T.TORCH) continue;
        let x = e[rt(A, a, u)];
        (Vt(t[Et.CROSS], A, a, u, Nt[m * 6 + 2], x >> 4, x & 15), (r += 2));
      }
  return { sections: t.map((a) => a.finish()), quads: r };
}
function Vt(s, e, t, r, o, h, O) {
  let p = e * Q,
    S = t * Q,
    i = r * Q,
    f = 2,
    c = 3,
    l = (R, N, a, u) => {
      (s.push2(pt(p + R, S, i + N, f, c), dt(0, 1, o, h, O)),
        s.push2(pt(p + a, S, i + u, f, c), dt(1, 1, o, h, O)),
        s.push2(pt(p + a, S + Q, i + u, f, c), dt(1, 0, o, h, O)),
        s.push2(pt(p + R, S + Q, i + N, f, c), dt(0, 0, o, h, O)));
    };
  (l(0, 0, Q, Q), l(Q, 0, 0, Q));
}
function Ft(s) {
  switch (it[s]) {
    case T.LIQUID:
      return Et.LIQUID;
    case T.CUTOUT:
      return Et.CUTOUT;
    case T.CROSS:
    case T.TORCH:
      return Et.CROSS;
    default:
      return Et.OPAQUE;
  }
}
self.onmessage = (s) => {
  let e = s.data;
  if (e.type === "gen") {
    let { blocks: t, heightmap: r, biomes: o } = It(e.cx, e.cz, e.seed);
    self.postMessage({ type: "gen", cx: e.cx, cz: e.cz, blocks: t, heightmap: r, biomes: o }, [
      t.buffer,
      r.buffer,
      o.buffer,
    ]);
    return;
  }
  if (e.type === "mesh") {
    let { sections: t, quads: r } = bt(e.blocks, e.light);
    self.postMessage(
      { type: "mesh", cx: e.cx, cz: e.cz, revision: e.revision, sections: t, quads: r },
      t.map((o) => o.buffer),
    );
  }
};

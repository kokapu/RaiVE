import { R as x, C as Xt, S as G, T as U1, A as i1, U as gt, V as O1, W as Pm, X as am, Y as Kt } from "./index-Dtmgwx_K.js";
function X1(t) {
  return t !== null && typeof t == "object" && "name" in t && typeof t.name == "string";
}
function K1(t) {
  return t !== null && typeof t == "object" && "step" in t && typeof t.step == "number" && "alt" in t && typeof t.alt == "number" && !isNaN(t.step) && !isNaN(t.alt);
}
var Jt = [0, 2, 4, -1, 1, 3, 5], Qt = Jt.map(
  (t) => Math.floor(t * 7 / 12)
);
function Wt(t) {
  const { step: n, alt: m, oct: e, dir: r = 1 } = t, o = Jt[n] + 7 * m;
  if (e === void 0)
    return [r * o];
  const M = e - Qt[n] - 4 * m;
  return [r * o, r * M];
}
var im = [3, 0, 4, 1, 5, 2, 6];
function Yt(t) {
  const [n, m, e] = t, r = im[sm(n)], o = Math.floor((n + 1) / 7);
  if (m === void 0)
    return { step: r, alt: o, dir: e };
  const M = m + 4 * o + Qt[r];
  return { step: r, alt: o, oct: M, dir: e };
}
function sm(t) {
  const n = (t + 1) % 7;
  return n < 0 ? 7 + n : n;
}
var yt = (t, n) => Array(Math.abs(n) + 1).join(t), q1 = Object.freeze({
  empty: !0,
  name: "",
  num: NaN,
  q: "",
  type: "",
  step: NaN,
  alt: NaN,
  dir: NaN,
  simple: NaN,
  semitones: NaN,
  chroma: NaN,
  coord: [],
  oct: NaN
}), cm = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})", um = "(AA|A|P|M|m|d|dd)([-+]?\\d+)", dm = new RegExp(
  "^" + cm + "|" + um + "$"
);
function lm(t) {
  const n = dm.exec(`${t}`);
  return n === null ? ["", ""] : n[1] ? [n[1], n[2]] : [n[4], n[3]];
}
var At = {};
function N(t) {
  return typeof t == "string" ? At[t] || (At[t] = fm(t)) : K1(t) ? N(pm(t)) : X1(t) ? N(t.name) : q1;
}
var $t = [0, 2, 4, 5, 7, 9, 11], Zt = "PMMPPMM";
function fm(t) {
  const n = lm(t);
  if (n[0] === "")
    return q1;
  const m = +n[0], e = n[1], r = (Math.abs(m) - 1) % 7, o = Zt[r];
  if (o === "M" && e === "P")
    return q1;
  const M = o === "M" ? "majorable" : "perfectable", P = "" + m + e, a = m < 0 ? -1 : 1, i = m === 8 || m === -8 ? m : a * (r + 1), s = hm(M, e), u = Math.floor((Math.abs(m) - 1) / 7), c = a * ($t[r] + s + 12 * u), d = (a * ($t[r] + s) % 12 + 12) % 12, f = Wt({ step: r, alt: s, oct: u, dir: a });
  return {
    empty: !1,
    name: P,
    num: m,
    q: e,
    step: r,
    alt: s,
    dir: a,
    type: M,
    simple: i,
    semitones: c,
    chroma: d,
    coord: f,
    oct: u
  };
}
function tn(t, n) {
  const [m, e = 0] = t, r = m * 7 + e * 12 < 0, o = n || r ? [-m, -e, -1] : [m, e, 1];
  return N(Yt(o));
}
function hm(t, n) {
  return n === "M" && t === "majorable" || n === "P" && t === "perfectable" ? 0 : n === "m" && t === "majorable" ? -1 : /^A+$/.test(n) ? n.length : /^d+$/.test(n) ? -1 * (t === "perfectable" ? n.length : n.length + 1) : 0;
}
function pm(t) {
  const { step: n, alt: m, oct: e = 0, dir: r } = t;
  if (!r)
    return "";
  const o = n + 1 + 7 * e, M = o === 0 ? n + 1 : o, P = r < 0 ? "-" : "", a = Zt[n] === "M" ? "majorable" : "perfectable";
  return P + M + bm(a, m);
}
function bm(t, n) {
  return n === 0 ? t === "majorable" ? "M" : "P" : n === -1 && t === "majorable" ? "m" : n > 0 ? yt("A", n) : yt("d", t === "perfectable" ? n : n + 1);
}
var Nt = (t, n) => Array(Math.abs(n) + 1).join(t), nn = Object.freeze({
  empty: !0,
  name: "",
  letter: "",
  acc: "",
  pc: "",
  step: NaN,
  alt: NaN,
  chroma: NaN,
  height: NaN,
  coord: [],
  midi: null,
  freq: null
}), jt = /* @__PURE__ */ new Map(), vm = (t) => "CDEFGAB".charAt(t), u1 = (t) => t < 0 ? Nt("b", -t) : Nt("#", t), J1 = (t) => t[0] === "b" ? -t.length : t.length;
function l(t) {
  const n = JSON.stringify(t), m = jt.get(n);
  if (m)
    return m;
  const e = typeof t == "string" ? $m(t) : K1(t) ? l(Nm(t)) : X1(t) ? l(t.name) : nn;
  return jt.set(n, e), e;
}
var gm = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function Q1(t) {
  const n = gm.exec(t);
  return n ? [n[1].toUpperCase(), n[2].replace(/x/g, "##"), n[3], n[4]] : ["", "", "", ""];
}
function ym(t) {
  return l(Yt(t));
}
var Am = (t, n) => (t % n + n) % n, w1 = [0, 2, 4, 5, 7, 9, 11];
function $m(t) {
  const n = Q1(t);
  if (n[0] === "" || n[3] !== "")
    return nn;
  const m = n[0], e = n[1], r = n[2], o = (m.charCodeAt(0) + 3) % 7, M = J1(e), P = r.length ? +r : void 0, a = Wt({ step: o, alt: M, oct: P }), i = m + e + r, s = m + e, u = (w1[o] + M + 120) % 12, c = P === void 0 ? Am(w1[o] + M, 12) - 12 * 99 : w1[o] + M + 12 * (P + 1), d = c >= 0 && c <= 127 ? c : null, f = P === void 0 ? null : Math.pow(2, (c - 69) / 12) * 440;
  return {
    empty: !1,
    acc: e,
    alt: M,
    chroma: u,
    coord: a,
    freq: f,
    height: c,
    letter: m,
    midi: d,
    name: i,
    oct: P,
    pc: s,
    step: o
  };
}
function Nm(t) {
  const { step: n, alt: m, oct: e } = t, r = vm(n);
  if (!r)
    return "";
  const o = r + u1(m);
  return e || e === 0 ? o + e : o;
}
function y(t, n) {
  const m = l(t), e = Array.isArray(n) ? n : N(n).coord;
  if (m.empty || !e || e.length < 2)
    return "";
  const r = m.coord, o = r.length === 1 ? [r[0] + e[0]] : [r[0] + e[0], r[1] + e[1]];
  return ym(o).name;
}
function mn(t, n) {
  const m = t.length;
  return (e) => {
    if (!n) return "";
    const r = e < 0 ? (m - -e % m) % m : e % m, o = Math.floor(e / m), M = y(n, [0, o]);
    return y(M, t[r]);
  };
}
function d1(t, n) {
  const m = l(t), e = l(n);
  if (m.empty || e.empty)
    return "";
  const r = m.coord, o = e.coord, M = o[0] - r[0], P = r.length === 2 && o.length === 2 ? o[1] - r[1] : -Math.floor(M * 7 / 12), a = e.height === m.height && e.midi !== null && m.oct === e.oct && m.step > e.step;
  return tn([M, P], a).name;
}
var St = (t, n) => Array(n + 1).join(t), jm = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
function en(t) {
  const n = jm.exec(t);
  return n ? [n[1], n[2], n[3]] : ["", "", ""];
}
function s1(t) {
  const [n, m, e] = en(t);
  if (m === "")
    return "";
  let r = 4;
  for (let M = 0; M < e.length; M++)
    r += e.charAt(M) === "," ? -1 : 1;
  const o = n[0] === "_" ? n.replace(/_/g, "b") : n[0] === "^" ? n.replace(/\^/g, "#") : "";
  return m.charCodeAt(0) > 96 ? m.toUpperCase() + o + (r + 1) : m + o + r;
}
function rn(t) {
  const n = l(t);
  if (n.empty || !n.oct && n.oct !== 0)
    return "";
  const { letter: m, acc: e, oct: r } = n, o = e[0] === "b" ? e.replace(/b/g, "_") : e.replace(/#/g, "^"), M = r > 4 ? m.toLowerCase() : m, P = r === 5 ? "" : r > 4 ? St("'", r - 5) : St(",", 4 - r);
  return o + M + P;
}
function Sm(t, n) {
  return rn(y(s1(t), n));
}
function Im(t, n) {
  return d1(s1(t), s1(n));
}
var Tm = {
  abcToScientificNotation: s1,
  scientificToAbcNotation: rn,
  tokenize: en,
  transpose: Sm,
  distance: Im
};
function _m(t, n) {
  const m = [];
  for (; n--; m[n] = n + t) ;
  return m;
}
function Cm(t, n) {
  const m = [];
  for (; n--; m[n] = t - n) ;
  return m;
}
function Em(t, n) {
  return t < n ? _m(t, n - t + 1) : Cm(t, t - n + 1);
}
function Dm(t, n) {
  const m = n.length, e = (t % m + m) % m;
  return n.slice(e, m).concat(n.slice(0, e));
}
function wm(t) {
  return t.filter((n) => n === 0 || n);
}
function on(t) {
  return t.map((m) => l(m)).filter((m) => !m.empty).sort((m, e) => m.height - e.height).map((m) => m.name);
}
function xm(t) {
  return on(t).filter((n, m, e) => m === 0 || n !== e[m - 1]);
}
function Vm(t, n = Math.random) {
  let m, e, r = t.length;
  for (; r; )
    m = Math.floor(n() * r--), e = t[r], t[r] = t[m], t[m] = e;
  return t;
}
function Mn(t) {
  return t.length === 0 ? [[]] : Mn(t.slice(1)).reduce((n, m) => n.concat(
    t.map((e, r) => {
      const o = m.slice();
      return o.splice(r, 0, t[0]), o;
    })
  ), []);
}
const Rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compact: wm,
  permutations: Mn,
  range: Em,
  rotate: Dm,
  shuffle: Vm,
  sortedNoteNames: on,
  sortedUniqNoteNames: xm
}, Symbol.toStringTag, { value: "Module" }));
function km(t, n) {
  const m = [];
  for (; n--; m[n] = n + t) ;
  return m;
}
function Fm(t, n) {
  const m = [];
  for (; n--; m[n] = t - n) ;
  return m;
}
function l1(t, n) {
  return t < n ? km(t, n - t + 1) : Fm(t, t - n + 1);
}
function z(t, n) {
  const m = n.length, e = (t % m + m) % m;
  return n.slice(e, m).concat(n.slice(0, e));
}
function W1(t) {
  return t.filter((n) => n === 0 || n);
}
function Om(t, n = Math.random) {
  let m, e, r = t.length;
  for (; r; )
    m = Math.floor(n() * r--), e = t[r], t[r] = t[m], t[m] = e;
  return t;
}
function Pn(t) {
  return t.length === 0 ? [[]] : Pn(t.slice(1)).reduce((n, m) => n.concat(
    t.map((e, r) => {
      const o = m.slice();
      return o.splice(r, 0, t[0]), o;
    })
  ), []);
}
var qm = {
  compact: W1,
  permutations: Pn,
  range: l1,
  rotate: z,
  shuffle: Om
}, T = {
  empty: !0,
  name: "",
  setNum: 0,
  chroma: "000000000000",
  normalized: "000000000000",
  intervals: []
}, Y1 = (t) => Number(t).toString(2).padStart(12, "0"), It = (t) => parseInt(t, 2), Gm = /^[01]{12}$/;
function Z1(t) {
  return Gm.test(t);
}
var zm = (t) => typeof t == "number" && t >= 0 && t <= 4095, Bm = (t) => t && Z1(t.chroma), Tt = { [T.chroma]: T };
function p(t) {
  const n = Z1(t) ? t : zm(t) ? Y1(t) : Array.isArray(t) ? ne(t) : Bm(t) ? t.chroma : T.chroma;
  return Tt[n] = Tt[n] || te(n);
}
var Lm = p, an = (t) => p(t).chroma, Hm = (t) => p(t).intervals, Um = (t) => p(t).setNum, Xm = [
  "1P",
  "2m",
  "2M",
  "3m",
  "3M",
  "4P",
  "5d",
  "5P",
  "6m",
  "6M",
  "7m",
  "7M"
];
function Km(t) {
  const n = [];
  for (let m = 0; m < 12; m++)
    t.charAt(m) === "1" && n.push(Xm[m]);
  return n;
}
function Jm(t) {
  return p(t).intervals.map((n) => y("C", n));
}
function Qm() {
  return l1(2048, 4095).map(Y1);
}
function tt(t, n = !0) {
  const e = p(t).chroma.split("");
  return W1(
    e.map((r, o) => {
      const M = z(o, e);
      return n && M[0] === "0" ? null : M.join("");
    })
  );
}
function Wm(t, n) {
  return p(t).setNum === p(n).setNum;
}
function f1(t) {
  const n = p(t).setNum;
  return (m) => {
    const e = p(m).setNum;
    return n && n !== e && (e & n) === e;
  };
}
function h1(t) {
  const n = p(t).setNum;
  return (m) => {
    const e = p(m).setNum;
    return n && n !== e && (e | n) === e;
  };
}
function sn(t) {
  const n = p(t);
  return (m) => {
    const e = l(m);
    return n && !e.empty && n.chroma.charAt(e.chroma) === "1";
  };
}
function Ym(t) {
  const n = sn(t);
  return (m) => m.filter(n);
}
var cn = {
  get: p,
  chroma: an,
  num: Um,
  intervals: Hm,
  chromas: Qm,
  isSupersetOf: h1,
  isSubsetOf: f1,
  isNoteIncludedIn: sn,
  isEqual: Wm,
  filter: Ym,
  modes: tt,
  notes: Jm,
  // deprecated
  pcset: Lm
};
function Zm(t) {
  const n = t.split("");
  return n.map((m, e) => z(e, n).join(""));
}
function te(t) {
  const n = It(t), m = Zm(t).map(It).filter((o) => o >= 2048).sort()[0], e = Y1(m), r = Km(t);
  return {
    empty: !1,
    name: "",
    setNum: n,
    chroma: t,
    normalized: e,
    intervals: r
  };
}
function ne(t) {
  if (t.length === 0)
    return T.chroma;
  let n;
  const m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let e = 0; e < t.length; e++)
    n = l(t[e]), n.empty && (n = N(t[e])), n.empty || (m[n.chroma] = 1);
  return m.join("");
}
var me = [
  // ==Major==
  ["1P 3M 5P", "major", "M ^  maj"],
  ["1P 3M 5P 7M", "major seventh", "maj7 Δ ma7 M7 Maj7 ^7"],
  ["1P 3M 5P 7M 9M", "major ninth", "maj9 Δ9 ^9"],
  ["1P 3M 5P 7M 9M 13M", "major thirteenth", "maj13 Maj13 ^13"],
  ["1P 3M 5P 6M", "sixth", "6 add6 add13 M6"],
  ["1P 3M 5P 6M 9M", "sixth added ninth", "6add9 6/9 69 M69"],
  ["1P 3M 6m 7M", "major seventh flat sixth", "M7b6 ^7b6"],
  [
    "1P 3M 5P 7M 11A",
    "major seventh sharp eleventh",
    "maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"
  ],
  // ==Minor==
  // '''Normal'''
  ["1P 3m 5P", "minor", "m min -"],
  ["1P 3m 5P 7m", "minor seventh", "m7 min7 mi7 -7"],
  [
    "1P 3m 5P 7M",
    "minor/major seventh",
    "m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"
  ],
  ["1P 3m 5P 6M", "minor sixth", "m6 -6"],
  ["1P 3m 5P 7m 9M", "minor ninth", "m9 -9"],
  ["1P 3m 5P 7M 9M", "minor/major ninth", "mM9 mMaj9 -^9"],
  ["1P 3m 5P 7m 9M 11P", "minor eleventh", "m11 -11"],
  ["1P 3m 5P 7m 9M 13M", "minor thirteenth", "m13 -13"],
  // '''Diminished'''
  ["1P 3m 5d", "diminished", "dim ° o"],
  ["1P 3m 5d 7d", "diminished seventh", "dim7 °7 o7"],
  ["1P 3m 5d 7m", "half-diminished", "m7b5 ø -7b5 h7 h"],
  // ==Dominant/Seventh==
  // '''Normal'''
  ["1P 3M 5P 7m", "dominant seventh", "7 dom"],
  ["1P 3M 5P 7m 9M", "dominant ninth", "9"],
  ["1P 3M 5P 7m 9M 13M", "dominant thirteenth", "13"],
  ["1P 3M 5P 7m 11A", "lydian dominant seventh", "7#11 7#4"],
  // '''Altered'''
  ["1P 3M 5P 7m 9m", "dominant flat ninth", "7b9"],
  ["1P 3M 5P 7m 9A", "dominant sharp ninth", "7#9"],
  ["1P 3M 7m 9m", "altered", "alt7"],
  // '''Suspended'''
  ["1P 4P 5P", "suspended fourth", "sus4 sus"],
  ["1P 2M 5P", "suspended second", "sus2"],
  ["1P 4P 5P 7m", "suspended fourth seventh", "7sus4 7sus"],
  ["1P 5P 7m 9M 11P", "eleventh", "11"],
  [
    "1P 4P 5P 7m 9m",
    "suspended fourth flat ninth",
    "b9sus phryg 7b9sus 7b9sus4"
  ],
  // ==Other==
  ["1P 5P", "fifth", "5"],
  ["1P 3M 5A", "augmented", "aug + +5 ^#5"],
  ["1P 3m 5A", "minor augmented", "m#5 -#5 m+"],
  ["1P 3M 5A 7M", "augmented seventh", "maj7#5 maj7+5 +maj7 ^7#5"],
  [
    "1P 3M 5P 7M 9M 11A",
    "major sharp eleventh (lydian)",
    "maj9#11 Δ9#11 ^9#11"
  ],
  // ==Legacy==
  ["1P 2M 4P 5P", "", "sus24 sus4add9"],
  ["1P 3M 5A 7M 9M", "", "maj9#5 Maj9#5"],
  ["1P 3M 5A 7m", "", "7#5 +7 7+ 7aug aug7"],
  ["1P 3M 5A 7m 9A", "", "7#5#9 7#9#5 7alt"],
  ["1P 3M 5A 7m 9M", "", "9#5 9+"],
  ["1P 3M 5A 7m 9M 11A", "", "9#5#11"],
  ["1P 3M 5A 7m 9m", "", "7#5b9 7b9#5"],
  ["1P 3M 5A 7m 9m 11A", "", "7#5b9#11"],
  ["1P 3M 5A 9A", "", "+add#9"],
  ["1P 3M 5A 9M", "", "M#5add9 +add9"],
  ["1P 3M 5P 6M 11A", "", "M6#11 M6b5 6#11 6b5"],
  ["1P 3M 5P 6M 7M 9M", "", "M7add13"],
  ["1P 3M 5P 6M 9M 11A", "", "69#11"],
  ["1P 3m 5P 6M 9M", "", "m69 -69"],
  ["1P 3M 5P 6m 7m", "", "7b6"],
  ["1P 3M 5P 7M 9A 11A", "", "maj7#9#11"],
  ["1P 3M 5P 7M 9M 11A 13M", "", "M13#11 maj13#11 M13+4 M13#4"],
  ["1P 3M 5P 7M 9m", "", "M7b9"],
  ["1P 3M 5P 7m 11A 13m", "", "7#11b13 7b5b13"],
  ["1P 3M 5P 7m 13M", "", "7add6 67 7add13"],
  ["1P 3M 5P 7m 9A 11A", "", "7#9#11 7b5#9 7#9b5"],
  ["1P 3M 5P 7m 9A 11A 13M", "", "13#9#11"],
  ["1P 3M 5P 7m 9A 11A 13m", "", "7#9#11b13"],
  ["1P 3M 5P 7m 9A 13M", "", "13#9"],
  ["1P 3M 5P 7m 9A 13m", "", "7#9b13"],
  ["1P 3M 5P 7m 9M 11A", "", "9#11 9+4 9#4"],
  ["1P 3M 5P 7m 9M 11A 13M", "", "13#11 13+4 13#4"],
  ["1P 3M 5P 7m 9M 11A 13m", "", "9#11b13 9b5b13"],
  ["1P 3M 5P 7m 9m 11A", "", "7b9#11 7b5b9 7b9b5"],
  ["1P 3M 5P 7m 9m 11A 13M", "", "13b9#11"],
  ["1P 3M 5P 7m 9m 11A 13m", "", "7b9b13#11 7b9#11b13 7b5b9b13"],
  ["1P 3M 5P 7m 9m 13M", "", "13b9"],
  ["1P 3M 5P 7m 9m 13m", "", "7b9b13"],
  ["1P 3M 5P 7m 9m 9A", "", "7b9#9"],
  ["1P 3M 5P 9M", "", "Madd9 2 add9 add2"],
  ["1P 3M 5P 9m", "", "Maddb9"],
  ["1P 3M 5d", "", "Mb5"],
  ["1P 3M 5d 6M 7m 9M", "", "13b5"],
  ["1P 3M 5d 7M", "", "M7b5"],
  ["1P 3M 5d 7M 9M", "", "M9b5"],
  ["1P 3M 5d 7m", "", "7b5"],
  ["1P 3M 5d 7m 9M", "", "9b5"],
  ["1P 3M 7m", "", "7no5"],
  ["1P 3M 7m 13m", "", "7b13"],
  ["1P 3M 7m 9M", "", "9no5"],
  ["1P 3M 7m 9M 13M", "", "13no5"],
  ["1P 3M 7m 9M 13m", "", "9b13"],
  ["1P 3m 4P 5P", "", "madd4"],
  ["1P 3m 5P 6m 7M", "", "mMaj7b6"],
  ["1P 3m 5P 6m 7M 9M", "", "mMaj9b6"],
  ["1P 3m 5P 7m 11P", "", "m7add11 m7add4"],
  ["1P 3m 5P 9M", "", "madd9"],
  ["1P 3m 5d 6M 7M", "", "o7M7"],
  ["1P 3m 5d 7M", "", "oM7"],
  ["1P 3m 6m 7M", "", "mb6M7"],
  ["1P 3m 6m 7m", "", "m7#5"],
  ["1P 3m 6m 7m 9M", "", "m9#5"],
  ["1P 3m 5A 7m 9M 11P", "", "m11A"],
  ["1P 3m 6m 9m", "", "mb6b9"],
  ["1P 2M 3m 5d 7m", "", "m9b5"],
  ["1P 4P 5A 7M", "", "M7#5sus4"],
  ["1P 4P 5A 7M 9M", "", "M9#5sus4"],
  ["1P 4P 5A 7m", "", "7#5sus4"],
  ["1P 4P 5P 7M", "", "M7sus4"],
  ["1P 4P 5P 7M 9M", "", "M9sus4"],
  ["1P 4P 5P 7m 9M", "", "9sus4 9sus"],
  ["1P 4P 5P 7m 9M 13M", "", "13sus4 13sus"],
  ["1P 4P 5P 7m 9m 13m", "", "7sus4b9b13 7b9b13sus4"],
  ["1P 4P 7m 10m", "", "4 quartal"],
  ["1P 5P 7m 9m 11P", "", "11b9"]
], ee = me;
({
  ...T
});
var nt = [], r1 = {};
function un() {
  return nt.slice();
}
function re(t, n, m) {
  const e = Me(t), r = {
    ...p(t),
    name: m || "",
    quality: e,
    intervals: t,
    aliases: n
  };
  nt.push(r), r.name && (r1[r.name] = r), r1[r.setNum] = r, r1[r.chroma] = r, r.aliases.forEach((o) => oe(r, o));
}
function oe(t, n) {
  r1[n] = t;
}
function Me(t) {
  const n = (m) => t.indexOf(m) !== -1;
  return n("5A") ? "Augmented" : n("3M") ? "Major" : n("5d") ? "Diminished" : n("3m") ? "Minor" : "Unknown";
}
ee.forEach(
  ([t, n, m]) => re(t.split(" "), m.split(" "), n)
);
nt.sort((t, n) => t.setNum - n.setNum);
var Pe = (t) => {
  const n = t.reduce((m, e) => {
    const r = l(e).chroma;
    return r !== void 0 && (m[r] = m[r] || l(e).name), m;
  }, {});
  return (m) => n[m];
};
function ae(t, n = {}) {
  const m = t.map((r) => l(r).pc).filter((r) => r);
  return l.length === 0 ? [] : fe(m, 1, n).filter((r) => r.weight).sort((r, o) => o.weight - r.weight).map((r) => r.name);
}
var p1 = {
  // 3m 000100000000
  // 3M 000010000000
  anyThirds: 384,
  // 5P 000000010000
  perfectFifth: 16,
  // 5d 000000100000
  // 5A 000000001000
  nonPerfectFifths: 40,
  anySeventh: 3
}, b1 = (t) => (n) => !!(n & t), ie = b1(p1.anyThirds), se = b1(p1.perfectFifth), ce = b1(p1.anySeventh), ue = b1(p1.nonPerfectFifths);
function de(t) {
  const n = parseInt(t.chroma, 2);
  return ie(n) && se(n) && ce(n);
}
function le(t) {
  const n = parseInt(t, 2);
  return ue(n) ? t : (n | 16).toString(2);
}
function fe(t, n, m) {
  const e = t[0], r = l(e).chroma, o = Pe(t), M = tt(t, !1), P = [];
  return M.forEach((a, i) => {
    const s = m.assumePerfectFifth && le(a);
    un().filter((c) => m.assumePerfectFifth && de(c) ? c.chroma === s : c.chroma === a).forEach((c) => {
      const d = c.aliases[0], f = o(i);
      i !== r ? P.push({
        weight: 0.5 * n,
        name: `${f}${d}/${e}`
      }) : P.push({ weight: 1 * n, name: `${f}${d}` });
    });
  }), P;
}
function Y(t) {
  return t !== null && typeof t == "object" && "name" in t && typeof t.name == "string";
}
var dn = [0, 2, 4, 5, 7, 9, 11], ln = ({ step: t, alt: n }) => (dn[t] + n + 120) % 12, mt = ({ step: t, alt: n, oct: m, dir: e = 1 }) => e * (dn[t] + n + 12 * (m === void 0 ? -100 : m)), fn = (t) => {
  const n = mt(t);
  return t.oct !== void 0 && n >= -12 && n <= 115 ? n + 12 : null;
};
function v1(t) {
  return t !== null && typeof t == "object" && "step" in t && typeof t.step == "number" && "alt" in t && typeof t.alt == "number";
}
var hn = [0, 2, 4, -1, 1, 3, 5], pn = hn.map(
  (t) => Math.floor(t * 7 / 12)
);
function g1(t) {
  const { step: n, alt: m, oct: e, dir: r = 1 } = t, o = hn[n] + 7 * m;
  if (e === void 0)
    return [r * o];
  const M = e - pn[n] - 4 * m;
  return [r * o, r * M];
}
var he = [3, 0, 4, 1, 5, 2, 6];
function y1(t) {
  const [n, m, e] = t, r = he[pe(n)], o = Math.floor((n + 1) / 7);
  if (m === void 0)
    return { step: r, alt: o, dir: e };
  const M = m + 4 * o + pn[r];
  return { step: r, alt: o, oct: M, dir: e };
}
function pe(t) {
  const n = (t + 1) % 7;
  return n < 0 ? 7 + n : n;
}
var _t = (t, n) => Array(Math.abs(n) + 1).join(t), G1 = { empty: !0, name: "", acc: "" }, be = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})", ve = "(AA|A|P|M|m|d|dd)([-+]?\\d+)", ge = new RegExp(
  "^" + be + "|" + ve + "$"
);
function et(t) {
  const n = ge.exec(`${t}`);
  return n === null ? ["", ""] : n[1] ? [n[1], n[2]] : [n[4], n[3]];
}
var Ct = {};
function b(t) {
  return typeof t == "string" ? Ct[t] || (Ct[t] = ye(t)) : v1(t) ? b($e(t)) : Y(t) ? b(t.name) : G1;
}
var Et = [0, 2, 4, 5, 7, 9, 11], bn = "PMMPPMM";
function ye(t) {
  const n = et(t);
  if (n[0] === "")
    return G1;
  const m = +n[0], e = n[1], r = (Math.abs(m) - 1) % 7, o = bn[r];
  if (o === "M" && e === "P")
    return G1;
  const M = o === "M" ? "majorable" : "perfectable", P = "" + m + e, a = m < 0 ? -1 : 1, i = m === 8 || m === -8 ? m : a * (r + 1), s = Ae(M, e), u = Math.floor((Math.abs(m) - 1) / 7), c = a * (Et[r] + s + 12 * u), d = (a * (Et[r] + s) % 12 + 12) % 12, f = g1({ step: r, alt: s, oct: u, dir: a });
  return {
    empty: !1,
    name: P,
    num: m,
    q: e,
    step: r,
    alt: s,
    dir: a,
    type: M,
    simple: i,
    semitones: c,
    chroma: d,
    coord: f,
    oct: u
  };
}
function Z(t, n) {
  const [m, e = 0] = t, r = m * 7 + e * 12 < 0, o = n || r ? [-m, -e, -1] : [m, e, 1];
  return b(y1(o));
}
function Ae(t, n) {
  return n === "M" && t === "majorable" || n === "P" && t === "perfectable" ? 0 : n === "m" && t === "majorable" ? -1 : /^A+$/.test(n) ? n.length : /^d+$/.test(n) ? -1 * (t === "perfectable" ? n.length : n.length + 1) : 0;
}
function $e(t) {
  const { step: n, alt: m, oct: e = 0, dir: r } = t;
  if (!r)
    return "";
  const o = n + 1 + 7 * e, M = o === 0 ? n + 1 : o, P = r < 0 ? "-" : "", a = bn[n] === "M" ? "majorable" : "perfectable";
  return P + M + Ne(a, m);
}
function Ne(t, n) {
  return n === 0 ? t === "majorable" ? "M" : "P" : n === -1 && t === "majorable" ? "m" : n > 0 ? _t("A", n) : _t("d", t === "perfectable" ? n : n + 1);
}
var Dt = (t, n) => Array(Math.abs(n) + 1).join(t), vn = { empty: !0, name: "", pc: "", acc: "" }, wt = /* @__PURE__ */ new Map(), rt = (t) => "CDEFGAB".charAt(t), ot = (t) => t < 0 ? Dt("b", -t) : Dt("#", t), Mt = (t) => t[0] === "b" ? -t.length : t.length;
function j(t) {
  const n = JSON.stringify(t), m = wt.get(n);
  if (m)
    return m;
  const e = typeof t == "string" ? Ie(t) : v1(t) ? j(Te(t)) : Y(t) ? j(t.name) : vn;
  return wt.set(n, e), e;
}
var je = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function A1(t) {
  const n = je.exec(t);
  return n ? [n[1].toUpperCase(), n[2].replace(/x/g, "##"), n[3], n[4]] : ["", "", "", ""];
}
function Pt(t) {
  return j(y1(t));
}
var Se = (t, n) => (t % n + n) % n, x1 = [0, 2, 4, 5, 7, 9, 11];
function Ie(t) {
  const n = A1(t);
  if (n[0] === "" || n[3] !== "")
    return vn;
  const m = n[0], e = n[1], r = n[2], o = (m.charCodeAt(0) + 3) % 7, M = Mt(e), P = r.length ? +r : void 0, a = g1({ step: o, alt: M, oct: P }), i = m + e + r, s = m + e, u = (x1[o] + M + 120) % 12, c = P === void 0 ? Se(x1[o] + M, 12) - 12 * 99 : x1[o] + M + 12 * (P + 1), d = c >= 0 && c <= 127 ? c : null, f = P === void 0 ? null : Math.pow(2, (c - 69) / 12) * 440;
  return {
    empty: !1,
    acc: e,
    alt: M,
    chroma: u,
    coord: a,
    freq: f,
    height: c,
    letter: m,
    midi: d,
    name: i,
    oct: P,
    pc: s,
    step: o
  };
}
function Te(t) {
  const { step: n, alt: m, oct: e } = t, r = rt(n);
  if (!r)
    return "";
  const o = r + ot(m);
  return e || e === 0 ? o + e : o;
}
function F(t, n) {
  const m = j(t), e = Array.isArray(n) ? n : b(n).coord;
  if (m.empty || !e || e.length < 2)
    return "";
  const r = m.coord, o = r.length === 1 ? [r[0] + e[0]] : [r[0] + e[0], r[1] + e[1]];
  return Pt(o).name;
}
function $1(t, n) {
  const m = t.length;
  return (e) => {
    if (!n)
      return "";
    const r = e < 0 ? (m - -e % m) % m : e % m, o = Math.floor(e / m), M = F(n, [0, o]);
    return F(M, t[r]);
  };
}
function at(t, n) {
  const m = j(t), e = j(n);
  if (m.empty || e.empty)
    return "";
  const r = m.coord, o = e.coord, M = o[0] - r[0], P = r.length === 2 && o.length === 2 ? o[1] - r[1] : -Math.floor(M * 7 / 12), a = e.height === m.height && e.midi !== null && m.midi !== null && m.step > e.step;
  return Z([M, P], a).name;
}
var gn = (t, n) => Array(Math.abs(n) + 1).join(t);
function B(t, n, m) {
  return function(...e) {
    return console.warn(`${t} is deprecated. Use ${n}.`), m.apply(this, e);
  };
}
var yn = B("isNamed", "isNamedPitch", Y);
const An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accToAlt: Mt,
  altToAcc: ot,
  chroma: ln,
  coordToInterval: Z,
  coordToNote: Pt,
  coordinates: g1,
  deprecate: B,
  distance: at,
  fillStr: gn,
  height: mt,
  interval: b,
  isNamed: yn,
  isNamedPitch: Y,
  isPitch: v1,
  midi: fn,
  note: j,
  pitch: y1,
  stepToLetter: rt,
  tokenizeInterval: et,
  tokenizeNote: A1,
  tonicIntervalsTransposer: $1,
  transpose: F
}, Symbol.toStringTag, { value: "Module" }));
var _e = [
  ["1P 3M 5P", "major", "M ^  maj"],
  ["1P 3M 5P 7M", "major seventh", "maj7 Δ ma7 M7 Maj7 ^7"],
  ["1P 3M 5P 7M 9M", "major ninth", "maj9 Δ9 ^9"],
  ["1P 3M 5P 7M 9M 13M", "major thirteenth", "maj13 Maj13 ^13"],
  ["1P 3M 5P 6M", "sixth", "6 add6 add13 M6"],
  ["1P 3M 5P 6M 9M", "sixth added ninth", "6add9 6/9 69 M69"],
  ["1P 3M 6m 7M", "major seventh flat sixth", "M7b6 ^7b6"],
  [
    "1P 3M 5P 7M 11A",
    "major seventh sharp eleventh",
    "maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"
  ],
  ["1P 3m 5P", "minor", "m min -"],
  ["1P 3m 5P 7m", "minor seventh", "m7 min7 mi7 -7"],
  [
    "1P 3m 5P 7M",
    "minor/major seventh",
    "m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7"
  ],
  ["1P 3m 5P 6M", "minor sixth", "m6 -6"],
  ["1P 3m 5P 7m 9M", "minor ninth", "m9 -9"],
  ["1P 3m 5P 7M 9M", "minor/major ninth", "mM9 mMaj9 -^9"],
  ["1P 3m 5P 7m 9M 11P", "minor eleventh", "m11 -11"],
  ["1P 3m 5P 7m 9M 13M", "minor thirteenth", "m13 -13"],
  ["1P 3m 5d", "diminished", "dim ° o"],
  ["1P 3m 5d 7d", "diminished seventh", "dim7 °7 o7"],
  ["1P 3m 5d 7m", "half-diminished", "m7b5 ø -7b5 h7 h"],
  ["1P 3M 5P 7m", "dominant seventh", "7 dom"],
  ["1P 3M 5P 7m 9M", "dominant ninth", "9"],
  ["1P 3M 5P 7m 9M 13M", "dominant thirteenth", "13"],
  ["1P 3M 5P 7m 11A", "lydian dominant seventh", "7#11 7#4"],
  ["1P 3M 5P 7m 9m", "dominant flat ninth", "7b9"],
  ["1P 3M 5P 7m 9A", "dominant sharp ninth", "7#9"],
  ["1P 3M 7m 9m", "altered", "alt7"],
  ["1P 4P 5P", "suspended fourth", "sus4 sus"],
  ["1P 2M 5P", "suspended second", "sus2"],
  ["1P 4P 5P 7m", "suspended fourth seventh", "7sus4 7sus"],
  ["1P 5P 7m 9M 11P", "eleventh", "11"],
  [
    "1P 4P 5P 7m 9m",
    "suspended fourth flat ninth",
    "b9sus phryg 7b9sus 7b9sus4"
  ],
  ["1P 5P", "fifth", "5"],
  ["1P 3M 5A", "augmented", "aug + +5 ^#5"],
  ["1P 3m 5A", "minor augmented", "m#5 -#5 m+"],
  ["1P 3M 5A 7M", "augmented seventh", "maj7#5 maj7+5 +maj7 ^7#5"],
  [
    "1P 3M 5P 7M 9M 11A",
    "major sharp eleventh (lydian)",
    "maj9#11 Δ9#11 ^9#11"
  ],
  ["1P 2M 4P 5P", "", "sus24 sus4add9"],
  ["1P 3M 5A 7M 9M", "", "maj9#5 Maj9#5"],
  ["1P 3M 5A 7m", "", "7#5 +7 7+ 7aug aug7"],
  ["1P 3M 5A 7m 9A", "", "7#5#9 7#9#5 7alt"],
  ["1P 3M 5A 7m 9M", "", "9#5 9+"],
  ["1P 3M 5A 7m 9M 11A", "", "9#5#11"],
  ["1P 3M 5A 7m 9m", "", "7#5b9 7b9#5"],
  ["1P 3M 5A 7m 9m 11A", "", "7#5b9#11"],
  ["1P 3M 5A 9A", "", "+add#9"],
  ["1P 3M 5A 9M", "", "M#5add9 +add9"],
  ["1P 3M 5P 6M 11A", "", "M6#11 M6b5 6#11 6b5"],
  ["1P 3M 5P 6M 7M 9M", "", "M7add13"],
  ["1P 3M 5P 6M 9M 11A", "", "69#11"],
  ["1P 3m 5P 6M 9M", "", "m69 -69"],
  ["1P 3M 5P 6m 7m", "", "7b6"],
  ["1P 3M 5P 7M 9A 11A", "", "maj7#9#11"],
  ["1P 3M 5P 7M 9M 11A 13M", "", "M13#11 maj13#11 M13+4 M13#4"],
  ["1P 3M 5P 7M 9m", "", "M7b9"],
  ["1P 3M 5P 7m 11A 13m", "", "7#11b13 7b5b13"],
  ["1P 3M 5P 7m 13M", "", "7add6 67 7add13"],
  ["1P 3M 5P 7m 9A 11A", "", "7#9#11 7b5#9 7#9b5"],
  ["1P 3M 5P 7m 9A 11A 13M", "", "13#9#11"],
  ["1P 3M 5P 7m 9A 11A 13m", "", "7#9#11b13"],
  ["1P 3M 5P 7m 9A 13M", "", "13#9"],
  ["1P 3M 5P 7m 9A 13m", "", "7#9b13"],
  ["1P 3M 5P 7m 9M 11A", "", "9#11 9+4 9#4"],
  ["1P 3M 5P 7m 9M 11A 13M", "", "13#11 13+4 13#4"],
  ["1P 3M 5P 7m 9M 11A 13m", "", "9#11b13 9b5b13"],
  ["1P 3M 5P 7m 9m 11A", "", "7b9#11 7b5b9 7b9b5"],
  ["1P 3M 5P 7m 9m 11A 13M", "", "13b9#11"],
  ["1P 3M 5P 7m 9m 11A 13m", "", "7b9b13#11 7b9#11b13 7b5b9b13"],
  ["1P 3M 5P 7m 9m 13M", "", "13b9"],
  ["1P 3M 5P 7m 9m 13m", "", "7b9b13"],
  ["1P 3M 5P 7m 9m 9A", "", "7b9#9"],
  ["1P 3M 5P 9M", "", "Madd9 2 add9 add2"],
  ["1P 3M 5P 9m", "", "Maddb9"],
  ["1P 3M 5d", "", "Mb5"],
  ["1P 3M 5d 6M 7m 9M", "", "13b5"],
  ["1P 3M 5d 7M", "", "M7b5"],
  ["1P 3M 5d 7M 9M", "", "M9b5"],
  ["1P 3M 5d 7m", "", "7b5"],
  ["1P 3M 5d 7m 9M", "", "9b5"],
  ["1P 3M 7m", "", "7no5"],
  ["1P 3M 7m 13m", "", "7b13"],
  ["1P 3M 7m 9M", "", "9no5"],
  ["1P 3M 7m 9M 13M", "", "13no5"],
  ["1P 3M 7m 9M 13m", "", "9b13"],
  ["1P 3m 4P 5P", "", "madd4"],
  ["1P 3m 5P 6m 7M", "", "mMaj7b6"],
  ["1P 3m 5P 6m 7M 9M", "", "mMaj9b6"],
  ["1P 3m 5P 7m 11P", "", "m7add11 m7add4"],
  ["1P 3m 5P 9M", "", "madd9"],
  ["1P 3m 5d 6M 7M", "", "o7M7"],
  ["1P 3m 5d 7M", "", "oM7"],
  ["1P 3m 6m 7M", "", "mb6M7"],
  ["1P 3m 6m 7m", "", "m7#5"],
  ["1P 3m 6m 7m 9M", "", "m9#5"],
  ["1P 3m 5A 7m 9M 11P", "", "m11A"],
  ["1P 3m 6m 9m", "", "mb6b9"],
  ["1P 2M 3m 5d 7m", "", "m9b5"],
  ["1P 4P 5A 7M", "", "M7#5sus4"],
  ["1P 4P 5A 7M 9M", "", "M9#5sus4"],
  ["1P 4P 5A 7m", "", "7#5sus4"],
  ["1P 4P 5P 7M", "", "M7sus4"],
  ["1P 4P 5P 7M 9M", "", "M9sus4"],
  ["1P 4P 5P 7m 9M", "", "9sus4 9sus"],
  ["1P 4P 5P 7m 9M 13M", "", "13sus4 13sus"],
  ["1P 4P 5P 7m 9m 13m", "", "7sus4b9b13 7b9b13sus4"],
  ["1P 4P 7m 10m", "", "4 quartal"],
  ["1P 5P 7m 9m 11P", "", "11b9"]
], Ce = _e, Ee = {
  ...T,
  name: "",
  quality: "Unknown",
  intervals: [],
  aliases: []
}, L = [], D = {};
function it(t) {
  return D[t] || Ee;
}
var De = B("ChordType.chordType", "ChordType.get", it);
function we() {
  return L.map((t) => t.name).filter((t) => t);
}
function xe() {
  return L.map((t) => t.aliases[0]).filter((t) => t);
}
function Ve() {
  return Object.keys(D);
}
function N1() {
  return L.slice();
}
var Re = B("ChordType.entries", "ChordType.all", N1);
function ke() {
  L = [], D = {};
}
function $n(t, n, m) {
  const e = Oe(t), r = {
    ...p(t),
    name: m || "",
    quality: e,
    intervals: t,
    aliases: n
  };
  L.push(r), r.name && (D[r.name] = r), D[r.setNum] = r, D[r.chroma] = r, r.aliases.forEach((o) => Fe(r, o));
}
function Fe(t, n) {
  D[n] = t;
}
function Oe(t) {
  const n = (m) => t.indexOf(m) !== -1;
  return n("5A") ? "Augmented" : n("3M") ? "Major" : n("5d") ? "Diminished" : n("3m") ? "Minor" : "Unknown";
}
Ce.forEach(
  ([t, n, m]) => $n(t.split(" "), m.split(" "), n)
);
L.sort((t, n) => t.setNum - n.setNum);
var Nn = {
  names: we,
  symbols: xe,
  get: it,
  all: N1,
  add: $n,
  removeAll: ke,
  keys: Ve,
  entries: Re,
  chordType: De
}, qe = [
  // Basic scales
  ["1P 2M 3M 5P 6M", "major pentatonic", "pentatonic"],
  ["1P 2M 3M 4P 5P 6M 7M", "major", "ionian"],
  ["1P 2M 3m 4P 5P 6m 7m", "minor", "aeolian"],
  // Jazz common scales
  ["1P 2M 3m 3M 5P 6M", "major blues"],
  ["1P 3m 4P 5d 5P 7m", "minor blues", "blues"],
  ["1P 2M 3m 4P 5P 6M 7M", "melodic minor"],
  ["1P 2M 3m 4P 5P 6m 7M", "harmonic minor"],
  ["1P 2M 3M 4P 5P 6M 7m 7M", "bebop"],
  ["1P 2M 3m 4P 5d 6m 6M 7M", "diminished", "whole-half diminished"],
  // Modes
  ["1P 2M 3m 4P 5P 6M 7m", "dorian"],
  ["1P 2M 3M 4A 5P 6M 7M", "lydian"],
  ["1P 2M 3M 4P 5P 6M 7m", "mixolydian", "dominant"],
  ["1P 2m 3m 4P 5P 6m 7m", "phrygian"],
  ["1P 2m 3m 4P 5d 6m 7m", "locrian"],
  // 5-note scales
  ["1P 3M 4P 5P 7M", "ionian pentatonic"],
  ["1P 3M 4P 5P 7m", "mixolydian pentatonic", "indian"],
  ["1P 2M 4P 5P 6M", "ritusen"],
  ["1P 2M 4P 5P 7m", "egyptian"],
  ["1P 3M 4P 5d 7m", "neopolitan major pentatonic"],
  ["1P 3m 4P 5P 6m", "vietnamese 1"],
  ["1P 2m 3m 5P 6m", "pelog"],
  ["1P 2m 4P 5P 6m", "kumoijoshi"],
  ["1P 2M 3m 5P 6m", "hirajoshi"],
  ["1P 2m 4P 5d 7m", "iwato"],
  ["1P 2m 4P 5P 7m", "in-sen"],
  ["1P 3M 4A 5P 7M", "lydian pentatonic", "chinese"],
  ["1P 3m 4P 6m 7m", "malkos raga"],
  ["1P 3m 4P 5d 7m", "locrian pentatonic", "minor seven flat five pentatonic"],
  ["1P 3m 4P 5P 7m", "minor pentatonic", "vietnamese 2"],
  ["1P 3m 4P 5P 6M", "minor six pentatonic"],
  ["1P 2M 3m 5P 6M", "flat three pentatonic", "kumoi"],
  ["1P 2M 3M 5P 6m", "flat six pentatonic"],
  ["1P 2m 3M 5P 6M", "scriabin"],
  ["1P 3M 5d 6m 7m", "whole tone pentatonic"],
  ["1P 3M 4A 5A 7M", "lydian #5P pentatonic"],
  ["1P 3M 4A 5P 7m", "lydian dominant pentatonic"],
  ["1P 3m 4P 5P 7M", "minor #7M pentatonic"],
  ["1P 3m 4d 5d 7m", "super locrian pentatonic"],
  // 6-note scales
  ["1P 2M 3m 4P 5P 7M", "minor hexatonic"],
  ["1P 2A 3M 5P 5A 7M", "augmented"],
  ["1P 2M 4P 5P 6M 7m", "piongio"],
  ["1P 2m 3M 4A 6M 7m", "prometheus neopolitan"],
  ["1P 2M 3M 4A 6M 7m", "prometheus"],
  ["1P 2m 3M 5d 6m 7m", "mystery #1"],
  ["1P 2m 3M 4P 5A 6M", "six tone symmetric"],
  ["1P 2M 3M 4A 5A 6A", "whole tone", "messiaen's mode #1"],
  ["1P 2m 4P 4A 5P 7M", "messiaen's mode #5"],
  // 7-note scales
  ["1P 2M 3M 4P 5d 6m 7m", "locrian major", "arabian"],
  ["1P 2m 3M 4A 5P 6m 7M", "double harmonic lydian"],
  [
    "1P 2m 2A 3M 4A 6m 7m",
    "altered",
    "super locrian",
    "diminished whole tone",
    "pomeroy"
  ],
  ["1P 2M 3m 4P 5d 6m 7m", "locrian #2", "half-diminished", "aeolian b5"],
  [
    "1P 2M 3M 4P 5P 6m 7m",
    "mixolydian b6",
    "melodic minor fifth mode",
    "hindu"
  ],
  ["1P 2M 3M 4A 5P 6M 7m", "lydian dominant", "lydian b7", "overtone"],
  ["1P 2M 3M 4A 5A 6M 7M", "lydian augmented"],
  [
    "1P 2m 3m 4P 5P 6M 7m",
    "dorian b2",
    "phrygian #6",
    "melodic minor second mode"
  ],
  [
    "1P 2m 3m 4d 5d 6m 7d",
    "ultralocrian",
    "superlocrian bb7",
    "superlocrian diminished"
  ],
  ["1P 2m 3m 4P 5d 6M 7m", "locrian 6", "locrian natural 6", "locrian sharp 6"],
  ["1P 2A 3M 4P 5P 5A 7M", "augmented heptatonic"],
  // Source https://en.wikipedia.org/wiki/Ukrainian_Dorian_scale
  [
    "1P 2M 3m 4A 5P 6M 7m",
    "dorian #4",
    "ukrainian dorian",
    "romanian minor",
    "altered dorian"
  ],
  ["1P 2M 3m 4A 5P 6M 7M", "lydian diminished"],
  ["1P 2M 3M 4A 5A 7m 7M", "leading whole tone"],
  ["1P 2M 3M 4A 5P 6m 7m", "lydian minor"],
  ["1P 2m 3M 4P 5P 6m 7m", "phrygian dominant", "spanish", "phrygian major"],
  ["1P 2m 3m 4P 5P 6m 7M", "balinese"],
  ["1P 2m 3m 4P 5P 6M 7M", "neopolitan major"],
  ["1P 2M 3M 4P 5P 6m 7M", "harmonic major"],
  ["1P 2m 3M 4P 5P 6m 7M", "double harmonic major", "gypsy"],
  ["1P 2M 3m 4A 5P 6m 7M", "hungarian minor"],
  ["1P 2A 3M 4A 5P 6M 7m", "hungarian major"],
  ["1P 2m 3M 4P 5d 6M 7m", "oriental"],
  ["1P 2m 3m 3M 4A 5P 7m", "flamenco"],
  ["1P 2m 3m 4A 5P 6m 7M", "todi raga"],
  ["1P 2m 3M 4P 5d 6m 7M", "persian"],
  ["1P 2m 3M 5d 6m 7m 7M", "enigmatic"],
  [
    "1P 2M 3M 4P 5A 6M 7M",
    "major augmented",
    "major #5",
    "ionian augmented",
    "ionian #5"
  ],
  ["1P 2A 3M 4A 5P 6M 7M", "lydian #9"],
  // 8-note scales
  ["1P 2m 2M 4P 4A 5P 6m 7M", "messiaen's mode #4"],
  ["1P 2m 3M 4P 4A 5P 6m 7M", "purvi raga"],
  ["1P 2m 3m 3M 4P 5P 6m 7m", "spanish heptatonic"],
  ["1P 2M 3m 3M 4P 5P 6M 7m", "bebop minor"],
  ["1P 2M 3M 4P 5P 5A 6M 7M", "bebop major"],
  ["1P 2m 3m 4P 5d 5P 6m 7m", "bebop locrian"],
  ["1P 2M 3m 4P 5P 6m 7m 7M", "minor bebop"],
  ["1P 2M 3M 4P 5d 5P 6M 7M", "ichikosucho"],
  ["1P 2M 3m 4P 5P 6m 6M 7M", "minor six diminished"],
  [
    "1P 2m 3m 3M 4A 5P 6M 7m",
    "half-whole diminished",
    "dominant diminished",
    "messiaen's mode #2"
  ],
  ["1P 3m 3M 4P 5P 6M 7m 7M", "kafi raga"],
  ["1P 2M 3M 4P 4A 5A 6A 7M", "messiaen's mode #6"],
  // 9-note scales
  ["1P 2M 3m 3M 4P 5d 5P 6M 7m", "composite blues"],
  ["1P 2M 3m 3M 4A 5P 6m 7m 7M", "messiaen's mode #3"],
  // 10-note scales
  ["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M", "messiaen's mode #7"],
  // 12-note scales
  ["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"]
], Ge = qe, ze = {
  ...T,
  intervals: [],
  aliases: []
}, j1 = [], w = {};
function jn() {
  return j1.map((t) => t.name);
}
function S1(t) {
  return w[t] || ze;
}
var Be = S1;
function H() {
  return j1.slice();
}
var Le = H;
function He() {
  return Object.keys(w);
}
function Ue() {
  j1 = [], w = {};
}
function Sn(t, n, m = []) {
  const e = { ...p(t), name: n, intervals: t, aliases: m };
  return j1.push(e), w[e.name] = e, w[e.setNum] = e, w[e.chroma] = e, e.aliases.forEach((r) => Xe(e, r)), e;
}
function Xe(t, n) {
  w[n] = t;
}
Ge.forEach(
  ([t, n, ...m]) => Sn(t.split(" "), n, m)
);
var In = {
  names: jn,
  get: S1,
  all: H,
  add: Sn,
  removeAll: Ue,
  keys: He,
  // deprecated
  entries: Le,
  scaleType: Be
}, z1 = {
  empty: !0,
  name: "",
  symbol: "",
  root: "",
  rootDegree: 0,
  type: "",
  tonic: null,
  setNum: NaN,
  quality: "Unknown",
  chroma: "",
  normalized: "",
  aliases: [],
  notes: [],
  intervals: []
};
function st(t) {
  const [n, m, e, r] = A1(t);
  return n === "" ? ["", t] : n === "A" && r === "ug" ? ["", "aug"] : [n + m, e + r];
}
function R(t) {
  if (t === "")
    return z1;
  if (Array.isArray(t) && t.length === 2)
    return o1(t[1], t[0]);
  {
    const [n, m] = st(t), e = o1(m, n);
    return e.empty ? o1(t) : e;
  }
}
function o1(t, n, m) {
  const e = it(t), r = j(n || ""), o = j(m || "");
  if (e.empty || n && r.empty || m && o.empty)
    return z1;
  const M = at(r.pc, o.pc), P = e.intervals.indexOf(M) + 1;
  if (!o.empty && !P)
    return z1;
  const a = Array.from(e.intervals);
  for (let c = 1; c < P; c++) {
    const d = a[0][0], f = a[0][1], I = parseInt(d, 10) + 7;
    a.push(`${I}${f}`), a.shift();
  }
  const i = r.empty ? [] : a.map((c) => F(r, c));
  t = e.aliases.indexOf(t) !== -1 ? t : e.aliases[0];
  const s = `${r.empty ? "" : r.pc}${t}${o.empty || P <= 1 ? "" : "/" + o.pc}`, u = `${n ? r.pc + " " : ""}${e.name}${P > 1 && m ? " over " + o.pc : ""}`;
  return {
    ...e,
    name: u,
    symbol: s,
    type: e.name,
    root: o.name,
    intervals: a,
    rootDegree: P,
    tonic: r.name,
    notes: i
  };
}
var Ke = B("Chord.chord", "Chord.get", R);
function Je(t, n) {
  const [m, e] = st(t);
  return m ? F(m, n) + e : t;
}
function Qe(t) {
  const n = R(t), m = h1(n.chroma);
  return H().filter((e) => m(e.chroma)).map((e) => e.name);
}
function We(t) {
  const n = R(t), m = h1(n.chroma);
  return N1().filter((e) => m(e.chroma)).map((e) => n.tonic + e.aliases[0]);
}
function Ye(t) {
  const n = R(t), m = f1(n.chroma);
  return N1().filter((e) => m(e.chroma)).map((e) => n.tonic + e.aliases[0]);
}
function Ze(t) {
  const { intervals: n, tonic: m } = R(t), e = $1(n, m);
  return (r) => r ? e(r > 0 ? r - 1 : r) : "";
}
function tr(t) {
  const { intervals: n, tonic: m } = R(t);
  return $1(n, m);
}
var nr = {
  getChord: o1,
  get: R,
  detect: ae,
  chordScales: Qe,
  extended: We,
  reduced: Ye,
  tokenize: st,
  transpose: Je,
  degrees: Ze,
  steps: tr,
  chord: Ke
}, mr = [
  [
    0.125,
    "dl",
    ["large", "duplex longa", "maxima", "octuple", "octuple whole"]
  ],
  [0.25, "l", ["long", "longa"]],
  [0.5, "d", ["double whole", "double", "breve"]],
  [1, "w", ["whole", "semibreve"]],
  [2, "h", ["half", "minim"]],
  [4, "q", ["quarter", "crotchet"]],
  [8, "e", ["eighth", "quaver"]],
  [16, "s", ["sixteenth", "semiquaver"]],
  [32, "t", ["thirty-second", "demisemiquaver"]],
  [64, "sf", ["sixty-fourth", "hemidemisemiquaver"]],
  [128, "h", ["hundred twenty-eighth"]],
  [256, "th", ["two hundred fifty-sixth"]]
], er = mr, I1 = [];
er.forEach(
  ([t, n, m]) => cr(t, n, m)
);
var rr = {
  empty: !0,
  name: "",
  value: 0,
  fraction: [0, 0],
  shorthand: "",
  dots: "",
  names: []
};
function or() {
  return I1.reduce((t, n) => (n.names.forEach((m) => t.push(m)), t), []);
}
function Mr() {
  return I1.map((t) => t.shorthand);
}
var Pr = /^([^.]+)(\.*)$/;
function ct(t) {
  const [n, m, e] = Pr.exec(t) || [], r = I1.find(
    (P) => P.shorthand === m || P.names.includes(m)
  );
  if (!r)
    return rr;
  const o = ur(r.fraction, e.length), M = o[0] / o[1];
  return { ...r, name: t, dots: e, value: M, fraction: o };
}
var ar = (t) => ct(t).value, ir = (t) => ct(t).fraction, sr = { names: or, shorthands: Mr, get: ct, value: ar, fraction: ir };
function cr(t, n, m) {
  I1.push({
    empty: !1,
    dots: "",
    name: "",
    value: 1 / t,
    fraction: t < 1 ? [1 / t, 1] : [1, t],
    shorthand: n,
    names: m
  });
}
function ur(t, n) {
  const m = Math.pow(2, n);
  let e = t[0] * m, r = t[1] * m;
  const o = e;
  for (let M = 0; M < n; M++)
    e += o / Math.pow(2, M + 1);
  for (; e % 2 === 0 && r % 2 === 0; )
    e /= 2, r /= 2;
  return [e, r];
}
function dr() {
  return "1P 2M 3M 4P 5P 6m 7m".split(" ");
}
var Tn = b, lr = (t) => b(t).name, fr = (t) => b(t).semitones, hr = (t) => b(t).q, pr = (t) => b(t).num;
function br(t) {
  const n = b(t);
  return n.empty ? "" : n.simple + n.q;
}
function vr(t) {
  const n = b(t);
  if (n.empty)
    return "";
  const m = (7 - n.step) % 7, e = n.type === "perfectable" ? -n.alt : -(n.alt + 1);
  return b({ step: m, alt: e, oct: n.oct, dir: n.dir }).name;
}
var gr = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7], yr = "P m M m M P d P m M m M".split(" ");
function Ar(t) {
  const n = t < 0 ? -1 : 1, m = Math.abs(t), e = m % 12, r = Math.floor(m / 12);
  return n * (gr[e] + 7 * r) + yr[e];
}
var $r = d1, _n = Cn((t, n) => [t[0] + n[0], t[1] + n[1]]), Nr = (t) => (n) => _n(t, n), jr = Cn((t, n) => [t[0] - n[0], t[1] - n[1]]);
function Sr(t, n) {
  const m = Tn(t);
  if (m.empty)
    return "";
  const [e, r, o] = m.coord;
  return Z([e + n, r, o]).name;
}
var O = {
  names: dr,
  get: Tn,
  name: lr,
  num: pr,
  semitones: fr,
  quality: hr,
  fromSemitones: Ar,
  distance: $r,
  invert: vr,
  simplify: br,
  add: _n,
  addTo: Nr,
  substract: jr,
  transposeFifths: Sr
};
function Cn(t) {
  return (n, m) => {
    const e = b(n).coord, r = b(m).coord;
    if (e && r) {
      const o = t(e, r);
      return Z(o).name;
    }
  };
}
function En(t) {
  return +t >= 0 && +t <= 127;
}
function Dn(t) {
  if (En(t))
    return +t;
  const n = l(t);
  return n.empty ? null : n.midi;
}
function Ir(t, n = 440) {
  return Math.pow(2, (t - 69) / 12) * n;
}
var Tr = Math.log(2), _r = Math.log(440);
function ut(t) {
  const n = 12 * (Math.log(t) - _r) / Tr + 69;
  return Math.round(n * 100) / 100;
}
var Cr = "C C# D D# E F F# G G# A A# B".split(" "), Er = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
function E(t, n = {}) {
  if (isNaN(t) || t === -1 / 0 || t === 1 / 0) return "";
  t = Math.round(t);
  const e = (n.sharps === !0 ? Cr : Er)[t % 12];
  if (n.pitchClass)
    return e;
  const r = Math.floor(t / 12) - 1;
  return e + r;
}
function dt(t) {
  return t % 12;
}
function Dr(t) {
  return t.split("").reduce((n, m, e) => (e < 12 && m === "1" && n.push(e), n), []);
}
function wr(t) {
  return t.map(dt).sort((n, m) => n - m).filter((n, m, e) => m === 0 || n !== e[m - 1]);
}
function lt(t) {
  return Array.isArray(t) ? wr(t) : Dr(t);
}
function xr(t) {
  const n = lt(t);
  return (m) => {
    const e = dt(m);
    for (let r = 0; r < 12; r++) {
      if (n.includes(e + r)) return m + r;
      if (n.includes(e - r)) return m - r;
    }
  };
}
function wn(t, n) {
  const m = lt(t), e = m.length;
  return (r) => {
    const o = r < 0 ? (e - -r % e) % e : r % e, M = Math.floor(r / e);
    return m[o] + M * 12 + n;
  };
}
function Vr(t, n) {
  const m = wn(t, n);
  return (e) => {
    if (e !== 0)
      return m(e > 0 ? e - 1 : e);
  };
}
var Rr = {
  chroma: dt,
  freqToMidi: ut,
  isMidi: En,
  midiToFreq: Ir,
  midiToNoteName: E,
  pcsetNearest: xr,
  pcset: lt,
  pcsetDegrees: Vr,
  pcsetSteps: wn,
  toMidi: Dn
}, kr = ["C", "D", "E", "F", "G", "A", "B"], xn = (t) => t.name, Vn = (t) => t.map(l).filter((n) => !n.empty);
function Fr(t) {
  return t === void 0 ? kr.slice() : Array.isArray(t) ? Vn(t).map(xn) : [];
}
var A = l, Or = (t) => A(t).name, qr = (t) => A(t).pc, Gr = (t) => A(t).acc, zr = (t) => A(t).oct, Br = (t) => A(t).midi, Lr = (t) => A(t).freq, Hr = (t) => A(t).chroma;
function Rn(t) {
  return E(t);
}
function Ur(t) {
  return E(ut(t));
}
function Xr(t) {
  return E(ut(t), { sharps: !0 });
}
function Kr(t) {
  return E(t, { sharps: !0 });
}
var Jr = d1, g = y, Qr = y, kn = (t) => (n) => g(n, t), Wr = kn, Fn = (t) => (n) => g(t, n), Yr = Fn;
function c1(t, n) {
  return g(t, [n, 0]);
}
var Zr = c1;
function to(t, n) {
  return g(t, [0, n]);
}
var ft = (t, n) => t.height - n.height, no = (t, n) => n.height - t.height;
function On(t, n) {
  return n = n || ft, Vn(t).sort(n).map(xn);
}
function qn(t) {
  return On(t, ft).filter(
    (n, m, e) => m === 0 || n !== e[m - 1]
  );
}
var mo = (t) => {
  const n = A(t);
  return n.empty ? "" : E(n.midi || n.chroma, {
    sharps: n.alt > 0,
    pitchClass: n.midi === null
  });
};
function Gn(t, n) {
  const m = A(t);
  if (m.empty)
    return "";
  const e = A(
    n || E(m.midi || m.chroma, {
      sharps: m.alt < 0,
      pitchClass: !0
    })
  );
  if (e.empty || e.chroma !== m.chroma)
    return "";
  if (m.oct === void 0)
    return e.pc;
  const r = m.chroma - m.alt, o = e.chroma - e.alt, M = r > 11 || o < 0 ? -1 : r < 0 || o > 11 ? 1 : 0, P = m.oct + M;
  return e.pc + P;
}
var _ = {
  names: Fr,
  get: A,
  name: Or,
  pitchClass: qr,
  accidentals: Gr,
  octave: zr,
  midi: Br,
  ascending: ft,
  descending: no,
  distance: Jr,
  sortedNames: On,
  sortedUniqNames: qn,
  fromMidi: Rn,
  fromMidiSharps: Kr,
  freq: Lr,
  fromFreq: Ur,
  fromFreqSharps: Xr,
  chroma: Hr,
  transpose: g,
  tr: Qr,
  transposeBy: kn,
  trBy: Wr,
  transposeFrom: Fn,
  trFrom: Yr,
  transposeFifths: c1,
  transposeOctaves: to,
  trFifths: Zr,
  simplify: mo,
  enharmonic: Gn
}, zn = { empty: !0, name: "", chordType: "" }, xt = {};
function C(t) {
  return typeof t == "string" ? xt[t] || (xt[t] = io(t)) : typeof t == "number" ? C(T1[t] || "") : K1(t) ? oo(t) : X1(t) ? C(t.name) : zn;
}
var eo = C;
function ro(t = !0) {
  return (t ? T1 : ao).slice();
}
function oo(t) {
  return C(u1(t.alt) + T1[t.step]);
}
var Mo = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
function Po(t) {
  return Mo.exec(t) || ["", "", "", ""];
}
var Bn = "I II III IV V VI VII", T1 = Bn.split(" "), ao = Bn.toLowerCase().split(" ");
function io(t) {
  const [n, m, e, r] = Po(t);
  if (!e)
    return zn;
  const o = e.toUpperCase(), M = T1.indexOf(o), P = J1(m), a = 1;
  return {
    empty: !1,
    name: n,
    roman: e,
    interval: N({ step: M, alt: P, dir: a }).name,
    acc: m,
    chordType: r,
    alt: P,
    step: M,
    major: e === o,
    oct: 0,
    dir: a
  };
}
var so = {
  names: ro,
  get: C,
  // deprecated
  romanNumeral: eo
}, h = Object.freeze([]), Ln = {
  type: "major",
  tonic: "",
  alteration: 0,
  keySignature: ""
}, M1 = {
  tonic: "",
  grades: h,
  intervals: h,
  scale: h,
  triads: h,
  chords: h,
  chordsHarmonicFunction: h,
  chordScales: h,
  secondaryDominants: h,
  secondaryDominantSupertonics: h,
  substituteDominantsMinorRelative: h,
  substituteDominants: h,
  substituteDominantSupertonics: h,
  secondaryDominantsMinorRelative: h
}, co = {
  ...Ln,
  ...M1,
  type: "major",
  minorRelative: "",
  scale: h,
  substituteDominants: h,
  secondaryDominantSupertonics: h,
  substituteDominantsMinorRelative: h
}, uo = {
  ...Ln,
  type: "minor",
  relativeMajor: "",
  natural: M1,
  harmonic: M1,
  melodic: M1
}, V1 = (t, n, m = "") => n.map((e, r) => `${t[r]}${m}${e}`);
function _1(t, n, m, e, r) {
  return (o) => {
    const M = t.map((d) => C(d).interval || ""), P = M.map((d) => g(o, d)), a = V1(P, m), i = P.map((d) => g(d, "5P")).map(
      (d) => (
        // A secondary dominant is a V chord which:
        // 1. is not diatonic to the key,
        // 2. it must have a diatonic root.
        P.includes(d) && !a.includes(d + "7") ? d + "7" : ""
      )
    ), s = Vt(
      i,
      n
    ), u = i.map((d) => {
      if (!d) return "";
      const f = d.slice(0, -1);
      return g(f, "5d") + "7";
    }), c = Vt(
      u,
      n
    );
    return {
      tonic: o,
      grades: t,
      intervals: M,
      scale: P,
      triads: V1(P, n),
      chords: a,
      chordsHarmonicFunction: e.slice(),
      chordScales: V1(P, r, " "),
      secondaryDominants: i,
      secondaryDominantSupertonics: s,
      substituteDominants: u,
      substituteDominantSupertonics: c,
      // @deprecated use secondaryDominantsSupertonic
      secondaryDominantsMinorRelative: s,
      // @deprecated use secondaryDominantsSupertonic
      substituteDominantsMinorRelative: c
    };
  };
}
var Vt = (t, n) => t.map((m, e) => {
  if (!m) return "";
  const r = m.slice(0, -1), o = g(r, "5P");
  return n[e].endsWith("m") ? o + "m7" : o + "m7b5";
}), Hn = (t, n) => {
  const m = l(t), e = l(n);
  return m.empty || e.empty ? 0 : e.coord[0] - m.coord[0];
}, lo = _1(
  "I II III IV V VI VII".split(" "),
  " m m   m dim".split(" "),
  "maj7 m7 m7 maj7 7 m7 m7b5".split(" "),
  "T SD T SD D T D".split(" "),
  "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")
), fo = _1(
  "I II bIII IV V bVI bVII".split(" "),
  "m dim  m m  ".split(" "),
  "m7 m7b5 maj7 m7 m7 maj7 7".split(" "),
  "T SD T SD D SD SD".split(" "),
  "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")
), ho = _1(
  "I II bIII IV V bVI VII".split(" "),
  "m dim aug m   dim".split(" "),
  "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),
  "T SD T SD D SD D".split(" "),
  "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(
    ","
  )
), po = _1(
  "I II bIII IV V VI VII".split(" "),
  "m m aug   dim dim".split(" "),
  "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),
  "T SD T SD D  ".split(" "),
  "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(
    ","
  )
);
function bo(t) {
  const n = l(t).pc;
  if (!n) return co;
  const m = lo(n), e = Hn("C", n);
  return {
    ...m,
    type: "major",
    minorRelative: g(n, "-3m"),
    alteration: e,
    keySignature: u1(e)
  };
}
function vo(t) {
  const n = l(t).pc;
  if (!n) return uo;
  const m = Hn("C", n) - 3;
  return {
    type: "minor",
    tonic: n,
    relativeMajor: g(n, "3m"),
    alteration: m,
    keySignature: u1(m),
    natural: fo(n),
    harmonic: ho(n),
    melodic: po(n)
  };
}
function go(t) {
  return typeof t == "number" ? c1("C", t) : typeof t == "string" && /^b+|#+$/.test(t) ? c1("C", J1(t)) : null;
}
var yo = { majorKey: bo, majorTonicFromKeySignature: go, minorKey: vo }, Ao = N;
function $o(t) {
  const n = N(t);
  return n.empty ? "" : n.simple + n.q;
}
function No(t, n) {
  const m = Ao(t);
  if (m.empty) return "";
  const [e, r, o] = m.coord;
  return tn([e + n, r, o]).name;
}
var ht = [
  [0, 2773, 0, "ionian", "", "Maj7", "major"],
  [1, 2902, 2, "dorian", "m", "m7"],
  [2, 3418, 4, "phrygian", "m", "m7"],
  [3, 2741, -1, "lydian", "", "Maj7"],
  [4, 2774, 1, "mixolydian", "", "7"],
  [5, 2906, 3, "aeolian", "m", "m7", "minor"],
  [6, 3434, 5, "locrian", "dim", "m7b5"]
], Rt = {
  ...T,
  name: "",
  alt: 0,
  modeNum: NaN,
  triad: "",
  seventh: "",
  aliases: []
}, pt = ht.map(To), B1 = {};
pt.forEach((t) => {
  B1[t.name] = t, t.aliases.forEach((n) => {
    B1[n] = t;
  });
});
function V(t) {
  return typeof t == "string" ? B1[t.toLowerCase()] || Rt : t && t.name ? V(t.name) : Rt;
}
var jo = V;
function Un() {
  return pt.slice();
}
var So = Un;
function Io() {
  return pt.map((t) => t.name);
}
function To(t) {
  const [n, m, e, r, o, M, P] = t, a = P ? [P] : [], i = Number(m).toString(2);
  return {
    empty: !1,
    intervals: S1(r).intervals,
    modeNum: n,
    chroma: i,
    normalized: i,
    name: r,
    setNum: m,
    alt: e,
    triad: o,
    seventh: M,
    aliases: a
  };
}
function _o(t, n) {
  return V(t).intervals.map((m) => y(n, m));
}
function Xn(t) {
  return (n, m) => {
    const e = V(n);
    if (e.empty) return [];
    const r = z(e.modeNum, t), o = e.intervals.map((M) => y(m, M));
    return r.map((M, P) => o[P] + M);
  };
}
var Co = Xn(ht.map((t) => t[4])), Eo = Xn(ht.map((t) => t[5]));
function Kn(t, n) {
  const m = V(n), e = V(t);
  return m.empty || e.empty ? "" : $o(No("1P", e.alt - m.alt));
}
function Do(t, n, m) {
  return y(m, Kn(t, n));
}
var wo = {
  get: V,
  names: Io,
  all: Un,
  distance: Kn,
  relativeTonic: Do,
  notes: _o,
  triads: Co,
  seventhChords: Eo,
  // deprecated
  entries: So,
  mode: jo
};
function xo(t) {
  const [n, m, e, r] = Q1(t);
  return n === "" ? R1("", t) : n === "A" && r === "ug" ? R1("", "aug") : R1(n + m, e + r);
}
function R1(t, n) {
  const m = n.split("/");
  if (m.length === 1)
    return [t, m[0], ""];
  const [e, r, o, M] = Q1(m[1]);
  return e !== "" && o === "" && M === "" ? [t, m[0], e + r] : [t, n, ""];
}
function Vo(t, n) {
  return n.map(C).map(
    (e) => y(t, N(e)) + e.chordType
  );
}
function Ro(t, n) {
  return n.map((m) => {
    const [e, r] = xo(m), o = d1(t, e);
    return C(N(o)).name + r;
  });
}
var ko = { fromRomanNumerals: Vo, toRomanNumerals: Ro };
function Jn(t) {
  const n = W1(
    t.map((m) => typeof m == "number" ? m : Dn(m))
  );
  return !t.length || n.length !== t.length ? [] : n.reduce(
    (m, e) => {
      const r = m[m.length - 1];
      return m.concat(l1(r, e).slice(1));
    },
    [n[0]]
  );
}
function Fo(t, n) {
  return Jn(t).map((m) => E(m, n));
}
var Oo = { numeric: Jn, chromatic: Fo }, qo = {
  empty: !0,
  name: "",
  type: "",
  tonic: null,
  setNum: NaN,
  chroma: "",
  normalized: "",
  aliases: [],
  notes: [],
  intervals: []
};
function Qn(t) {
  if (typeof t != "string")
    return ["", ""];
  const n = t.indexOf(" "), m = l(t.substring(0, n));
  if (m.empty) {
    const r = l(t);
    return r.empty ? ["", t] : [r.name, ""];
  }
  const e = t.substring(m.name.length + 1).toLowerCase();
  return [m.name, e.length ? e : ""];
}
var Go = jn;
function S(t) {
  const n = Array.isArray(t) ? t : Qn(t), m = l(n[0]).name, e = S1(n[1]);
  if (e.empty)
    return qo;
  const r = e.name, o = m ? e.intervals.map((P) => y(m, P)) : [], M = m ? m + " " + r : r;
  return { ...e, name: M, type: r, tonic: m, notes: o };
}
var zo = S;
function Bo(t, n = {}) {
  const m = an(t), e = l(n.tonic ?? t[0] ?? ""), r = e.chroma;
  if (r === void 0)
    return [];
  const o = m.split("");
  o[r] = "1";
  const M = z(r, o).join(""), P = H().find((i) => i.chroma === M), a = [];
  return P && a.push(e.name + " " + P.name), n.match === "exact" || Wn(M).forEach((i) => {
    a.push(e.name + " " + i);
  }), a;
}
function Lo(t) {
  const n = S(t), m = f1(n.chroma);
  return un().filter((e) => m(e.chroma)).map((e) => e.aliases[0]);
}
function Wn(t) {
  const n = Z1(t) ? t : S(t).chroma, m = h1(n);
  return H().filter((e) => m(e.chroma)).map((e) => e.name);
}
function Ho(t) {
  const n = f1(S(t).chroma);
  return H().filter((m) => n(m.chroma)).map((m) => m.name);
}
function Yn(t) {
  const n = t.map((r) => l(r).pc).filter((r) => r), m = n[0], e = qn(n);
  return z(e.indexOf(m), e);
}
function Uo(t) {
  const n = S(t);
  if (n.empty)
    return [];
  const m = n.tonic ? n.notes : n.intervals;
  return tt(n.chroma).map((e, r) => {
    const o = S(e).name;
    return o ? [m[r], o] : ["", ""];
  }).filter((e) => e[0]);
}
function Xo(t) {
  const n = Array.isArray(t) ? Yn(t) : S(t).notes, m = n.map((e) => l(e).chroma);
  return (e) => {
    const r = l(typeof e == "number" ? Rn(e) : e), o = r.height;
    if (o === void 0) return;
    const M = o % 12, P = m.indexOf(M);
    if (P !== -1)
      return Gn(r.name, n[P]);
  };
}
function Ko(t) {
  const n = Xo(t);
  return (m, e) => {
    const r = l(m).height, o = l(e).height;
    return r === void 0 || o === void 0 ? [] : l1(r, o).map(n).filter((M) => M);
  };
}
function Jo(t) {
  const { intervals: n, tonic: m } = S(t), e = mn(n, m);
  return (r) => r ? e(r > 0 ? r - 1 : r) : "";
}
function Qo(t) {
  const { intervals: n, tonic: m } = S(t);
  return mn(n, m);
}
var q = {
  degrees: Jo,
  detect: Bo,
  extended: Wn,
  get: S,
  modeNames: Uo,
  names: Go,
  rangeOf: Ko,
  reduced: Ho,
  scaleChords: Lo,
  scaleNotes: Yn,
  steps: Qo,
  tokenize: Qn,
  // deprecated
  scale: zo
}, Wo = {
  empty: !0,
  name: "",
  upper: void 0,
  lower: void 0,
  type: void 0,
  additive: []
}, Yo = ["4/4", "3/4", "2/4", "2/2", "12/8", "9/8", "6/8", "3/8"];
function Zo() {
  return Yo.slice();
}
var tM = /^(\d*\d(?:\+\d)*)\/(\d+)$/, kt = /* @__PURE__ */ new Map();
function nM(t) {
  const n = JSON.stringify(t), m = kt.get(n);
  if (m)
    return m;
  const e = rM(bt(t));
  return kt.set(n, e), e;
}
function bt(t) {
  if (typeof t == "string") {
    const [o, M, P] = tM.exec(t) || [];
    return bt([M, P]);
  }
  const [n, m] = t, e = +m;
  if (typeof n == "number")
    return [n, e];
  const r = n.split("+").map((o) => +o);
  return r.length === 1 ? [r[0], e] : [r, e];
}
var mM = { names: Zo, parse: bt, get: nM }, eM = (t) => Math.log(t) / Math.log(2) % 1 === 0;
function rM([t, n]) {
  const m = Array.isArray(t) ? t.reduce((P, a) => P + a, 0) : t, e = n;
  if (m === 0 || e === 0)
    return Wo;
  const r = Array.isArray(t) ? `${t.join("+")}/${n}` : `${t}/${n}`, o = Array.isArray(t) ? t : [], M = e === 4 || e === 2 ? "simple" : e === 8 && m % 3 === 0 ? "compound" : eM(e) ? "irregular" : "irrational";
  return {
    empty: !1,
    name: r,
    type: M,
    upper: m,
    lower: e,
    additive: o
  };
}
var oM = An, MM = cn, PM = Nn, aM = In;
const iM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbcNotation: Tm,
  Array: Rm,
  Chord: nr,
  ChordDictionary: PM,
  ChordType: Nn,
  Collection: qm,
  Core: An,
  DurationValue: sr,
  Interval: O,
  Key: yo,
  Midi: Rr,
  Mode: wo,
  Note: _,
  PcSet: MM,
  Pcset: cn,
  Progression: ko,
  Range: Oo,
  RomanNumeral: so,
  Scale: q,
  ScaleDictionary: aM,
  ScaleType: In,
  TimeSignature: mM,
  Tonal: oM,
  accToAlt: Mt,
  altToAcc: ot,
  chroma: ln,
  coordToInterval: Z,
  coordToNote: Pt,
  coordinates: g1,
  deprecate: B,
  distance: at,
  fillStr: gn,
  height: mt,
  interval: b,
  isNamed: yn,
  isNamedPitch: Y,
  isPitch: v1,
  midi: fn,
  note: j,
  pitch: y1,
  stepToLetter: rt,
  tokenizeInterval: et,
  tokenizeNote: A1,
  tonicIntervalsTransposer: $1,
  transpose: F
}, Symbol.toStringTag, { value: "Module" })), sM = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], cM = ["c", "db", "d", "eb", "e", "f", "gb", "g", "ab", "a", "bb", "b"], uM = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], dM = { b: -1, "#": 1 }, lM = (t) => {
  const [n, ...m] = t.split("");
  return cM.indexOf(n.toLowerCase()) + m.reduce((e, r) => e + dM[r], 0);
};
function fM(t) {
  const n = (t || "").match(/^([A-G][b#]*)([^/]*)[/]?([A-G][b#]*)?$/);
  return n ? n.slice(1) : [];
}
const L1 = (t) => t % 12, Zn = (t) => {
  let n = Number(t);
  return isNaN(n) ? O.semitones(t) : n;
}, H1 = (t, n) => {
  if (typeof t == "number")
    return t;
  if (typeof t == "string")
    return Xt(t, n);
}, hM = (t, n = !1) => {
  const m = Math.floor(t / 12) - 1;
  return (n ? uM : sM)[t % 12] + m;
};
function pM(t, n, m = 1) {
  t = t.map((r) => typeof r == "string" ? Xt(r) : r);
  const e = Math.floor(n / t.length) * m * 12;
  return n = x(n, t.length), t[n] + e;
}
function bM(t, n, m) {
  let e = 0, r = 1 / 0;
  return n.forEach((o, M) => {
    const P = Math.abs(o - t);
    (P < r || m) && (e = M, r = P);
  }), e;
}
let k1 = {};
function vM(t, n, m, e) {
  let [r, o] = q.tokenize(n);
  const M = H1(r), P = L1(M);
  if (!k1[o]) {
    let { intervals: c } = q.get(`C ${o}`);
    k1[o] = c.map(Zn);
  }
  const a = k1[o];
  if (!a)
    return null;
  let i = M;
  if (m) {
    m = H1(m, 3);
    const c = L1(m), d = x(c - P, 12), f = bM(d, a, e);
    t = t + f, i = m - d;
  }
  const s = Math.floor(t / a.length) * 12;
  return t = x(t, a.length), a[t] + i + s;
}
let Ft = {
  below: (t) => t.slice(-1)[0],
  duck: (t) => t.slice(-1)[0],
  above: (t) => t[0],
  root: (t) => t[0]
};
function gM({ chord: t, dictionary: n, offset: m = 0, n: e, mode: r = "below", anchor: o = "c5", octaves: M = 1 }) {
  const [P, a] = fM(t), i = lM(P);
  o = H1(o?.note || o, 4);
  const s = L1(o), u = n[a].map(
    ($) => (typeof $ == "string" ? $.split(" ") : $).map(Zn)
  );
  let c, d, f = u.map(($, E1) => {
    const Mm = Ft[r]($), D1 = x(s - Mm - i, 12);
    return (c === void 0 || D1 < c) && (c = D1, d = E1), D1;
  });
  r === "root" && (d = 0);
  const I = Math.ceil(m / u.length) * 12, n1 = x(d + m, u.length), m1 = u[n1], v = Ft[r](m1), C1 = o - f[n1] + I, vt = m1.map(($) => C1 - v + $);
  let e1 = vt.map(($) => hM($));
  return r === "duck" && (e1 = e1.filter(($, E1) => vt[E1] !== o)), e !== void 0 ? [pM(e1, e, M)] : e1;
}
const yM = (t) => (t <= 0 ? -1 : 1) + t * 7 + "P";
function AM(t, n) {
  n = n.replaceAll(":", " "), t = Math.ceil(t);
  let { intervals: m, tonic: e, empty: r } = q.get(n);
  if (r && U1(n) || !r && !e)
    throw new Error('incomplete scale. Make sure to use ":" instead of spaces, example: .scale("C:major")');
  if (r)
    throw new Error(`invalid scale "${n}"`);
  e = e || "C";
  const { pc: o, oct: M = 3 } = _.get(e), P = Math.floor(t / m.length), a = x(t, m.length), i = O.add(m[a], yM(P));
  return _.transpose(o + M, i);
}
function Ot(t, n, m) {
  let [e, r] = q.tokenize(t), { notes: o } = q.get(`${e} ${r}`);
  if (o = o.map((d) => _.get(d).pc), n = Number(n), isNaN(n))
    throw new Error(`scale offset "${n}" not a number`);
  const { pc: M, oct: P = 3 } = _.get(m), a = o.indexOf(M);
  if (a === -1)
    throw new Error(`note "${m}" is not in scale "${t}"`);
  let i = a, s = P, u = M;
  const c = Math.sign(n);
  for (; Math.abs(i - a) < Math.abs(n); ) {
    i += c;
    const d = x(i, o.length);
    c < 0 && u[0] === "C" && (s += c), u = o[d], c > 0 && u[0] === "C" && (s += c);
  }
  return u + s;
}
const kM = G("transpose", function(t, n) {
  return n.withHap((m) => {
    const e = m.value.note ?? m.value;
    if (typeof e == "number") {
      let M;
      typeof t == "number" ? M = t : typeof t == "string" && (M = O.semitones(t) || 0);
      const P = e + M;
      return typeof m.value == "object" ? m.withValue(() => ({ ...m.value, note: P })) : m.withValue(() => P);
    }
    if (typeof e != "string" || !U1(e))
      return i1(`[tonal] transpose: not a note "${e}"`, "warning"), m;
    const r = isNaN(Number(t)) ? String(t) : O.fromSemitones(t), o = _.simplify(_.transpose(e, r));
    return typeof m.value == "object" ? m.withValue(() => ({ ...m.value, note: o })) : m.withValue(() => o);
  });
}), FM = G("scaleTranspose", function(t, n) {
  return n.withHap((m) => {
    if (!m.context.scale)
      throw new Error("can only use scaleTranspose after .scale");
    if (typeof m.value == "object")
      return m.withValue(() => ({
        ...m.value,
        note: Ot(m.context.scale, Number(t), m.value.note)
      }));
    if (typeof m.value != "string")
      throw new Error("can only use scaleTranspose with notes");
    return m.withValue(() => Ot(m.context.scale, Number(t), m.value));
  });
}), OM = G(
  "scale",
  function(t, n) {
    return Array.isArray(t) && (t = t.flat().join(" ")), n.fmap((m) => {
      const e = typeof m == "object";
      let r = e ? m.n : m;
      if (e && delete m.n, U1(r))
        return gt(r);
      let o = Number(r), M = 0;
      if (isNaN(o)) {
        if (r = String(r), !/^[-+]?\d+(#*|b*){1}$/.test(r))
          return i1(
            `[tonal] invalid scale step "${r}", expected number or integer with optional # b suffixes`,
            "error"
          ), O1;
        const P = r.indexOf("#");
        if (P >= 0)
          o = Number(r.substring(0, P)), M = r.length - P;
        else {
          const a = r.indexOf("b");
          o = Number(r.substring(0, a)), M = a - r.length;
        }
      }
      try {
        let P;
        e && m.anchor ? P = vM(o, t, m.anchor) : P = AM(o, t), M != 0 && (P = _.transpose(P, O.fromSemitones(M))), m = gt(e ? { ...m, note: P } : P);
      } catch (P) {
        i1(`[tonal] ${P.message}`, "error"), m = O1;
      }
      return m;
    }).outerJoin().withHap((m) => m.setContext({ ...m.context, scale: t }));
  },
  !0,
  !0
  // preserve step count
);
var F1 = {}, U = {}, X = {}, qt;
function tm() {
  if (qt) return X;
  qt = 1, X.__esModule = !0, X.getBestVoicing = void 0;
  function t(n) {
    var m = n.chord, e = n.range, r = n.finder, o = n.picker, M = n.lastVoicing, P = r(m, e);
    return P.length ? o(P, M) : [];
  }
  return X.getBestVoicing = t, X;
}
var K = {};
const nm = /* @__PURE__ */ Pm(iM);
var J = {}, Gt;
function mm() {
  if (Gt) return J;
  Gt = 1, J.__esModule = !0, J.tokenizeChord = void 0;
  function t(n) {
    var m = (n || "").match(/^([A-G][b#]*)([^\/]*)[\/]?([A-G][b#]*)?$/);
    return m ? m.slice(1) : [];
  }
  return J.tokenizeChord = t, J;
}
var zt;
function $M() {
  if (zt) return K;
  zt = 1, K.__esModule = !0, K.voicingsInRange = void 0;
  var t = nm, n = em(), m = mm();
  function e(r, o, M) {
    o === void 0 && (o = n.lefthand), M === void 0 && (M = ["D3", "A4"]);
    var P = (0, m.tokenizeChord)(r), a = P[0], i = P[1];
    if (!o[i])
      return [];
    var s = o[i].map(function(c) {
      return c.split(" ");
    }), u = t.Range.chromatic(M);
    return s.reduce(function(c, d) {
      var f = d.map(function(v) {
        return t.Interval.substract(v, d[0]);
      }), I = t.Note.transpose(a, d[0]), n1 = u.filter(function(v) {
        return t.Note.chroma(v) === t.Note.chroma(I);
      }).filter(function(v) {
        return t.Note.midi(t.Note.transpose(v, f[f.length - 1])) <= t.Note.midi(M[1]);
      }).map(function(v) {
        return t.Note.enharmonic(v, I);
      }), m1 = n1.map(function(v) {
        return f.map(function(C1) {
          return t.Note.transpose(v, C1);
        });
      });
      return c.concat(m1);
    }, []);
  }
  return K.voicingsInRange = e, K;
}
var Bt;
function em() {
  return Bt || (Bt = 1, function(t) {
    var n = U.__assign || function() {
      return n = Object.assign || function(P) {
        for (var a, i = 1, s = arguments.length; i < s; i++) {
          a = arguments[i];
          for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (P[u] = a[u]);
        }
        return P;
      }, n.apply(this, arguments);
    }, m = U.__rest || function(P, a) {
      var i = {};
      for (var s in P) Object.prototype.hasOwnProperty.call(P, s) && a.indexOf(s) < 0 && (i[s] = P[s]);
      if (P != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(P); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(P, s[u]) && (i[s[u]] = P[s[u]]);
      return i;
    };
    t.__esModule = !0, t.dictionaryVoicing = t.dictionaryVoicingFinder = t.triads = t.guidetones = t.lefthand = void 0;
    var e = tm(), r = $M();
    t.lefthand = {
      m7: ["3m 5P 7m 9M", "7m 9M 10m 12P"],
      7: ["3M 6M 7m 9M", "7m 9M 10M 13M"],
      "^7": ["3M 5P 7M 9M", "7M 9M 10M 12P"],
      69: ["3M 5P 6A 9M"],
      m7b5: ["3m 5d 7m 8P", "7m 8P 10m 12d"],
      "7b9": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
      "7b13": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
      o7: ["1P 3m 5d 6M", "5d 6M 8P 10m"],
      "7#11": ["7m 9M 11A 13A"],
      "7#9": ["3M 7m 9A"],
      mM7: ["3m 5P 7M 9M", "7M 9M 10m 12P"],
      m6: ["3m 5P 6M 9M", "6M 9M 10m 12P"]
    }, t.guidetones = {
      m7: ["3m 7m", "7m 10m"],
      m9: ["3m 7m", "7m 10m"],
      7: ["3M 7m", "7m 10M"],
      "^7": ["3M 7M", "7M 10M"],
      "^9": ["3M 7M", "7M 10M"],
      69: ["3M 6M"],
      6: ["3M 6M", "6M 10M"],
      m7b5: ["3m 7m", "7m 10m"],
      "7b9": ["3M 7m", "7m 10M"],
      "7b13": ["3M 7m", "7m 10M"],
      o7: ["3m 6M", "6M 10m"],
      "7#11": ["3M 7m", "7m 10M"],
      "7#9": ["3M 7m", "7m 10M"],
      mM7: ["3m 7M", "7M 10m"],
      m6: ["3m 6M", "6M 10m"]
    }, t.triads = {
      M: ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
      m: ["1P 3m 5P", "3m 5P 8P", "5P 8P 10m"],
      o: ["1P 3m 5d", "3m 5d 8P", "5d 8P 10m"],
      aug: ["1P 3m 5A", "3m 5A 8P", "5A 8P 10m"]
    };
    var o = function(P) {
      return function(a, i) {
        return (0, r.voicingsInRange)(a, P, i);
      };
    };
    t.dictionaryVoicingFinder = o;
    var M = function(P) {
      var a = P.dictionary, i = P.range, s = m(P, ["dictionary", "range"]);
      return (0, e.getBestVoicing)(n(n({}, s), { range: i, finder: (0, t.dictionaryVoicingFinder)(a) }));
    };
    t.dictionaryVoicing = M;
  }(U)), U;
}
var Q = {}, Lt;
function NM() {
  if (Lt) return Q;
  Lt = 1, Q.__esModule = !0, Q.minTopNoteDiff = void 0;
  var t = nm;
  function n(m, e) {
    if (!e)
      return m[0];
    var r = function(o) {
      return Math.abs(t.Note.midi(e[e.length - 1]) - t.Note.midi(o[o.length - 1]));
    };
    return m.reduce(function(o, M) {
      return r(M) < r(o) ? M : o;
    }, m[0]);
  }
  return Q.minTopNoteDiff = n, Q;
}
var Ht;
function jM() {
  return Ht || (Ht = 1, function(t) {
    t.__esModule = !0;
    var n = em(), m = NM(), e = tm(), r = mm();
    t.default = {
      tokenizeChord: r.tokenizeChord,
      getBestVoicing: e.getBestVoicing,
      dictionaryVoicing: n.dictionaryVoicing,
      dictionaryVoicingFinder: n.dictionaryVoicingFinder,
      lefthand: n.lefthand,
      guidetones: n.guidetones,
      triads: n.triads,
      minTopNoteDiff: m.minTopNoteDiff
    };
  }(F1)), F1;
}
var SM = jM();
const Ut = /* @__PURE__ */ am(SM), k = {
  2: ["1P 5P 8P 9M", "1P 5P 8P 9M 12P", "5P 8P 9M 12P"],
  5: ["1P 5P 8P 12P", "5P 8P 12P 15P"],
  6: ["1P 5P 6M 8P 10M", "1P 5P 8P 10M 13M", "3M 5P 8P 10M 13M", "5P 8P 10M 12P 13M"],
  7: [
    "1P 5P 7m 8P 10M",
    "1P 7m 8P 10M 12P",
    "3M 7m 8P 10M 12P",
    "3M 7m 8P 10M 14m",
    "3M 7m 10M 12P 15P",
    "7m 10M 12P 14m 15P",
    "7m 10M 12P 15P 17M"
  ],
  9: [
    "1P 5P 7m 9M 10M",
    "1P 7m 9M 10M 12P",
    "3M 7m 8P 9M 12P",
    "7m 9M 10M 14m 15P",
    "3M 7m 8P 12P 16M",
    "7m 10M 12P 15P 16M"
  ],
  11: ["1P 5P 7m 9M 11P", "5P 7m 8P 9M 11P", "7m 8P 9M 11P 12P", "7m 8P 11P 12P 16M"],
  13: ["1P 6M 7m 9M 10M", "1P 7m 9M 10M 13M", "3M 7m 8P 9M 13M", "7m 8P 9M 10M 13M", "7m 9M 10M 13M 15P"],
  69: ["1P 5P 6M 9M 10M", "1P 5P 9M 10M 13M", "3M 5P 8P 9M 13M", "5P 8P 9M 10M 13M"],
  add9: ["1P 5P 8P 9M 10M", "1P 5P 9M 10M 12P", "3M 8P 9M 10M 12P", "3M 8P 9M 12P 15P", "5P 8P 9M 12P 17M"],
  "+": [
    "1P 3M 6m 8P 10M",
    "1P 6m 8P 10M 13m",
    "3M 6m 8P 10M 13m",
    "3M 8P 10M 13m 15P",
    "6m 8P 10M 13m 15P",
    "6m 10M 13m 15P 17M"
  ],
  o: ["1P 5d 8P 10m 12d", "3m 8P 10m 12d 15P", "5d 8P 10m 12d 15P"],
  h: [
    "3m 5d 7m 8P 10m",
    "1P 5d 7m 10m 12d",
    "3m 7m 8P 10m 12d",
    "3m 7m 8P 12d 14m",
    "5d 7m 8P 10m 14m",
    "5d 8P 10m 12d 14m",
    "7m 10m 12d 14m 15P",
    "5d 8P 10m 14m 17m"
  ],
  sus: ["1P 4P 5P 8P", "1P 4P 5P 8P 11P", "5P 8P 11P 12P", "5P 8P 11P 12P 15P"],
  "^": ["1P 5P 8P 10M", "1P 5P 8P 10M 12P", "3M 5P 8P 10M 12P", "3M 8P 10M 12P 15P", "5P 8P 10M 12P 15P"],
  "-": ["1P 3m 5P 8P 10m", "1P 5P 8P 10m 12P", "3m 5P 8P 10m 12P", "5P 8P 10m 12P 15P"],
  "^7": ["1P 5P 7M 10M 12P", "1P 10M 12P 14M", "3M 8P 10M 12P 14M", "5P 8P 10M 12P 14M", "5P 8P 10M 14M 17M"],
  "-7": [
    "1P 3m 5P 7m 10m",
    "1P 5P 7m 10m 12P",
    "3m 7m 8P 10m 12P",
    "3m 7m 8P 10m 14m",
    "5P 7m 8P 10m 14m",
    "7m 10m 12P 14m 15P",
    "5P 8P 10m 14m 17m",
    "7m 10m 12P 15P 17m"
  ],
  "7sus": ["1P 5P 7m 8P 11P", "5P 8P 11P 12P 14m", "7m 8P 11P 12P 14m", "7m 11P 12P 14m 18P"],
  h7: [
    "3m 5d 7m 8P 10m",
    "1P 5d 7m 10m 12d",
    "1P 7m 10m 12d",
    "3m 7m 8P 10m 12d",
    "3m 7m 8P 12d 14m",
    "5d 7m 8P 10m 14m",
    "5d 8P 10m 12d 14m",
    "7m 10m 12d 14m 15P",
    "5d 8P 10m 14m 17m"
  ],
  o7: [
    "1P 6M 8P 10m 12d",
    "1P 6M 10m 12d 13M",
    "3m 8P 10m 12d 13M",
    "3m 8P 12d 13M 15P",
    "5d 10m 12d 13M 15P",
    "5d 10m 13M 15P 17m",
    "6M 12d 13M 15P 17m",
    "6M 12d 15P 17m 19d"
  ],
  "^9": [
    "1P 5P 7M 9M 10M",
    "1P 7M 9M 10M 12P",
    "3M 7M 8P 9M 12P",
    "3M 7M 8P 12P 16M",
    "5P 8P 10M 14M 16M",
    "7M 8P 10M 12P 16M"
  ],
  "^13": ["1P 6M 7M 9M 10M", "1P 7M 9M 10M 13M", "3M 7M 8P 9M 13M", "3M 7M 8P 13M 16M", "7M 8P 10M 13M 16M"],
  "^7#11": ["1P 5P 7M 10M 12d", "3M 7M 8P 10M 12d", "1P 7M 10M 12d 14M", "3M 7M 8P 12d 14M", "5P 8P 10M 12d 14M"],
  "^9#11": ["1P 3M 5d 7M 9M", "1P 7M 9M 10M 12d", "3M 7M 8P 9M 12d", "3M 8P 9M 12d 14M"],
  "^7#5": ["1P 6m 7M 10M 13m", "3M 7M 8P 10M 13m", "6m 7M 8P 10M 13m"],
  "-6": [
    "1P 3m 5P 6M 8P",
    "1P 5P 6M 8P 10m",
    "3m 5P 6M 8P 10m",
    "1P 5P 8P 10m 13M",
    "3m 5P 8P 10m 13M",
    "5P 8P 10m 12P 13M",
    "5P 8P 10m 13M 15P"
  ],
  "-69": [
    "1P 3m 5P 6M 9M",
    "3m 5P 6M 8P 9M",
    "3m 6M 9M 10m 12P",
    "1P 5P 9M 10m 13M",
    "3m 5P 8P 9M 13M",
    "5P 8P 9M 10m 13M",
    "5P 8P 10m 13M 16M"
  ],
  "-^7": ["1P 3m 5P 7M 10m", "1P 5P 7M 10m 12P", "3m 7M 8P 10m 12P", "5P 7M 8P 10m 14M", "5P 8P 10m 14M 17m"],
  "-^9": ["1P 3m 5P 7M 9M", "1P 7M 9M 10m 12P", "3m 7M 8P 9M 12P", "5P 8P 9M 10m 14M"],
  "-9": [
    "1P 3m 5P 7m 9M",
    "3m 5P 7m 8P 9M",
    "3m 7m 8P 9M 12P",
    "5P 8P 9M 10m 14m",
    "3m 7m 9M 12P 15P",
    "7m 10m 12P 15P 16M"
  ],
  "-add9": ["1P 2M 3m 5P 8P", "1P 3m 5P 9M", "3m 5P 8P 9M 12P", "5P 8P 9M 10m 12P"],
  "-11": [
    "1P 3m 7m 9M 11P",
    "3m 7m 8P 9M 11P",
    "1P 4P 7m 10m 12P",
    "5P 8P 11P 14m",
    "3m 7m 9M 11P 15P",
    "5P 8P 11P 14m 16M",
    "7m 10m 12P 15P 18P"
  ],
  "-7b5": [
    "3m 5d 7m 8P 10m",
    "1P 7m 10m 12d",
    "1P 5d 7m 10m 12d",
    "3m 7m 8P 10m 12d",
    "3m 7m 8P 12d 14m",
    "5d 7m 8P 10m 14m",
    "5d 8P 10m 12d 14m",
    "7m 10m 12d 14m 15P",
    "5d 8P 10m 14m 17m"
  ],
  h9: ["1P 7m 9M 10m 12d", "3m 7m 8P 9M 12d", "5d 8P 9M 10m 14m", "7m 10m 12d 15P 16M"],
  "-b6": ["1P 5P 6m 8P 10m", "1P 5P 8P 10m 13m", "3m 5P 8P 10m 13m", "5P 8P 10m 13m", "5P 8P 10m 13m 15P"],
  "-#5": ["1P 6m 8P 10m 13m", "3m 6m 8P 10m 13m", "6m 8P 10m 13m 15P"],
  "7b9": ["1P 3M 7m 9m 10M", "3M 7m 8P 9m 10M", "3M 7m 8P 9m 14m", "7m 9m 10M 14m 15P"],
  "7#9": ["1P 3M 7m 10m", "3M 7m 8P 10m 14m", "7m 10m 10M 14m 15P"],
  "7#11": ["1P 3M 7m 10M 12d", "3M 7m 8P 10M 12d", "7m 10M 12d 14m 15P"],
  "7b5": ["1P 3M 7m 10M 12d", "3M 7m 8P 10M 12d", "7m 10M 12d 14m 15P"],
  "7#5": ["1P 3M 7m 10M 13m", "3M 7m 8P 10M 13m", "3M 7m 8P 13m 14m", "7m 10M 13m 14m 15P"],
  "9#11": ["1P 7m 9M 10M 12d", "3M 7m 8P 9M 12d", "7m 10M 12d 15P 16M"],
  "9b5": ["1P 7m 9M 10M 12d", "3M 7m 8P 9M 12d", "7m 10M 12d 15P 16M"],
  "9#5": ["1P 7m 9M 10M 13m", "3M 7m 9M 10M 13m", "3M 7m 9M 13m 14m", "7m 10M 13m 14m 16M", "7m 10M 13m 16M 17M"],
  "7b13": ["1P 3M 7m 10M 13m", "3M 7m 8P 10M 13m", "3M 7m 8P 13m 14m", "7m 10M 13m 14m 15P"],
  "7#9#5": ["1P 3M 7m 10m 13m", "3M 7m 10m 13m 15P", "7m 10M 13m 15P 17m"],
  "7#9b5": ["1P 3M 7m 10m 12d", "3M 7m 10m 12d 15P", "7m 10M 12d 15P 17m"],
  "7#9#11": ["1P 3M 7m 10m 12d", "3M 7m 10m 12d 15P", "7m 10M 12d 15P 17m"],
  "7b9#11": ["1P 7m 9m 10M 12d", "3M 7m 8P 9m 12d", "7m 8P 10M 12d 16m"],
  "7b9b5": ["1P 7m 9m 10M 12d", "3M 7m 8P 9m 12d", "7m 8P 10M 12d 16m"],
  "7b9#5": ["1P 7m 9m 10M 13m", "3M 7m 8P 9m 13m", "7m 9m 10M 13m 15P"],
  "7b9#9": ["1P 3M 7m 9m 10m", "3M 7m 8P 9m 10m", "7m 8P 10M 16m 17m"],
  "7b9b13": ["1P 7m 9m 10M 13m", "3M 7m 8P 9m 13m", "7m 9m 10M 13m 15P"],
  "7alt": [
    "3M 7m 8P 9m 12d",
    "1P 7m 10m 10M 13m",
    "3M 7m 8P 10m 13m",
    "3M 7m 9m 12d 15P",
    "3M 7m 10m 13m 15P",
    "7m 10M 12d 15P 17m",
    "7m 10M 13m 15P 17m"
  ],
  "13#11": ["1P 6M 7m 10M 12d", "3M 7m 9M 12d 13M", "7m 10M 12d 13M 16M"],
  "13b9": ["1P 3M 6M 7m 9m", "1P 6M 7m 9m 10M", "3M 7m 9m 10M 13M", "3M 7m 10M 13M 16m", "7m 10M 13M 16m 17M"],
  "13#9": ["1P 3M 6M 7m 10m", "3M 7m 8P 10m 13M", "7m 10M 13M 14m 17m"],
  "7b9sus": ["1P 5P 7m 9m 11P", "5P 7m 8P 9m 11P", "7m 8P 11P 14m 16m"],
  "7susadd3": ["1P 4P 5P 7m 10M", "5P 8P 10M 11P 14m", "7m 11P 12P 15P 17M"],
  "9sus": ["1P 5P 7m 9M 11P", "5P 7m 8P 9M 11P", "7m 8P 9M 11P 12P", "7m 8P 11P 12P 16M"],
  "13sus": ["1P 4P 6M 7m 9M", "1P 7m 9M 11P 13M", "5P 7m 9M 11P 13M", "7m 9M 11P 13M 15P"],
  "7b13sus": ["1P 5P 7m 11P 13m", "5P 7m 8P 11P 13m", "7m 11P 13m 14m 15P"]
}, W = {
  2: ["1P 5P 6M 8P 9M", "1P 5P 8P 9M 12P", "5P 8P 9M 12P 13M", "5P 8P 9M 12P 15P"],
  5: ["1P 5P 8P 12P", "1P 5P 8P 9M 12P", "5P 8P 12P 15P", "5P 8P 12P 15P 16M"],
  6: ["1P 5P 6M 9M 10M", "1P 5P 9M 10M 13M", "3M 5P 9M 10M 13M", "5P 8P 9M 10M 13M", "3M 6M 9M 12P 15P"],
  7: [
    "1P 5P 7m 8P 10M",
    "1P 7m 8P 10M 12P",
    "3M 7m 8P 10M 12P",
    "3M 7m 8P 10M 14m",
    "3M 7m 10M 12P 15P",
    "7m 10M 12P 14m 15P",
    "7m 10M 12P 15P 17M",
    "7m 10M 14m 17M 19P"
  ],
  9: [
    "1P 6M 7m 9M 10M",
    "3M 7m 9M 10M 12P",
    "1P 7m 9M 10M 13M",
    "3M 7m 9M 10M 13M",
    "3M 7m 9M 12P 15P",
    "7m 10M 12P 13M 16M",
    "7m 10M 13M 16M 17M",
    "7m 10M 13M 16M 19P"
  ],
  11: [
    "1P 4P 6M 7m 9M",
    "1P 5P 7m 9M 11P",
    "4P 6M 7m 9M 11P",
    "5P 8P 9M 11P 14m",
    "7m 9M 11P 13M 15P",
    "7m 11P 12P 14m 18P"
  ],
  13: [
    "3M 7m 9M 10M 13M",
    "3M 7m 9M 13M 15P",
    "3M 7m 10M 13M 16M",
    "7m 10M 12P 13M 16M",
    "7m 10M 13M 16M 17M",
    "7m 10M 13M 16M 19P"
  ],
  69: ["1P 5P 6M 9M 10M", "1P 5P 9M 10M 13M", "3M 5P 9M 10M 13M", "5P 8P 9M 10M 13M", "3M 6M 9M 12P 15P"],
  add9: [
    "1P 5P 8P 9M 10M",
    "1P 5P 9M 10M 12P",
    "3M 8P 9M 10M 12P",
    "3M 8P 9M 12P 15P",
    "5P 8P 9M 10M 15P",
    "5P 8P 9M 12P 17M"
  ],
  "+": [
    "1P 6m 8P 9M 10M",
    "1P 6m 8P 10M 13m",
    "3M 8P 9M 10M 13m",
    "3M 8P 10M 13m 15P",
    "6m 10M 13m 15P 16M",
    "6m 10M 13m 15P 17M"
  ],
  o: [
    "1P 6M 8P 10m 12d",
    "1P 6M 10m 12d 13M",
    "3m 8P 10m 12d 13M",
    "3m 8P 12d 13M 15P",
    "5d 10m 12d 13M 15P",
    "5d 10m 13M 15P 17m",
    "6M 12d 13M 15P 17m",
    "6M 12d 15P 17m 19d"
  ],
  h: [
    "1P 5d 7m 10m 11P",
    "3m 5d 7m 8P 11P",
    "5d 7m 8P 10m 11P",
    "1P 7m 10m 12d",
    "3m 7m 8P 12d 14m",
    "5d 8P 10m 11P 14m",
    "7m 10m 11P 12d 14m",
    "7m 10m 12d 14m 15P",
    "5d 8P 10m 14m 17m"
  ],
  sus: [
    "1P 4P 5P 8P 9M",
    "1P 4P 5P 8P 11P",
    "1P 5P 8P 9M 11P",
    "5P 8P 9M 11P 12P",
    "5P 8P 11P 12P 13M",
    "5P 8P 11P 13M 15P"
  ],
  "^": [
    "1P 3M 5P 6M 9M",
    "1P 5P 8P 10M 12P",
    "3M 5P 9M 10M 12P",
    "1P 5P 8P 10M 13M",
    "3M 8P 10M 13M 15P",
    "5P 9M 10M 12P 15P"
  ],
  "-": [
    "1P 3m 5P 8P 10m",
    "1P 3m 5P 9M 11P",
    "3m 5P 8P 9M 11P",
    "5P 8P 9M 10m 11P",
    "1P 5P 9M 10m 12P",
    "3m 5P 8P 10m 12P",
    "5P 8P 10m 12P 15P"
  ],
  "^7": [
    "1P 6M 7M 9M 10M",
    "3M 7M 9M 10M 12P",
    "1P 7M 9M 10M 13M",
    "3M 7M 9M 10M 13M",
    "3M 7M 9M 12P 13M",
    "3M 7M 9M 13M 14M",
    "3M 7M 10M 13M 16M",
    "7M 10M 13M 14M 16M",
    "7M 10M 13M 16M 17M",
    "7M 10M 13M 16M 19P"
  ],
  "-7": [
    "1P 3m 5P 7m 9M",
    "1P 3m 5P 7m 10m",
    "1P 5P 7m 10m 11P",
    "3m 7m 8P 10m 11P",
    "1P 5P 7m 10m 12P",
    "3m 7m 9M 10m 12P",
    "3m 7m 8P 10m 14m",
    "5P 7m 9M 10m 14m",
    "7m 10m 11P 14m 15P",
    "7m 10m 12P 15P 16M",
    "5P 8P 11P 14m 17m",
    "7m 10m 12P 15P 17m"
  ],
  "7sus": [
    "1P 4P 6M 7m 9M",
    "1P 5P 7m 9M 11P",
    "4P 6M 7m 9M 11P",
    "5P 8P 9M 11P 14m",
    "7m 9M 11P 13M 15P",
    "7m 11P 12P 14m 18P"
  ],
  h7: [
    "1P 5d 7m 10m 11P",
    "3m 5d 7m 8P 11P",
    "5d 7m 8P 10m 11P",
    "1P 7m 10m 12d",
    "3m 7m 8P 10m 12d",
    "3m 7m 8P 12d 14m",
    "5d 8P 10m 11P 14m",
    "7m 10m 11P 12d 14m",
    "7m 10m 12d 14m 15P",
    "5d 8P 10m 14m 17m"
  ],
  o7: [
    "1P 6M 8P 10m 12d",
    "1P 6M 10m 12d 13M",
    "3m 8P 10m 12d 13M",
    "3m 8P 12d 13M 15P",
    "5d 10m 12d 13M 15P",
    "5d 10m 13M 15P 17m",
    "6M 12d 13M 15P 17m",
    "6M 12d 15P 17m 19d"
  ],
  "^9": [
    "1P 6M 7M 9M 10M",
    "1P 7M 9M 10M 13M",
    "3M 7M 9M 10M 13M",
    "3M 7M 9M 12P 13M",
    "3M 7M 8P 9M 13M",
    "3M 7M 9M 13M 14M",
    "3M 7M 10M 13M 16M",
    "7M 10M 13M 14M 16M",
    "7M 10M 13M 16M 17M",
    "7M 10M 13M 16M 19P"
  ],
  "^13": [
    "1P 6M 7M 9M 10M",
    "1P 7M 9M 10M 13M",
    "3M 7M 9M 12P 13M",
    "3M 7M 9M 10M 13M",
    "3M 7M 8P 9M 13M",
    "3M 7M 9M 13M 14M",
    "3M 7M 10M 13M 16M",
    "7M 10M 13M 14M 16M",
    "7M 10M 13M 16M 17M",
    "7M 10M 13M 16M 19P"
  ],
  "^7#11": [
    "1P 3M 5d 7M 9M",
    "1P 7M 9M 10M 12d",
    "3M 7M 9M 10M 12d",
    "3M 7M 9M 12d 13M",
    "3M 7M 10M 12d 14M",
    "7M 10M 12d 13M 14M",
    "7M 10M 12d 13M 16M",
    "7M 10M 12d 14M 17M"
  ],
  "^9#11": [
    "1P 3M 5d 7M 9M",
    "1P 7M 9M 10M 12d",
    "3M 7M 9M 10M 12d",
    "3M 7M 9M 12d 13M",
    "3M 7M 9M 12d 14M",
    "7M 10M 12d 14M 16M",
    "7M 10M 12d 13M 16M"
  ],
  "^7#5": ["1P 6m 7M 10M 13m", "3M 7M 9M 10M 13m", "3M 7M 10M 13m 14M", "7M 10M 13m 14M 16M", "7M 10M 13m 14M 17M"],
  "-6": [
    "1P 3m 5P 6M 9M",
    "3m 5P 6M 8P 9M",
    "1P 5P 6M 10m 11P",
    "3m 5P 6M 8P 11P",
    "1P 5P 9M 10m 13M",
    "3m 5P 8P 9M 13M",
    "5P 8P 10m 11P 13M",
    "5P 8P 10m 13M 16M"
  ],
  "-69": [
    "1P 3m 5P 6M 9M",
    "3m 5P 6M 8P 9M",
    "3m 6M 9M 10m 12P",
    "1P 5P 9M 10m 13M",
    "3m 5P 8P 9M 13M",
    "5P 8P 9M 10m 13M",
    "5P 8P 10m 13M 16M"
  ],
  "-^7": [
    "1P 3m 5P 7M 9M",
    "1P 5P 7M 10m 11P",
    "3m 7M 9M 10m 11P",
    "3m 7M 9M 10m 12P",
    "3m 7M 9M 12P 14M",
    "7M 10m 11P 12P 14M",
    "7M 10m 12P 14M 16M"
  ],
  "-^9": [
    "1P 3m 5P 7M 9M",
    "1P 5P 7M 10m 11P",
    "3m 7M 9M 10m 11P",
    "3m 7M 9M 10m 12P",
    "3m 7M 9M 12P 14M",
    "7M 10m 11P 12P 14M",
    "7M 10m 12P 14M 16M"
  ],
  "-9": [
    "1P 3m 5P 7m 9M",
    "1P 3m 7m 9M 11P",
    "3m 7m 9M 10m 11P",
    "3m 7m 9M 10m 12P",
    "3m 7m 9M 10m 14m",
    "3m 7m 9M 12P 15P",
    "7m 10m 11P 14m 16M",
    "7m 10m 12P 16M 18P"
  ],
  "-add9": ["1P 2M 3m 5P 8P", "1P 3m 5P 9M", "3m 5P 8P 9M 12P", "5P 8P 9M 10m 12P"],
  "-11": [
    "3m 5P 7m 9M 11P",
    "7m 9M 10m 11P",
    "1P 4P 7m 10m 12P",
    "3m 7m 9M 11P 12P",
    "7m 9M 10m 11P 12P",
    "3m 7m 9M 11P 14m",
    "4P 10m 12P 14m",
    "5P 8P 11P 14m",
    "5P 8P 11P 14m 16M",
    "7m 10m 12P 16M 18P",
    "7m 10m 11P 16M 21m"
  ],
  "-7b5": [
    "1P 5d 7m 10m 11P",
    "3m 5d 7m 8P 11P",
    "5d 7m 8P 10m 11P",
    "1P 7m 10m 12d",
    "3m 7m 8P 10m 12d",
    "3m 7m 8P 12d 14m",
    "5d 8P 10m 11P 14m",
    "7m 10m 11P 12d 14m",
    "7m 10m 12d 14m 15P",
    "5d 8P 10m 14m 17m"
  ],
  h9: [
    "3m 5d 7m 9M 11P",
    "1P 7m 9M 10m 12d",
    "3m 7m 9M 12d 14m",
    "5d 8P 9M 10m 14m",
    "7m 10m 11P 12d 14m",
    "7m 10m 12d 14m 16M"
  ],
  "-b6": ["1P 3m 5P 6m 8P", "3m 5P 8P 11P 13m", "5P 8P 10m 11P 13m"],
  "-#5": ["1P 6m 8P 10m 13m", "3m 6m 8P 11P 13m", "6m 8P 10m 13m 15P"],
  "7b9": ["1P 3M 7m 9m 10M", "3M 7m 8P 9m 10M", "3M 7m 8P 9m 14m", "7m 9m 10M 14m 15P"],
  "7#9": ["1P 3M 7m 10m", "3M 7m 10m 10M 12P", "3M 7m 10m 12P 14m", "7m 10M 12P 14m 17m"],
  "7#11": ["1P 3M 7m 9M 12d", "3M 7m 9M 12d 13M", "7m 10M 12d 13M 16M"],
  "7b5": ["1P 3M 7m 9M 12d", "3M 7m 9M 12d 13M", "7m 10M 12d 13M 16M"],
  "7#5": ["1P 3M 7m 10M 13m", "3M 7m 8P 10M 13m", "3M 7m 8P 13m 14m", "7m 10M 13m 14m 15P", "7m 10M 13m 14m 17M"],
  "9#11": ["1P 7m 9M 10M 12d", "3M 7m 8P 9M 12d", "7m 10M 12d 15P 16M"],
  "9b5": ["1P 7m 9M 10M 12d", "3M 7m 8P 9M 12d", "7m 10M 12d 15P 16M"],
  "9#5": ["1P 7m 9M 10M 13m", "3M 7m 9M 10M 13m", "3M 7m 9M 13m 14m", "7m 10M 13m 14m 16M", "7m 10M 13m 16M 17M"],
  "7b13": ["1P 3M 7m 10M 13m", "3M 7m 8P 10M 13m", "3M 7m 8P 13m 14m", "7m 10M 13m 14m 15P", "7m 10M 13m 14m 17M"],
  "7#9#5": ["3M 7m 10m 10M 13m", "3M 7m 10m 13m 14m", "7m 10M 13m 14m 17m"],
  "7#9b5": ["3M 7m 10m 10M 12d", "3M 7m 10m 12d 14m", "7m 10M 12d 14m 17m"],
  "7#9#11": ["3M 7m 10m 10M 12d", "3M 7m 10m 12d 14m", "7m 10M 12d 14m 17m"],
  "7b9#11": ["3M 7m 9m 10M 12d", "3M 7m 9m 12d 14m", "7m 8P 10M 12d 16m", "7m 10M 12d 14m 16m"],
  "7b9b5": ["3M 7m 9m 10M 12d", "3M 7m 9m 12d 14m", "7m 8P 10M 12d 16m", "7m 10M 12d 14m 16m"],
  "7b9#5": ["1P 7m 9m 10M 13m", "3M 7m 9m 10M 13m", "3M 7m 10M 13m 16m", "7m 10M 13m 14m 16m", "7m 10M 13m 16m 17M"],
  "7b9#9": ["1P 3M 7m 9m 10m", "3M 7m 10m 13m 16m", "7m 10M 13m 16m 17m"],
  "7b9b13": ["1P 7m 9m 10M 13m", "3M 7m 9m 10M 13m", "3M 7m 10M 13m 16m", "7m 10M 13m 14m 16m", "7m 10M 13m 16m 17M"],
  "7alt": [
    "3M 7m 8P 10m 13m",
    "3M 7m 9m 12d 13m",
    "3M 7m 9m 10m 13m",
    "3M 7m 10m 13m 14m",
    "3M 7m 9m 12d 14m",
    "3M 7m 10m 13m 15P",
    "3M 7m 10m 13m 16m",
    "7m 10M 12d 14m 16m",
    "7m 10M 12d 13m 16m",
    "7m 10M 13m 15P 17m",
    "7m 10M 13m 16m 17m",
    "7m 10M 13m 16m 19d"
  ],
  "13#11": ["3M 7m 9M 12d 13M", "7m 10M 12d 13M 16M"],
  "13b9": ["3M 7m 9m 10M 13M", "3M 7m 10M 13M 16m", "7m 10M 13M 16m 17M"],
  "13#9": ["3M 7m 10m 10M 13M", "7m 10M 13M 14m 17m"],
  "7b9sus": ["1P 5P 7m 9m 11P", "5P 7m 8P 9m 11P", "7m 8P 11P 14m 16m"],
  "7susadd3": ["1P 4P 5P 7m 10M", "5P 8P 10M 11P 14m", "7m 11P 12P 15P 17M"],
  "9sus": [
    "1P 4P 6M 7m 9M",
    "1P 5P 7m 9M 11P",
    "4P 6M 7m 9M 11P",
    "5P 8P 9M 11P 14m",
    "7m 9M 11P 13M 15P",
    "7m 11P 12P 14m 18P"
  ],
  "13sus": [
    "1P 4P 6M 7m 9M",
    "1P 7m 9M 11P 13M",
    "4P 7m 9M 11P 13M",
    "7m 9M 11P 13M 15P",
    "7m 11P 13M 14m 16M",
    "7m 11P 13M 16M 18P"
  ],
  "7b13sus": ["1P 5P 7m 11P 13m", "5P 7m 8P 11P 13m", "7m 11P 13m 14m 15P"]
}, { dictionaryVoicing: IM, minTopNoteDiff: TM } = Ut.default || Ut, _M = {
  m7: ["3m 5P 7m 9M", "7m 9M 10m 12P"],
  7: ["3M 6M 7m 9M", "7m 9M 10M 13M"],
  "^7": ["3M 5P 7M 9M", "7M 9M 10M 12P"],
  69: ["3M 5P 6A 9M"],
  m7b5: ["3m 5d 7m 8P", "7m 8P 10m 12d"],
  "7b9": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
  "7b13": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
  o7: ["1P 3m 5d 6M", "5d 6M 8P 10m"],
  "7#11": ["7m 9M 11A 13A"],
  "7#9": ["3M 7m 9A"],
  mM7: ["3m 5P 7M 9M", "7M 9M 10m 12P"],
  m6: ["3m 5P 6M 9M", "6M 9M 10m 12P"]
}, CM = {
  m7: ["3m 7m", "7m 10m"],
  m9: ["3m 7m", "7m 10m"],
  7: ["3M 7m", "7m 10M"],
  "^7": ["3M 7M", "7M 10M"],
  "^9": ["3M 7M", "7M 10M"],
  69: ["3M 6M"],
  6: ["3M 6M", "6M 10M"],
  m7b5: ["3m 7m", "7m 10m"],
  "7b9": ["3M 7m", "7m 10M"],
  "7b13": ["3M 7m", "7m 10M"],
  o7: ["3m 6M", "6M 10m"],
  "7#11": ["3M 7m", "7m 10M"],
  "7#9": ["3M 7m", "7m 10M"],
  mM7: ["3m 7M", "7M 10m"],
  m6: ["3m 6M", "6M 10m"]
}, EM = {
  "": ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
  M: ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
  m: ["1P 3m 5P", "3m 5P 8P", "5P 8P 10m"],
  o: ["1P 3m 5d", "3m 5d 8P", "5d 8P 10m"],
  aug: ["1P 3m 5A", "3m 5A 8P", "5A 8P 10m"]
}, DM = {
  // triads
  "": ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
  M: ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
  m: ["1P 3m 5P", "3m 5P 8P", "5P 8P 10m"],
  o: ["1P 3m 5d", "3m 5d 8P", "5d 8P 10m"],
  aug: ["1P 3m 5A", "3m 5A 8P", "5A 8P 10m"],
  // sevenths chords
  m7: ["3m 5P 7m 9M", "7m 9M 10m 12P"],
  7: ["3M 6M 7m 9M", "7m 9M 10M 13M"],
  "^7": ["3M 5P 7M 9M", "7M 9M 10M 12P"],
  69: ["3M 5P 6A 9M"],
  m7b5: ["3m 5d 7m 8P", "7m 8P 10m 12d"],
  "7b9": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
  "7b13": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
  o7: ["1P 3m 5d 6M", "5d 6M 8P 10m"],
  "7#11": ["7m 9M 11A 13A"],
  "7#9": ["3M 7m 9A"],
  mM7: ["3m 5P 7M 9M", "7M 9M 10m 12P"],
  m6: ["3m 5P 6M 9M", "6M 9M 10m 12P"]
}, t1 = {
  lefthand: { dictionary: _M, range: ["F3", "A4"], mode: "below", anchor: "a4" },
  triads: { dictionary: EM, mode: "below", anchor: "a4" },
  guidetones: { dictionary: CM, mode: "above", anchor: "a4" },
  legacy: { dictionary: DM, mode: "below", anchor: "a4" }
};
let rm = "ireal";
const wM = (t) => rm = t, qM = (t, n) => xM(t, t1[t].dictionary, n), xM = (t, n, m = ["F3", "A4"]) => {
  Object.assign(t1, { [t]: { dictionary: n, range: m } });
}, om = (t, n, m = {}) => {
  Object.assign(t1, { [t]: { dictionary: n, ...m } });
}, VM = (t, n, m) => {
  const { dictionary: e, range: r } = t1[n];
  return IM({
    chord: t,
    dictionary: e,
    range: r,
    picker: TM,
    lastVoicing: m
  });
};
let P1;
const GM = G("voicings", function(t, n) {
  return n.fmap((m) => (P1 = VM(m, t, P1), Kt(...P1))).outerJoin();
}), zM = G("rootNotes", function(t, n) {
  return n.fmap((m) => {
    const o = (m.chord || m).match(/^([a-gA-G][b#]?).*$/)[1] + t;
    return m.chord ? { note: o } : o;
  });
}), BM = G("voicing", function(t) {
  return t.fmap((n) => {
    n = typeof n == "string" ? { chord: n } : n;
    let { dictionary: m = rm, chord: e, anchor: r, offset: o, mode: M, n: P, octaves: a, ...i } = n;
    m = typeof m == "string" ? t1[m] : { dictionary: m, mode: "below", anchor: "c5" };
    try {
      let s = gM({ ...m, chord: e, anchor: r, offset: o, mode: M, n: P, octaves: a });
      return Kt(...s).note().set(i);
    } catch {
      return i1(`[voicing]: unknown chord "${e}"`), O1;
    }
  }).outerJoin();
});
function a1(t, n, m) {
  m = Array.isArray(m) ? m : [m], m.forEach((e) => {
    e[n] = e[t];
  });
}
a1("^", "", [k, W]);
Object.keys(k).forEach((t) => {
  if (t.includes("-")) {
    let n = t.replace("-", "m");
    a1(t, n, [W, k]);
  }
  if (t.includes("^")) {
    let n = t.replace("^", "M");
    a1(t, n, [W, k]);
  }
  if (t.includes("+")) {
    let n = t.replace("+", "aug");
    a1(t, n, [W, k]);
  }
});
om("ireal", k);
om("ireal-ext", W);
function LM() {
  P1 = void 0, wM("ireal");
}
const HM = "@strudel/tonal";
export {
  xM as addVoicings,
  HM as packageName,
  om as registerVoicings,
  LM as resetVoicings,
  zM as rootNotes,
  OM as scale,
  FM as scaleTranspose,
  wM as setDefaultVoicings,
  qM as setVoicingRange,
  kM as transpose,
  BM as voicing,
  a1 as voicingAlias,
  t1 as voicingRegistry,
  GM as voicings
};

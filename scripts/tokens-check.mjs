/*
 * Measures the colour pairs this site renders, in both colour schemes, against the tokens
 * in src/styles/tokens.css: text has to reach 4.5:1, a control boundary 3:1. The hero is
 * measured separately because its type sits on a photograph through a scrim, so the worst
 * case is the brightest pixels the cover crop can place behind the column at the thinnest
 * alpha the column reaches. Those pixel values are measured from src/assets/images by
 * `measure-hero-copy-zone` below rather than assumed.
 */
import { readFileSync } from 'node:fs';

const url = new URL('../src/styles/tokens.css', import.meta.url);
const css = readFileSync(url, 'utf8');

function tokensOf(src) {
  const out = {};
  for (const m of src.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)) out[m[1]] = m[2];
  return out;
}
const light = tokensOf(css.slice(0, css.indexOf('@media')));
const dark = tokensOf(css.slice(css.indexOf('@media (prefers-color-scheme: dark)')));

const rgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const toHex = (c) => `#${c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
const luminance = (hex) => {
  const [r, g, b] = rgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
/* sRGB compositing, which is what an alpha overlay actually performs. */
const over = (fg, alpha, bg) => {
  const f = rgb(fg);
  const g = rgb(bg);
  return toHex(f.map((v, i) => v * alpha + g[i] * (1 - alpha)));
};

const pairs = [
  ['text on paper', 'text', 'paper', 4.5],
  ['text on surface', 'text', 'surface', 4.5],
  ['text on surface 2', 'text', 'surface-2', 4.5],
  ['text on sand', 'text', 'sand', 4.5],
  ['muted on paper', 'text-muted', 'paper', 4.5],
  ['muted on surface', 'text-muted', 'surface', 4.5],
  ['muted on surface 2', 'text-muted', 'surface-2', 4.5],
  ['muted on sand', 'text-muted', 'sand', 4.5],
  ['brand foreground on paper', 'brand-fg', 'paper', 4.5],
  ['accent on paper', 'accent', 'paper', 4.5],
  ['accent on surface', 'accent', 'surface', 4.5],
  ['accent on surface 2', 'accent', 'surface-2', 4.5],
  ['accent on sand', 'accent', 'sand', 4.5],
  ['band text on an accent hover fill', 'accent-on', 'accent', 4.5],
  ['selection text on accent tint', 'text', 'accent-tint', 4.5],
  ['band text on brand', 'band-text', 'brand-ink', 4.5],
  ['band muted on brand', 'band-muted', 'brand-ink', 4.5],
  ['brand label on a band button', 'brand-ink', 'band-text', 4.5],
  ['flag on flag tint', 'flag', 'flag-tint', 4.5],
  ['control boundary on surface', 'line-control', 'surface', 3],
  ['control boundary on paper', 'line-control', 'paper', 3],
];

const rows = [];
for (const scheme of ['light', 'dark']) {
  const t = scheme === 'light' ? light : dark;
  for (const [label, fg, bg, min] of pairs) {
    const r = contrast(t[fg], t[bg]);
    rows.push({
      scheme,
      pair: label,
      ratio: r.toFixed(2),
      needs: min,
      verdict: r >= min ? 'ok' : 'FAIL',
    });
  }
}

/*
 * The hero scrim is one gradient, but the two colour schemes run it at different strengths,
 * because they are threatened by opposite ends of the frame. Light scheme: dark type, so the
 * enemy is the headland behind the body paragraph, and 62 to 60 per cent paper is enough.
 * Dark scheme: near-black paper and light type, so the enemy is the open sky behind the
 * eyebrow, and it takes 86 to 80 per cent. Measured per text block by `measure-hero-copy-zone`
 * rather than judged: the binding figures are 0.57 and 0.74. It falls to nothing by 82 per
 * cent either way, so the figure at the right third is photograph and not tint.
 */
function scrimAt(x, scheme) {
  const [edge, columnEnd] = scheme === 'light' ? [0.62, 0.6] : [0.86, 0.8];
  if (x <= 0.58) return edge - (x / 0.58) * (edge - columnEnd);
  if (x <= 0.82) return columnEnd - ((x - 0.58) / 0.24) * columnEnd;
  return 0;
}

/* `.shell` is max-w-[1240px] with px-5 below sm and px-8 above; the copy column is 560px, 660px from xl. */
function columnEdge(viewport) {
  const pad = viewport < 640 ? 20 : 32;
  const shell = Math.min(viewport, 1240);
  const col = viewport >= 1280 ? 660 : 560;
  return Math.min(1, ((viewport - shell) / 2 + pad + col) / viewport);
}

const hero = [
  /* Below lg the photograph is its own band, so the copy sits on plain paper with no frame in it. */
  ['mobile and tablet, copy on the paper field', null],
  ['lg breakpoint, right edge of the copy column', columnEdge(1024)],
  ['narrow laptop, right edge of the copy column', columnEdge(1152)],
  ['xl breakpoint, right edge of the copy column', columnEdge(1280)],
  ['desktop, right edge of the copy column', columnEdge(1440)],
  ['wide desktop, right edge of the copy column', columnEdge(1920)],
];

/*
 * Which foreground reaches the right edge of the copy column, and what it owes the reader
 * there. The heading is the only brand-fg that does: it runs the full column at 36 to 64px,
 * which WCAG classes as large text at 3:1. The 13px eyebrow is brand-fg too and owes 4.5,
 * but it stops at a third of the column, where the wash is at its thickest and the frame
 * behind it is open sky at 0.41 relative luminance; `measure-hero-copy-zone` checks that row
 * at its own width rather than assuming it shares the column edge's worst pixel.
 */
const heroFgs = [
  ['brand-fg', 3],
  ['text', 4.5],
];

/*
 * Which pixel the copy can actually land on. The frame's own extremes are the wrong pair
 * here: its brightest pixel is the sunset at the far right, which no line of text ever
 * stands on, and holding the dark scheme to it would demand a wash thick enough to hide the
 * photograph. `measure-hero-copy-zone` maps the rendered column back to source pixels at
 * 1024, 1280 and 1440 and reports the worst value that sits behind a sentence: near black in
 * the light scheme, 0.72 relative luminance in the dark one.
 */
const copyZone = { lightThreat: '#000000', darkThreat: '#c5c5c5' };

const heroRows = [];
for (const scheme of ['light', 'dark']) {
  const t = scheme === 'light' ? light : dark;
  for (const [label, x] of hero) {
    const a = x === null ? 1 : scrimAt(x, scheme);
    const behind = over(t.paper, a, scheme === 'light' ? copyZone.lightThreat : copyZone.darkThreat);
    const row = { scheme, case: label, scrim: a.toFixed(3), ground: behind };
    for (const [fg, min] of heroFgs) {
      const r = contrast(t[fg], behind);
      row[`${fg} on wash`] = `${r.toFixed(2)}${r >= min ? '' : ' FAIL'}`;
    }
    heroRows.push(row);
  }
}

const failed = rows.filter((r) => r.verdict === 'FAIL');
/* Small text on the frame has to reach its own floor against the worst pixel behind it. */
const heroFailed = heroRows.filter((r) => heroFgs.some(([fg, min]) => Number.parseFloat(r[`${fg} on wash`]) < min));

console.table(rows);
console.table(heroRows);
console.log(
  failed.length
    ? `${failed.length} static pair(s) failing: ` + failed.map((f) => `${f.scheme} ${f.pair} ${f.ratio}`).join('; ')
    : 'static pairs: all pass',
);
console.log(heroFailed.length ? `hero: ${heroFailed.length} case(s) below their floor` : 'hero: all text cases pass');
process.exit(failed.length || heroFailed.length ? 1 : 0);

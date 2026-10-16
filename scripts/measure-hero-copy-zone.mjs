/*
 * Measures what actually lands behind each block of hero copy, and prints the thinnest
 * paper wash that keeps it at AA.
 *
 * The frame-wide statistics in `measure-hero-frame` answer "what is the worst pixel in this
 * file", which is the wrong question for a scrim: the worst pixel only matters if the type
 * is standing on it. The hero column is 560px (660 from xl) inside a 1240px shell, and the
 * photograph is `object-cover` at 52% 42%, so at each breakpoint a different part of the
 * frame sits under a given line of text. This maps the rendered box back to source pixels
 * and reports, per text block, the darkest and brightest thing underneath it.
 *
 * The geometry is measured in the browser rather than derived, because where a sentence
 * breaks decides how tall the block is. Re-run the probe in the delivery notes after any
 * copy change that alters line counts, then re-run this.
 *
 *   node scripts/measure-hero-copy-zone.mjs [path]
 */
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const file =
  process.argv[2] ?? new URL('../src/assets/images/hero-terrace.jpg', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');

/* Rendered hero box and copy blocks at each width, in CSS px from the section's top left. */
const CASES = [
  {
    name: '1440 desktop, xl copy column',
    box: [1425, 805],
    column: [124, 660],
    blocks: [
      { name: 'eyebrow', px: 13, weight: 600, top: 112, height: 20 },
      { name: 'h1', px: 64, weight: 500, top: 148, height: 204 },
      { name: 'body', px: 18, weight: 400, top: 371, height: 122 },
      { name: 'helper', px: 14, weight: 400, top: 602, height: 91 },
    ],
  },
  {
    name: '1280 xl breakpoint',
    box: [1265, 790],
    column: [44, 660],
    blocks: [
      { name: 'eyebrow', px: 13, weight: 600, top: 112, height: 20 },
      { name: 'h1', px: 59, weight: 500, top: 148, height: 204 },
      { name: 'body', px: 18, weight: 400, top: 371, height: 122 },
      { name: 'helper', px: 14, weight: 400, top: 602, height: 91 },
    ],
  },
  {
    name: '1024 lg breakpoint',
    box: [1009, 771],
    column: [32, 560],
    blocks: [
      { name: 'eyebrow', px: 13, weight: 600, top: 112, height: 20 },
      { name: 'h1', px: 53, weight: 500, top: 148, height: 169 },
      { name: 'body', px: 17, weight: 400, top: 337, height: 122 },
      { name: 'helper', px: 14, weight: 400, top: 567, height: 91 },
    ],
  },
];

/* The hero sets the eyebrow and the heading in brand-fg, the body and helper in text. */
const INK = {
  light: { 'brand-fg': [15, 66, 52], text: [21, 43, 35], wash: [247, 245, 239] },
  dark: { 'brand-fg': [143, 194, 173], text: [234, 231, 221], wash: [11, 22, 19] },
};

const lin = (c) => {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};
const rel = (p) => 0.2126 * lin(p[0]) + 0.7152 * lin(p[1]) + 0.0722 * lin(p[2]);
const over = (wash, a, px) => wash.map((v, i) => v * a + px[i] * (1 - a));
const contrast = (a, b) => {
  const [hi, lo] = [rel(a), rel(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
/* WCAG calls 24px normal, or 18.66px at 700 or above, large text, and large text needs 3:1. */
const floor = (px, weight) => (px >= 24 || (px >= 18.66 && weight >= 700) ? 3 : 4.5);

const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
const rows = [];

for (const c of CASES) {
  const scale = Math.max(c.box[0] / info.width, c.box[1] / info.height);
  /* object-position 52% 42%: the frame overflows its box by (box - scaled), and slides by that much. */
  const ox = (c.box[0] - info.width * scale) * 0.52;
  const oy = (c.box[1] - info.height * scale) * 0.42;
  for (const b of c.blocks) {
    const x0 = Math.max(0, Math.floor((c.column[0] - ox) / scale));
    const x1 = Math.min(info.width - 1, Math.ceil((c.column[0] + c.column[1] - ox) / scale));
    const y0 = Math.max(0, Math.floor((b.top - oy) / scale));
    const y1 = Math.min(info.height - 1, Math.ceil((b.top + b.height - oy) / scale));
    const zone = [];
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const i = (y * info.width + x) * info.channels;
        zone.push([data[i], data[i + 1], data[i + 2]]);
      }
    }
    const lums = zone.map(rel);
    /* A block can cover 400k pixels, so reduce rather than spread: Math.min(...) overruns the stack. */
    const darkest = lums.reduce((a, v) => Math.min(a, v), 1);
    const brightest = lums.reduce((a, v) => Math.max(a, v), 0);
    const row = {
      case: c.name,
      block: `${b.name} ${b.px}px/${b.weight}`,
      needs: floor(b.px, b.weight),
      'source px': `${x0}-${x1} x ${y0}-${y1}`,
      darkest: darkest.toFixed(3),
      brightest: brightest.toFixed(3),
    };
    for (const scheme of ['light', 'dark']) {
      const ink = INK[scheme];
      const fg = ink[b.name === 'eyebrow' || b.name === 'h1' ? 'brand-fg' : 'text'];
      /* The light scheme is threatened by dark pixels, the dark scheme by bright ones. */
      const threat = scheme === 'light' ? darkest : brightest;
      let a = 0;
      while (a < 1 && contrast(fg, over(ink.wash, a, pxOf(threat))) < row.needs) a += 0.01;
      row[`min wash ${scheme}`] = a.toFixed(2);
    }
    rows.push(row);
  }
}

/* A greyscale pixel of a given relative luminance: the neutral case, as in measure-hero-frame. */
function pxOf(l) {
  const s = l <= 0.003035 ? l * 12.92 : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  const v = Math.round(Math.max(0, Math.min(1, s)) * 255);
  return [v, v, v];
}

console.log(`${file}\n${info.width}x${info.height}, cover at 52% 42%`);
console.table(rows);
const binding = (s) => rows.reduce((a, r) => Math.max(a, Number(r[`min wash ${s}`])), 0);
console.log('binding light-scheme wash:', binding('light').toFixed(2), '| binding dark-scheme wash:', binding('dark').toFixed(2));
console.log(`source file: ${(readFileSync(file).length / 1024).toFixed(0)} KB`);

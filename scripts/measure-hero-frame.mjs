/*
 * Measures the hero photograph so the scrim is tuned against pixels rather than a guess.
 *
 * The hero type sits on a full-bleed `object-cover` image, so what lands behind a given
 * line of text depends on the viewport: a phone shows a narrow slice of the middle of the
 * frame, a desktop shows the whole width. This prints, per horizontal slice, the mean and
 * both tails of the distribution.
 *
 * Which tail is the worst case depends on the scrim. A dark scrim has to beat the frame's
 * brightest pixel; a light one only has to lift its darkest. The hero uses a light scrim,
 * so the dark tail is the number that sets the alpha, and the bright tail is what the same
 * classes have to clear in the dark scheme, where paper turns near-black.
 *
 *   node scripts/measure-hero-frame.mjs [path]
 */
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const file =
  process.argv[2] ?? new URL('../src/assets/images/hero-terrace.jpg', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');

const { data, info } = await sharp(file).greyscale().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

const rel = (v) => {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

const SLICES = 10;
const cols = [];
for (let s = 0; s < SLICES; s++) {
  const x0 = Math.floor((width * s) / SLICES);
  const x1 = Math.floor((width * (s + 1)) / SLICES);
  const px = [];
  for (let y = 0; y < height; y++) for (let x = x0; x < x1; x++) px.push(data[y * width + x]);
  px.sort((a, b) => a - b);
  const at = (q) => px[Math.min(px.length - 1, Math.floor(px.length * q))];
  cols.push({
    slice: `${((s / SLICES) * 100).toFixed(0)}-${(((s + 1) / SLICES) * 100).toFixed(0)}%`,
    min: rel(px[0]).toFixed(4),
    p1: rel(at(0.01)).toFixed(4),
    mean: (px.reduce((a, b) => a + rel(b), 0) / px.length).toFixed(4),
    p95: rel(at(0.95)).toFixed(4),
    p99: rel(at(0.99)).toFixed(4),
    max: rel(px[px.length - 1]).toFixed(4),
  });
}

const all = [];
for (let y = 0; y < height; y += 2) for (let x = 0; x < width; x += 2) all.push(data[y * width + x]);
all.sort((a, b) => a - b);
const pct = (q) => all[Math.min(all.length - 1, Math.floor(all.length * q))];

const hex = (v) => `#${v.toString(16).padStart(2, '0').repeat(3)}`;

console.log(`${file}\n${width}x${height} greyscale, ${SLICES} horizontal slices (left to right)`);
console.table(cols);
console.log(
  JSON.stringify({
    darkest: hex(pct(0)),
    p1: hex(pct(0.01)),
    median: hex(pct(0.5)),
    p99: hex(pct(0.99)),
    brightest: hex(pct(1)),
  }),
);
console.log('darkest pixel:', pct(0), 'p1:', pct(0.01), 'p99:', pct(0.99), 'brightest:', pct(1), 'of 255');
console.log(`source file: ${(readFileSync(file).length / 1024).toFixed(0)} KB`);

/*
 * One figure per published piece, keyed by slug.
 *
 * These replace a set of still-life photographs — blank paper, a brass ruler, a pencil, a sprig —
 * which were consistent in style and silent about content. A reader told that a UK parental order
 * has a six month window was then shown a pen on a desk. Each figure here draws the argument the
 * page makes, from quantities that page states, so a graphic cannot promise something the text
 * does not.
 *
 * Nothing in here is measured, modelled or estimated. Every number is transcribed from the body of
 * the piece named in its comment, and the figure is only geometry built on those numbers. When a
 * piece changes what it states, the matching row has to change with it; a figure that outlives its
 * source is worse than no figure, because a drawing reads as settled.
 *
 * There is deliberately no text in any of these. The site is bilingual, a caption would have to be
 * written twice and maintained twice, and at the size a card renders at — around 280px wide on a
 * desktop grid — eight-point type is not legible anyway. Counts survive as geometry: five boxes are
 * five boxes in either language.
 */

export type Figure =
  /* Horizontal bars on one shared scale. `ref` draws the vertical reference line, `emphasis` the
   * index whose bar carries the accent colour. */
  | { kind: 'bars'; values: number[]; max: number; ref?: number; emphasis?: number }
  /* A month axis from a starting event, the window inside which something must be done, and a
   * second bar that starts inside the window and finishes outside it. */
  | { kind: 'timeline'; horizon: number; window: number; run: [number, number] }
  /* A frame holding `inside` items with `outside` scattered beyond its edge. */
  | { kind: 'outside-frame'; inside: number; outside: number }
  /* A band of reported values with a tail, and no mark at its middle. */
  | { kind: 'range'; band: [number, number]; tail: number; horizon: number }
  /* Nodes joined in sequence. `breaks` are the links drawn apart, `markerAt` the node carrying a
   * stem, `step` the alternating vertical offset. */
  | { kind: 'chain'; nodes: number; breaks?: number[]; markerAt?: number; step?: boolean; shapes?: 'circle' | 'mixed' }
  /* `rows` tracks, each with one marker placed on a rung of a `levels`-rung scale. */
  | { kind: 'matrix'; rows: number; levels: number }
  /* `items` boxes to the left of a single vertical line. */
  | { kind: 'before-line'; items: number }
  /* `solid` separate boxes, plus one drawn dashed and set apart from the rest. */
  | { kind: 'boxes'; solid: number; dashed: boolean }
  /* Columns of stacked marks, one column per party. */
  | { kind: 'columns'; counts: number[] }
  /* One bar divided into `parts`, with `dashedAt` left unresolved. */
  | { kind: 'stack'; parts: number; dashedAt: number }
  /* `rows` independent two-position choices converging on one outcome. */
  | { kind: 'switches'; rows: number };

export const CONTENT_FIGURES: Record<string, Figure> = {
  /* HFEA's 2024 report: 38% for patients aged 18 to 34, 30% as the average per embryo transferred,
   * 8% for patients aged 43 to 44. One denominator, a fivefold spread. */
  'how-to-read-a-clinic-published-success-rate': { kind: 'bars', values: [38, 30, 8], max: 40, emphasis: 2 },

  /* Herweck et al. on 40,177 gestational carrier transfers: 62.4% clinical pregnancy, 47.9% live
   * birth and 28.9% multiple birth among those live births, all per transfer. The reference line
   * sits at half, which is where the second bar does not reach. */
  'what-40177-transfers-do-not-promise-you': { kind: 'bars', values: [62.4, 47.9, 28.9], max: 100, ref: 50, emphasis: 1 },

  /* GOV.UK sets the application window at 6 months from the birth; the Law Commission records the
   * process taking 6 to 12 months once started. Filed at month 3, it finishes past month 12. */
  'the-six-month-limit-on-a-uk-parental-order': { kind: 'timeline', horizon: 18, window: 6, run: [3, 15] },

  /* The comparison tool prints the nine costs a quote usually names; this piece lists twelve
   * categories that sit outside a package price. */
  'surrogacy-costs-that-sit-outside-a-quote': { kind: 'outside-frame', inside: 9, outside: 12 },

  /* Illume Fertility's 2025 page: $100,000 to $140,000, rising to $250,000 or more. The band is
   * what a provider publishes; the middle is what nobody has measured. */
  'why-no-average-surrogacy-cost-exists': { kind: 'range', band: [100, 140], tail: 250, horizon: 260 },

  /* The six links the piece names in order: birth registration, certified copies, the issuing
   * authority's apostille, the translator, the receiving authority's processing, and any court
   * application. Each belongs to a different institution, so the chain is drawn apart at the point
   * where the file leaves the country of birth. */
  'getting-a-birth-certificate-accepted-abroad': { kind: 'chain', nodes: 6, breaks: [3] },

  /* Six dimensions, and a five-level hierarchy of what a source is worth — program marketing at
   * the bottom, a lawyer admitted there on your facts at the top. The staircase is the argument:
   * each dimension can be pushed up a level. */
  'questions-to-ask-about-surrogacy-law-before-choosing-a-destination': { kind: 'matrix', rows: 6, levels: 5 },

  /* The professional standard is that escrow is funded before the first embryo transfer. The piece
   * lists eight milestones from signing to the parentage order; the money is committed at the
   * second, which is the point of drawing it this way. */
  'surrogacy-escrow-accounts-and-payment-stages': { kind: 'chain', nodes: 8, markerAt: 1 },

  /* Five documents the piece says should exist before a transfer, against the transfer date that
   * ends the negotiating. */
  'what-must-be-signed-before-the-first-transfer': { kind: 'before-line', items: 5 },

  /* The guide's own structure: four legal questions that are separate and can each end a plan, and
   * a fifth — what your own country recognises — which is not the destination's law at all, so it
   * is drawn apart and dashed. */
  'surrogacy-legal-considerations': { kind: 'boxes', solid: 4, dashed: true },

  /* Fifteen questions, grouped by who can answer them: eight to the agency, four to a lawyer in
   * that jurisdiction, two to the clinic, one to the escrow provider. */
  'choosing-a-surrogacy-agency': { kind: 'columns', counts: [8, 4, 2, 1] },

  /* The nine stages the guide walks through, in the order they generally run. */
  'surrogacy-process': { kind: 'chain', nodes: 9, step: true },

  /* Eight components the cost guide breaks a budget into. The sixth is the contingency reserve,
   * which is the row nobody else prices, so it is the one left unresolved. */
  'surrogacy-cost': { kind: 'stack', parts: 8, dashedAt: 5 },

  /* Whose egg, whose sperm, who carries: three separable decisions, each with its own consent
   * document, converging on one arrangement. */
  'gamete-and-surrogate-options': { kind: 'switches', rows: 3 },

  /* Three documents from three authorities — a birth record, a parentage determination, a travel
   * document — in an order that is not negotiable, with no treaty standing behind either link. */
  'bringing-your-child-home': { kind: 'chain', nodes: 3, breaks: [0, 1], shapes: 'mixed' },
};

/** Entries are namespaced by collection and language, so the slug is the last path segment. */
export const contentFigure = (id: string): Figure | undefined => CONTENT_FIGURES[id.split('/').pop() ?? id];

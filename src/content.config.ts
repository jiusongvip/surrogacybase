import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * A source is only useful if it can be re-checked. `supports` names the claim in
 * the body it backs, and `verifiedOn` is the date a human last opened the URL.
 */
const source = z.object({
  label: z.string(),
  url: z.url(),
  publisher: z.string(),
  publishedOn: z.string().optional(),
  verifiedOn: z.string(),
  supports: z.string(),
});

const category = z.enum(['cost', 'destinations', 'agencies', 'process', 'preparation']);

const content = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z
    .object({
      title: z.string(),
      /**
       * Search result title, when the H1 is too long to display in full. Google
       * cuts near 60 characters, so the concise version is written here rather
       * than by shortening the heading a reader sees on the page.
       */
      titleTag: z.string().max(60).optional(),
      description: z.string(),
      type: z.enum(['guide', 'article']),
      category,
      /**
       * The reader-facing topic a piece is filed under on the homepage learning module: the
       * questions people actually search for. Distinct from `category`, which is the editorial
       * type. A piece with no topic is simply not surfaced in the topic module, so an empty bucket
       * (for example accommodation, which has no content yet) never advertises itself. Optional so
       * a piece can be published before it is classified.
       */
      topic: z.enum(['legal', 'choice', 'accommodation', 'process', 'cost']).optional(),
      /**
       * When true, the piece is offered as the homepage module's one featured pick for its topic.
       * The homepage reads this field rather than naming articles in the component, so the
       * selection stays in the content data and never goes stale if a piece is renamed.
       */
      featured: z.boolean().default(false).optional(),
      published: z.boolean(),
      publishedOn: z.string(),
      updatedOn: z.string(),
      reviewDueOn: z.string().optional(),
      /** Blank until a real byline exists, with the person's agreement. No invented authors. */
      author: z.string().optional(),
      /** A clinician is named only after a review cycle and consent; see src/data/trust.ts. */
      reviewer: z
        .object({
          name: z.string(),
          role: z.string(),
          credentialUrl: z.url().optional(),
        })
        .optional(),
      /**
       * The destination records this page is scoped against: the legal systems whose records it
       * draws on, not every system it happens to mention. A page can follow a child's paperwork
       * into a country this site has no record for, and this field is not the place that claims
       * otherwise.
       */
      jurisdictions: z.array(z.string()).default([]),
      sources: z.array(source).default([]),
      /** Other pieces this one points at, and the pieces that point back. Resolved into a single
       * list by relatedFor(); the guide/article split is gone, so one field carries every link. */
      related: z.array(z.string()).default([]),
      relatedTools: z.array(z.string()).default([]),
      /**
       * `verified`  = every factual claim in the body has a source below.
       * `framework` = the page teaches a method or a set of questions and asserts
       *             no external facts, so no citations are required.
       * `draft`     = not publishable; excluded from listings and the sitemap.
       */
      evidence: z.enum(['verified', 'framework', 'draft']).default('verified'),
      noIndex: z.boolean().default(false),
    })
    .refine((d) => d.evidence !== 'draft' || !d.published, {
      message: 'draft content cannot be published',
    })
    .refine((d) => d.evidence !== 'verified' || d.sources.length > 0, {
      message: 'evidence: verified requires at least one source',
    }),
});

/**
 * Which family a system lets commission a child, and how far the sources behind this record can
 * say so. The three codes are keys, not prose: src/i18n/ui.ts prints the words in both languages,
 * and `fact` names the index of the sourced fact that establishes it, so an admission can never be
 * shown without the document behind it. A family type this record does not carry is printed as not
 * established rather than assumed, which is the whole point of the field.
 */
const admitsRow = z.object({
  family: z.enum(['married', 'cohabiting', 'single', 'maleCouple', 'femaleCouple', 'international']),
  status: z.enum(['open', 'closed', 'conditional']),
  /** A qualification the source itself carries, again a key rather than prose. */
  note: z.enum(['cohabit-one-year', 'citizen-only', 'bill-pending', 'residence-required', 'genetic-link']).optional(),
  fact: z.number().int().min(0),
});

const jurisdictionFact = z.object({
  claim: z.string(),
  source,
});

/**
 * A dated event in the record's legal history. Printed in order, because a rule a reader is
 * weighing is easier to judge against what changed and when than against a single undated
 * sentence. Like a cost figure it names the index of the fact that cites it, so a date can never
 * appear on the page without the document behind it.
 */
const timelineEntry = z.object({
  /** The date the event carries, as the source states it: `2023-06-12`, `2024-01-01`, `2026`. */
  on: z.string(),
  claim: z.string(),
  fact: z.number().int().min(0),
});

/**
 * A cost figure a named source published. The number, its currency and the year it describes are
 * the same in both languages, so they live in the record; the words printed around them come from
 * the item and shape keys, which src/i18n/ui.ts translates. A figure names the index of the fact
 * that cites it, so a number can never be shown without the source it was taken from.
 */
const costFigure = z
  .object({
    item: z.enum(['medical', 'legal', 'recruiting', 'carrier', 'total']),
    currency: z.enum(['USD', 'GBP', 'EUR', 'CAD', 'COP']),
    /**
     * How the source states it: a span, a ceiling it says programmes reach, an amount it says
     * costs exceed, or one figure. Printing a ceiling as a bare number would turn "as much as"
     * into a price.
     */
    shape: z.enum(['range', 'ceiling', 'floor', 'single']),
    low: z.number().int().nonnegative().nullable(),
    high: z.number().int().nonnegative().nullable(),
    /** The year the source's own numbers describe, which is not the year this page read them. */
    asOf: z.string(),
    fact: z.number().int().nonnegative(),
  })
  .superRefine((figure, ctx) => {
    const wanted = { range: 'both', ceiling: 'high', floor: 'low', single: 'low' }[figure.shape];
    const filled = [figure.low !== null, figure.high !== null];
    const has = filled[0] && filled[1] ? 'both' : filled[0] ? 'low' : filled[1] ? 'high' : 'neither';
    if (has !== wanted) {
      ctx.addIssue({
        code: 'custom',
        message: `a ${figure.shape} figure needs ${wanted}, got ${has}`,
      });
    }
  });

const jurisdictions = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/jurisdictions' }),
  schema: z
    .object({
      code: z.string(),
      name: z.string(),
      region: z.string(),
      /** What the law itself does, not how friendly the place is. */
      basis: z.enum([
        'mixed-patchwork',
        'explicit-statute',
        'case-law',
        'assisted-reproduction-law',
        'no-specific-statute',
        'restricted',
        'prohibited',
      ]),
      /** Who may commission, as far as the sourced material allows us to say. */
      eligibility: z.string(),
      /** The same statement broken into the family types a reader compares themselves against. */
      admits: z.array(admitsRow).default([]),
      paymentModel: z.string(),
      parentage: z.string(),
      statusVerifiedOn: z.string(),
      /** Unknown enough that we should not recommend it as a destination at all. */
      insufficientData: z.boolean().default(false),
      facts: z.array(jurisdictionFact).default([]),
      /** Dated events, oldest first. The page prints them only when a record carries any. */
      timeline: z.array(timelineEntry).default([]),
      costs: z.array(costFigure).default([]),
      openQuestions: z.array(z.string()).default([]),
      /**
       * For jurisdictions whose legality is set below the national level (a federation, or a
       * country of separate legal systems), the sub-jurisdictions a reader actually has to choose
       * between. Surfaced as a legality map on the country page so the first thing a reader sees is
       * where it is open, not where the record is silent. Optional: most records answer at national
       * level and leave this empty.
       */
      subJurisdictions: z
        .array(
          z.object({
            name: z.string(),
            status: z.enum(['permitted', 'restricted', 'prohibited', 'unlegislated']),
            note: z.string().optional(),
          }),
        )
        .optional(),
      published: z.boolean().default(true),
    })
    .superRefine((record, ctx) => {
      for (const figure of record.costs) {
        if (figure.fact >= record.facts.length) {
          ctx.addIssue({
            code: 'custom',
            message: `${record.code}: a ${figure.item} figure names fact ${figure.fact}, and this record has ${record.facts.length}`,
          });
        }
      }
      for (const row of record.admits) {
        if (row.fact >= record.facts.length) {
          ctx.addIssue({
            code: 'custom',
            message: `${record.code}: the ${row.family} admission names fact ${row.fact}, and this record has ${record.facts.length}`,
          });
        }
      }
      for (const event of record.timeline) {
        if (event.fact >= record.facts.length) {
          ctx.addIssue({
            code: 'custom',
            message: `${record.code}: the event dated ${event.on} names fact ${event.fact}, and this record has ${record.facts.length}`,
          });
        }
      }
      const families = record.admits.map((row) => row.family);
      for (const family of families) {
        if (families.filter((f) => f === family).length > 1) {
          ctx.addIssue({ code: 'custom', message: `${record.code}: ${family} is admitted twice, with no reason given` });
        }
      }
    }),
});

export const collections = { content, jurisdictions };

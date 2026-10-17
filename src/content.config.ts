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
      published: z.boolean(),
      publishedOn: z.string(),
      updatedOn: z.string(),
      reviewDueOn: z.string().optional(),
      /** Blank until a real byline exists. No invented authors or reviewers. */
      author: z.string().optional(),
      reviewer: z
        .object({
          name: z.string(),
          role: z.string(),
          credentialUrl: z.url().optional(),
        })
        .optional(),
      /** Jurisdiction codes from src/data/jurisdictions, when the page is scoped. */
      jurisdictions: z.array(z.string()).default([]),
      sources: z.array(source).default([]),
      relatedGuides: z.array(z.string()).default([]),
      relatedArticles: z.array(z.string()).default([]),
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

const jurisdictionFact = z.object({
  claim: z.string(),
  source,
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
      paymentModel: z.string(),
      parentage: z.string(),
      statusVerifiedOn: z.string(),
      /** Unknown enough that we should not recommend it as a destination at all. */
      insufficientData: z.boolean().default(false),
      facts: z.array(jurisdictionFact).default([]),
      costs: z.array(costFigure).default([]),
      openQuestions: z.array(z.string()).default([]),
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
    }),
});

export const collections = { content, jurisdictions };

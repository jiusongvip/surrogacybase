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

const jurisdictions = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/jurisdictions' }),
  schema: z.object({
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
    openQuestions: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

export const collections = { content, jurisdictions };

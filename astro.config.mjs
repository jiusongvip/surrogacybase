import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { rehypeTableScroll } from './src/lib/rehype-table-scroll';
import { collectRevisions, lastmodFor } from './src/lib/revisions.ts';

const site = process.env.SITE_URL || 'https://surrogacybase.com';
/* Read once, while the config loads: the dates live in the same files the pages render from. */
const revisions = collectRevisions();

export default defineConfig({
  // Canonical origin. Override with SITE_URL when a real host is attached.
  site,
  trailingSlash: 'never',
  output: 'static',
  // English keeps the URLs it already has; Chinese lives under /zh. The site's own prefix
  // rules are in src/i18n/config.ts, and this block is what makes Astro validate that a
  // /zh route exists rather than rendering the 404 page for a typo.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    // Astro 6 marks this key deprecated in favour of `markdown.processor: unified({...})`,
    // which needs @astrojs/markdown-remark as a direct dependency. Astro migrates this field
    // into that same default processor, so the output is identical without pinning a second
    // copy of a package Astro already owns.
    rehypePlugins: [rehypeTableScroll],
  },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Drafts and unpublished pages never reach the sitemap because their routes
      // are not generated; noindex pages set the meta tag themselves.
      changefreq: 'monthly',
      /**
       * Per-page, taken from the record the page keeps of its own last revision. A page with
       * no such record is written without a lastmod, which is the honest answer and costs
       * nothing: Google treats a missing lastmod as "unknown", and a wrong one as "unreliable".
       */
      serialize(item) {
        const lastmod = lastmodFor(item.url, revisions, site);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
      // The integration only pairs URLs that are both in the sitemap, so an English page
      // whose Chinese twin has not been built emits no alternates at all.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-Hans' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: true,
  },
});

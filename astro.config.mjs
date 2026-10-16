import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { rehypeTableScroll } from './src/lib/rehype-table-scroll';

export default defineConfig({
  // Canonical origin. Override with SITE_URL when a real host is attached.
  site: process.env.SITE_URL || 'https://surrogacybase.com',
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

/*
 * llms.txt, in each language the site publishes.
 *
 * The file is a table of contents for a machine reader: one line per document, each with a real
 * Markdown link and the sentence the page itself uses to describe what it is for. Nothing here is
 * written twice, because every title and summary is read back from the content frontmatter, the
 * jurisdiction records, the tool list and the page copy files, which are what the pages render
 * from. A description that was reworded for this file would be a second claim to keep true.
 *
 * The links are absolute on purpose. A relative path is resolved against whatever the reader
 * assumed about the origin, and a model that guesses will cite a page it never reached.
 */
import { ABOUT_PAGE, ASSESSMENT_PAGE } from '@/data/service-pages';
import { EDITORIAL_PAGE, UPDATES_PAGE } from '@/data/policy-pages';
import { SITE } from '@/const';
import { TOOLS, toolHref } from '@/data/tools';
import type { Lang } from '@/i18n/config';
import { localizedPath } from '@/i18n/paths';
import { UI, fill } from '@/i18n/ui';
import { getLiveContent, pathOf } from '@/lib/content';
import { getJurisdictions } from '@/lib/jurisdictions';

/** One bullet: the page's own title, its own summary, at its own URL. */
function entry(site: URL, lang: Lang, path: string, title: string, description: string) {
  return `- [${title}](${new URL(localizedPath(lang, path), site).href}): ${description}`;
}

function heading(lang: Lang, en: string, zh: string) {
  return `## ${lang === 'en' ? en : zh}`;
}

export async function buildLlmsTxt(site: URL, lang: Lang) {
  const copy = UI[lang];
  const entries = await getLiveContent(lang);
  const guides = entries.filter((e) => e.data.type === 'guide');
  const explainers = entries.filter((e) => e.data.type === 'article');
  const jurisdictions = await getJurisdictions(lang);
  const tools = TOOLS.filter((t) => t.live);

  return [
    `# ${SITE.name}`,
    '',
    `> ${copy.siteDescription}`,
    '',
    lang === 'en'
      ? 'Independent information site. Not a clinic, not a law firm, not a surrogacy agency. No provider pays for a place here and no provider is listed. Every factual claim names its source, its publisher and the date it was last opened, and corrections are published.'
      : '独立信息站点。不是诊所，不是律师事务所，也不是代孕机构。没有机构为位置付费，本站也不列机构名单。每条事实都写明来源、发布方与最近一次打开核查的日期，更正记录公开。',
    '',
    lang === 'en'
      ? 'Published in English and Simplified Chinese. Every page listed here has a Chinese twin at the same path under /zh, and /zh/llms.txt lists that half.'
      : '以英文与简体中文发布。此处每一页在 /zh 下的同一路径都有对应版本，/zh/llms.txt 列出中文一侧。',
    '',
    heading(lang, 'Guides', '指南'),
    '',
    ...guides.map((e) => entry(site, lang, pathOf(e), e.data.title, e.data.description)),
    '',
    heading(lang, 'Explainers', '专题解读'),
    '',
    ...explainers.map((e) => entry(site, lang, pathOf(e), e.data.title, e.data.description)),
    '',
    heading(lang, 'Destinations', '目的地'),
    '',
    entry(
      site,
      lang,
      '/destinations',
      copy.pages.destinations.title,
      copy.pages.destinations.description,
    ),
    ...jurisdictions.map((j) =>
      entry(
        site,
        lang,
        `/destinations/${j.data.code}`,
        fill(copy.pages.jurisdiction.title, { name: j.data.name }),
        fill(copy.pages.jurisdiction.description, { name: j.data.name, region: j.data.region }),
      ),
    ),
    '',
    heading(lang, 'Tools', '工具'),
    '',
    ...tools.map((t) => entry(site, lang, `/tools/${t.id}`, t[lang].name, t[lang].summary)),
    '',
    heading(lang, 'How this site is run', '本站如何运作'),
    '',
    entry(site, lang, '/about', ABOUT_PAGE[lang].title, ABOUT_PAGE[lang].description),
    entry(site, lang, '/editorial-policy', EDITORIAL_PAGE[lang].title, EDITORIAL_PAGE[lang].description),
    entry(site, lang, '/updates', UPDATES_PAGE[lang].title, UPDATES_PAGE[lang].description),
    entry(site, lang, '/assessment', ASSESSMENT_PAGE[lang].title, ASSESSMENT_PAGE[lang].description),
    '',
  ].join('\n');
}

import type { APIContext } from 'astro';

export const prerender = true;

const FALLBACK = 'https://www.surrogacybase.com';

export function GET(context: APIContext) {
  const origin = (context.site ?? new URL(FALLBACK)).origin;

  // Nothing is staged or behind a login here, so the only useful line is the sitemap pointer.
  // The error template is not disallowed on purpose: it carries its own noindex, and a crawler
  // that is blocked from reading it can never see that instruction.
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${origin}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

import type { APIContext } from 'astro';

export const prerender = true;

const FALLBACK = 'https://surrogacybase.com';

export function GET(context: APIContext) {
  const origin = (context.site ?? new URL(FALLBACK)).origin;

  // Nothing is staged or behind a login here, so the only useful lines are the
  // sitemap pointer and the error template.
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /404',
    '',
    `Sitemap: ${origin}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

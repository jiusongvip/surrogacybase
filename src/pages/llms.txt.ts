import type { APIContext } from 'astro';
import { buildLlmsTxt } from '@/lib/llms';

export const prerender = true;

const FALLBACK = 'https://surrogacybase.com';

export async function GET(context: APIContext) {
  const body = await buildLlmsTxt(context.site ?? new URL(FALLBACK), 'en');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

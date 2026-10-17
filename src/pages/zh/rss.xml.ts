import type { APIContext } from 'astro';
import { buildFeed } from '@/lib/feed';

export const prerender = true;

export async function GET(context: APIContext) {
  return buildFeed(context, 'zh');
}

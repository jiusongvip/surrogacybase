/*
 * The site's only server endpoint: an enquiry arrives here and is delivered to SurrogacyBase's
 * own Feishu and WeCom inboxes. Cloudflare Pages picks this file up from functions/ and runs it
 * beside the static build, so nothing about the page output changes.
 *
 * The credentials are read from the Pages environment and never leave the server. This project
 * has its own Feishu app, Bitable table and group webhooks; it does not share credentials with
 * any other site. If a channel is not configured it is skipped, and if none is configured the
 * endpoint answers 503 so the form can fall back to composing the message in the browser rather
 * than telling the reader something was sent.
 *
 * Feishu Bitable expects these text fields (documented in .env.example):
 *   姓名 / 邮箱 / 电话 / 联系方式 / 账号 / 咨询内容 / 来源页面 / 来源按钮 / 语言 / 提交时间
 */

type Env = {
  FEISHU_APP_ID?: string;
  FEISHU_APP_SECRET?: string;
  FEISHU_BITABLE_APP_TOKEN?: string;
  FEISHU_BITABLE_TABLE_ID?: string;
  FEISHU_WEBHOOK_URL?: string;
  /** Optional. Enables signed requests for a Feishu custom bot. */
  FEISHU_WEBHOOK_SECRET?: string;
  WECOM_WEBHOOK_URL?: string;
  /** Optional. Enables signed requests for a WeCom group robot. */
  WECOM_WEBHOOK_SECRET?: string;
};

type Context = { request: Request; env: Env };

const MAX_BODY = 16_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]{6,30}$/;
const PLATFORMS: Record<string, string> = {
  whatsapp: 'WhatsApp',
  wechat: '微信',
  line: 'LINE',
  messenger: 'Messenger',
  telegram: 'Telegram',
  signal: 'Signal',
  other: '其他',
};

let tokenCache: { value: string; expiresAt: number } | null = null;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

/** Keep the field types exact: nothing from a request body reaches a provider unshrunk. */
function text(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '')
    .slice(0, max)
    .trim();
}

function line(value: unknown, max: number): string {
  return text(value, max).replace(/\s+/g, ' ').trim();
}

async function hmacBase64(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  const bytes = new Uint8Array(signature);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

async function feishuToken(env: Env): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now()) return tokenCache.value;

  const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ app_id: env.FEISHU_APP_ID, app_secret: env.FEISHU_APP_SECRET }),
  });
  const data = (await response.json()) as { code?: number; app_access_token?: string; expire?: number };
  if (!response.ok || data.code !== 0 || !data.app_access_token) throw new Error('feishu_token_failed');

  const ttl = Math.max(60, (data.expire ?? 7200) - 60);
  tokenCache = { value: data.app_access_token, expiresAt: Date.now() + ttl * 1000 };
  return tokenCache.value;
}

async function sendFeishuBitable(env: Env, fields: Record<string, string>): Promise<void> {
  const token = await feishuToken(env);
  const appToken = encodeURIComponent(env.FEISHU_BITABLE_APP_TOKEN!);
  const tableId = encodeURIComponent(env.FEISHU_BITABLE_TABLE_ID!);
  const response = await fetch(
    `https://open.feishu.cn/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ fields }),
    },
  );
  const data = (await response.json()) as { code?: number };
  if (!response.ok || data.code !== 0) throw new Error('feishu_bitable_failed');
}

async function sendFeishuWebhook(env: Env, content: string): Promise<void> {
  const payload: Record<string, unknown> = { msg_type: 'text', content: { text: content } };
  if (env.FEISHU_WEBHOOK_SECRET) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    payload.timestamp = timestamp;
    // Feishu signs with the timestamp and secret as the HMAC key over an empty message.
    payload.sign = await hmacBase64(`${timestamp}\n${env.FEISHU_WEBHOOK_SECRET}`, '');
  }
  const response = await fetch(env.FEISHU_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const data = (await response.json()) as { code?: number; StatusCode?: number };
  if (!response.ok || (data.code ?? data.StatusCode) !== 0) throw new Error('feishu_webhook_failed');
}

async function sendWecomWebhook(env: Env, content: string): Promise<void> {
  let url = env.WECOM_WEBHOOK_URL!;
  if (env.WECOM_WEBHOOK_SECRET) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const sign = await hmacBase64(env.WECOM_WEBHOOK_SECRET, `${timestamp}\n${env.WECOM_WEBHOOK_SECRET}`);
    url += `${url.includes('?') ? '&' : '?'}timestamp=${timestamp}&sign=${encodeURIComponent(sign)}`;
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ msgtype: 'text', text: { content } }),
  });
  const data = (await response.json()) as { errcode?: number };
  if (!response.ok || data.errcode !== 0) throw new Error('wecom_webhook_failed');
}

/**
 * WeCom's text message is capped by bytes, not characters. Chinese characters take three bytes
 * each, so a full 1,200-character enquiry would be rejected before it ever reached the group.
 */
function truncateBytes(value: string, max: number): string {
  const encoder = new TextEncoder();
  if (encoder.encode(value).length <= max) return value;
  let out = '';
  for (const char of value) {
    if (encoder.encode(`${out}${char}`).length > max - 3) break;
    out += char;
  }
  return `${out}...`;
}

function inboxText(fields: {
  name: string;
  email: string;
  phone: string;
  platform: string;
  handle: string;
  message: string;
  sourcePage: string;
  sourceTitle: string;
  sourceButton: string;
  language: string;
}): string {
  const lines = [
    'New enquiry — SurrogacyBase',
    `Mobile: ${fields.phone}`,
    fields.platform ? `Reach on: ${PLATFORMS[fields.platform] ?? fields.platform}` : '',
    fields.handle ? `Account: ${fields.handle}` : '',
    fields.name ? `Name: ${fields.name}` : '',
    fields.email ? `Email: ${fields.email}` : '',
    '',
    fields.message || '(no message left)',
    '',
    `Page: ${fields.sourcePage || '—'}`,
    fields.sourceTitle ? `Page title: ${fields.sourceTitle}` : '',
    `Button: ${fields.sourceButton || '—'}`,
    `Language: ${fields.language || '—'}`,
    `Received: ${new Date().toISOString()}`,
  ];
  return lines.filter(Boolean).join('\n');
}

export const onRequestPost = async ({ request, env }: Context): Promise<Response> => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json({ ok: false, code: 'bad_content_type' }, 415);
  }

  /* A JSON cross-site post needs a CORS preflight, which this endpoint does not answer. The
   * origin check closes the same door for any client that skips it. */
  const origin = request.headers.get('origin');
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return json({ ok: false, code: 'forbidden' }, 403);
      }
    } catch {
      return json({ ok: false, code: 'forbidden' }, 403);
    }
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ ok: false, code: 'too_large' }, 413);

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not_object');
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, code: 'bad_json' }, 400);
  }

  /* The form carries a field no person fills in. A bot that fills it gets the same answer a
   * delivered enquiry gets, and nothing is written anywhere. */
  if (text(body.website, 100)) return json({ ok: true });

  const name = line(body.name, 80);
  const email = line(body.email, 120);
  const phone = line(body.phone, 30);
  const platform = line(body.platform, 20);
  const handle = line(body.handle, 80);
  const message = text(body.message, 1200);
  const sourcePage = line(body.sourcePage, 200);
  const sourceTitle = line(body.sourceTitle, 200);
  const sourceButton = line(body.sourceButton, 20);
  const language = line(body.language, 8);

  const fields: string[] = [];
  if (!phone || !PHONE.test(phone) || (phone.match(/\d/g) ?? []).length < 6) fields.push('phone');
  if (!platform || !(platform in PLATFORMS)) fields.push('platform');
  if (platform && !handle) fields.push('handle');
  if (email && !EMAIL.test(email)) fields.push('email');
  if (body.consent !== true) fields.push('consent');
  if (fields.length > 0) return json({ ok: false, code: 'invalid', fields }, 400);

  const content = inboxText({
    name,
    email,
    phone,
    platform,
    handle,
    message,
    sourcePage,
    sourceTitle,
    sourceButton,
    language,
  });

  const tasks: { channel: string; run: () => Promise<void> }[] = [];

  if (env.FEISHU_APP_ID && env.FEISHU_APP_SECRET && env.FEISHU_BITABLE_APP_TOKEN && env.FEISHU_BITABLE_TABLE_ID) {
    tasks.push({
      channel: 'feishu_bitable',
      run: () =>
        sendFeishuBitable(env, {
          姓名: name,
          邮箱: email,
          电话: phone,
          联系方式: platform ? (PLATFORMS[platform] ?? platform) : '',
          账号: handle,
          咨询内容: message,
          来源页面: sourcePage,
          来源按钮: sourceButton,
          语言: language,
          提交时间: new Date().toISOString(),
        }),
    });
  }

  if (env.FEISHU_WEBHOOK_URL) {
    tasks.push({ channel: 'feishu_webhook', run: () => sendFeishuWebhook(env, content) });
  }

  if (env.WECOM_WEBHOOK_URL) {
    tasks.push({
      channel: 'wecom_webhook',
      run: () => sendWecomWebhook(env, truncateBytes(content, 1800)),
    });
  }

  if (tasks.length === 0) return json({ ok: false, code: 'not_configured' }, 503);

  const results = await Promise.allSettled(tasks.map((task) => task.run()));
  const delivered = tasks.filter((_, index) => results[index].status === 'fulfilled').map((task) => task.channel);

  for (const [index, result] of results.entries()) {
    if (result.status === 'rejected') console.error(`enquiry: ${tasks[index].channel} failed`);
  }

  if (delivered.length === 0) {
    return json({ ok: false, code: 'delivery_failed' }, 502);
  }

  return json({ ok: true, delivered });
};

export const onRequestGet = (): Response => json({ ok: false, code: 'method_not_allowed' }, 405);

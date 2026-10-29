/*
 * One read-only answer: the country Cloudflare sees this request as coming from.
 *
 * The enquiry form asks it so the dial code and the likeliest messaging app can be put first for
 * someone reading in English while standing in Osaka. The answer travels back to the browser that
 * asked and stops there: nothing is written down, nothing is attached to an enquiry, and no
 * third party sees the call, because it goes to this site's own origin.
 *
 * `request.cf.country` is the two-letter code Cloudflare puts on every inbound request, the same
 * value as the CF-IPCountry header, and it is null when the network has no answer. A visitor
 * behind a VPN or on a plane gets whatever their exit node looks like, which is why the form
 * treats this as one guess and the reader's own choice as the last word.
 */

/* The DOM Request type has no `cf`; Cloudflare's network puts the geolocation of the inbound
 * request on it before the function runs. */
type Context = { request: Request & { cf?: { country?: unknown } } };

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const onRequestGet = ({ request }: Context): Response => {
  const country = request.cf?.country;
  const hit = typeof country === 'string' && /^[A-Z]{2}$/.test(country) ? country : null;
  return json({ country: hit });
};

export const onRequestPost = (): Response => json({ country: null }, 405);

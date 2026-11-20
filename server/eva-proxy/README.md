# EVA proxy

The server side of the website assistant. The website sends only the visitor's messages
here. This service holds the AI provider key, the instructions and the safety limits, so
none of them are exposed in the browser.

## What it enforces

| Control | Behaviour |
| --- | --- |
| Secrets | API key, model and system prompt live only here |
| Origin allow-list | Only your site's origin(s) may call it; fails closed if unset |
| Input validation | roles limited to user/assistant, 500 chars per message, 12 messages, 8 KB body |
| Client cannot override | model, token limit, temperature and system prompt are never read from the request |
| Rate limit | 20 requests per 10 minutes per client (best effort, see note) |
| Safe errors | provider errors become a generic 502; no keys, prompts or message text are logged |

## Deploy on Cloudflare Workers (example)

```bash
npm create cloudflare@latest eva-proxy      # choose "Hello World" Worker
# copy worker.js into the project as src/index.js
npx wrangler secret put EVA_API_KEY
npx wrangler secret put EVA_UPSTREAM_URL    # e.g. https://api.your-provider.com/v1/chat/completions
npx wrangler secret put EVA_MODEL
npx wrangler secret put ALLOWED_ORIGIN      # e.g. https://your-domain.co.ke
npx wrangler deploy
```

Then set `VITE_EVA_API_URL` to the Worker URL when you build the website. The same file works
on any host that supports the standard `fetch(request, env)` handler.

## Important notes

- **Rate limiting:** the built-in limiter is per instance and resets when an instance restarts.
  Add a platform rule too (for example Cloudflare rate-limiting) before you rely on it.
- **Keep the knowledge current:** edit `KNOWLEDGE` in `worker.js` whenever services, hours or
  policies change. EVA is told to answer only from it.
- **Privacy:** if you switch EVA on, the Privacy Notice already says chat messages go to an
  AI provider. Check that statement still matches the provider you pick.
- **Test before launch:** try ordinary questions, vague questions, services you do not offer,
  prompt-injection attempts ("ignore your rules"), and switch the provider off to confirm the
  website falls back to a human contact route.

## Tests

```bash
node --test server/eva-proxy/worker.test.mjs
```

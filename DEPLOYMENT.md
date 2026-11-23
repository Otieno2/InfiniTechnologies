# Deployment Guide - InfiniTechnologies

This repository deploys the InfiniTechnologies marketing and enquiry site as a single Vercel service.

## Architecture

```text
your-domain.com → InfiniTechnologies site (Vite/React)
```

## Service

- **Service:** `main-site`
- **Framework:** Vite + React 19
- **Root:** Repository root
- **Build:** `npm run build`
- **Output:** `dist/`
- **Routing:** All requests are handled by the main site through `vercel.json`.

## Pre-deployment checks

Run these commands from the repository root:

```bash
npm install
npm run lint
npm run build
node --test server/eva-proxy/worker.test.mjs
```

The build also generates the site's static content pages through `scripts/pages.mjs`.

## Environment variables

Configure optional variables in Vercel Dashboard → Project Settings → Environment Variables.
Apply them to the Production environment when appropriate.

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `VITE_QUOTE_FORM_ENDPOINT` | Optional | Endpoint used by the enquiry form | `https://formspree.io/f/xxx` |
| `VITE_EVA_API_URL` | Optional | EVA assistant API endpoint | `https://eva-proxy.workers.dev` |

Do not put provider secrets in variables beginning with `VITE_`; Vite exposes those values to the browser.

## Deploy through the Vercel dashboard

1. Open https://vercel.com/new.
2. Import `Otieno2/InfiniTechnologies` from GitHub.
3. Confirm that Vercel detects the repository's `vercel.json` configuration.
4. Add any required environment variables.
5. Deploy the project.

The configuration uses `npm install` followed by `npm run build` and serves the resulting `dist/` directory.

## Deploy with the Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Custom domain

1. Open the Vercel project settings and select **Domains**.
2. Add the production domain, such as `infinitechnologies.co.ke`.
3. Follow Vercel's DNS instructions.
4. Set `SITE_URL` during the production build when the generated canonical URLs and sitemap must use the custom domain:

```bash
SITE_URL=https://your-domain.co.ke npm run build
```

## Post-deployment verification

Check the following after deployment:

- The home page loads at `/`.
- Service and legal pages load at `/websites/`, `/business-systems/`, `/whatsapp-assistants/`, `/privacy/`, and `/terms/`.
- The enquiry form presents the configured submission or WhatsApp fallback behavior.
- EVA behaves correctly when `VITE_EVA_API_URL` is configured.
- The sitemap and robots files are available.
- The site works on a mobile device.

## Troubleshooting

### Build fails

Review the Vercel build log, confirm the Node.js version is compatible, and reproduce locally with:

```bash
npm install
npm run build
```

### Environment variables are not available

Confirm the variable name, environment scope, and that the project was redeployed after changing it. Browser-exposed variables must use the `VITE_` prefix; server-only secrets must not.

### Routes do not load

Confirm that the generated files exist in `dist/` after `npm run build` and that `vercel.json` still routes requests to `main-site`.

## Ongoing maintenance

Push changes to the GitHub `main` branch to use Vercel's automatic deployment, or deploy manually with `vercel --prod`. Review deployment logs when investigating production issues.

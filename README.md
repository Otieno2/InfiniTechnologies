# InfiniTechnologies

Marketing and enquiry site for InfiniTechnologies (React 19 + Vite + Tailwind CSS 3).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
npm run lint
node --test server/eva-proxy/worker.test.mjs   # EVA proxy tests
```

## Where to change things

| What | Where |
| --- | --- |
| Contact details, business hours, response promise, founder photo, budget ranges | `src/config.js` |
| Services, boundaries and "typical inclusions" | `src/data/services.js` |
| Demo projects (add screenshots here) | `src/data/portfolio.js` |
| FAQ answers | `src/data/faq.js` |
| Privacy Notice and Terms text | `src/data/legal.js` |
| Brand colours, fonts | `tailwind.config.js` |
| Logos and icons | `src/assets/` and `public/` |

Hours and the response promise live in `src/config.js` so the site, quote form, EVA widget and
policies always agree. Only promise what you can meet.

## Before going live

1. **Quote form inbox.** Set `VITE_QUOTE_FORM_ENDPOINT` (see `.env.example`). Until then the form
   hands the enquiry to WhatsApp instead of sending it, and says so honestly.
2. **Demo projects.** The Work section shows "In build" tiles. Build two or three demos, then in
   `src/data/portfolio.js` set `status: 'live'` and add `image` and `link`. Label them as demos, never
   as client work.
3. **Founder photo.** Add a real photo to `src/assets` and set `FOUNDER.photo` in `src/config.js`.
4. **EVA.** Either deploy `server/eva-proxy` and set `VITE_EVA_API_URL`, or leave it empty and the
   site shows a plain "Talk to us" widget. Never put provider keys in a `VITE_` variable.
5. **Policies.** `src/data/legal.js` is a draft that matches what the site does today. Have it
   reviewed, and update it if you add analytics or switch EVA on.
6. **Social image URL.** `index.html` points `og:image` at `/og-image.png`. Social platforms need an
   absolute URL, so change it to `https://your-domain/og-image.png` once you have a domain.
7. **Real-device test.** Submit a real enquiry from a phone and confirm it arrives.

## Prices, care plans and search

- **Prices and InfiniCare tiers** live in `src/data/packages.js`. They are proposed figures: change them to what you can deliver at a profit. Standard payment terms are `DEPOSIT` in `src/config.js`.
- **Where you are:** fill `town` and `county` in `src/data/business.js` when ready. They appear in the page text and search data.
- **Real addresses:** `/websites/`, `/business-systems/`, `/whatsapp-assistants/`, `/privacy/`, `/terms/`. Page text is in `src/data/pages.js`. `npm run build` writes a file for each page.
- **Build for launch** with your domain so canonical links, the social image and `sitemap.xml` are correct:
  `SITE_URL=https://your-domain.co.ke npm run build`, then submit `/sitemap.xml` in Google Search Console.
- **Google Business Profile** (free, not code): create it with your exact business name, phone and website, pick the service categories, add a few photos and your hours, and verify it. Keep the name, phone and town identical to the website.
- **EVA:** if you switch it on, update `KNOWLEDGE` in `server/eva-proxy/worker.js` with the published starting prices first. Its rules currently say not to state prices.

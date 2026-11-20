// Runs after `vite build`. Gives every page its own address (dist/<path>/index.html) with
// its own title, description and canonical link, so search engines and link previews see
// the right details. Also writes sitemap.xml and robots.txt.
//
// Set SITE_URL to your live address when you build, for example:
//   SITE_URL=https://your-domain.co.ke npm run build
// Without it, canonical links and the sitemap are skipped (the build tells you so).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { BUSINESS } from '../src/data/business.js';
import { legalMeta, pages } from '../src/data/pages.js';

const SITE = (process.env.SITE_URL || '').replace(/\/+$/, '');
const DIST = 'dist';
const tpl = readFileSync(`${DIST}/index.html`, 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const swap = (html, re, text) => html.replace(re, (m, a, b) => a + esc(text) + b);

function render(html, { title, description, path }) {
  let h = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(title)}</title>`);
  h = swap(h, /(<meta\s+name="description"\s+content=")[^"]*(")/, description);
  h = swap(h, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, title);
  h = swap(h, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, description);
  if (SITE) {
    h = h.replace('content="/og-image.png"', () => `content="${SITE}/og-image.png"`);
    h = h.replace('</head>', () => `    <link rel="canonical" href="${SITE}${path}" />\n    <meta property="og:url" content="${SITE}${path}" />\n  </head>`);
  }
  return h;
}

const entries = [...Object.values(pages), ...Object.values(legalMeta)];
for (const e of entries) {
  mkdirSync(`${DIST}${e.path}`, { recursive: true });
  writeFileSync(`${DIST}${e.path}index.html`, render(tpl, e));
}

// Home page: same file, plus business details for search engines.
const homeTitle = tpl.match(/<title>([\s\S]*?)<\/title>/)[1];
const homeDesc = tpl.match(/<meta\s+name="description"\s+content="([^"]*)"/)[1];
const address = BUSINESS.town || BUSINESS.county
  ? { address: { '@type': 'PostalAddress', addressLocality: BUSINESS.town, addressRegion: BUSINESS.county, addressCountry: 'KE' } }
  : {};
const ld = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: BUSINESS.name,
  description: homeDesc,
  telephone: BUSINESS.telephone,
  founder: { '@type': 'Person', name: BUSINESS.founder },
  areaServed: { '@type': 'Country', name: 'Kenya' },
  ...(SITE ? { url: SITE } : {}),
  ...address,
};
let home = render(tpl, { title: homeTitle, description: homeDesc, path: '/' });
home = home.replace('</head>', () => `    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n  </head>`);
writeFileSync(`${DIST}/index.html`, home);

writeFileSync(`${DIST}/robots.txt`, `User-agent: *\nAllow: /\n${SITE ? `\nSitemap: ${SITE}/sitemap.xml\n` : ''}`);
if (SITE) {
  const urls = ['/', ...entries.map((e) => e.path)];
  writeFileSync(`${DIST}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
} else {
  console.warn('SITE_URL is not set: canonical links and sitemap.xml were skipped.');
}
console.log(`Wrote ${entries.length + 1} pages.`);

import { CONTACT, HOURS } from '../config';
import logoLight from '../assets/infinitechnologies-logo-light.svg';

const columns = [
  {
    heading: 'Services',
    links: [
      { name: 'Websites & online stores', href: '/websites/' },
      { name: 'Business systems', href: '/business-systems/' },
      { name: 'WhatsApp assistants', href: '/whatsapp-assistants/' },
      { name: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'Our work', href: '/#work' },
      { name: 'How it works', href: '/#process' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'About', href: '/#about' },
      { name: 'Business and application support', href: '/#business-support' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { name: 'Get a quote', href: '/#quote' },
      { name: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}` },
      { name: 'Telegram', href: CONTACT.telegram },
      { name: 'Email', href: `mailto:${CONTACT.email}` },
    ],
  },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-[72px] pb-24 sm:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <a href="/#top" aria-label="InfiniTechnologies, back to top" className="inline-block">
              <img src={logoLight} alt="InfiniTechnologies" width="702" height="70" className="h-8 w-auto" />
            </a>
            <p className="mt-[18px] max-w-[280px] text-[15px] leading-relaxed text-brand-mist">
              Websites, business software and customer-service automation for small businesses.
            </p>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-brand-mist">{HOURS}</p>
          </div>
          {columns.map((col) => (
            <div key={col.heading} className="grid content-start gap-3">
              <h3 className="font-sans text-sm font-bold text-brand-cyanLight">{col.heading}</h3>
              {col.links.map((l) => (
                <a key={l.name} href={l.href} className="text-[15px] text-brand-mist hover:text-white transition-colors">
                  {l.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap justify-between gap-x-6 gap-y-3 text-sm text-brand-mist">
          <span>© {year} InfiniTechnologies. All rights reserved.</span>
          <span className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/privacy/" className="hover:text-white transition-colors">Privacy Notice</a>
            <a href="/terms/" className="hover:text-white transition-colors">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

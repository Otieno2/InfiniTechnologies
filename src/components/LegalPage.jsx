import { CONTACT, HOURS } from '../config';
import { LEGAL_UPDATED, legalPages } from '../data/legal';

export default function LegalPage({ kind }) {
  const page = legalPages[kind];
  const other = kind === 'privacy' ? { name: 'Terms of Service', href: '/terms/' } : { name: 'Privacy Notice', href: '/privacy/' };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <a href="/#top" className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline">
          Back to the homepage
        </a>
        <h1 className="mt-4 font-display text-[clamp(2rem,8vw,2.75rem)] leading-tight font-bold">{page.title}</h1>
        <p className="mt-2 text-sm text-brand-muted">Last updated {LEGAL_UPDATED}</p>
        <p className="mt-6 text-lg leading-relaxed text-brand-muted">{page.intro}</p>

        <div className="mt-10 grid gap-9">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-[22px] leading-snug font-semibold">{section.heading}</h2>
              {section.body?.map((para) => (
                <p key={para} className="mt-3 text-base leading-relaxed text-brand-body">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 grid gap-3 pl-5 text-base leading-relaxed text-brand-body list-disc marker:text-brand-blue">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="text-[22px] leading-snug font-semibold">Contact us</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-body">
              InfiniTechnologies, Kenya
              <br />
              Email: <a className="font-semibold text-brand-blue hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <br />
              Phone and WhatsApp: <a className="font-semibold text-brand-blue hover:underline" href={`tel:+${CONTACT.whatsapp}`}>{CONTACT.phoneDisplay}</a>
              <br />
              Hours: {HOURS}
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-brand-line pt-6 text-[15px] text-brand-muted">
          Also read our{' '}
          <a href={other.href} className="font-semibold text-brand-blue underline">
            {other.name}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

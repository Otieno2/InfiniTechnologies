import { CONTACT, HOURS, PLACE, RESPONSE_WINDOW, waLink } from '../config';
import QuoteForm from './QuoteForm';

const intro = 'Hi InfiniTechnologies, I found you through your website and would like to discuss a project.';

export default function Contact() {
  const rows = [
    { label: 'WhatsApp', value: CONTACT.phoneDisplay, href: waLink(intro) },
    { label: 'Telegram', value: CONTACT.phoneDisplay, href: CONTACT.telegram },
    { label: 'Phone', value: CONTACT.phoneDisplay, href: `tel:+${CONTACT.whatsapp}` },
    { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: 'Hours', value: HOURS },
    { label: 'Replies', value: `We reply ${RESPONSE_WINDOW}` },
    { label: 'Location', value: `Based in ${PLACE}. We work remotely with clients elsewhere.` },
  ];

  return (
    <section id="quote" className="bg-brand-surface pt-14 pb-[72px] md:pt-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14 items-start">
        <div>
          <h2 className="section-title !mt-0">Get a quote for your project</h2>
          <p className="lead mb-8">
            Tell us what you want to achieve. We reply {RESPONSE_WINDOW} with questions or a next step, then a written quote with scope, price and schedule.
          </p>
          <QuoteForm />
        </div>

        <div className="lg:pt-2">
          <h3 className="mb-3 text-lg font-semibold">Prefer to talk first?</h3>
          <div className="rounded-2xl border border-brand-line bg-white px-6 sm:px-8 py-3">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[84px_minmax(0,1fr)] gap-4 py-4 text-base border-t border-brand-line first:border-t-0 sm:grid-cols-[100px_minmax(0,1fr)]">
                <span className="pt-0.5 text-sm font-semibold text-brand-muted">{row.label}</span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('mailto:') || row.href.startsWith('tel:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="min-w-0 break-all font-semibold text-brand-blue hover:underline"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="min-w-0 break-words">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

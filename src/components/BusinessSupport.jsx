import { waLink } from '../config';
import { supportServices } from '../data/services';

const enquiry = waLink('Hi InfiniTechnologies, I’d like help with business or application support.');

export default function BusinessSupport() {
  return (
    <section id="business-support" className="bg-brand-surface pt-14 md:pt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl border border-brand-line bg-white p-6 sm:p-9 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12">
          <div>
            <h2 className="font-display text-[26px] leading-tight font-bold">Business and application support</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-muted">
              Separate from our technology services, we also help with some of the paperwork behind running a business in Kenya.
            </p>
            <a href={enquiry} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline">
              Ask about this support on WhatsApp
            </a>
          </div>
          <div className="border-t border-brand-line">
            {supportServices.map((item) => (
              <div key={item.title} className="border-b border-brand-line py-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-brand-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { faqs } from '../data/faq';

export default function FAQ() {
  return (
    <section id="faq" className="bg-brand-surface py-[72px] md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="section-title !mt-0">Questions people ask before they start</h2>
        <p className="lead mb-10">Cannot find your question? Send it through the quote form or WhatsApp.</p>

        <div className="border-t border-brand-line">
          {faqs.map((item) => (
            <details key={item.q} className="faq group border-b border-brand-line">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[17px] font-semibold leading-snug text-brand-ink">
                {item.q}
                <span aria-hidden="true" className="faq-icon" />
              </summary>
              <p className="pb-5 pr-8 text-base leading-relaxed text-brand-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

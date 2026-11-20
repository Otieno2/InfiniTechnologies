import { DEPOSIT, waLink } from '../config';
import { carePlan, kes, packages } from '../data/packages';

const notIncluded = [
  'Domain registration and hosting fees paid to those providers, unless your plan says otherwise',
  'Payment provider fees and account approval',
  'Usage costs charged by providers, such as AI model calls, SMS and WhatsApp messaging',
  'Content, photography and copywriting, unless listed in your quote',
];

const customQuote = 'Hi InfiniTechnologies, I’d like a quote.\n\nProject type: \nTimeline: \nBudget range: ';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-[72px] md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title max-w-[760px] !mt-0">Starting prices and clear terms</h2>
        <p className="lead">
          Three packages with a starting price, so you can see whether it fits your budget before you ask. Your written quote confirms the exact price for your scope.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <article key={p.id} className="card flex flex-col">
              <p className="font-display text-sm font-semibold text-brand-blue">One-time project fee</p>
              <h3 className="mt-3 text-[22px] leading-tight font-semibold">{p.name}</h3>
              <p className="mt-4 text-sm text-brand-muted">Starting from</p>
              <p className="font-display text-3xl font-bold text-brand-ink">{kes(p.from)}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{p.summary}</p>
              <ul className="check-list my-5">
                {p.includes.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-auto border-t border-brand-line pt-5 text-sm text-brand-muted">
                Best for
                <strong className="mt-1 block text-[15px] font-semibold text-brand-ink">{p.bestFor}</strong>
                <a href={p.href} className="mt-3 inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline">
                  See what is included
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-brand-muted">
          Standard payment terms: {DEPOSIT}. The agreed work is handed over to you on final payment, as set out in your written agreement.
        </p>

        <h3 id="care" className="mt-16 font-display text-[28px] leading-tight font-bold">{carePlan.name} monthly care plans</h3>
        <p className="lead">{carePlan.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {carePlan.tiers.map((t) => (
            <article key={t.name} className={`card flex flex-col ${t.featured ? 'ring-2 ring-brand-blue' : ''}`}>
              <h4 className="text-[22px] leading-tight font-semibold">{t.name}</h4>
              <p className="mt-1 text-sm text-brand-muted">{t.forWhom}</p>
              <p className="mt-4 text-sm text-brand-muted">From</p>
              <p className="font-display text-3xl font-bold text-brand-ink">
                {kes(t.from)}
                <span className="text-base font-medium text-brand-muted"> a month</span>
              </p>
              <ul className="check-list mt-5">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-brand-line bg-brand-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Costs that are separate from our fee</h3>
          <p className="mt-1.5 text-[15px] text-brand-muted">These are paid to other providers, and we list the ones that apply to you in your quote.</p>
          <ul className="check-list mt-5 md:grid-cols-2">
            {notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-brand-navy px-6 py-8 sm:px-9 text-white">
          <div>
            <h3 className="text-[22px] font-semibold">Not sure which fits?</h3>
            <p className="mt-1.5 text-base text-brand-mist">Describe your project and we will recommend an approach in your quote.</p>
          </div>
          <a href={waLink(customQuote)} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

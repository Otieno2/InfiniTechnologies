import { pages } from '../data/pages';
import { kes, packages } from '../data/packages';
import { demos } from '../data/portfolio';

export default function ServicePage({ kind }) {
  const page = pages[kind];
  const pack = packages.find((p) => p.id === page.packageId);
  const demo = demos.find((d) => d.id === page.demoId);

  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-20">
          <a href="/#services" className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-cyanLight hover:underline">
            All services
          </a>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,8vw,3rem)] leading-tight font-bold">{page.h1}</h1>
          <p className="lead-dark mt-5 max-w-2xl text-lg">{page.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="/#quote" className="btn-primary">Get a quote</a>
            <span className="text-brand-mist">
              Starting from <strong className="text-white">{kes(pack.from)}</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-[72px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[22px] font-semibold">Who it is for</h2>
            <ul className="check-list mt-4">
              {page.forWho.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-semibold">What you get</h2>
            <ul className="check-list mt-4">
              {page.includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-brand-muted">The written quote defines the exact scope. Costs paid to other providers are listed separately.</p>
          </div>
        </div>
      </section>

      {demo?.link && (
        <section className="bg-brand-surface py-14">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-[22px] font-semibold">See how it works</h2>
            <p className="mt-2 max-w-2xl text-brand-muted">
              {demo.proves} This is a demo we built ourselves with sample data. It is not client work.
            </p>
            <a href={demo.link} className="btn-primary mt-5">Try the demo</a>
          </div>
        </section>
      )}

      <section className="bg-white py-[72px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-[22px] font-semibold">Common questions</h2>
          <dl className="mt-4 border-t border-brand-line">
            {page.faqs.map((f) => (
              <div key={f.q} className="border-b border-brand-line py-5">
                <dt className="font-semibold text-brand-ink">{f.q}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-brand-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[15px] text-brand-muted">
            Ongoing hosting, backups and support are available as an <a href="/#care" className="font-semibold text-brand-blue underline">InfiniCare monthly plan</a>.
          </p>
        </div>
      </section>
    </>
  );
}

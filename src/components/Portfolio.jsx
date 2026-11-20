import { demos } from '../data/portfolio';
import markLight from '../assets/infinitechnologies-mark-light.svg';

function DemoMedia({ demo }) {
  if (demo.image) {
    return <img src={demo.image} alt={`Screenshot of the ${demo.title} demo`} loading="lazy" className="aspect-[16/10] w-full rounded-t-2xl object-cover" />;
  }
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-t-2xl bg-brand-navy px-6 text-center">
      <img src={markLight} alt="" aria-hidden="true" className="h-9 w-auto opacity-70" />
      <p className="text-sm font-medium text-brand-mist">{demo.link ? 'Open the demo to try it' : 'Screenshots coming soon'}</p>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-[72px] md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title max-w-[760px] !mt-0">Demonstrations of how our solutions work</h2>
        <p className="lead">
          These are demo projects we build ourselves to show what a solution looks like and does. They are not client work, and we do not publish client results we cannot evidence.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {demos.map((demo) => (
            <article key={demo.id} className="flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white">
              <DemoMedia demo={demo} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#E4F2FA] px-3 py-1 text-xs font-semibold text-brand-blue">Demo project</span>
                  {demo.status === 'in-progress' && (
                    <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-semibold text-brand-ink">In build</span>
                  )}
                </div>
                <h3 className="mt-4 text-xl leading-snug font-semibold">{demo.title}</h3>
                <p className="mt-1 text-sm text-brand-muted">{demo.service}</p>

                <p className="mt-4 text-[15px] font-semibold text-brand-ink">The problem</p>
                <p className="text-[15px] leading-relaxed text-brand-muted">{demo.problem}</p>

                <p className="mt-4 mb-2 text-[15px] font-semibold text-brand-ink">What the demo shows</p>
                <ul className="check-list">
                  {demo.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="border-t border-brand-line pt-4 text-sm text-brand-muted">
                    What it proves
                    <strong className="mt-1 block text-[15px] font-semibold leading-snug text-brand-ink">{demo.proves}</strong>
                  </div>
                  {demo.link && (
                    <a href={demo.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline">
                      Open the demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

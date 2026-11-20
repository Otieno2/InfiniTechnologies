const steps = [
  { title: 'Discovery', text: 'You tell us the problem you want solved. We ask the questions needed to understand it.' },
  { title: 'Scope & Quote', text: 'You receive a written scope, price, schedule and payment milestones to review.' },
  { title: 'Build', text: 'We build in stages and show progress against the agreed milestones.' },
  { title: 'Test & Launch', text: 'We test on real devices and with real contact and payment flows, then go live.' },
  { title: 'Support', text: 'We fix issues in the agreed window and offer ongoing care if you want it.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-brand-surface py-[72px] md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title max-w-[760px] !mt-0">What happens after you get in touch</h2>
        <p className="lead">Five steps from first message to a working solution, with a written agreement before work begins.</p>

        <ol className="mt-14 grid gap-0 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 pb-8 last:pb-0 lg:block lg:pb-0">
              {i < steps.length - 1 && (
                <>
                  <span aria-hidden="true" className="absolute left-6 top-12 bottom-0 w-px -translate-x-1/2 bg-brand-line lg:hidden" />
                  <span aria-hidden="true" className="absolute left-12 right-[-12px] top-6 hidden h-px bg-brand-line lg:block" />
                </>
              )}
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue bg-white font-display text-lg font-bold text-brand-blue">
                {i + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="text-lg font-semibold leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-brand-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

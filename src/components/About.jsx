import { FOUNDER } from '../config';

const principles = [
  { title: 'Clear scope', text: 'You know what is included before we start.' },
  { title: 'Honest timelines', text: 'We give schedules we can keep, and tell you early if something changes.' },
  { title: 'Secure delivery', text: 'We protect your data and never ask for your passwords, PINs or one-time codes.' },
  { title: 'Support after launch', text: 'We stay available once the work goes live.' },
];

const initials = FOUNDER.name
  .split(' ')
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join('');

export default function About() {
  return (
    <section id="about" className="bg-white py-[72px] md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-4">
            {FOUNDER.photo ? (
              <img src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of InfiniTechnologies`} width="72" height="72" className="h-[72px] w-[72px] rounded-full object-cover" />
            ) : (
              <span aria-hidden="true" className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-navy font-display text-2xl font-bold text-white">
                {initials}
              </span>
            )}
            <div>
              <p className="font-display text-lg font-semibold">{FOUNDER.name}</p>
              <p className="text-sm text-brand-muted">{FOUNDER.role}, InfiniTechnologies</p>
            </div>
          </div>
          <h2 className="section-title !mt-0">The person behind InfiniTechnologies</h2>
          <p className="lead mb-4">
            I believe powerful technology should not be complicated to adopt, so I handle the engineering and keep the experience simple for you.
          </p>
          <p className="lead mb-8">
            Whether you are launching your first online store, replacing spreadsheets with a proper system, or putting an assistant in front of your customers, I want to hear what you are trying to solve.
          </p>
          <a href="#quote" className="btn-primary">
            Discuss your project
          </a>
        </div>

        <div className="self-center">
          <h3 className="text-lg font-semibold">How I work</h3>
          <dl className="mt-4 border-t border-brand-line">
            {principles.map((p) => (
              <div key={p.title} className="border-b border-brand-line py-4">
                <dt className="font-semibold text-brand-ink">{p.title}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-brand-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

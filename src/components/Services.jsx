import { waLink } from '../config';
import { serviceGroups } from '../data/services';

const enquiry = (name) =>
  waLink(`Hi InfiniTechnologies, I’m interested in ${name}. I’d like to discuss what I need.`);

export default function Services() {
  return (
    <section id="services" className="bg-brand-surface py-[72px] md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="section-title max-w-[760px] !mt-0">Three ways we help your business</h2>
        <p className="lead">
          Websites and software, automation for customer service, and the technology that keeps them running. Use them together or on their own. What is listed under each service is typical, not automatic, and your quote sets the exact scope.
        </p>

        <div className="mt-14 grid gap-14">
          {serviceGroups.map((group) => (
            <div key={group.id} className="grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h3 className="text-[26px] leading-tight font-bold">{group.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">{group.audience}</p>
              </div>

              <div className="border-t border-brand-line">
                {group.services.map((service) => (
                  <article key={service.id} className="grid gap-4 border-b border-brand-line py-7 last:border-b-0">
                    <div>
                      <h4 className="font-display text-xl font-semibold leading-snug">{service.name}</h4>
                      <p className="mt-2 text-base leading-relaxed text-brand-muted">{service.summary}</p>
                    </div>
                    <ul className="check-list">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {service.note && (
                      <p className="rounded-lg border-l-[3px] border-brand-cyan bg-white px-4 py-3 text-sm leading-relaxed text-brand-body">
                        {service.note}
                      </p>
                    )}
                    <div>
                      <a
                        href={enquiry(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-blue hover:underline"
                      >
                        Ask about {service.name} on WhatsApp
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

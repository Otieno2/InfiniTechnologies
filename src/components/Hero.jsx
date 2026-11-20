import { PLACE, RESPONSE_WINDOW } from '../config';
import markLight from '../assets/infinitechnologies-mark-light.svg';

const gridBackground = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
  backgroundSize: '56px 56px',
};

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden bg-brand-navy text-white" style={gridBackground}>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 md:py-28">
        <img
          src={markLight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-1/2 hidden w-[300px] -translate-y-1/2 opacity-15 lg:block xl:w-[340px] xl:opacity-90"
        />
        <div className="relative max-w-3xl">
          <h1 className="mb-6 text-[clamp(2.1rem,9.5vw,3rem)] sm:text-5xl lg:text-[56px] leading-[1.05] font-bold">
            Websites, software and automation built around how your business works.
          </h1>
          <p className="lead-dark text-[19px] max-w-[580px]">
            InfiniTechnologies helps small businesses work smarter through professional websites, practical business software and customer-service automation.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-9">
            <a href="#quote" className="btn-primary">
              Get a quote
            </a>
            <a href="#services" className="btn-ghost">
              View solutions
            </a>
          </div>
          <p className="mt-7 max-w-[520px] text-sm leading-relaxed text-brand-mist">
            Based in {PLACE}. Every project is scoped and quoted in writing before work starts, and we reply {RESPONSE_WINDOW}.
          </p>
        </div>
      </div>
    </header>
  );
}

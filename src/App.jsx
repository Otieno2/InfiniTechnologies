import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import BusinessSupport from './components/BusinessSupport';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EVAChat from './components/EVAChat';
import LegalPage from './components/LegalPage';
import ServicePage from './components/ServicePage';
import { legalPages } from './data/legal';
import { pages } from './data/pages';

const HOME_TITLE = 'InfiniTechnologies | Websites, business software and automation for small businesses';

// Every page has its own address (/websites/, /privacy/ ...). `npm run build` writes a file for
// each one (see scripts/pages.mjs), and section links on the home page stay plain anchors (/#pricing).
const servicePaths = Object.fromEntries(Object.entries(pages).map(([key, p]) => [p.path, key]));

function getRoute() {
  const { pathname, hash } = window.location;
  // Old links used #/privacy and #/terms: send them to the real addresses.
  if (hash === '#/privacy' || hash === '#/terms') window.location.replace(`${hash.slice(1)}/`);
  const path = `${pathname.replace(/\/+$/, '')}/`;
  if (path === '/') return { type: 'home' };
  if (path === '/privacy/') return { type: 'legal', kind: 'privacy' };
  if (path === '/terms/') return { type: 'legal', kind: 'terms' };
  if (servicePaths[path]) return { type: 'service', kind: servicePaths[path] };
  return { type: 'notfound' };
}

const route = getRoute();

function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h1 className="font-display text-4xl font-bold">We could not find that page</h1>
        <p className="mt-4 text-lg text-brand-muted">The address may have changed. Go back to the homepage and pick a service from there.</p>
        <a href="/" className="btn-primary mt-8">Back to the homepage</a>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    if (route.type === 'home') {
      document.title = HOME_TITLE;
      const id = window.location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView();
    } else if (route.type === 'legal') {
      document.title = `${legalPages[route.kind].title} | InfiniTechnologies`;
    } else if (route.type === 'service') {
      document.title = pages[route.kind].title;
    } else {
      document.title = 'Page not found | InfiniTechnologies';
    }
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand-orange focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-navy"
      >
        Skip to content
      </a>
      <Header />
      {route.type === 'home' ? (
        <>
          <Hero />
          <main id="main">
            <Services />
            <Process />
            <Pricing />
            <FAQ />
            <About />
            <BusinessSupport />
            <Contact />
          </main>
        </>
      ) : (
        <main id="main">
          {route.type === 'legal' && <LegalPage kind={route.kind} />}
          {route.type === 'service' && <ServicePage kind={route.kind} />}
          {route.type === 'notfound' && <NotFound />}
        </main>
      )}
      <Footer />
      <EVAChat />
    </div>
  );
}

export default App;

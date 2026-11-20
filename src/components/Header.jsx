import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import mark from '../assets/infinitechnologies-mark.svg';
import logo from '../assets/infinitechnologies-logo.svg';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'How it works', href: '/#process' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'About', href: '/#about' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav aria-label="Main" className="sticky top-0 z-50 border-b border-brand-line bg-white">
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="/#top" aria-label="InfiniTechnologies home" className="flex items-center">
            <img src={logo} alt="InfiniTechnologies" width="702" height="70" className="h-7 w-auto sm:h-8" />
          </a>

          <div className="hidden gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="whitespace-nowrap text-[15px] font-medium text-brand-body transition-colors hover:text-brand-blue">
                {link.name}
              </a>
            ))}
          </div>

          <a href="/#quote" className="btn-primary hidden !min-h-[44px] whitespace-nowrap lg:inline-flex">
            Get a quote
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 p-2 text-brand-body hover:text-brand-blue lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full animate-fadeIn bg-brand-navy/50"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex h-[100dvh] w-80 max-w-[88vw] animate-slideInRight flex-col bg-white shadow-panel"
          >
            <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-brand-line px-5">
              <img src={mark} alt="" aria-hidden="true" className="h-7 w-auto" />
              <button
                ref={closeButtonRef}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-body transition-colors hover:bg-brand-surface"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-brand-line py-4 text-base font-medium text-brand-body transition-colors hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="shrink-0 border-t border-brand-line p-5">
              <a href="/#quote" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full">
                Get a quote
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

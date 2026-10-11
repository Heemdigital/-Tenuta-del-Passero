import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PROPERTY_INFO } from '../data/content';

interface NavigationProps {
  currentLang: 'it' | 'en';
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentLang,
  onToggleLang,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#luogo', label: currentLang === 'it' ? 'IL SOGGIORNO' : 'THE STAY' },
    { href: '#camere', label: currentLang === 'it' ? 'CAMERE' : 'ROOMS' },
    { href: '#servizi', label: currentLang === 'it' ? 'SERVIZI' : 'AMENITIES' },
    { href: '#esperienza', label: currentLang === 'it' ? 'ESPERIENZA' : 'EXPERIENCE' },
    { href: '#dove-siamo', label: currentLang === 'it' ? 'DOVE SIAMO' : 'FIND US' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1F2421]/10 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-gradient-to-b from-[#191D1A]/70 via-[#191D1A]/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className={`font-editorial text-lg md:text-xl font-medium tracking-[0.16em] uppercase whitespace-nowrap shrink-0 transition-colors ${
              isScrolled ? 'text-[#1F2421]' : 'text-[#FAF8F5]'
            }`}
          >
            LA TENUTA DEL PASSERO
          </a>

          {/* Zone 2: 4-5 Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-[0.18em] uppercase font-body">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-[#C26343] ${
                  isScrolled ? 'text-[#3D443F]' : 'text-[#FAF8F5]/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              aria-label="Cambia lingua"
              className={`text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded transition-colors whitespace-nowrap shrink-0 border ${
                isScrolled
                  ? 'border-[#1F2421]/20 text-[#1F2421] hover:bg-[#1F2421]/5'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {currentLang === 'it' ? 'EN' : 'IT'}
            </button>

            {/* Primary Action Button (Desktop) */}
            <button
              onClick={onOpenBooking}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'bg-[#253626] text-[#FAF8F5] hover:bg-[#334634]'
                  : 'bg-[#FAF8F5] text-[#1F2421] hover:bg-white shadow-md'
              }`}
            >
              <span>{currentLang === 'it' ? 'PRENOTA IL SOGGIORNO' : 'BOOK YOUR STAY'}</span>
              <span aria-hidden="true">→</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Apri menu principale"
              className={`lg:hidden flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase px-2 py-1.5 transition-colors ${
                isScrolled ? 'text-[#1F2421]' : 'text-white'
              }`}
            >
              <span>MENU</span>
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] text-[#1F2421] flex flex-col justify-between p-6 md:p-10 animate-in fade-in duration-300">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-[#1F2421]/10 pb-4">
            <span className="font-editorial text-base font-semibold tracking-[0.18em] uppercase">
              LA TENUTA DEL PASSERO
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chiudi menu"
              className="p-2 text-[#1F2421] hover:text-[#C26343] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 flex flex-col space-y-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-editorial text-2xl sm:text-3xl tracking-wide hover:text-[#C26343] transition-colors flex items-baseline justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-body text-[#7A7468] tracking-widest">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Drawer Actions */}
          <div className="border-t border-[#1F2421]/10 pt-6 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#253626] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#334634] transition-colors flex items-center justify-center gap-2"
            >
              <span>{currentLang === 'it' ? 'PRENOTA IL SOGGIORNO' : 'BOOK YOUR STAY'}</span>
              <span>→</span>
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-[#5C574F]">
              <a
                href={`tel:${PROPERTY_INFO.phoneClean}`}
                className="flex items-center gap-2 hover:text-[#1F2421]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C26343]" />
                <span>{PROPERTY_INFO.phone}</span>
              </a>
              <button
                onClick={onToggleLang}
                className="text-xs uppercase font-medium underline underline-offset-4"
              >
                {currentLang === 'it' ? 'Lingua: English' : 'Language: Italiano'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

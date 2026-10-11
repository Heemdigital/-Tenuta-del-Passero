import React from 'react';
import { PROPERTY_INFO } from '../data/content';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: 'it' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191D1A] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 editorial-grain opacity-25 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-16">
        {/* Top Masthead Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C26343] font-body block">
              {currentLang === 'it' ? 'OSPITALITÀ DI CAMPAGNA' : 'COUNTRYSIDE HOSPITALITY'}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#FAF8F5]">
              LA TENUTA DEL PASSERO
            </h2>
            <p className="font-editorial text-xl italic text-[#D6CEBE]">
              «{PROPERTY_INFO.tagline[currentLang]}»
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start lg:self-end flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#DCD5C9] hover:text-white transition-colors cursor-pointer py-2 border-b border-white/20"
          >
            <span>{currentLang === 'it' ? 'TORNA IN CIMA' : 'BACK TO TOP'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-body text-[#D6CEBE]">
          {/* Col 1: Posizione */}
          <div className="space-y-3">
            <span className="text-[#FAF8F5] font-semibold uppercase tracking-[0.16em] block">
              {currentLang === 'it' ? 'POSIZIONE' : 'LOCATION'}
            </span>
            <p className="leading-relaxed">
              Via Corsira, 2 <br />
              04011 Latina LT / Aprilia Area <br />
              Lazio, Italia
            </p>
            <p className="text-[11px] text-[#A69F90] pt-1 leading-relaxed">
              {PROPERTY_INFO.addressVariants.note[currentLang]}
            </p>
          </div>

          {/* Col 2: Contatti */}
          <div className="space-y-3">
            <span className="text-[#FAF8F5] font-semibold uppercase tracking-[0.16em] block">
              {currentLang === 'it' ? 'CONTATTI DIRETTI' : 'DIRECT CONTACTS'}
            </span>
            <div className="space-y-2">
              <a
                href={`tel:${PROPERTY_INFO.phoneClean}`}
                className="flex items-center gap-2 text-[#FAF8F5] hover:text-[#C26343] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C26343]" />
                <span>{PROPERTY_INFO.phone}</span>
              </a>
              <a
                href="https://wa.me/393475778698"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FAF8F5] hover:text-[#25D366] transition-colors"
              >
                <span>WhatsApp: {PROPERTY_INFO.phone}</span>
              </a>
            </div>
            <p className="text-[11px] text-[#A69F90]">
              {currentLang === 'it' ? 'Assistenza e prenotazioni aperte' : 'Direct host inquiries open'}
            </p>
          </div>

          {/* Col 3: Indice */}
          <div className="space-y-3">
            <span className="text-[#FAF8F5] font-semibold uppercase tracking-[0.16em] block">
              {currentLang === 'it' ? 'INDICE' : 'SECTIONS'}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#luogo" className="hover:text-white transition-colors">
                  {currentLang === 'it' ? 'Il Luogo & Benvenuti' : 'The Estate & Welcome'}
                </a>
              </li>
              <li>
                <a href="#camere" className="hover:text-white transition-colors">
                  {currentLang === 'it' ? 'Camere & Il Soggiorno' : 'Rooms & Accommodation'}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">
                  {currentLang === 'it' ? 'I Servizi Verificati' : 'Verified Amenities'}
                </a>
              </li>
              <li>
                <a href="#esperienza" className="hover:text-white transition-colors">
                  {currentLang === 'it' ? 'L’Esperienza di Relax' : 'The Experience'}
                </a>
              </li>
              <li>
                <a href="#dove-siamo" className="hover:text-white transition-colors">
                  {currentLang === 'it' ? 'Come Arrivare' : 'How to Reach Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Valutazioni */}
          <div className="space-y-3">
            <span className="text-[#FAF8F5] font-semibold uppercase tracking-[0.16em] block">
              {currentLang === 'it' ? 'RECENSIONI VERIFICATE' : 'VERIFIED RATINGS'}
            </span>
            <p className="leading-relaxed">
              Google Maps: <strong className="text-white">4.6 / 5.0</strong> (109 recensioni)
            </p>
            <p className="leading-relaxed">
              TripAdvisor: <strong className="text-white">4.4 / 5.0</strong> (20 recensioni)
            </p>
            <div className="pt-2 text-[11px] text-[#A69F90]">
              Bed & Breakfast / Albergo 3 Stelle · Lazio
            </div>
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A69F90] font-body">
          <p>© {new Date().getFullYear()} La Tenuta del Passero. All rights reserved.</p>
          <p className="italic font-editorial text-sm text-[#D6CEBE]">
            A little more time to slow down.
          </p>
        </div>
      </div>
    </footer>
  );
};

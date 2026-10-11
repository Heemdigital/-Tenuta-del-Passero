import React from 'react';
import { PROPERTY_INFO } from '../data/content';
import { MapPin, Phone, MessageCircle, Navigation as NavIcon, Car, Info } from 'lucide-react';

interface DoveSiamoProps {
  currentLang: 'it' | 'en';
}

export const DoveSiamo: React.FC<DoveSiamoProps> = ({ currentLang }) => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=La+Tenuta+del+Passero+Latina+Aprilia';

  return (
    <section id="dove-siamo" className="py-24 md:py-32 bg-[#FAF8F5] text-[#1F2421] border-t border-[#1F2421]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'DOVE SIAMO' : 'FIND US'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it' ? 'COME ARRIVARE.' : 'HOW TO REACH US.'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#5C574F] font-body leading-relaxed">
            {currentLang === 'it'
              ? 'Immersa nella campagna laziale, facilmente raggiungibile in auto con ampio parcheggio gratuito all’interno.'
              : 'Set amidst the Lazio countryside, conveniently accessible by car with ample complimentary private parking on-site.'}
          </p>
        </div>

        {/* 2-Column Editorial Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-16 items-start">
          {/* Left Column: Coordinates & Verification Notice */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 bg-[#F5F2EB] border border-[#1F2421]/10 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C26343] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#7A7468] font-body font-semibold">
                    {currentLang === 'it' ? 'INDIRIZZO DELLA STRUTTURA' : 'PROPERTY ADDRESS'}
                  </span>
                  <p className="font-editorial text-2xl sm:text-3xl text-[#1F2421]">
                    Via Corsira, 2
                  </p>
                  <p className="text-sm text-[#5C574F] font-body">
                    04011 Latina LT / Area Le Ferriere - Aprilia, Lazio, Italia
                  </p>
                </div>
              </div>

              {/* Transparent Address Verification Box */}
              <div className="p-4 bg-white/70 border border-[#1F2421]/10 flex items-start gap-3 text-xs text-[#5C574F] font-body">
                <Info className="w-4 h-4 text-[#C26343] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-[#1F2421]">
                    {currentLang === 'it' ? 'Nota di precisione toponomastica:' : 'Toponymy Verification Note:'}
                  </span>
                  <p className="leading-relaxed">
                    {PROPERTY_INFO.addressVariants.note[currentLang]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#253626] hover:bg-[#334634] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2.5"
                >
                  <NavIcon className="w-3.5 h-3.5" />
                  <span>{currentLang === 'it' ? 'APRI INDICAZIONI MAPPA' : 'GET DIRECTIONS →'}</span>
                </a>

                <a
                  href={`tel:${PROPERTY_INFO.phoneClean}`}
                  className="px-5 py-3 border border-[#1F2421]/20 hover:border-[#1F2421] text-[#1F2421] text-xs font-medium tracking-[0.16em] uppercase transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C26343]" />
                  <span>{PROPERTY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Arrival tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-body text-[#5C574F]">
              <div className="space-y-1.5 p-4 border border-[#1F2421]/10">
                <div className="flex items-center gap-2 text-[#1F2421] font-semibold uppercase tracking-wider">
                  <Car className="w-4 h-4 text-[#C26343]" />
                  <span>{currentLang === 'it' ? 'In Automobile' : 'By Car'}</span>
                </div>
                <p>
                  {currentLang === 'it'
                    ? 'Accesso diretto dalla SS148 Pontina o SP Nettuno-Campoverde. Parcheggio all’interno.'
                    : 'Direct access from SS148 Pontina or Nettuno-Campoverde. Gated private parking.'}
                </p>
              </div>

              <div className="space-y-1.5 p-4 border border-[#1F2421]/10">
                <div className="flex items-center gap-2 text-[#1F2421] font-semibold uppercase tracking-wider">
                  <MessageCircle className="w-4 h-4 text-[#C26343]" />
                  <span>{currentLang === 'it' ? 'Assistenza Arrivo' : 'Arrival Support'}</span>
                </div>
                <p>
                  {currentLang === 'it'
                    ? 'Chiamaci o scrivici su WhatsApp per posizioni in tempo reale e supporto all’ingresso.'
                    : 'Call or message on WhatsApp for real-time location sharing and entry assistance.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Framing */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] bg-[#E5DEC9] border border-[#1F2421]/10 overflow-hidden flex flex-col justify-between p-6">
              {/* Map background styling */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#253626_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#253626] font-semibold">
                  LATINA / APRILIA · LAZIO
                </span>
                <span className="text-[10px] text-[#7A7468] tracking-widest uppercase">
                  41.51° N, 12.78° E
                </span>
              </div>

              <div className="relative z-10 text-center my-auto space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#253626] text-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-[#EAE4D7]" />
                </div>
                <h4 className="font-editorial text-2xl text-[#1F2421]">
                  La Tenuta del Passero
                </h4>
                <p className="text-xs text-[#5C574F] font-body max-w-xs mx-auto">
                  {currentLang === 'it'
                    ? 'Via Corsira, 2 · 04011 Latina LT'
                    : 'Via Corsira, 2 · 04011 Latina LT, Italy'}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#1F2421]/10 text-center">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-[#C26343] hover:underline"
                >
                  {currentLang === 'it' ? 'Vedi su Google Maps →' : 'View on Google Maps →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

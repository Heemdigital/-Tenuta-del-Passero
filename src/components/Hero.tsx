import React from 'react';
import { ArrowDown, Calendar, Star, Sparkles, MapPin } from 'lucide-react';
import { PROPERTY_INFO } from '../data/content';

interface HeroProps {
  currentLang: 'it' | 'en';
  onOpenBooking: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBooking,
  onExploreClick,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#191D1A] text-[#FAF8F5] pt-28 pb-12 overflow-hidden">
      {/* Background Image with subtle zoom and editorial contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/la-tenuta-del-passero/exterior-grounds-main.jpg"
          alt="La Tenuta del Passero - Autentico esterno della tenuta e corte rurale"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out animate-pulse-none"
        />
        {/* Grain overlay */}
        <div className="absolute inset-0 editorial-grain opacity-40 mix-blend-overlay pointer-events-none" />
        {/* Editorial Scrims: Dark gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191D1A] via-[#191D1A]/55 to-[#191D1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#191D1A]/80 via-[#191D1A]/30 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Typographic Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Small Metadata */}
            <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#DCD5C9] font-body">
              <span>LAZIO</span>
              <span className="text-[#C26343]">·</span>
              <span>ITALY</span>
              <span className="text-[#C26343]">·</span>
              <span>HOSPITALITY</span>
            </div>

            {/* Tiny Editorial Label */}
            <p className="text-xs uppercase tracking-[0.2em] text-[#C26343] font-semibold">
              {currentLang === 'it' ? 'UN DIVERSO RITMO DI SOGGIORNO' : 'A DIFFERENT PACE OF STAY'}
            </p>

            {/* Large Dramatic Editorial Typography */}
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#FAF8F5] text-balance">
              {currentLang === 'it' ? (
                <>
                  UN LUOGO <br />
                  <span className="italic font-normal text-[#EAE4D7]">PER RALLENTARE</span> <br />
                  IL TEMPO.
                </>
              ) : (
                <>
                  A PLACE <br />
                  <span className="italic font-normal text-[#EAE4D7]">TO SLOW</span> <br />
                  DOWN.
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl text-base sm:text-lg text-[#D6CEBE] font-body leading-relaxed pt-2">
              {currentLang === 'it'
                ? 'Un’accogliente dimora di campagna nell’agro di Aprilia e Latina. Camere confortevoli, relax a bordo piscina, giardino verdeggiante e il piacere intimo di una colazione senza fretta.'
                : 'A welcoming Italian stay with comfortable accommodation, outdoor relaxation, and the simple pleasures of a slower getaway.'}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#C26343] hover:bg-[#a94f32] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 cursor-pointer"
              >
                <span>{currentLang === 'it' ? 'PRENOTA IL SOGGIORNO' : 'BOOK YOUR STAY'}</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 border border-[#FAF8F5]/30 hover:border-white text-[#FAF8F5] text-xs font-medium tracking-[0.2em] uppercase transition-colors flex items-center gap-2.5 backdrop-blur-xs cursor-pointer hover:bg-white/5"
              >
                <span>{currentLang === 'it' ? 'SCOPRI LA TENUTA' : 'EXPLORE THE ESTATE'}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#DCD5C9]" />
              </button>
            </div>
          </div>

          {/* Right Floating Editorial Vignette Card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end">
            <div className="p-6 bg-[#253626]/85 backdrop-blur-md border border-white/10 text-[#FAF8F5] space-y-4 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-[#D6CEBE]">
                <span className="flex items-center gap-1.5 font-medium tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#C26343]" />
                  <span>Aprilia / Latina, Lazio</span>
                </span>
                <span className="flex items-center gap-1 text-[#D99B41]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-semibold">{PROPERTY_INFO.ratings.google.score}</span>
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <p className="font-editorial text-lg italic text-[#FAF8F5] leading-snug">
                {currentLang === 'it'
                  ? '«Un’oasi di pace nel verde, ideale per rigenerarsi e godere della vera ospitalità italiana.»'
                  : '«An oasis of peace wrapped in greenery, ideal for unwinding and enjoying authentic Italian hospitality.»'}
              </p>

              <div className="text-xs text-[#D6CEBE] flex items-center justify-between pt-1">
                <span>{currentLang === 'it' ? 'Piscina & Colazione inclusa' : 'Pool & Breakfast included'}</span>
                <span className="tracking-widest uppercase font-semibold text-[#FAF8F5]">
                  109+ RECENSIONI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-column Operational Strip below the hero split */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 border-t border-white/15 text-xs text-[#DCD5C9] font-body">
          <div className="flex flex-col space-y-1">
            <span className="uppercase tracking-[0.16em] text-white/50 text-[10px]">
              {currentLang === 'it' ? '01 / AMBIENTE' : '01 / GROUNDS'}
            </span>
            <span className="text-white font-medium text-sm">
              {currentLang === 'it' ? 'Piscina & Ampio Giardino' : 'Outdoor Pool & Garden'}
            </span>
            <span className="text-white/70 text-[11px]">
              {currentLang === 'it' ? 'Solarium e lettini nel verde' : 'Sun terrace & green lawns'}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="uppercase tracking-[0.16em] text-white/50 text-[10px]">
              {currentLang === 'it' ? '02 / MATTINO' : '02 / MORNINGS'}
            </span>
            <span className="text-white font-medium text-sm">
              {currentLang === 'it' ? 'Colazione Inclusa' : 'Complimentary Breakfast'}
            </span>
            <span className="text-white/70 text-[11px]">
              {currentLang === 'it' ? 'Caffè espresso e dolci freschi' : 'Italian espresso & morning treats'}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="uppercase tracking-[0.16em] text-white/50 text-[10px]">
              {currentLang === 'it' ? '03 / COMFORT' : '03 / ROOMS'}
            </span>
            <span className="text-white font-medium text-sm">
              {currentLang === 'it' ? 'Aria Condizionata & TV' : 'Air Conditioning & TV'}
            </span>
            <span className="text-white/70 text-[11px]">
              {currentLang === 'it' ? 'Zanzariere e bagno privato' : 'Mosquito nets & private bath'}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="uppercase tracking-[0.16em] text-white/50 text-[10px]">
              {currentLang === 'it' ? '04 / SERVIZI' : '04 / ESSENTIALS'}
            </span>
            <span className="text-white font-medium text-sm">
              {currentLang === 'it' ? 'Wi-Fi & Parcheggio Free' : 'Free Wi-Fi & Parking'}
            </span>
            <span className="text-white/70 text-[11px]">
              {currentLang === 'it' ? 'Posto auto interno alla tenuta' : 'Secure private on-site spaces'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

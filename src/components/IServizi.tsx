import React from 'react';
import { AMENITIES } from '../data/content';
import { Wifi, Coffee, Waves, Car, Wind, Users, Trees, Wine } from 'lucide-react';

interface IServiziProps {
  currentLang: 'it' | 'en';
}

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  Waves: <Waves className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Trees: <Trees className="w-5 h-5" />,
  Wine: <Wine className="w-5 h-5" />,
};

export const IServizi: React.FC<IServiziProps> = ({ currentLang }) => {
  return (
    <section id="servizi" className="py-24 md:py-32 bg-[#FAF8F5] text-[#1F2421]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'I SERVIZI' : 'ESSENTIALS'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it'
                ? 'L’ESSENZIALE, SENZA COMPLICAZIONI.'
                : 'THE ESSENTIALS, MADE SIMPLE.'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#5C574F] font-body leading-relaxed">
            {currentLang === 'it'
              ? 'Tutti i servizi verificati della struttura, pensati per garantirvi un soggiorno comodo e spensierato.'
              : 'Verified facilities and amenities at the property, curated for a seamless and restful stay.'}
          </p>
        </div>

        {/* Editorial Clean List with Thin Hairline Rules (No repetitive rounded cards!) */}
        <div className="divide-y divide-[#1F2421]/10 pt-4">
          {AMENITIES.map((amenity, index) => (
            <div
              key={amenity.id}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#F5F2EB]/50 transition-colors px-2"
            >
              {/* Index & Icon */}
              <div className="md:col-span-3 flex items-center gap-4 text-[#C26343]">
                <span className="text-xs font-mono tabular-nums text-[#7A7468]">
                  0{index + 1}
                </span>
                <div className="p-2 bg-[#F5F2EB] text-[#253626] group-hover:text-[#C26343] transition-colors">
                  {iconMap[amenity.iconName]}
                </div>
                <span className="text-xs uppercase tracking-widest text-[#7A7468] hidden sm:inline font-body">
                  {amenity.category}
                </span>
              </div>

              {/* Title in Editorial Serif */}
              <div className="md:col-span-4">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1F2421] tracking-tight group-hover:text-[#253626] transition-colors">
                  {amenity.title[currentLang]}
                </h3>
              </div>

              {/* Description & Verification Badge */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-2">
                <p className="text-sm text-[#4A4740] font-body leading-relaxed">
                  {amenity.description[currentLang]}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#7A7468] font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#334634]" />
                  <span>{currentLang === 'it' ? 'Servizio incluso e confermato' : 'Confirmed on-site amenity'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

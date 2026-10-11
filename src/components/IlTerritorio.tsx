import React from 'react';
import { TERRITORY_SPOTS } from '../data/content';
import { Navigation as NavIcon } from 'lucide-react';

interface IlTerritorioProps {
  currentLang: 'it' | 'en';
  onOpenLightbox?: (src: string, caption: string) => void;
}

export const IlTerritorio: React.FC<IlTerritorioProps> = ({ currentLang }) => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F2EB] text-[#1F2421]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'IL TERRITORIO' : 'AROUND THE PROPERTY'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it'
                ? 'SCOPRIRE LA ZONA CON I PROPRI TEMPI.'
                : 'DISCOVER THE AREA AT YOUR OWN PACE.'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#5C574F] font-body leading-relaxed">
            {currentLang === 'it'
              ? 'Posizionata nell’agro tra Aprilia e Latina nel basso Lazio, la tenuta è un punto di partenza sereno verso oasi naturali e coste tirreniche.'
              : 'Set in the rural plains between Aprilia and Latina in southern Lazio, the estate offers a calm base for exploring coastal dunes and nature reserves.'}
          </p>
        </div>

        {/* Territory Highlights Grid: Editorial Typographic Itinerary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {TERRITORY_SPOTS.map((spot) => (
            <div
              key={spot.id}
              className="bg-[#FAF8F5] border border-[#1F2421]/10 p-8 flex flex-col justify-between space-y-6 hover:border-[#C26343]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-body border-b border-[#1F2421]/10 pb-3">
                  <span className="font-semibold text-[#C26343] uppercase tracking-wider">
                    {spot.distance[currentLang]}
                  </span>
                  <span className="text-[#7A7468] tracking-widest uppercase">Lazio</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1F2421]">
                  {spot.name[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A4740] font-body leading-relaxed">
                  {spot.description[currentLang]}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#253626] pt-2">
                <NavIcon className="w-3.5 h-3.5 text-[#C26343]" />
                <span>{currentLang === 'it' ? 'Itinerario Consigliato' : 'Recommended Route'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

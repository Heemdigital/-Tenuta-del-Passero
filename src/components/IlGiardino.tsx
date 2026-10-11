import React from 'react';
import { EditorialImage } from './EditorialImage';
import { Trees, Compass } from 'lucide-react';

interface IlGiardinoProps {
  currentLang: 'it' | 'en';
  onOpenLightbox: (src: string, caption: string) => void;
}

export const IlGiardino: React.FC<IlGiardinoProps> = ({ currentLang, onOpenLightbox }) => {
  const garden1 = '/images/la-tenuta-del-passero/garden-lawn-grounds.jpg';
  const garden2 = '/images/la-tenuta-del-passero/patio-covered-seating.jpg';
  const garden3 = '/images/la-tenuta-del-passero/property-outdoor-10.jpg';

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#1F2421]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'ALL’APERTO' : 'OUTDOOR GROUNDS'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it' ? 'PIÙ ARIA. MENO FRETTA.' : 'MORE AIR. LESS RUSH.'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#5C574F] font-body leading-relaxed">
            {currentLang === 'it'
              ? 'Il giardino della tenuta è uno spazio disteso dove passeggiare a piedi nudi sull’erba, respirare il profumo degli alberi e lasciare che i bambini giochino in sicurezza.'
              : 'The estate garden is an unhurried expanse to walk barefoot across lawns, breathe fresh countryside breezes, and enjoy safe outdoor moments.'}
          </p>
        </div>

        {/* Asymmetrical Layout (Not a repetitive 3-column grid) */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Large Vertical Feature (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <EditorialImage
              src={garden1}
              alt="Pergola fiorita e zona d'ombra nel giardino della tenuta"
              aspectRatio="4/3"
              caption={
                currentLang === 'it'
                  ? 'Zone d’ombra e pergolato tra gli alberi'
                  : 'Shaded pergola and seating beneath foliage'
              }
              onClick={() =>
                onOpenLightbox(
                  garden1,
                  currentLang === 'it'
                    ? 'Zone d’ombra e pergolato tra gli alberi'
                    : 'Shaded pergola and seating beneath foliage'
                )
              }
            />

            <div className="p-6 bg-[#F5F2EB] border border-[#1F2421]/10 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#253626] font-semibold block">
                {currentLang === 'it' ? 'SPAZI VIVI E NATURALEZZA' : 'NATURAL LIVING'}
              </span>
              <p className="text-sm text-[#4A4740] font-body leading-relaxed">
                {currentLang === 'it'
                  ? 'La tenuta offre ampi spazi all’aperto con terrazza solarium e angoli appartati con panchine e tavolini dove soffermarsi a conversare o bere una bibita fresca.'
                  : 'The grounds offer generous outdoor spaces featuring a sun terrace and tranquil nooks with tables and chairs for conversation or cold drinks in the shade.'}
              </p>
            </div>
          </div>

          {/* Staggered Right Pair (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            <div className="space-y-4">
              <EditorialImage
                src={garden2}
                alt="Alberi della campagna laziale e luce dorata"
                aspectRatio="3/4"
                caption={
                  currentLang === 'it'
                    ? 'Verde campestre e luce dorata del tramonto'
                    : 'Countryside greenery & golden sunset light'
                }
                onClick={() =>
                  onOpenLightbox(
                    garden2,
                    currentLang === 'it'
                      ? 'Verde campestre e luce dorata del tramonto'
                      : 'Countryside greenery & golden sunset light'
                  )
                }
              />
            </div>

            <div className="space-y-4 pt-6 sm:pt-16">
              <EditorialImage
                src={garden3}
                alt="Terrazza all’aperto con tavoli e relax"
                aspectRatio="1/1"
                caption={
                  currentLang === 'it'
                    ? 'Angoli di quiete all’aria aperta'
                    : 'Quiet moments in the fresh air'
                }
                onClick={() =>
                  onOpenLightbox(
                    garden3,
                    currentLang === 'it'
                      ? 'Angoli di quiete all’aria aperta'
                      : 'Quiet moments in the fresh air'
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

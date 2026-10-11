import React from 'react';
import { EditorialImage } from './EditorialImage';
import { Sun, Waves, Sparkles } from 'lucide-react';

interface LaPiscinaProps {
  currentLang: 'it' | 'en';
  onOpenLightbox: (src: string, caption: string) => void;
}

export const LaPiscina: React.FC<LaPiscinaProps> = ({ currentLang, onOpenLightbox }) => {
  const poolMain = '/images/la-tenuta-del-passero/swimming-pool-above-ground.jpg';
  const poolDetail = '/images/la-tenuta-del-passero/property-terrace-9.jpg';

  return (
    <section className="py-24 md:py-36 bg-[#253626] text-[#FAF8F5] relative overflow-hidden">
      {/* Delicate background texture */}
      <div className="absolute inset-0 editorial-grain opacity-25 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header Layout */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#DCD5C9] font-body">
            <Waves className="w-3.5 h-3.5 text-[#C26343]" />
            <span>{currentLang === 'it' ? 'RELAX ALL’APERTO' : 'OUTDOOR RELAXATION'}</span>
          </div>

          <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-balance">
            {currentLang === 'it' ? (
              <>
                PRENDITI <br />
                <span className="italic text-[#EAE4D7] font-normal">IL TUO TEMPO.</span>
              </>
            ) : (
              <>
                TAKE <br />
                <span className="italic text-[#EAE4D7] font-normal">YOUR TIME.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#D6CEBE] font-body leading-relaxed max-w-xl pt-2">
            {currentLang === 'it'
              ? 'Un momento per fermarsi, godere della natura circostante e lasciare che la giornata scorra al suo ritmo naturale.'
              : 'A moment to pause, enjoy the surroundings, and let the day move at its own pace.'}
          </p>
        </div>

        {/* Cinematic Pool Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Dominant Image */}
          <div className="lg:col-span-8">
            <EditorialImage
              src={poolMain}
              alt="Piscina all’aperto di La Tenuta del Passero"
              aspectRatio="16/9"
              caption={
                currentLang === 'it'
                  ? 'La piscina all’aperto immersa nel verde · Aprilia / Latina'
                  : 'The outdoor swimming pool nestled in greenery · Aprilia / Latina'
              }
              onClick={() =>
                onOpenLightbox(
                  poolMain,
                  currentLang === 'it'
                    ? 'La piscina all’aperto immersa nel verde · Aprilia / Latina'
                    : 'The outdoor swimming pool nestled in greenery · Aprilia / Latina'
                )
              }
            />
          </div>

          {/* Side Narrative & Secondary Detail */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 bg-[#1B281C]/80 border border-white/10 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C26343] font-semibold block">
                {currentLang === 'it' ? 'SERENITÀ ESTIVA' : 'SUMMER SERENITY'}
              </span>
              <p className="font-editorial text-xl italic text-[#FAF8F5] leading-snug">
                {currentLang === 'it'
                  ? '«L’acqua limpida, il riflesso degli alberi e il silenzio interrotto solo dai suoni della campagna.»'
                  : '«Clear sparkling water, reflections of the trees, and silence broken only by the gentle sounds of the countryside.»'}
              </p>
              <p className="text-xs sm:text-sm text-[#DCD5C9] font-body leading-relaxed">
                {currentLang === 'it'
                  ? 'La piscina della Tenuta è a disposizione degli ospiti per tuffarsi al rientro da una gita o dedicare un intero pomeriggio alla lettura sotto l’ombrellone.'
                  : 'The estate pool is available for guests to refresh after day trips or dedicate an entire afternoon to reading under the summer shade.'}
              </p>
            </div>

            <EditorialImage
              src={poolDetail}
              alt="Lettini prendisole a bordo piscina"
              aspectRatio="4/3"
              caption={
                currentLang === 'it'
                  ? 'Solarium con lettini nel prato'
                  : 'Sun loungers by the lawn'
              }
              onClick={() =>
                onOpenLightbox(
                  poolDetail,
                  currentLang === 'it'
                    ? 'Solarium con lettini nel prato'
                    : 'Sun loungers by the lawn'
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

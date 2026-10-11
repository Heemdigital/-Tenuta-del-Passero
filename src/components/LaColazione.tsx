import React from 'react';
import { EditorialImage } from './EditorialImage';
import { Coffee, SunMedium } from 'lucide-react';

interface LaColazioneProps {
  currentLang: 'it' | 'en';
  onOpenLightbox: (src: string, caption: string) => void;
}

export const LaColazione: React.FC<LaColazioneProps> = ({ currentLang, onOpenLightbox }) => {
  const breakfastImg = '/images/la-tenuta-del-passero/patio-covered-seating.jpg';
  const coffeeImg = '/images/la-tenuta-del-passero/property-detail-6.jpg';

  return (
    <section className="py-24 md:py-32 bg-[#F5F2EB] text-[#1F2421] border-t border-[#1F2421]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-8">
              <EditorialImage
                src={breakfastImg}
                alt="Veranda coperta e area all'aperto di La Tenuta del Passero"
                aspectRatio="4/3"
                caption={
                  currentLang === 'it'
                    ? 'La veranda coperta e l’area all’aperto per la colazione'
                    : 'The covered veranda & outdoor morning seating area'
                }
                onClick={() =>
                  onOpenLightbox(
                    breakfastImg,
                    currentLang === 'it'
                      ? 'La colazione del mattino · Inclusa nel soggiorno'
                      : 'Morning breakfast · Included with your stay'
                )
              }
              />
            </div>

            <div className="sm:col-span-4 hidden sm:block">
              <EditorialImage
                src={coffeeImg}
                alt="Scorcio autentico della proprietà"
                aspectRatio="1/1"
                caption={currentLang === 'it' ? 'Scorcio della tenuta' : 'Estate grounds view'}
                onClick={() =>
                  onOpenLightbox(
                    coffeeImg,
                    currentLang === 'it' ? 'Espresso caldo' : 'Fresh Italian espresso'
                  )
                }
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.24em] uppercase text-[#C26343] font-body font-semibold">
              <Coffee className="w-3.5 h-3.5" />
              <span>{currentLang === 'it' ? 'IL RISVEGLIO' : 'GOOD MORNINGS'}</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it' ? (
                <>
                  INIZIARE IL GIORNO <br />
                  <span className="italic font-normal text-[#334634]">CON CALMA.</span>
                </>
              ) : (
                <>
                  START THE DAY <br />
                  <span className="italic font-normal text-[#334634]">SLOWLY.</span>
                </>
              )}
            </h2>

            <p className="text-base text-[#4A4740] font-body leading-relaxed">
              {currentLang === 'it'
                ? 'Un inizio accogliente della giornata con la prima colazione inclusa nei servizi della tenuta. Svegliarsi senza fretta, scendere in sala o all’aperto e concedersi il piacere di un buon caffè espresso accompagnato da fragranti proposte per iniziare al meglio la giornata.'
                : 'A welcoming start to the day, with breakfast included among the property’s listed amenities. Waking up without rush, breathing the crisp morning air, and enjoying hot espresso paired with sweet treats to begin the day on a peaceful note.'}
            </p>

            <div className="p-5 bg-white/70 border border-[#1F2421]/10 space-y-2 text-xs font-body text-[#5C574F]">
              <div className="flex items-center justify-between font-medium text-[#1F2421]">
                <span>{currentLang === 'it' ? 'Colazione Inclusa nel Soggiorno' : 'Breakfast Included with Stay'}</span>
                <span className="text-[#C26343] font-semibold">✓ COMPRESA</span>
              </div>
              <p>
                {currentLang === 'it'
                  ? 'Servita in un’atmosfera familiare e rilassata per iniziare la giornata secondo i vostri tempi.'
                  : 'Served in an authentic, tranquil atmosphere so you can wake up at your own natural pace.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

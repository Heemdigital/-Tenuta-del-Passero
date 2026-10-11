import React from 'react';
import { EditorialImage } from './EditorialImage';

interface IlLuogoProps {
  currentLang: 'it' | 'en';
  onOpenLightbox: (src: string, caption: string) => void;
}

export const IlLuogo: React.FC<IlLuogoProps> = ({ currentLang, onOpenLightbox }) => {
  const mainImg = '/images/la-tenuta-del-passero/exterior-courtyard.jpg';
  const detailImg = '/images/la-tenuta-del-passero/patio-covered-seating.jpg';

  return (
    <section id="luogo" className="py-24 md:py-32 bg-[#FAF8F5] text-[#1F2421] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header with Asymmetry */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'BENVENUTI A LA TENUTA' : 'BENVENUTI · WELCOME'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it' ? 'UN LUOGO DOVE SENTIRSI A CASA.' : 'A PLACE TO FEEL AT EASE.'}
            </h2>
          </div>

          <div className="text-xs uppercase tracking-[0.2em] text-[#7A7468] font-body">
            <span>ARRIVE</span>
            <span className="mx-2 text-[#C26343]">·</span>
            <span>BREATHE</span>
            <span className="mx-2 text-[#C26343]">·</span>
            <span>UNWIND</span>
          </div>
        </div>

        {/* Content Layout: 2 Columns Asymmetrical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Text Narrative with Drop Cap */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-editorial text-2xl sm:text-3xl italic text-[#334634] leading-snug">
              {currentLang === 'it'
                ? '«La quiete della campagna laziale, la premura autentica dei proprietari e il respiro di spazi aperti.»'
                : '«The peace of the Lazio countryside, attentive personal care from the owners, and the breath of wide open spaces.»'}
            </p>

            <div className="h-px w-16 bg-[#C26343]" />

            <div className="text-base text-[#4A4740] font-body leading-relaxed space-y-4">
              <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:text-[#253626] first-letter:leading-none">
                {currentLang === 'it'
                  ? 'La Tenuta del Passero è una struttura ricettiva accogliente situata nell’agro tra Aprilia e Latina. Nata con la vocazione di offrire un rifugio rilassante lontano dai ritmi serrati della città, unisce la spontaneità dell’ospitalità familiare al piacere di vivere all’aperto.'
                  : 'La Tenuta del Passero is a welcoming hospitality destination set in the tranquil countryside between Aprilia and Latina, Lazio. Conceived as a restful haven away from the rapid pace of city routines, it combines the genuine warmth of personal hospitality with the pleasures of outdoor leisure.'}
              </p>
              <p>
                {currentLang === 'it'
                  ? 'Gli ospiti trovano qui una dimensione intima: il verde curato del giardino, la rinfrescante piscina illuminata dal sole pomeridiano, camere dotate dei comfort essenziali e la dolcezza di un risveglio accompagnato dal profumo del caffè.'
                  : 'Guests discover an intimate, unpretentious atmosphere: curated green gardens, a refreshing outdoor swimming pool catching the warm afternoon light, rooms equipped with verified essential comforts, and the simple luxury of an unhurried morning espresso.'}
              </p>
            </div>

            {/* Quiet feature indicators */}
            <div className="pt-4 border-t border-[#1F2421]/10 grid grid-cols-2 gap-4 text-xs font-body text-[#5C574F]">
              <div>
                <span className="block text-[#1F2421] font-semibold uppercase tracking-wider mb-1">
                  {currentLang === 'it' ? 'Gestione Personale' : 'Personal Hospitality'}
                </span>
                <span>{currentLang === 'it' ? 'Accoglienza attenta e discreta' : 'Attentive, heartfelt presence'}</span>
              </div>
              <div>
                <span className="block text-[#1F2421] font-semibold uppercase tracking-wider mb-1">
                  {currentLang === 'it' ? 'Campagna & Relax' : 'Peaceful Setting'}
                </span>
                <span>{currentLang === 'it' ? 'Silenzio e cieli aperti' : 'Quiet nights and open skies'}</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition: Asymmetrical Editorial Pair */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
            <div className="sm:col-span-8">
              <EditorialImage
                src={mainImg}
                alt="La Tenuta del Passero – Giardino e architettura della tenuta"
                aspectRatio="4/3"
                caption={
                  currentLang === 'it'
                    ? 'La tenuta nel verde dell’agro pontino · Lazio'
                    : 'The estate grounds in the Lazio countryside'
                }
                onClick={() =>
                  onOpenLightbox(
                    mainImg,
                    currentLang === 'it'
                      ? 'La tenuta nel verde dell’agro pontino · Lazio'
                      : 'The estate grounds in the Lazio countryside'
                  )
                }
              />
            </div>

            <div className="sm:col-span-4 -mt-6 sm:mt-0">
              <EditorialImage
                src={detailImg}
                alt="Dettaglio architettonico e terrazza solarium"
                aspectRatio="3/4"
                caption={
                  currentLang === 'it'
                    ? 'Dettagli e terrazza all’aperto'
                    : 'Terrace & outdoor details'
                }
                onClick={() =>
                  onOpenLightbox(
                    detailImg,
                    currentLang === 'it'
                      ? 'Dettagli e terrazza all’aperto'
                      : 'Terrace & outdoor details'
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

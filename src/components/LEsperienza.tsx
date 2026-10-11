import React from 'react';
import { EditorialImage } from './EditorialImage';
import { Sparkles, Heart } from 'lucide-react';

interface LEsperienzaProps {
  currentLang: 'it' | 'en';
  onOpenBooking: () => void;
  onOpenLightbox: (src: string, caption: string) => void;
}

export const LEsperienza: React.FC<LEsperienzaProps> = ({
  currentLang,
  onOpenBooking,
  onOpenLightbox,
}) => {
  const relaxImg = '/images/la-tenuta-del-passero/garden-lawn-grounds.jpg';
  const porchImg = '/images/la-tenuta-del-passero/exterior-courtyard.jpg';

  const moments = [
    {
      num: '01',
      title: { it: 'Il silenzio del risveglio', en: 'Morning Quietude' },
      desc: {
        it: 'Aprire la finestra e sentire solo il fruscio del vento tra le fronde, prima del primo caffè.',
        en: 'Opening the shutters to hear only breeze through the trees before the morning’s first espresso.',
      },
    },
    {
      num: '02',
      title: { it: 'Pomeriggi a pelo d’acqua', en: 'Waterfront Afternoons' },
      desc: {
        it: 'La pelle calda di sole e la frescura della piscina, leggendo un libro senza guardare l’orologio.',
        en: 'Sun-warmed skin and the cool plunge into the pool, reading a book without ever checking the time.',
      },
    },
    {
      num: '03',
      title: { it: 'L’accoglienza che fa casa', en: 'Heartfelt Welcome' },
      desc: {
        it: 'La disponibilità sincera dei padroni di casa, sempre pronti con un consiglio o una parola gentile.',
        en: 'The genuine attentiveness of the owners, always on hand with local advice and warm hospitality.',
      },
    },
    {
      num: '04',
      title: { it: 'Il cielo stellato della campagna', en: 'Starlit Evenings' },
      desc: {
        it: 'Serate distese all’aperto, lontani dalle luci e dai rumori della città.',
        en: 'Unhurried outdoor evenings on the terrace, far away from city streetlights and traffic hum.',
      },
    },
  ];

  return (
    <section id="esperienza" className="py-24 md:py-36 bg-[#1F2421] text-[#FAF8F5] relative overflow-hidden">
      <div className="absolute inset-0 editorial-grain opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Editorial Masthead */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block">
            {currentLang === 'it' ? 'L’ESPERIENZA' : 'THE EXPERIENCE'}
          </span>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-balance">
            {currentLang === 'it' ? (
              <>
                UN PO’ PIÙ DI TEMPO <br />
                <span className="italic font-normal text-[#EAE4D7]">PER TE STESSO.</span>
              </>
            ) : (
              <>
                A LITTLE MORE TIME <br />
                <span className="italic font-normal text-[#EAE4D7]">FOR YOURSELF.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#D6CEBE] font-body leading-relaxed max-w-xl pt-2">
            {currentLang === 'it'
              ? 'Nessuna scaletta da rincorrere. Solo la libertà di riposare, nuotare, respirare e godere dell’ospitalità più genuina.'
              : 'No packed itineraries to chase. Just the freedom to rest, swim, breathe fresh air, and savor heartfelt Italian hospitality.'}
          </p>
        </div>

        {/* 4 Moments Grid with clean typography & hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/15 pb-16">
          {moments.map((item) => (
            <div key={item.num} className="space-y-3">
              <span className="font-mono text-xs text-[#C26343] tracking-wider">
                {item.num}
              </span>
              <h3 className="font-editorial text-2xl text-[#FAF8F5]">
                {item.title[currentLang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#D6CEBE] font-body leading-relaxed">
                {item.desc[currentLang]}
              </p>
            </div>
          ))}
        </div>

        {/* Asymmetrical Visual Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10">
          <div className="lg:col-span-7">
            <EditorialImage
              src={relaxImg}
              alt="Momenti di quiete e lettura all'aperto"
              aspectRatio="16/9"
              caption={
                currentLang === 'it'
                  ? 'Il tempo che scorre senza fretta · La Tenuta del Passero'
                  : 'Time flowing without rush · La Tenuta del Passero'
              }
              onClick={() =>
                onOpenLightbox(
                  relaxImg,
                  currentLang === 'it'
                    ? 'Il tempo che scorre senza fretta · La Tenuta del Passero'
                    : 'Time flowing without rush · La Tenuta del Passero'
                )
              }
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="font-editorial text-2xl sm:text-3xl italic text-[#FAF8F5] leading-snug">
              {currentLang === 'it'
                ? '«Il lusso più raro oggi non è l’eccesso, ma avere lo spazio per non fare nulla.»'
                : '«The rarest luxury today is not excess, but having the space to do simply nothing.»'}
            </p>
            <p className="text-xs sm:text-sm text-[#DCD5C9] font-body leading-relaxed">
              {currentLang === 'it'
                ? 'Che tu sia in viaggio verso le coste del Circeo, di passaggio per lavoro nell’area pontina, o alla ricerca di un fine settimana di riposo con la famiglia, troverai un ambiente protetto e rigenerante.'
                : 'Whether traveling towards the Circeo coast, passing through for business in the Pontine district, or seeking a quiet family weekend away from the city, you will find a protected, restorative environment.'}
            </p>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#C26343] hover:bg-[#a94f32] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{currentLang === 'it' ? 'ORGANIZZA IL TUO SOGGIORNO' : 'PLAN YOUR STAY'}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

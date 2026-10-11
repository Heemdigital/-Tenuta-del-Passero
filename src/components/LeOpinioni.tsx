import React from 'react';
import { PROPERTY_INFO, REVIEWS } from '../data/content';
import { Star, MessageSquare } from 'lucide-react';

interface LeOpinioniProps {
  currentLang: 'it' | 'en';
}

export const LeOpinioni: React.FC<LeOpinioniProps> = ({ currentLang }) => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#1F2421] border-t border-[#1F2421]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'LE OPINIONI DEGLI OSPITI' : 'GUEST IMPRESSIONS'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it'
                ? 'UN LUOGO A CUI TORNARE.'
                : 'A PLACE TO COME BACK TO.'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#5C574F] font-body leading-relaxed">
            {currentLang === 'it'
              ? 'Valutazioni e riscontri autentici condivisi dai viaggiatori sulle piattaforme pubbliche ufficiali.'
              : 'Authentic verified ratings and reflections shared by travelers across official review platforms.'}
          </p>
        </div>

        {/* Verified Platforms Rating Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 pb-12">
          {/* Google Reviews */}
          <div className="p-6 bg-[#F5F2EB] border border-[#1F2421]/10 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#7A7468] font-body font-semibold">
                GOOGLE REVIEWS
              </span>
              <div className="flex items-center text-[#D99B41]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-editorial text-5xl font-medium text-[#1F2421]">
                {PROPERTY_INFO.ratings.google.score}
              </span>
              <span className="text-xs text-[#7A7468] font-body">
                / 5.0 · <span className="tabular-nums font-semibold text-[#1F2421]">{PROPERTY_INFO.ratings.google.count}</span> {currentLang === 'it' ? 'recensioni verificate' : 'verified reviews'}
              </span>
            </div>

            <p className="text-xs text-[#5C574F] font-body">
              {currentLang === 'it'
                ? 'Valutazione media basata su oltre 100 recensioni certificate di ospiti su Google Maps.'
                : 'Average rating based on over 100 verified guest reviews on Google Maps.'}
            </p>
          </div>

          {/* TripAdvisor */}
          <div className="p-6 bg-[#F5F2EB] border border-[#1F2421]/10 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#7A7468] font-body font-semibold">
                TRIPADVISOR
              </span>
              <div className="flex items-center text-[#D99B41]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-editorial text-5xl font-medium text-[#1F2421]">
                {PROPERTY_INFO.ratings.tripadvisor.score}
              </span>
              <span className="text-xs text-[#7A7468] font-body">
                / 5.0 · <span className="tabular-nums font-semibold text-[#1F2421]">{PROPERTY_INFO.ratings.tripadvisor.count}</span> {currentLang === 'it' ? 'recensioni verificate' : 'verified reviews'}
              </span>
            </div>

            <p className="text-xs text-[#5C574F] font-body">
              {currentLang === 'it'
                ? 'Apprezzamento continuo per la disponibilità dei titolari, la pulizia e la piscina.'
                : 'Consistent traveler appreciation for host attentiveness, cleanliness, and the pool.'}
            </p>
          </div>
        </div>

        {/* Verified Guest Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#1F2421]/10">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#7A7468] font-body">
                  <span className="font-semibold text-[#C26343]">{rev.source}</span>
                  <span>·</span>
                  <span>{rev.date}</span>
                </div>

                <h3 className="font-editorial text-xl italic text-[#253626] leading-snug">
                  «{rev.highlight[currentLang]}»
                </h3>

                <p className="text-xs sm:text-sm text-[#4A4740] font-body leading-relaxed">
                  {rev.text[currentLang]}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1F2421]/5 text-xs text-[#7A7468] font-body">
                <span className="font-medium text-[#1F2421]">{rev.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

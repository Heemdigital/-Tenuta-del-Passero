import React, { useState } from 'react';
import { ROOMS, Room } from '../data/content';
import { EditorialImage } from './EditorialImage';
import { Check, Users, Bed, Wind, Tv, ShieldCheck, ChevronRight } from 'lucide-react';

interface CamereProps {
  currentLang: 'it' | 'en';
  onSelectRoomForBooking: (roomId: string) => void;
  onOpenLightbox: (src: string, caption: string) => void;
}

export const Camere: React.FC<CamereProps> = ({
  currentLang,
  onSelectRoomForBooking,
  onOpenLightbox,
}) => {
  const [activeRoomId, setActiveRoomId] = useState<string>(ROOMS[0].id);
  const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];

  return (
    <section id="camere" className="py-24 md:py-32 bg-[#F5F2EB] text-[#1F2421] border-t border-[#1F2421]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1F2421]/10">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
              {currentLang === 'it' ? 'IL SOGGIORNO' : 'ACCOMMODATION'}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1F2421] tracking-tight leading-tight">
              {currentLang === 'it'
                ? 'UN LUOGO CONFORTEVOLE A CUI TORNARE.'
                : 'A COMFORTABLE PLACE TO RETURN TO.'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#5C574F] font-body leading-relaxed">
            {currentLang === 'it'
              ? 'Ambienti luminosi e curati, pensati per il riposo dopo una giornata all’aperto o un itinerario nel Lazio.'
              : 'Bright, welcoming spaces designed for restful slumbers after a sunlit day outdoors or exploring Lazio.'}
          </p>
        </div>

        {/* Room Selector Strip (Interactive filter tabs) */}
        <div className="pt-10 flex flex-wrap gap-2 md:gap-4 border-b border-[#1F2421]/10 pb-6">
          {ROOMS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                className={`px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#253626] text-[#FAF8F5] shadow-xs'
                    : 'bg-white/60 text-[#4A4740] hover:bg-white hover:text-[#1F2421]'
                }`}
              >
                {room.name[currentLang]}
              </button>
            );
          })}
        </div>

        {/* Active Room Editorial Presentation */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Visual: Dominant authentic room photograph */}
          <div className="lg:col-span-7">
            <EditorialImage
              src={activeRoom.image}
              alt={activeRoom.name[currentLang]}
              aspectRatio="16/9"
              caption={`${activeRoom.name[currentLang]} · La Tenuta del Passero`}
              onClick={() =>
                onOpenLightbox(
                  activeRoom.image,
                  `${activeRoom.name[currentLang]} · La Tenuta del Passero`
                )
              }
            />
          </div>

          {/* Room Details & Amenities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C26343] font-semibold">
                {activeRoom.tagline[currentLang]}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1F2421] tracking-tight">
                {activeRoom.name[currentLang]}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#4A4740] font-body leading-relaxed">
              {activeRoom.description[currentLang]}
            </p>

            {/* Room Specs: Unboxed Metadata */}
            <div className="flex items-center gap-6 py-3 border-y border-[#1F2421]/10 text-xs text-[#5C574F] font-body">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C26343]" />
                <span className="font-medium text-[#1F2421]">{activeRoom.capacity[currentLang]}</span>
              </div>
              <span className="text-[#1F2421]/20">·</span>
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#C26343]" />
                <span className="font-medium text-[#1F2421]">{activeRoom.bed[currentLang]}</span>
              </div>
            </div>

            {/* Verified Amenities Grid for this room */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#7A7468] font-semibold block">
                {currentLang === 'it' ? 'DOTAZIONI VERIFICATE' : 'VERIFIED AMENITIES'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#334634] font-body">
                {activeRoom.features[currentLang].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C26343] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA to book this room */}
            <div className="pt-4">
              <button
                onClick={() => onSelectRoomForBooking(activeRoom.id)}
                className="w-full sm:w-auto px-6 py-3 bg-[#253626] hover:bg-[#334634] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>
                  {currentLang === 'it'
                    ? `RICHIEDI QUESTA CAMERA`
                    : `INQUIRE ABOUT THIS ROOM`}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IlLuogo } from './components/IlLuogo';
import { Camere } from './components/Camere';
import { LaPiscina } from './components/LaPiscina';
import { IlGiardino } from './components/IlGiardino';
import { LaColazione } from './components/LaColazione';
import { IServizi } from './components/IServizi';
import { LEsperienza } from './components/LEsperienza';
import { LeOpinioni } from './components/LeOpinioni';
import { IlTerritorio } from './components/IlTerritorio';
import { DoveSiamo } from './components/DoveSiamo';
import { Prenotazione } from './components/Prenotazione';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'it' | 'en'>('it');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxCaption, setLightboxCaption] = useState('');

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'it' ? 'en' : 'it'));
  };

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setPreselectedRoomId(roomId);
    }
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
    setLightboxOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('luogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2421] selection:bg-[#C26343] selection:text-white">
      {/* Top Bar Navigation */}
      <Navigation
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main>
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          onExploreClick={handleExploreClick}
        />

        {/* Section 01 — IL LUOGO (BENVENUTI) */}
        <IlLuogo
          currentLang={currentLang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 02 — IL SOGGIORNO & CAMERE */}
        <Camere
          currentLang={currentLang}
          onSelectRoomForBooking={(roomId) => handleOpenBooking(roomId)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 03 — LA PISCINA */}
        <LaPiscina
          currentLang={currentLang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 04 — IL GIARDINO (ALL'APERTO) */}
        <IlGiardino
          currentLang={currentLang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 05 — LA COLAZIONE (GOOD MORNINGS) */}
        <LaColazione
          currentLang={currentLang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 06 — I SERVIZI (ESSENTIALS) */}
        <IServizi currentLang={currentLang} />

        {/* Section 07 — L'ESPERIENZA */}
        <LEsperienza
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 08 — LE OPINIONI DEGLI OSPITI */}
        <LeOpinioni currentLang={currentLang} />

        {/* Section 09 — IL TERRITORIO */}
        <IlTerritorio
          currentLang={currentLang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 10 — DOVE SIAMO */}
        <DoveSiamo currentLang={currentLang} />

        {/* Section 11 — PRENOTAZIONE / STAY PLANNER */}
        <Prenotazione
          currentLang={currentLang}
          preselectedRoomId={preselectedRoomId}
        />
      </main>

      {/* Editorial Footer */}
      <Footer currentLang={currentLang} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currentLang={currentLang}
        initialRoomId={preselectedRoomId}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        imageSrc={lightboxSrc}
        caption={lightboxCaption}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

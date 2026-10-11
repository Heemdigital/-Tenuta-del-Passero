import React, { useState } from 'react';
import { PROPERTY_INFO, ROOMS } from '../data/content';
import { Calendar, Users, Phone, MessageCircle, Mail, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';

interface PrenotazioneProps {
  currentLang: 'it' | 'en';
  preselectedRoomId?: string;
}

export const Prenotazione: React.FC<PrenotazioneProps> = ({
  currentLang,
  preselectedRoomId,
}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomId, setRoomId] = useState(preselectedRoomId || ROOMS[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update room if prop changes
  React.useEffect(() => {
    if (preselectedRoomId) {
      setRoomId(preselectedRoomId);
    }
  }, [preselectedRoomId]);

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Generate pre-filled WhatsApp message
  const generateWhatsAppMessage = () => {
    const text =
      currentLang === 'it'
        ? `Salve! Vorrei richiedere disponibilità presso La Tenuta del Passero.%0A` +
          `• Nome: ${encodeURIComponent(name || 'Ospite')}%0A` +
          `• Camera: ${encodeURIComponent(selectedRoom.name.it)}%0A` +
          `• Ospiti: ${guests}%0A` +
          `• Check-in: ${checkIn || 'Da definire'}%0A` +
          `• Check-out: ${checkOut || 'Da definire'}%0A` +
          `• Note: ${encodeURIComponent(notes || 'Nessuna nota specifica')}`
        : `Hello! I would like to inquire about availability at La Tenuta del Passero.%0A` +
          `• Name: ${encodeURIComponent(name || 'Guest')}%0A` +
          `• Room: ${encodeURIComponent(selectedRoom.name.en)}%0A` +
          `• Guests: ${guests}%0A` +
          `• Check-in: ${checkIn || 'To be decided'}%0A` +
          `• Check-out: ${checkOut || 'To be decided'}%0A` +
          `• Notes: ${encodeURIComponent(notes || 'None')}`;

    return `https://wa.me/393475778698?text=${text}`;
  };

  return (
    <section id="prenota" className="py-24 md:py-36 bg-[#253626] text-[#FAF8F5] relative overflow-hidden">
      <div className="absolute inset-0 editorial-grain opacity-25 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Booking Benefits & Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C26343] uppercase font-body block mb-2">
                {currentLang === 'it' ? 'PRENOTA IL TUO SOGGIORNO' : 'RESERVATIONS & INQUIRIES'}
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] tracking-tight leading-tight">
                {currentLang === 'it' ? (
                  <>
                    VIVI LA QUIETE <br />
                    <span className="italic font-normal text-[#EAE4D7]">DELLA TENUTA.</span>
                  </>
                ) : (
                  <>
                    EXPERIENCE <br />
                    <span className="italic font-normal text-[#EAE4D7]">THE ESTATE.</span>
                  </>
                )}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D6CEBE] font-body leading-relaxed">
              {currentLang === 'it'
                ? 'Prenotando direttamente con noi potrai concordare dettagli speciali, orari di arrivo e godere del miglior trattamento e contatto immediato con i proprietari.'
                : 'By reserving directly with us, you enjoy seamless direct communication with the hosts, flexible check-in coordination, and personalized attention.'}
            </p>

            {/* Direct Booking Guarantees */}
            <div className="space-y-4 pt-4 border-t border-white/15">
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C26343] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-[#FAF8F5]">
                    {currentLang === 'it' ? 'Contatto Diretto con la Proprietà' : 'Direct Host Communication'}
                  </h4>
                  <p className="text-xs text-[#D6CEBE]">
                    {currentLang === 'it'
                      ? 'Nessun intermediario, risposte veloci su disponibilità e orari.'
                      : 'No middlemen; quick answers regarding availability and arrival.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C26343] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-[#FAF8F5]">
                    {currentLang === 'it' ? 'Colazione & Parcheggio Compresi' : 'Breakfast & Parking Included'}
                  </h4>
                  <p className="text-xs text-[#D6CEBE]">
                    {currentLang === 'it'
                      ? 'Tutti i servizi chiave sono inclusi senza costi nascosti.'
                      : 'All key amenities are included without hidden fees.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C26343] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-[#FAF8F5]">
                    {currentLang === 'it' ? 'Assistenza Telefonica Immediata' : 'Direct Phone Assistance'}
                  </h4>
                  <a
                    href={`tel:${PROPERTY_INFO.phoneClean}`}
                    className="text-xs text-[#EAE4D7] hover:underline"
                  >
                    {PROPERTY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Stay Inquiry Card */}
          <div className="lg:col-span-7 bg-[#FAF8F5] text-[#1F2421] p-8 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#253626] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#C26343]" />
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#1F2421]">
                  {currentLang === 'it' ? 'Richiesta Inoltrata con Successo' : 'Request Prepared'}
                </h3>
                <p className="text-sm text-[#4A4740] font-body max-w-md mx-auto leading-relaxed">
                  {currentLang === 'it'
                    ? 'Grazie per il tuo interesse. Puoi ora confermare la tua richiesta aprendo WhatsApp direttamente con il messaggio precompilato, o chiamandoci.'
                    : 'Thank you for reaching out. You can now confirm your request immediately on WhatsApp with the pre-filled message, or give us a direct call.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold tracking-[0.16em] uppercase transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{currentLang === 'it' ? 'APRI SU WHATSAPP' : 'OPEN ON WHATSAPP'}</span>
                  </a>

                  <a
                    href={`tel:${PROPERTY_INFO.phoneClean}`}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#253626] text-white text-xs font-semibold tracking-[0.16em] uppercase transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{currentLang === 'it' ? 'CHIAMA DIRETTAMENTE' : 'CALL DIRECTLY'}</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#7A7468] underline hover:text-[#1F2421]"
                  >
                    {currentLang === 'it' ? 'Modifica dati richiesta' : 'Edit request details'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1F2421] tracking-tight">
                    {currentLang === 'it'
                      ? 'Modulo di Richiesta Disponibilità'
                      : 'Availability Inquiry Form'}
                  </h3>
                  <p className="text-xs text-[#7A7468] font-body mt-1">
                    {currentLang === 'it'
                      ? 'Compila le date e le preferenze per ricevere conferma immediata.'
                      : 'Provide your dates and preferences for prompt confirmation.'}
                  </p>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                      {currentLang === 'it' ? 'Check-in' : 'Arrival'}
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                      {currentLang === 'it' ? 'Check-out' : 'Departure'}
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                      {currentLang === 'it' ? 'Ospiti' : 'Guests'}
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                    >
                      <option value="1">1 {currentLang === 'it' ? 'Ospite' : 'Guest'}</option>
                      <option value="2">2 {currentLang === 'it' ? 'Ospiti' : 'Guests'}</option>
                      <option value="3">3 {currentLang === 'it' ? 'Ospiti' : 'Guests'}</option>
                      <option value="4">4+ {currentLang === 'it' ? 'Famiglia' : 'Family'}</option>
                    </select>
                  </div>
                </div>

                {/* Room Selection */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                    {currentLang === 'it' ? 'Tipologia Camera Preferita' : 'Preferred Room'}
                  </label>
                  <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name[currentLang]} — {r.bed[currentLang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                      {currentLang === 'it' ? 'Nome e Cognome' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLang === 'it' ? 'es. Mario Rossi' : 'e.g. John Smith'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                      {currentLang === 'it' ? 'Telefono o WhatsApp' : 'Phone or WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+39 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-semibold block">
                    {currentLang === 'it' ? 'Note o Richieste Particolari' : 'Special Notes or Requests'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={
                      currentLang === 'it'
                        ? 'Orario di arrivo stimato, esigenze per bambini, ecc.'
                        : 'Estimated arrival time, children requirements, etc.'
                    }
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421] focus:outline-none focus:border-[#C26343]"
                  />
                </div>

                {/* Submission Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 bg-[#C26343] hover:bg-[#a94f32] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md cursor-pointer"
                  >
                    {currentLang === 'it' ? 'INVIA RICHIESTA DIRETTA' : 'SEND DIRECT INQUIRY'}
                  </button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 border border-[#25D366] text-[#1F2421] hover:bg-[#25D366]/10 text-xs font-semibold tracking-[0.14em] uppercase transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

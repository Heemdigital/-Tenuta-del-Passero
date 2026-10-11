import React, { useState } from 'react';
import { X, Calendar, Users, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PROPERTY_INFO, ROOMS } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'it' | 'en';
  initialRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialRoomId,
}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomId, setRoomId] = useState(initialRoomId || ROOMS[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialRoomId) {
      setRoomId(initialRoomId);
    }
  }, [initialRoomId]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  const generateWhatsAppMessage = () => {
    const text =
      currentLang === 'it'
        ? `Salve! Vorrei richiedere disponibilità presso La Tenuta del Passero.%0A` +
          `• Nome: ${encodeURIComponent(name || 'Ospite')}%0A` +
          `• Camera: ${encodeURIComponent(selectedRoom.name.it)}%0A` +
          `• Ospiti: ${guests}%0A` +
          `• Check-in: ${checkIn || 'Da definire'}%0A` +
          `• Check-out: ${checkOut || 'Da definire'}%0A` +
          `• Note: ${encodeURIComponent(notes || 'Nessuna')}`
        : `Hello! I would like to check availability at La Tenuta del Passero.%0A` +
          `• Name: ${encodeURIComponent(name || 'Guest')}%0A` +
          `• Room: ${encodeURIComponent(selectedRoom.name.en)}%0A` +
          `• Guests: ${guests}%0A` +
          `• Check-in: ${checkIn || 'To be defined'}%0A` +
          `• Check-out: ${checkOut || 'To be defined'}%0A` +
          `• Notes: ${encodeURIComponent(notes || 'None')}`;

    return `https://wa.me/393475778698?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#121513]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] text-[#1F2421] w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#1F2421]/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Chiudi finestra"
          className="absolute top-4 right-4 p-2 text-[#7A7468] hover:text-[#1F2421] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#253626] text-white flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-[#C26343]" />
            </div>
            <h3 className="font-editorial text-3xl text-[#1F2421]">
              {currentLang === 'it' ? 'Richiesta Pronta!' : 'Inquiry Ready!'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4740] font-body max-w-sm mx-auto leading-relaxed">
              {currentLang === 'it'
                ? 'Conferma adesso su WhatsApp per ricevere risposta immediata dai proprietari, oppure chiamaci direttamente.'
                : 'Confirm now on WhatsApp for rapid feedback from the owners, or call us directly.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${PROPERTY_INFO.phoneClean}`}
                className="w-full sm:w-auto px-6 py-3 bg-[#253626] text-white text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{currentLang === 'it' ? 'Chiama' : 'Call'}</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="pr-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C26343] font-semibold block">
                {currentLang === 'it' ? 'PRENOTAZIONE DIRETTA' : 'DIRECT RESERVATION'}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1F2421] tracking-tight mt-0.5">
                {currentLang === 'it' ? 'Richiedi il tuo soggiorno' : 'Inquire for Your Stay'}
              </h3>
              <p className="text-xs text-[#7A7468] font-body mt-1">
                La Tenuta del Passero · Aprilia / Latina, Lazio
              </p>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                  {currentLang === 'it' ? 'Check-in' : 'Arrival'}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                  {currentLang === 'it' ? 'Check-out' : 'Departure'}
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
                />
              </div>
            </div>

            {/* Room & Guests */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                  {currentLang === 'it' ? 'Ospiti' : 'Guests'}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
                >
                  <option value="1">1 {currentLang === 'it' ? 'Ospite' : 'Guest'}</option>
                  <option value="2">2 {currentLang === 'it' ? 'Ospiti' : 'Guests'}</option>
                  <option value="3">3 {currentLang === 'it' ? 'Ospiti' : 'Guests'}</option>
                  <option value="4+">4+ {currentLang === 'it' ? 'Famiglia' : 'Family'}</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                  {currentLang === 'it' ? 'Camera' : 'Room'}
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name[currentLang]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                  {currentLang === 'it' ? 'Nome e Cognome' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                  {currentLang === 'it' ? 'Telefono / WhatsApp' : 'Phone / WhatsApp'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+39..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#7A7468] font-medium block">
                {currentLang === 'it' ? 'Messaggio o Note' : 'Message or Notes'}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  currentLang === 'it'
                    ? 'Orario di arrivo stimato, richieste per bambini...'
                    : 'Estimated arrival time, children requirements...'
                }
                className="w-full p-2 bg-white border border-[#1F2421]/20 text-xs text-[#1F2421]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#253626] hover:bg-[#334634] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                {currentLang === 'it' ? 'INVIA RICHIESTA' : 'SUBMIT INQUIRY'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#121513]/95 flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar inside Lightbox */}
      <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10 pb-4">
        <span className="font-editorial text-sm tracking-widest uppercase text-[#FAF8F5]/80">
          La Tenuta del Passero
        </span>
        <button
          onClick={onClose}
          aria-label="Chiudi visualizzatore"
          className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[80vh] mx-auto my-auto flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={caption}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[75vh] object-contain shadow-2xl"
        />
        {/* Subtle grain */}
        <div className="absolute inset-0 editorial-grain opacity-25 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Bottom Caption */}
      <div className="max-w-7xl mx-auto w-full text-center text-xs text-[#D6CEBE] font-body tracking-wider py-2">
        {caption}
      </div>
    </div>
  );
};

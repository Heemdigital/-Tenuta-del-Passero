import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  onClick?: () => void;
  priority?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  caption,
  aspectRatio = 'auto',
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-[1/1]'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : '';

  return (
    <figure className={`relative group overflow-hidden ${containerClassName}`}>
      <div
        className={`relative w-full overflow-hidden bg-[#ECE7DC] ${aspectClass} ${
          onClick ? 'cursor-pointer' : ''
        }`}
        onClick={onClick}
      >
        {/* Editorial Grain Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none editorial-grain opacity-40 mix-blend-multiply" />

        {/* Fallback container if image fails or before load */}
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EAE4D7] via-[#E2DBD0] to-[#D5CDC0] text-[#334634]">
            <div className="w-12 h-12 mb-3 rounded-full border border-[#334634]/20 flex items-center justify-center text-xs font-serif italic">
              LTP
            </div>
            <p className="font-editorial text-lg tracking-wide text-[#253626]">
              La Tenuta del Passero
            </p>
            <p className="text-xs uppercase tracking-widest text-[#7D7666] mt-1 font-body">
              {alt}
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
              isLoaded ? 'opacity-100' : 'opacity-90'
            } ${className}`}
          />
        )}

        {/* Subtle vignette/scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-xs text-[#7A7468] font-body tracking-wide flex items-center gap-2">
          <span className="w-3 h-px bg-[#7A7468]/40" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};

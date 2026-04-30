'use client';

import { useState } from 'react';

type Props = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-3">
      {/* Thumbnails */}
      <div className="hidden md:flex md:col-span-2 flex-col gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/5] overflow-hidden bg-sand transition-opacity ${
              active === i ? 'opacity-100' : 'opacity-50 hover:opacity-80'
            }`}
            aria-label={`Show image ${i + 1}`}
          >
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            {active === i && (
              <span className="absolute inset-0 border border-teal pointer-events-none" />
            )}
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="col-span-12 md:col-span-10 relative">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            src={images[active]}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            key={active}
          />
        </div>

        {/* Mobile dots */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                active === i ? 'w-8 bg-teal' : 'bg-charcoal/25'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

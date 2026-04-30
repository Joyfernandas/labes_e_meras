'use client';

import { useEffect, useState } from 'react';
import { whatsappLink } from '@/lib/site';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink(`Hello Libas-e-Miras, I'd love to know more.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed z-30 bottom-5 right-5 md:bottom-8 md:right-8 transition-all duration-700 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-rose-300/40 animate-ping" aria-hidden="true" />
      <span className="relative flex items-center gap-2.5 bg-teal hover:bg-teal-500 text-ivory rounded-full pl-3 pr-4 py-3 shadow-xl shadow-teal/25 transition-colors">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.13c-1.5 0-2.97-.4-4.25-1.16l-.31-.18-3.16.83.84-3.08-.2-.32a8.21 8.21 0 0 1-1.27-4.39c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.42 5.84c0 4.55-3.7 8.3-8.15 8.3zm4.52-6.18c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.28z" />
        </svg>
        <span className="text-[11px] tracking-widest-2 uppercase pr-1 hidden sm:inline">
          WhatsApp
        </span>
      </span>
    </a>
  );
}

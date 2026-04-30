import { ArrowUpRight } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export default function CTA() {
  return (
    <section className="relative bg-ivory py-20 sm:py-24 md:py-32 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8">
        <div className="relative bg-rose-200 overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-multiply pointer-events-none" />

          {/* Decorative scribble */}
          <svg
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-[360px] h-[360px] opacity-30 text-teal"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center p-8 sm:p-10 md:p-14 lg:p-20">
            <div className="lg:col-span-7 reveal">
              <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-5">
                A made-to-measure service
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-teal tracking-tight">
                Tell us about <em className="italic">the occasion.</em>
              </h2>
              <p className="mt-6 text-charcoal/75 leading-relaxed max-w-lg text-[15px]">
                A wedding, a baby shower, a quiet anniversary dinner. Send us a
                WhatsApp with a few words about the day, and we'll suggest
                three pieces — and adapt them to your measurements, your
                colour, your borrowed jewellery.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 reveal" style={{ transitionDelay: '180ms' }}>
              <a
                href={whatsappLink(`Hello Libas-e-Miras, I'd love a made-to-measure suggestion. The occasion is —`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 bg-teal hover:bg-teal-500 text-ivory px-7 py-5 transition-colors"
              >
                <span className="text-[11px] tracking-widest-2 uppercase">
                  Begin on WhatsApp
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="mailto:studio@libasemiras.com"
                className="group inline-flex items-center justify-between gap-3 border border-teal/30 hover:border-teal text-teal px-7 py-5 transition-colors"
              >
                <span className="text-[11px] tracking-widest-2 uppercase">
                  Write to the studio
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <p className="font-display italic text-teal/80 mt-2 text-[15px]">
                — we usually reply within an hour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logomark from './Logomark';
import PaisleyDivider from './PaisleyDivider';
import { FOOTER_LINKS, SITE, whatsappLink } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative bg-teal text-ivory pt-20 pb-8 overflow-hidden">
      {/* Decorative arch */}
      <svg
        aria-hidden="true"
        className="absolute -top-px left-1/2 -translate-x-1/2 text-ivory"
        width="100%"
        height="60"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path d="M0,60 L0,30 Q600,-20 1200,30 L1200,60 Z" fill="currentColor" />
      </svg>

      <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-soft-light pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Top: Brand statement */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-ivory/15">
          <div className="lg:col-span-5">
            <div className="text-ivory">
              <Logomark className="text-ivory" />
            </div>
            <p className="mt-6 font-display italic text-2xl leading-snug text-ivory/90 max-w-md">
              "Each thread carries a story; each drape, an inheritance."
            </p>
            <p className="mt-6 text-sm text-ivory/65 max-w-sm leading-relaxed">
              A small atelier of weavers, embroiderers and pattern makers. We
              ship worldwide and we answer every WhatsApp ourselves.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink('Hello Libas-e-Miras')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase border border-ivory/40 hover:border-ivory hover:bg-ivory hover:text-teal px-4 py-2.5 transition-colors"
              >
                <MessageCircle size={14} strokeWidth={1.4} />
                WhatsApp
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase border border-ivory/40 hover:border-ivory hover:bg-ivory hover:text-teal px-4 py-2.5 transition-colors"
              >
                <Instagram size={14} strokeWidth={1.4} />
                Instagram
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-widest-3 uppercase text-ivory/50 mb-5">
              Women
            </p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.women.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ivory/80 hover:text-rose-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-widest-3 uppercase text-ivory/50 mb-5">
              Men
            </p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.men.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ivory/80 hover:text-rose-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[10px] tracking-widest-3 uppercase text-ivory/50 mt-8 mb-5">
              Shop
            </p>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.shop.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ivory/80 hover:text-rose-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-widest-3 uppercase text-ivory/50 mb-5">
              The Studio
            </p>
            <ul className="space-y-4 text-sm text-ivory/80">
              <li className="flex gap-3">
                <MapPin size={15} strokeWidth={1.4} className="mt-0.5 flex-shrink-0 text-rose-300" />
                <span className="leading-relaxed">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={15} strokeWidth={1.4} className="mt-0.5 flex-shrink-0 text-rose-300" />
                <a href={`mailto:${SITE.email}`} className="hover:text-rose-300">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={15} strokeWidth={1.4} className="mt-0.5 flex-shrink-0 text-rose-300" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-300"
                >
                  {SITE.whatsappPretty}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[11px] text-ivory/55 italic leading-relaxed">
              {SITE.hours}
            </p>
          </div>
        </div>

        <PaisleyDivider className="my-10 text-ivory" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-widest-2 uppercase text-ivory/50">
          <p>
            © {new Date().getFullYear()} {SITE.name} · All weaves reserved
          </p>
          <p className="font-display italic normal-case tracking-normal text-sm text-ivory/70">
            Handwoven in India
          </p>
          <p>{SITE.established}</p>
        </div>
      </div>
    </footer>
  );
}

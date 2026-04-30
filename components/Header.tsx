'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import Logomark from './Logomark';
import { NAV, MEGA_MENU, SITE, whatsappLink } from '@/lib/site';

type MegaKey = keyof typeof MEGA_MENU;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [mobileSection, setMobileSection] = useState<MegaKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-teal text-ivory text-[10px] sm:text-[11px] tracking-widest-2 uppercase">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between">
          <span className="hidden md:inline opacity-70">{SITE.established}</span>
          <div className="flex-1 text-center">
            <span className="opacity-90">
              <span className="hidden sm:inline">Festive Edit · Complimentary domestic shipping over ₹4,999</span>
              <span className="sm:hidden">Free shipping over ₹4,999</span>
            </span>
          </div>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Instagram size={12} strokeWidth={1.5} /> @{SITE.instagram}
          </a>
        </div>
      </div>

      <header
        onMouseLeave={() => setOpenMega(null)}
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-ivory/85 backdrop-blur-md border-b border-charcoal/8' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8">
          <div className="flex items-center justify-between h-[60px] sm:h-[68px] md:h-[84px]">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden -ml-2 p-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.4} />
            </button>

            {/* Left nav (desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {NAV.slice(0, 2).map((item) => {
                const key = item.label as MegaKey;
                const has = key in MEGA_MENU;
                return (
                  <div
                    key={item.href}
                    onMouseEnter={() => has && setOpenMega(key)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[11px] tracking-widest-2 uppercase text-charcoal/85 hover:text-teal link-underline transition-colors"
                    >
                      {item.label}
                      {has && <ChevronDown size={11} strokeWidth={1.4} className="opacity-60" />}
                    </Link>
                  </div>
                );
              })}
            </nav>

            <Link href="/" className="text-charcoal hover:text-teal transition-colors" aria-label="Libas-e-Miras home">
              <Logomark className="text-[1.4rem] sm:text-[1.65rem]" />
            </Link>

            {/* Right nav (desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {NAV.slice(2).map((item) => {
                const key = item.label as MegaKey;
                const has = key in MEGA_MENU;
                return (
                  <div
                    key={item.href}
                    onMouseEnter={() => has && setOpenMega(key)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[11px] tracking-widest-2 uppercase text-charcoal/85 hover:text-teal link-underline transition-colors"
                    >
                      {item.label}
                      {has && <ChevronDown size={11} strokeWidth={1.4} className="opacity-60" />}
                    </Link>
                  </div>
                );
              })}
              <a
                href={whatsappLink(`Hello Libas-e-Miras, I'd like to enquire about a piece.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-widest-2 uppercase text-ivory bg-teal hover:bg-teal-500 px-5 py-2.5 transition-colors"
              >
                Enquire
              </a>
            </nav>

            {/* Mobile right CTA */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden text-[10px] tracking-widest-2 uppercase text-ivory bg-teal px-3.5 py-2"
            >
              Enquire
            </a>
          </div>
        </div>

        {/* Mega menu (desktop) */}
        <div
          className={`hidden lg:block absolute left-0 right-0 top-full bg-ivory border-b border-charcoal/8 shadow-2xl shadow-charcoal/5 overflow-hidden transition-all duration-300 ${
            openMega ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
          onMouseEnter={() => openMega && setOpenMega(openMega)}
        >
          <div className="mx-auto max-w-[1400px] px-8 py-10 grid grid-cols-12 gap-8">
            {openMega && (
              <>
                <div className="col-span-3">
                  <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4">
                    {openMega} Edit
                  </p>
                  <p className="font-display text-3xl text-charcoal leading-tight">
                    Quietly made, <em className="italic text-teal">slowly worn.</em>
                  </p>
                </div>
                <div className="col-span-5 grid grid-cols-2 gap-x-8 gap-y-3 self-center">
                  {MEGA_MENU[openMega].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpenMega(null)}
                      className="text-sm text-charcoal/80 hover:text-teal transition-colors py-1"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div className="col-span-4">
                  <div className="aspect-[4/3] bg-sand overflow-hidden">
                    <img
                      src={
                        openMega === 'Men'
                          ? '/images/models/man-shirt-trouser.jpg'
                          : openMega === 'Shoes'
                          ? '/images/models/shoe-burgundy.jpg'
                          : openMega === 'Accessories'
                          ? '/images/models/mehndi-marigolds.jpg'
                          : '/images/models/yellow-lehenga-dance.jpg'
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-y-0 left-0 w-[88%] max-w-[380px] bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-charcoal/10">
            <Logomark />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6">
            <p className="text-[10px] tracking-widest-3 uppercase text-charcoal/50 mb-4">Shop</p>
            <ul className="space-y-1">
              {(Object.keys(MEGA_MENU) as MegaKey[]).map((key) => (
                <li key={key}>
                  <button
                    onClick={() =>
                      setMobileSection(mobileSection === key ? null : key)
                    }
                    className="w-full flex items-center justify-between py-3 border-b border-charcoal/8"
                  >
                    <span className="font-display text-2xl text-charcoal">{key}</span>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.4}
                      className={`text-charcoal/50 transition-transform ${
                        mobileSection === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ${
                      mobileSection === key
                        ? 'grid-rows-[1fr] py-3'
                        : 'grid-rows-[0fr]'
                    }`}
                  >
                    <ul className="overflow-hidden space-y-2 pl-2">
                      {MEGA_MENU[key].map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm text-charcoal/80 py-1.5"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-[10px] tracking-widest-3 uppercase text-charcoal/50 mt-10 mb-4">
              Atelier
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about/" onClick={() => setOpen(false)}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact/" onClick={() => setOpen(false)}>
                  Visit the Studio
                </Link>
              </li>
              <li>
                <Link href="/delivery/" onClick={() => setOpen(false)}>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns/" onClick={() => setOpen(false)}>
                  Returns
                </Link>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-6 border-t border-charcoal/10">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[11px] tracking-widest-2 uppercase text-ivory bg-teal py-3.5"
            >
              Enquire on WhatsApp
            </a>
            <p className="text-[10px] tracking-widest-2 uppercase text-charcoal/50 mt-4 text-center">
              {SITE.hours}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

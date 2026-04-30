'use client';

import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Parallax from './Parallax';

export default function Hero() {
  return (
    <section className="relative bg-ivory overflow-hidden">
      {/* Decorative arch SVG behind composition (parallax) */}
      <Parallax speed={0.18} className="absolute inset-0 pointer-events-none flex items-center justify-end">
        <div className="w-[820px] h-[1100px] max-w-[80vw] opacity-40 mr-[-8%]">
          <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M300 50 C 150 50, 80 200, 80 400 L 80 800 L 520 800 L 520 400 C 520 200, 450 50, 300 50 Z" stroke="#1A3B3B" strokeWidth="0.6" fill="none" />
            <path d="M300 90 C 170 90, 110 220, 110 410 L 110 760 L 490 760 L 490 410 C 490 220, 430 90, 300 90 Z" stroke="#1A3B3B" strokeWidth="0.4" fill="none" opacity="0.5" />
          </svg>
        </div>
      </Parallax>

      {/* Floating decorative paisley (parallax) */}
      <Parallax speed={-0.35} rotate className="hidden md:block absolute top-32 left-[6%] w-20 h-20 text-rose-300/30 pointer-events-none" as="div">
        <svg viewBox="0 0 56 20" fill="none" className="w-full h-full">
          <path d="M28 2C24 2 21 5 21 10C21 15 24 18 28 18C32 18 35 15 35 10C35 5 32 2 28 2Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <circle cx="28" cy="10" r="2.4" fill="currentColor" />
        </svg>
      </Parallax>

      <Parallax speed={-0.25} rotate className="hidden md:block absolute bottom-24 right-[10%] w-24 h-24 text-teal/20 pointer-events-none" as="div">
        <svg viewBox="0 0 56 20" fill="none" className="w-full h-full">
          <path d="M28 2C24 2 21 5 21 10C21 15 24 18 28 18C32 18 35 15 35 10C35 5 32 2 28 2Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
        </svg>
      </Parallax>

      {/* Top label row */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pt-6 sm:pt-10 md:pt-14 flex items-center justify-between text-[10px] tracking-widest-3 uppercase text-charcoal/55">
        <span>Volume IV · The Festive Edit</span>
        <span className="hidden md:inline">An atelier in three rooms</span>
      </div>

      {/* Main composition */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pt-8 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-28 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 items-end">
        {/* Headline area */}
        <div className="lg:col-span-7 relative z-10">
          <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4 sm:mb-5 reveal">
            <span className="inline-block w-8 h-px bg-teal/60 align-middle mr-3" />
            Established 2019, in a Delhi gully
          </p>

          <h1 className="font-display text-[16vw] sm:text-[14vw] md:text-[10vw] lg:text-[8.5rem] leading-[0.92] text-charcoal tracking-[-0.02em]">
            <span className="block reveal">An heirloom,</span>
            <span className="block italic font-normal text-teal mt-1 reveal" style={{ transitionDelay: '120ms' }}>
              before it is
            </span>
            <span className="block reveal" style={{ transitionDelay: '220ms' }}>
              a wardrobe.
            </span>
          </h1>

          <div className="mt-8 sm:mt-10 max-w-md text-charcoal/70 leading-relaxed reveal text-[15px] sm:text-base" style={{ transitionDelay: '380ms' }}>
            A small studio of weavers, embroiderers and pattern makers — making
            ethnic, modern and everything between, by hand. For women, for men,
            from feet to ear, in one quiet wardrobe.
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 reveal" style={{ transitionDelay: '500ms' }}>
            <Link
              href="/products/"
              className="group inline-flex items-center gap-3 bg-teal hover:bg-teal-500 text-ivory text-[11px] tracking-widest-2 uppercase px-6 sm:px-7 py-3.5 sm:py-4 transition-colors"
            >
              View Collection
              <ArrowRight size={14} strokeWidth={1.4} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about/"
              className="text-[11px] tracking-widest-2 uppercase text-charcoal/85 link-underline"
            >
              The Atelier Story
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-md reveal" style={{ transitionDelay: '620ms' }}>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-teal">07</p>
              <p className="text-[9px] sm:text-[10px] tracking-widest-2 uppercase text-charcoal/55 mt-1">
                Karigar villages
              </p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-teal">28</p>
              <p className="text-[9px] sm:text-[10px] tracking-widest-2 uppercase text-charcoal/55 mt-1">
                Pieces, this Volume
              </p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-teal">∞</p>
              <p className="text-[9px] sm:text-[10px] tracking-widest-2 uppercase text-charcoal/55 mt-1">
                Wears, with care
              </p>
            </div>
          </div>
        </div>

        {/* Hero image stack */}
        <div className="lg:col-span-5 relative">
          <div className="relative grid grid-cols-6 gap-3 md:gap-4">
            {/* Large image — slight parallax */}
            <Parallax speed={0.08} className="col-span-6 aspect-[3/4] relative overflow-hidden bg-rose-200 group reveal" style={{ transitionDelay: '300ms' }}>
              <img
                src="/images/models/purple-saree.jpg"
                alt="A model in a Marwar Rose lehenga, photographed in profile"
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
              <div className="absolute bottom-3 left-3 text-ivory text-[10px] tracking-widest-2 uppercase">
                <span className="bg-teal/70 backdrop-blur-sm px-2 py-1">Plate I · Women</span>
              </div>
            </Parallax>

            <Parallax speed={-0.06} className="col-span-3 aspect-[4/5] relative overflow-hidden bg-teal reveal" style={{ transitionDelay: '420ms' }}>
              <img
                src="/images/models/man-shirt-trouser.jpg"
                alt="A model in our Khadi shirt and Sutra trouser"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-ivory text-[10px] tracking-widest-2 uppercase opacity-90">
                <span className="bg-teal/70 backdrop-blur-sm px-1.5 py-0.5">Plate II · Men</span>
              </div>
            </Parallax>
            <Parallax speed={-0.12} className="col-span-3 aspect-[4/5] relative overflow-hidden bg-sand reveal" style={{ transitionDelay: '520ms' }}>
              <img
                src="/images/models/shoe-burgundy.jpg"
                alt="A burgundy knit runner from the modern edit"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-ivory text-[10px] tracking-widest-2 uppercase">
                <span className="bg-teal/70 backdrop-blur-sm px-1.5 py-0.5">Plate III · Shoes</span>
              </div>
            </Parallax>
          </div>

          {/* Floating editorial credit card */}
          <Parallax speed={-0.18} className="hidden md:block absolute -left-12 top-12 bg-ivory shadow-2xl shadow-teal/10 px-5 py-4 max-w-[210px] reveal" style={{ transitionDelay: '700ms' }}>
            <p className="text-[10px] tracking-widest-2 uppercase text-charcoal/50">Featured</p>
            <p className="font-display italic text-lg leading-tight mt-1 text-teal">Marwar · Rose Lehenga</p>
            <p className="text-[11px] mt-2 text-charcoal/65">₹64,500 · five-eight days, by hand</p>
          </Parallax>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pb-6 sm:pb-8 flex items-end justify-between text-[10px] tracking-widest-3 uppercase text-charcoal/45">
        <div className="flex items-center gap-2 sm:gap-3">
          <ArrowDown size={12} strokeWidth={1.4} className="animate-bounce" />
          <span>Scroll, slowly</span>
        </div>
        <span className="hidden md:inline italic font-display normal-case tracking-normal text-base text-charcoal/55">
          — कपड़ा, कहानी और कारीगर
        </span>
      </div>
    </section>
  );
}

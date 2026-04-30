'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Parallax from './Parallax';

const SCENES = [
  {
    eyebrow: 'Volume IV',
    title: "Women's Edit",
    italic: 'sarees, anarkalis, lehengas.',
    href: '/products/?gender=Women',
    image: '/images/models/yellow-lehenga-dance.jpg',
    accent: '#1A3B3B',
  },
  {
    eyebrow: 'Volume IV',
    title: "Men's Edit",
    italic: 'kurtas, shirts, trousers, tees.',
    href: '/products/?gender=Men',
    image: '/images/models/man-shirt-trouser.jpg',
    accent: '#5C2A3A',
  },
  {
    eyebrow: 'New This Season',
    title: 'Shoes & Accessories',
    italic: 'knit runners, jhumkas, potlis.',
    href: '/products/?category=Shoes',
    image: '/images/models/shoe-burgundy.jpg',
    accent: '#722F37',
  },
];

export default function CrossEditStrip() {
  return (
    <section className="relative bg-ivory">
      {SCENES.map((s, i) => (
        <article
          key={i}
          className="relative overflow-hidden border-b border-charcoal/8 last:border-b-0"
        >
          <div
            className={`relative grid lg:grid-cols-12 min-h-[520px] md:min-h-[640px] ${
              i % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
          >
            {/* Image side with parallax */}
            <div className="lg:col-span-7 relative overflow-hidden bg-sand min-h-[320px] lg:[direction:ltr]">
              <Parallax speed={0.15} className="absolute inset-[-12%]">
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-charcoal/10 pointer-events-none" />
              <span className="absolute top-5 left-5 md:top-8 md:left-8 font-display italic text-ivory/80 text-3xl md:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Copy side */}
            <div className="lg:col-span-5 relative px-5 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col justify-center lg:[direction:ltr]">
              <Parallax speed={-0.08} className="absolute -top-10 -right-10 lg:-right-20 font-display italic text-[8rem] md:text-[14rem] leading-none text-charcoal/[0.04] select-none pointer-events-none">
                {String(i + 1)}
              </Parallax>
              <p
                className="text-[10px] tracking-widest-3 uppercase mb-3 md:mb-4"
                style={{ color: s.accent }}
              >
                {s.eyebrow}
              </p>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-charcoal tracking-tight">
                {s.title}
              </h3>
              <p className="font-display italic text-2xl md:text-3xl text-teal mt-3 md:mt-4">
                {s.italic}
              </p>
              <div className="mt-8 md:mt-10">
                <Link
                  href={s.href}
                  className="group inline-flex items-center gap-3 border-b border-charcoal/30 hover:border-teal hover:text-teal text-[11px] tracking-widest-2 uppercase pb-2 transition-colors"
                >
                  Open this edit
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

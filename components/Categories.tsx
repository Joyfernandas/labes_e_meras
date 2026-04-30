'use client';

import Link from 'next/link';
import { useState } from 'react';
import Parallax from './Parallax';

type Group = 'Womens' | 'Mens' | 'Shoes' | 'Accessories';

type Tile = {
  name: string;
  href: string;
  image: string;
  count: string;
  blurb: string;
};

const TILES: Record<Group, Tile[]> = {
  Womens: [
    { name: 'Sarees', href: '/products/?category=Saree', image: '/images/models/purple-saree.jpg', count: '4 pieces', blurb: 'Banarasi, bandhej, shibori — five-and-a-half yards of intent.' },
    { name: 'Lehengas', href: '/products/?category=Lehenga', image: '/images/models/yellow-lehenga-dance.jpg', count: '2 pieces', blurb: 'Bridal silhouettes and twilight stories. Made-to-measure.' },
    { name: 'Anarkalis', href: '/products/?category=Anarkali', image: '/images/models/blue-anarkali.jpg', count: '2 pieces', blurb: 'The Mughal twirl. Twelve-panel falls of breath.' },
    { name: 'Kurta Sets', href: '/products/?category=Kurta+Set', image: '/images/models/marigold-saree.jpg', count: '3 pieces', blurb: 'Quiet linens and cottons. For the rest of the days.' },
  ],
  Mens: [
    { name: 'Sherwanis', href: '/products/?category=Sherwani', image: '/images/models/man-kurta-diwali.jpg', count: '1 piece', blurb: 'Bandhgala silhouettes. For the man who is the celebration.' },
    { name: 'Kurtas', href: '/products/?category=Mens+Kurta', image: '/images/models/blue-kurta-man.jpg', count: '2 pieces', blurb: 'Indigo, mul, and chikan — long-cut, weighted just so.' },
    { name: 'Shirts', href: '/products/?category=Shirt', image: '/images/models/man-shirt-trouser.jpg', count: '2 pieces', blurb: 'Khadi and linen, mandarin and camp. Modern lines.' },
    { name: 'Trousers', href: '/products/?category=Trouser', image: '/images/models/man-shirt-jacket.jpg', count: '2 pieces', blurb: 'Single pleats, wide legs. Trousers that drape.' },
    { name: 'T-Shirts', href: '/products/?category=T-Shirt', image: '/images/models/festive-trio.jpg', count: '2 pieces', blurb: 'Plain tees, considered. Pima and combed cotton.' },
  ],
  Shoes: [
    { name: 'Knit Runners', href: '/products/?category=Shoes', image: '/images/models/shoe-burgundy.jpg', count: '3 pieces', blurb: 'Burgundy, teal, scarlet — the everyday-trainer trio.' },
    { name: 'Wine Edition', href: '/products/bandhej-sage/', image: '/images/models/shoe-red.jpg', count: 'Festive', blurb: 'A scarlet trainer that announces itself, just barely.' },
    { name: 'Phirozi Knit', href: '/products/teal-trainers/', image: '/images/models/shoe-teal.jpg', count: 'New', blurb: 'Heathered teal with a coral racing stripe.' },
  ],
  Accessories: [
    { name: 'Silver Jhumka', href: '/products/jhumka-earrings/', image: '/images/models/mehndi-marigolds.jpg', count: 'Heirloom', blurb: 'Hand-cast in oxidised sterling silver.' },
    { name: 'Embroidered Potli', href: '/products/potli-clutch/', image: '/images/models/sangeet-pair.jpg', count: 'Festive', blurb: 'A drawstring evening bag in wine silk.' },
    { name: 'Hand-Stitched Belt', href: '/products/leather-belt/', image: '/images/models/man-shirt-trouser.jpg', count: 'Modern', blurb: 'Vegetable-tanned. Ages, slowly, in your favour.' },
  ],
};

const GROUPS: { id: Group; label: string }[] = [
  { id: 'Womens', label: "Women's Edit" },
  { id: 'Mens', label: "Men's Edit" },
  { id: 'Shoes', label: 'Shoes' },
  { id: 'Accessories', label: 'Accessories' },
];

export default function Categories() {
  const [active, setActive] = useState<Group>('Womens');
  const tiles = TILES[active];

  return (
    <section className="bg-sand py-20 md:py-32 lg:py-36 relative overflow-hidden">
      {/* Decorative numerals */}
      <Parallax speed={-0.18} className="absolute -top-10 right-0 font-display italic text-[14rem] sm:text-[18rem] lg:text-[22rem] text-teal/[0.04] leading-none select-none pointer-events-none">
        04
      </Parallax>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14 reveal">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4">
              The Wardrobe
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-charcoal tracking-tight">
              Four chapters,<br />
              <em className="italic text-teal">one quiet wardrobe.</em>
            </h2>
          </div>

          {/* Group toggles */}
          <div className="flex flex-wrap gap-1.5 -mx-1 md:mx-0 md:gap-2 self-start md:self-end">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`text-[10px] sm:text-[11px] tracking-widest-2 uppercase px-3 sm:px-4 py-2 sm:py-2.5 transition-colors ${
                  active === g.id ? 'bg-teal text-ivory' : 'border border-charcoal/15 text-charcoal/70 hover:border-charcoal/40 hover:text-charcoal'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid (responsive: 2 → 3 → 4-5 cols depending on group size) */}
        <div
          key={active}
          className={`grid gap-4 md:gap-5 ${
            tiles.length === 5
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
              : tiles.length === 4
              ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {tiles.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${i * 70}ms`, opacity: 0 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-teal/10">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 md:top-4 md:left-4 font-display italic text-ivory/90 text-xl md:text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-ivory tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] tracking-widest-2 uppercase text-ivory/70 mt-1.5">
                    {cat.count} →
                  </p>
                </div>
              </div>
              <p className="mt-3 md:mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {cat.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

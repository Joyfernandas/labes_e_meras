'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products, type Product, type Category, CATEGORY_META } from '@/lib/products';
import ProductCard from './ProductCard';

const ALL_CATS = Object.keys(CATEGORY_META) as Category[];

const GENDERS = ['All', 'Women', 'Men', 'Unisex'] as const;
type GenderFilter = (typeof GENDERS)[number];

const PRICES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹5,000', min: 0, max: 5000 },
  { label: '₹5,000 – ₹15,000', min: 5000, max: 15000 },
  { label: '₹15,000 – ₹35,000', min: 15000, max: 35000 },
  { label: 'Above ₹35,000', min: 35000, max: Infinity },
];

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'new', label: 'Newest first' },
  { value: 'price-asc', label: 'Price · Low to High' },
  { value: 'price-desc', label: 'Price · High to Low' },
];

export default function ProductsExplorer() {
  const [gender, setGender] = useState<GenderFilter>('All');
  const [category, setCategory] = useState<'All' | Category>('All');
  const [priceIdx, setPriceIdx] = useState(0);
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Read URL params on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const c = params.get('category');
    const g = params.get('gender');
    if (c && (ALL_CATS as string[]).includes(c)) setCategory(c as Category);
    if (g && (GENDERS as readonly string[]).includes(g)) setGender(g as GenderFilter);
  }, []);

  // Categories actually visible based on gender filter
  const visibleCats = useMemo(() => {
    if (gender === 'All') return ALL_CATS;
    return ALL_CATS.filter((c) => {
      const meta = CATEGORY_META[c];
      return meta.gender === gender || meta.gender === 'Unisex';
    });
  }, [gender]);

  const filtered = useMemo(() => {
    let list: Product[] = [...products];
    if (gender !== 'All') {
      list = list.filter((p) => p.gender === gender || p.gender === 'Unisex');
    }
    if (category !== 'All') {
      list = list.filter((p) => p.category === category);
    }
    const range = PRICES[priceIdx];
    list = list.filter((p) => p.price >= range.min && p.price < range.max);

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [gender, category, priceIdx, sort]);

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-10">
        <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-3 sm:mb-4">
          The Collection
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-charcoal tracking-tight max-w-3xl">
            Every piece, <em className="italic text-teal">named, dated, signed.</em>
          </h1>
          <p className="text-sm text-charcoal/65 max-w-sm leading-relaxed">
            Twenty-eight pieces across women, men, shoes and accessories.
            Made-to-order; made-to-measure on every silhouette.
          </p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-[60px] sm:top-[68px] md:top-[84px] z-30 bg-ivory/95 backdrop-blur-md border-y border-charcoal/8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 py-3 sm:py-4 flex items-center justify-between gap-3 flex-wrap">
          {/* Gender pills (always visible) */}
          <div className="flex items-center gap-1 flex-wrap order-1 md:order-1">
            {GENDERS.map((g) => (
              <button
                key={g}
                onClick={() => {
                  setGender(g);
                  setCategory('All');
                }}
                className={`text-[10px] sm:text-[11px] tracking-widest-2 uppercase px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                  gender === g ? 'bg-teal text-ivory' : 'text-charcoal/70 hover:text-teal'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFilters(true)}
            className="md:hidden order-3 inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-charcoal/85 border border-charcoal/15 px-4 py-2"
          >
            <Filter size={13} strokeWidth={1.4} /> Filter
          </button>

          {/* Category scroller (desktop) */}
          <div className="hidden md:flex items-center gap-1 flex-wrap order-2">
            <button
              onClick={() => setCategory('All')}
              className={`text-[11px] tracking-widest-2 uppercase px-3 py-2 transition-colors ${
                category === 'All' ? 'bg-charcoal/10 text-charcoal' : 'text-charcoal/55 hover:text-teal'
              }`}
            >
              All
            </button>
            {visibleCats.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-[11px] tracking-widest-2 uppercase px-3 py-2 transition-colors whitespace-nowrap ${
                  category === c ? 'bg-charcoal/10 text-charcoal' : 'text-charcoal/55 hover:text-teal'
                }`}
              >
                {CATEGORY_META[c].plural}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 order-4 ml-auto">
            <p className="text-[11px] tracking-widest-2 uppercase text-charcoal/55">
              {filtered.length} pieces
            </p>
            <Select value={sort} onChange={setSort} options={SORTS.map((s) => ({ value: s.value, label: s.label }))} />
            <Select
              value={String(priceIdx)}
              onChange={(v) => setPriceIdx(Number(v))}
              options={PRICES.map((p, i) => ({ value: String(i), label: p.label }))}
            />
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${
          showFilters ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setShowFilters(false)} />
        <div
          className={`absolute inset-x-0 bottom-0 bg-ivory rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto transition-transform duration-500 ${
            showFilters ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-2xl text-charcoal">Filter & Sort</p>
            <button onClick={() => setShowFilters(false)} aria-label="Close">
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <Section label="Category">
            <button
              onClick={() => setCategory('All')}
              className={`pill ${category === 'All' ? 'pill-active' : ''}`}
            >
              All
            </button>
            {visibleCats.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`pill ${category === c ? 'pill-active' : ''}`}
              >
                {CATEGORY_META[c].plural}
              </button>
            ))}
          </Section>
          <Section label="Price">
            {PRICES.map((p, i) => (
              <button
                key={i}
                onClick={() => setPriceIdx(i)}
                className={`pill w-full text-left ${priceIdx === i ? 'pill-active' : ''}`}
              >
                {p.label}
              </button>
            ))}
          </Section>
          <Section label="Sort by">
            {SORTS.map((s) => (
              <button
                key={s.value}
                onClick={() => setSort(s.value)}
                className={`pill w-full text-left ${sort === s.value ? 'pill-active' : ''}`}
              >
                {s.label}
              </button>
            ))}
          </Section>
          <button
            onClick={() => setShowFilters(false)}
            className="w-full bg-teal text-ivory text-[11px] tracking-widest-2 uppercase py-3.5 mt-2"
          >
            Show {filtered.length} pieces
          </button>

          <style jsx>{`
            .pill {
              display: inline-flex;
              align-items: center;
              padding: 0.5rem 0.9rem;
              font-size: 11px;
              letter-spacing: 0.25em;
              text-transform: uppercase;
              border: 1px solid rgba(44, 44, 44, 0.15);
              color: rgba(44, 44, 44, 0.75);
              transition: all 0.2s ease;
              margin: 0.15rem;
            }
            .pill-active {
              background: #1a3b3b;
              color: #fff9f0;
              border-color: #1a3b3b;
            }
          `}</style>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 py-10 md:py-14">
        {filtered.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-display italic text-3xl text-teal">
              Nothing here, just yet.
            </p>
            <p className="text-sm text-charcoal/65 mt-3">
              Try a different filter — or write to us, we may be making one.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-10 md:gap-x-7 md:gap-y-16">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent border border-charcoal/15 text-[11px] tracking-widest-2 uppercase text-charcoal pl-4 pr-9 py-2 cursor-pointer focus:outline-none focus:border-teal"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        strokeWidth={1.4}
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/55"
      />
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] tracking-widest-3 uppercase text-charcoal/50 mb-2">{label}</p>
      <div className="flex flex-wrap -m-1 flex-col">
        <div className="flex flex-wrap">{children}</div>
      </div>
    </div>
  );
}

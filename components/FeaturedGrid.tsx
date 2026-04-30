import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';

export default function FeaturedGrid() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="bg-ivory py-20 sm:py-24 md:py-36 relative">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 sm:mb-14 md:mb-20 reveal">
          <div>
            <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-teal/60" />
              Edit No. 04
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-charcoal max-w-3xl tracking-tight">
              Pieces we are <em className="italic text-teal">quietly proud</em> of, this season.
            </h2>
          </div>
          <Link
            href="/products/"
            className="group inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-charcoal/85 link-underline self-start md:self-end whitespace-nowrap"
          >
            View All Pieces
            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-16">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { type Product, formatPrice } from '@/lib/products';
import { whatsappLink } from '@/lib/site';
import ProductGallery from './ProductGallery';
import ProductCard from './ProductCard';
import PaisleyDivider from './PaisleyDivider';

type Props = {
  product: Product;
  related: Product[];
};

export default function ProductDetail({ product, related }: Props) {
  const [size, setSize] = useState(product.sizes[0]);
  const [openTab, setOpenTab] = useState<'description' | 'fabric' | 'care' | 'details'>('description');

  const enquiryMessage = `Hello Libas-e-Miras, I'd like to enquire about the ${product.name} (₹${product.price.toLocaleString('en-IN')}) — Size: ${size}.`;

  return (
    <div className="bg-ivory">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pt-6 sm:pt-8 md:pt-10 text-[10px] sm:text-[11px] tracking-widest-2 uppercase text-charcoal/55 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-teal">Atelier</Link>
        <span>·</span>
        <Link href="/products/" className="hover:text-teal">Collection</Link>
        <span>·</span>
        <Link href={`/products/?category=${encodeURIComponent(product.category)}`} className="hover:text-teal">{product.category}</Link>
        <span>·</span>
        <span className="text-charcoal">{product.name}</span>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-24 grid lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} alt={product.name} />
        </div>

        {/* Info */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3 mb-4">
            {product.isNew && (
              <span className="text-[10px] tracking-widest-2 uppercase bg-rose-300/40 text-teal px-2.5 py-1">
                New
              </span>
            )}
            <span className="text-[10px] tracking-widest-3 uppercase text-charcoal/55">
              {product.category} · {product.tag}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-charcoal tracking-tight">
            {product.name}
          </h1>

          <p className="font-display italic text-rose-400 text-xl mt-3">
            "{product.blurb}"
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <p className="font-display text-2xl text-teal">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-sm line-through text-charcoal/40">
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <p className="text-[10px] tracking-widest-2 uppercase text-charcoal/55 ml-auto">
              Inclusive of all taxes
            </p>
          </div>

          <PaisleyDivider className="my-7 text-charcoal/30" />

          {/* Colors */}
          <div className="mb-6">
            <p className="text-[10px] tracking-widest-3 uppercase text-charcoal/50 mb-3">
              Colour palette
            </p>
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-7 rounded-full border border-charcoal/15"
                style={{ backgroundColor: product.swatch }}
                aria-hidden="true"
              />
              <p className="text-sm text-charcoal/80">{product.colors.join(' · ')}</p>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] tracking-widest-3 uppercase text-charcoal/50">
                Size
              </p>
              <button className="text-[10px] tracking-widest-2 uppercase text-teal underline underline-offset-4">
                Size guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`text-[11px] tracking-widest-2 uppercase px-4 py-2.5 transition-colors ${
                    size === s
                      ? 'bg-teal text-ivory border border-teal'
                      : 'border border-charcoal/15 text-charcoal/75 hover:border-charcoal/40'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-charcoal/55 mt-3 italic">
              Made-to-measure available on every silhouette — at no extra charge.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-6">
            <a
              href={whatsappLink(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 bg-teal hover:bg-teal-500 text-ivory px-7 py-4 transition-colors"
            >
              <span className="text-[11px] tracking-widest-2 uppercase">
                Enquire on WhatsApp
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.4}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <div className="flex gap-3">
              <button className="flex-1 inline-flex items-center justify-center gap-2 border border-charcoal/15 hover:border-charcoal/40 text-charcoal/85 text-[11px] tracking-widest-2 uppercase px-5 py-3.5 transition-colors">
                <Heart size={14} strokeWidth={1.4} /> Save
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 border border-charcoal/15 hover:border-charcoal/40 text-charcoal/85 text-[11px] tracking-widest-2 uppercase px-5 py-3.5 transition-colors">
                <Share2 size={14} strokeWidth={1.4} /> Share
              </button>
            </div>
          </div>

          {/* Trust mini */}
          <div className="bg-sand p-5 mb-7">
            <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-3">Included</p>
            <ul className="space-y-2 text-[13px] text-charcoal/80">
              <li>· Complimentary domestic shipping</li>
              <li>· Hand-stitched silk dust-bag</li>
              <li>· Free first alteration</li>
              <li>· Lifetime repairs</li>
            </ul>
          </div>

          {/* Accordion */}
          <div className="border-t border-charcoal/10">
            {[
              { id: 'description', label: 'Description', body: product.description },
              { id: 'fabric', label: 'Fabric', body: product.fabric },
              {
                id: 'care',
                label: 'Care',
                body: (
                  <ul className="space-y-1.5">
                    {product.care.map((c, i) => (
                      <li key={i}>· {c}</li>
                    ))}
                  </ul>
                ),
              },
              {
                id: 'details',
                label: 'Details',
                body: (
                  <ul className="space-y-1.5">
                    {product.details.map((d, i) => (
                      <li key={i}>· {d}</li>
                    ))}
                  </ul>
                ),
              },
            ].map((s) => (
              <div key={s.id} className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpenTab(openTab === s.id ? 'description' : (s.id as typeof openTab))}
                  className="w-full flex items-center justify-between py-4 text-[11px] tracking-widest-2 uppercase text-charcoal hover:text-teal transition-colors"
                >
                  <span>{s.label}</span>
                  <span className="font-display text-2xl leading-none">
                    {openTab === s.id ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    openTab === s.id ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden text-[14px] text-charcoal/75 leading-relaxed">
                    {s.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 pb-12">
        <Link
          href="/products/"
          className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-charcoal/85 link-underline"
        >
          <ArrowLeft size={14} strokeWidth={1.4} /> Back to Collection
        </Link>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-sand py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-3">
                  In the same room
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-tight">
                  You may also <em className="italic text-teal">like</em>
                </h2>
              </div>
              <Link
                href="/products/"
                className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-charcoal/85 link-underline"
              >
                View All <ArrowUpRight size={14} strokeWidth={1.4} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

import Link from 'next/link';
import { type Product, formatPrice } from '@/lib/products';

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <Link
      href={`/products/${product.id}/`}
      className="group block reveal"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5] swap-img">
        <img
          src={product.images[0]}
          alt={product.name}
          className="swap-img-base absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            aria-hidden="true"
            className="swap-img-hover absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}

        {/* Tag */}
        {(product.isNew || product.tag === 'One of One' || product.tag === 'Bridal') && (
          <span className="absolute top-3 left-3 bg-ivory/95 text-teal text-[10px] tracking-widest-2 uppercase px-2.5 py-1.5">
            {product.isNew ? 'New' : product.tag}
          </span>
        )}

        {/* Hover CTA */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <div className="bg-ivory/95 text-teal text-[11px] tracking-widest-2 uppercase text-center py-3">
            View Piece →
          </div>
        </div>
      </div>

      <div className="pt-4 px-1 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-widest-2 uppercase text-charcoal/55">
            {product.category}
          </p>
          <h3 className="font-display text-[1.05rem] leading-tight mt-1 text-charcoal group-hover:text-teal transition-colors truncate">
            {product.name}
          </h3>
        </div>
        <div className="flex-shrink-0 text-right">
          <p className="text-[13px] text-charcoal">
            {formatPrice(product.price)}
          </p>
          {product.originalPrice && (
            <p className="text-[11px] line-through text-charcoal/40 mt-0.5">
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products, findProduct } from '@/lib/products';
import ProductDetail from '@/components/ProductDetail';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

type Props = { params: { id: string } };

export function generateMetadata({ params }: Props): Metadata {
  const product = findProduct(params.id);
  if (!product) return { title: 'Not Found · Libas‑e‑Miras' };
  return {
    title: `${product.name} · Libas‑e‑Miras`,
    description: product.blurb,
  };
}

export default function ProductPage({ params }: Props) {
  const product = findProduct(params.id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // Pad with featured if not enough related
  if (related.length < 4) {
    products
      .filter(
        (p) =>
          p.id !== product.id &&
          p.featured &&
          !related.find((r) => r.id === p.id)
      )
      .slice(0, 4 - related.length)
      .forEach((p) => related.push(p));
  }

  return <ProductDetail product={product} related={related} />;
}

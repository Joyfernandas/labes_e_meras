import type { Metadata } from 'next';
import ProductsExplorer from '@/components/ProductsExplorer';

export const metadata: Metadata = {
  title: 'The Collection · Libas‑e‑Miras',
  description:
    'Hand-crafted sarees, lehengas, anarkalis, kurta sets and dupattas. Made-to-order, made-to-measure.',
};

export default function ProductsPage() {
  return <ProductsExplorer />;
}

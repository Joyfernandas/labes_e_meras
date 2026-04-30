import productsJson from '@/data/products.json';

export type Gender = 'Women' | 'Men' | 'Unisex';

export type Category =
  | 'Saree'
  | 'Lehenga'
  | 'Anarkali'
  | 'Kurta Set'
  | 'Dupatta'
  | 'Sherwani'
  | 'Mens Kurta'
  | 'Shirt'
  | 'Trouser'
  | 'T-Shirt'
  | 'Shoes'
  | 'Accessory';

export type Product = {
  id: string;
  name: string;
  category: Category;
  gender: Gender;
  price: number;
  originalPrice: number | null;
  currency: 'INR';
  fabric: string;
  colors: string[];
  swatch: string;
  sizes: string[];
  blurb: string;
  description: string;
  care: string[];
  details: string[];
  images: string[];
  featured: boolean;
  isNew: boolean;
  tag: string;
};

export const products = productsJson as Product[];

export const categories = Array.from(
  new Set(products.map((p) => p.category))
);

export const genders: Gender[] = ['Women', 'Men', 'Unisex'];

export const CATEGORY_META: Record<Category, { plural: string; gender: Gender; group: 'Womens' | 'Mens' | 'Shoes' | 'Accessories' }> = {
  'Saree':       { plural: 'Sarees',     gender: 'Women', group: 'Womens' },
  'Lehenga':     { plural: 'Lehengas',   gender: 'Women', group: 'Womens' },
  'Anarkali':    { plural: 'Anarkalis',  gender: 'Women', group: 'Womens' },
  'Kurta Set':   { plural: 'Kurta Sets', gender: 'Women', group: 'Womens' },
  'Dupatta':     { plural: 'Dupattas',   gender: 'Women', group: 'Womens' },
  'Sherwani':    { plural: 'Sherwanis',  gender: 'Men',   group: 'Mens' },
  'Mens Kurta':  { plural: 'Kurtas',     gender: 'Men',   group: 'Mens' },
  'Shirt':       { plural: 'Shirts',     gender: 'Men',   group: 'Mens' },
  'Trouser':     { plural: 'Trousers',   gender: 'Men',   group: 'Mens' },
  'T-Shirt':     { plural: 'T-Shirts',   gender: 'Men',   group: 'Mens' },
  'Shoes':       { plural: 'Shoes',      gender: 'Unisex', group: 'Shoes' },
  'Accessory':   { plural: 'Accessories', gender: 'Unisex', group: 'Accessories' },
};

export function findProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(amount: number, currency: string = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

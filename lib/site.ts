export const SITE = {
  name: 'Libas‑e‑Miras',
  tagline: 'Heirloom ethnic & modern',
  established: 'Est. 2019',
  whatsapp: '+919999999999',
  whatsappPretty: '+91 99999 99999',
  email: 'studio@libasemiras.com',
  instagram: 'libasemiras',
  instagramUrl: 'https://instagram.com/libasemiras',
  address: 'Studio No. 14, Shahpur Jat, New Delhi 110049',
  hours: 'By appointment · Tue – Sun · 11:00 – 19:00',
} as const;

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  const number = SITE.whatsapp.replace(/[^\d]/g, '');
  return `https://wa.me/${number}${text}`;
}

export const NAV = [
  { href: '/products/', label: 'Women' },
  { href: '/products/?gender=Men', label: 'Men' },
  { href: '/products/?category=Shoes', label: 'Shoes' },
  { href: '/products/?category=Accessory', label: 'Accessories' },
] as const;

export const MEGA_MENU = {
  Women: [
    { href: '/products/?category=Saree', label: 'Sarees' },
    { href: '/products/?category=Lehenga', label: 'Lehengas' },
    { href: '/products/?category=Anarkali', label: 'Anarkalis' },
    { href: '/products/?category=Kurta+Set', label: 'Kurta Sets' },
    { href: '/products/?category=Dupatta', label: 'Dupattas' },
  ],
  Men: [
    { href: '/products/?category=Sherwani', label: 'Sherwanis' },
    { href: '/products/?category=Mens+Kurta', label: 'Kurtas' },
    { href: '/products/?category=Shirt', label: 'Shirts' },
    { href: '/products/?category=Trouser', label: 'Trousers' },
    { href: '/products/?category=T-Shirt', label: 'T-Shirts' },
  ],
  Shoes: [
    { href: '/products/?category=Shoes', label: 'All Shoes' },
    { href: '/products/burgundy-runners/', label: 'Burgundy Runner' },
    { href: '/products/teal-trainers/', label: 'Phirozi Knit' },
    { href: '/products/scarlet-trainers/', label: 'Sindoor Scarlet' },
  ],
  Accessories: [
    { href: '/products/?category=Accessory', label: 'All Accessories' },
    { href: '/products/jhumka-earrings/', label: 'Silver Jhumka' },
    { href: '/products/potli-clutch/', label: 'Embroidered Potli' },
    { href: '/products/leather-belt/', label: 'Hand-Stitched Belt' },
  ],
} as const;

export const FOOTER_LINKS = {
  women: [
    { href: '/products/?category=Saree', label: 'Sarees' },
    { href: '/products/?category=Lehenga', label: 'Lehengas' },
    { href: '/products/?category=Anarkali', label: 'Anarkalis' },
    { href: '/products/?category=Kurta+Set', label: 'Kurta Sets' },
    { href: '/products/?category=Dupatta', label: 'Dupattas' },
  ],
  men: [
    { href: '/products/?category=Sherwani', label: 'Sherwanis' },
    { href: '/products/?category=Mens+Kurta', label: 'Kurtas' },
    { href: '/products/?category=Shirt', label: 'Shirts' },
    { href: '/products/?category=Trouser', label: 'Trousers' },
    { href: '/products/?category=T-Shirt', label: 'T-Shirts' },
  ],
  shop: [
    { href: '/products/?category=Shoes', label: 'Shoes' },
    { href: '/products/?category=Accessory', label: 'Accessories' },
    { href: '/about/', label: 'Made-to-Measure' },
  ],
  service: [
    { href: '/about/', label: 'Our Story' },
    { href: '/contact/', label: 'Visit the Studio' },
    { href: '/delivery/', label: 'Shipping' },
    { href: '/returns/', label: 'Returns' },
    { href: '/privacy/', label: 'Privacy' },
    { href: '/terms/', label: 'Terms' },
  ],
};

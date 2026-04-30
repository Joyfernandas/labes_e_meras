import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import RevealOnScroll from '@/components/RevealOnScroll';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Libas‑e‑Miras — Heirloom Ethnic Couture',
  description:
    'A boutique atelier of handcrafted ethnic wear. Festive sarees, lehengas, anarkalis and kurta sets, woven with intent. Order via WhatsApp.',
  keywords: [
    'ethnic wear',
    'designer sarees',
    'lehenga',
    'anarkali',
    'kurta sets',
    'Libas-e-Miras',
    'Indian festive',
  ],
  openGraph: {
    title: 'Libas‑e‑Miras — Heirloom Ethnic Couture',
    description:
      'Heirloom ethnic couture for the modern muse. Curated, handcrafted, made-to-order.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-ivory text-charcoal antialiased">
        <RevealOnScroll />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

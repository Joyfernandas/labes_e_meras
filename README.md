# Libas‑e‑Miras

A static-exported Next.js website for a boutique ethnic fashion atelier. All orders flow through WhatsApp — no backend, no database.

## Stack
- **Next.js 14** (App Router) with `output: 'export'`
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (used minimally — most motion is CSS-driven for performance)
- **Lucide React** (icons)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build static site

```bash
npm run build
# static files output to ./out
```

The `./out` folder can be deployed to Netlify, Vercel, Cloudflare Pages or any static host.

## Project shape

```
app/                      App Router pages (home, products, [id], about, contact, policies)
components/               Header, Footer, Hero, ProductCard, etc.
data/products.json        Single source of truth for the catalog
lib/products.ts           Typed access + price formatting
lib/site.ts               Brand details, nav, WhatsApp link helper
public/                   (drop real product photos here, then update data/products.json)
```

## Replacing demo imagery

The catalog ships with placeholder colour swatches. Drop real photos into `public/images/products/` and update the `images` arrays in `data/products.json`. The site picks them up at build time.

## WhatsApp configuration

Update `lib/site.ts` with the studio's real WhatsApp number, email, and Instagram handle. Every CTA on the site uses `whatsappLink()` from that file, so you only edit it once.

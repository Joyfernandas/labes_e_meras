import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PaisleyDivider from '@/components/PaisleyDivider';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Our Story · Libas‑e‑Miras',
  description:
    'A small atelier of weavers and embroiderers, three rooms in Shahpur Jat, since 2019.',
};

const PRINCIPLES = [
  {
    no: '01',
    title: 'One karigar, one piece',
    body: 'Every garment is made by a single artisan, end to end. Slower, yes — but each piece carries one signature, not seven.',
  },
  {
    no: '02',
    title: 'The weaver names the price',
    body: 'We don\'t haggle and we don\'t bulk-discount. Our weavers tell us what their hours are worth, and we charge accordingly.',
  },
  {
    no: '03',
    title: 'Made when ordered',
    body: 'We don\'t hold inventory. Every piece is made-to-order — sometimes made-to-measure — after you say yes.',
  },
  {
    no: '04',
    title: 'Lifetime mending',
    body: 'A torn pleat, a fading colour, a snagged thread — send it back. We\'ll repair it, free, for as long as you wear it.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Atelier · Established 2019"
        title={
          <>
            We make ethnic clothing,<br />
            <em className="italic text-teal">slowly,</em> and on purpose.
          </>
        }
        subtitle="Libas‑e‑Miras began in a single rented room in Shahpur Jat with two pairs of hands and a borrowed pit-loom. Six years on, we are seventeen people in three rooms, and we still answer every WhatsApp ourselves."
      />

      {/* Image strip */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-7 aspect-[4/5] overflow-hidden bg-rose-200 reveal">
            <img src="/images/models/diwali-trio.jpg" alt="The Diwali edit, photographed in our atelier" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-5 flex flex-col gap-3 md:gap-5 mt-12 md:mt-20">
            <div className="aspect-[4/5] overflow-hidden bg-teal reveal" style={{ transitionDelay: '180ms' }}>
              <img src="/images/models/blue-kurta-man.jpg" alt="A festive kurta in indigo silk" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-sand reveal" style={{ transitionDelay: '300ms' }}>
              <img src="/images/models/mehndi-marigolds.jpg" alt="Mehndi-stained hands, marigold petals" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Founders' letter */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-6 reveal">
            A Letter from the Founders
          </p>
          <div className="font-display text-2xl md:text-[1.65rem] leading-[1.5] text-charcoal space-y-6 reveal">
            <p className="dropcap">
              We started this because we kept being asked the same question
              every Diwali — <em className="italic">"Where did you get that
              kurta? It looks like my grandmother's."</em> The honest answer
              was: from her trunk, slightly altered. We had inherited far more
              clothes than we could justify owning. Each one had a name, a
              maker, a story we half-remembered.
            </p>
            <p>
              The clothes available to us in our twenties did not have names.
              They came from chains, copy-pasted across the country, and
              fell apart in two seasons. So we set out to make the kind of
              garment that, fifty years from now, a granddaughter could pull
              from a trunk and wear, with only a small alteration at the bust.
            </p>
            <p className="font-body italic text-rose-400 text-lg pt-4">
              — Aanya Rastogi & Mirza Khan
              <br />
              <span className="text-charcoal/50 not-italic font-body text-sm tracking-widest-2 uppercase">
                Founders, Libas‑e‑Miras
              </span>
            </p>
          </div>
        </div>
      </section>

      <PaisleyDivider className="text-teal/40 max-w-[1400px] mx-auto px-5 md:px-8" />

      {/* Four principles */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-5 reveal">
            What we believe
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.96] text-charcoal tracking-tight max-w-3xl mb-16 reveal" style={{ transitionDelay: '120ms' }}>
            Four <em className="italic text-teal">stubborn</em> ideas.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {PRINCIPLES.map((p, i) => (
              <div key={p.no} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-baseline gap-5 mb-4">
                  <span className="font-display italic text-rose-300 text-4xl">{p.no}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-teal">{p.title}</h3>
                </div>
                <p className="text-charcoal/70 leading-relaxed pl-[3.25rem]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="bg-teal text-ivory py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-[10px] tracking-widest-3 uppercase text-rose-300 mb-5 reveal">
            By the numbers
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mb-16 max-w-3xl reveal" style={{ transitionDelay: '120ms' }}>
            What the studio looks like, <em className="italic text-rose-200">today.</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {[
              { n: '17', l: 'People in the studio' },
              { n: '07', l: 'Karigar villages' },
              { n: '42', l: 'Days, average build' },
              { n: '∞', l: 'Lifetime repairs' },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <p className="font-display text-7xl md:text-8xl text-ivory leading-none">{s.n}</p>
                <p className="text-[10px] tracking-widest-2 uppercase text-rose-300 mt-3">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

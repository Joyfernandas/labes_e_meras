import Link from 'next/link';
import PaisleyDivider from './PaisleyDivider';
import Parallax from './Parallax';

export default function AtelierStory() {
  return (
    <section className="bg-teal text-ivory py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay pointer-events-none" />

      {/* Decorative italic word — parallax */}
      <Parallax speed={-0.22} className="absolute top-12 right-4 md:right-16 font-display italic text-6xl sm:text-7xl md:text-9xl text-rose-300/20 select-none pointer-events-none">
        miras
      </Parallax>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 reveal">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <Parallax speed={0.08} className="aspect-[3/4] bg-rose-200 overflow-hidden">
              <img
                src="/images/models/gifts-pair.jpg"
                alt="Two friends celebrating at the studio"
                className="w-full h-full object-cover"
              />
            </Parallax>
            <Parallax speed={-0.08} className="aspect-[3/4] bg-sand overflow-hidden mt-12">
              <img
                src="/images/models/festive-trio.jpg"
                alt="A festive trio in our pieces"
                className="w-full h-full object-cover"
              />
            </Parallax>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 reveal" style={{ transitionDelay: '200ms' }}>
          <p className="text-[10px] tracking-widest-3 uppercase text-rose-300 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-rose-300/50" />
            The Atelier — since 2019
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-ivory tracking-tight">
            We are <em className="italic text-rose-300">three rooms</em> in
            Shahpur Jat,<br className="hidden md:inline" />
            seven karigar villages,<br className="hidden md:inline" />
            and one stubborn idea.
          </h2>

          <PaisleyDivider className="my-10 text-ivory/40" />

          <div className="grid md:grid-cols-2 gap-8 text-ivory/85 leading-relaxed">
            <p className="dropcap text-[15px]">
              The idea is this — that a wedding saree should outlive the
              wedding, and a kurta you wear on a Tuesday should still fold
              softly into your suitcase on a Tuesday, six years from now. We
              don't make seasonal collections; we make pieces, and we name
              them.
            </p>
            <p className="text-[15px]">
              Every garment passes through one karigar's hands, end to end —
              not an assembly line. We pay weavers what they ask for, not what
              the market dictates. We answer every WhatsApp ourselves. And we
              keep a tea kettle on, in case you'd like to visit the studio.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/about/"
              className="group inline-flex items-center gap-3 border border-ivory/40 hover:bg-ivory hover:text-teal text-[11px] tracking-widest-2 uppercase px-7 py-3.5 transition-colors"
            >
              Read the Story
            </Link>
            <p className="font-display italic text-rose-200 text-lg">
              — Aanya & Mirza, founders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

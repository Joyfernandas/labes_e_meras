import Link from 'next/link';
import PaisleyDivider from '@/components/PaisleyDivider';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-ivory px-5">
      <div className="text-center max-w-xl">
        <p className="font-display italic text-7xl md:text-9xl text-teal leading-none">
          404
        </p>
        <PaisleyDivider className="my-8 text-teal/40" />
        <h1 className="font-display text-3xl md:text-4xl text-charcoal tracking-tight">
          The thread you followed <em className="italic text-teal">unraveled.</em>
        </h1>
        <p className="mt-4 text-charcoal/65 leading-relaxed">
          That page doesn't exist — or has moved into a quieter trunk. May we
          show you the collection instead?
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-teal hover:bg-teal-500 text-ivory text-[11px] tracking-widest-2 uppercase px-7 py-3.5 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/products/"
            className="text-[11px] tracking-widest-2 uppercase text-charcoal link-underline"
          >
            View Collection →
          </Link>
        </div>
      </div>
    </section>
  );
}

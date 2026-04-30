import PageHeader from './PageHeader';
import PaisleyDivider from './PaisleyDivider';
import Link from 'next/link';

type Section = {
  title: string;
  body: React.ReactNode;
};

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  sections: Section[];
  updated?: string;
};

export default function PolicyLayout({
  eyebrow,
  title,
  subtitle,
  sections,
  updated,
}: Props) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <PaisleyDivider className="text-teal/30 max-w-[1400px] mx-auto px-5 md:px-8" />

      <article className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
        <div className="space-y-14">
          {sections.map((s, i) => (
            <section key={i} className="reveal">
              <h2 className="font-display text-3xl md:text-4xl text-teal mb-5 tracking-tight">
                <span className="font-display italic text-rose-300 text-2xl mr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.title}
              </h2>
              <div className="text-charcoal/75 leading-relaxed space-y-4 text-[15px]">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-charcoal/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {updated && (
            <p className="text-[11px] tracking-widest-2 uppercase text-charcoal/50">
              Last updated · {updated}
            </p>
          )}
          <Link
            href="/contact/"
            className="text-[11px] tracking-widest-2 uppercase text-teal link-underline"
          >
            Questions? Write to the studio →
          </Link>
        </div>
      </article>
    </>
  );
}

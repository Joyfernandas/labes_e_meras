type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 pt-12 sm:pt-16 md:pt-24 lg:pt-28 pb-8 sm:pb-10 md:pb-14">
      <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4 sm:mb-5 flex items-center gap-3 reveal">
        <span className="inline-block w-8 h-px bg-teal/60" />
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-charcoal tracking-tight max-w-4xl reveal" style={{ transitionDelay: '120ms' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 sm:mt-6 text-[15px] sm:text-base md:text-lg text-charcoal/65 max-w-2xl leading-relaxed reveal" style={{ transitionDelay: '240ms' }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}

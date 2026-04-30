const QUOTES = [
  {
    quote:
      'I wore my Marwar lehenga for my wedding in February. My mother said it looked older than I was — meant in the best way.',
    name: 'Aaditi K.',
    where: 'Mumbai · Bridal',
  },
  {
    quote:
      'Three years on, my Banarasi has only deepened. They call to ask if it needs re-weaving every Diwali. Who does that?',
    name: 'Reema M.',
    where: 'London · Heirloom',
  },
  {
    quote:
      'I asked for an Anarkali with pockets. They obliged, with hand-stitched lining. Small thing, large gesture.',
    name: 'Sara P.',
    where: 'Delhi · Festive',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Decorative quote */}
      <div className="absolute top-12 left-8 md:left-16 font-display text-[14rem] md:text-[20rem] leading-none text-teal/[0.05] select-none pointer-events-none">
        “
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 reveal">
          <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-3 sm:mb-4">
            Letters Received
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-charcoal tracking-tight max-w-3xl mx-auto">
            <em className="italic text-teal">Notes</em> from people who wore us, somewhere.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              className="bg-ivory border border-charcoal/8 p-6 sm:p-8 md:p-10 relative reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-display italic text-rose-300 text-5xl absolute -top-2 left-7 leading-none">
                “
              </span>
              <blockquote className="font-display text-[1.2rem] sm:text-[1.4rem] leading-snug text-charcoal pt-3">
                {q.quote}
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-charcoal/10">
                <p className="font-display italic text-teal text-lg">{q.name}</p>
                <p className="text-[10px] tracking-widest-2 uppercase text-charcoal/55 mt-1">
                  {q.where}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="bg-sand text-charcoal py-20 sm:py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle at 92% 12%, rgba(212,165,165,0.32), transparent 42%), radial-gradient(circle at 6% 94%, rgba(26,59,59,0.10), transparent 48%)',
      }}
    >

      <div className="relative mx-auto max-w-3xl px-5 text-center reveal">
        <p className="text-[10px] tracking-widest-3 uppercase text-teal/60 mb-5">
          The Postal Letter
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-teal">
          A quiet correspondence, <em className="italic">once a fortnight.</em>
        </h2>
        <p className="mt-5 text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Notes from the studio — new drops, atelier diaries, the occasional
          recipe from our weavers' kitchens. No noise. Promised.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSubmitted(true);
          }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@elsewhere.com"
            className="flex-1 bg-transparent border-b border-teal/40 focus:border-teal outline-none px-1 py-3 text-charcoal placeholder:text-charcoal/40 text-sm"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-500 text-ivory text-[11px] tracking-widest-2 uppercase px-6 py-3.5 transition-colors"
          >
            {submitted ? 'Thank you' : 'Subscribe'}
            <ArrowRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm font-display italic text-teal animate-fade-in">
            Welcome to the slow letter.
          </p>
        )}
      </div>
    </section>
  );
}

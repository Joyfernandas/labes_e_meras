'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Instagram, Clock, type LucideIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { SITE, whatsappLink } from '@/lib/site';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', occasion: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static export: no backend. Compose a WhatsApp message.
    const lines = [
      `Hello Libas-e-Miras,`,
      `I'm ${form.name || '—'}.`,
      form.occasion ? `Occasion: ${form.occasion}.` : '',
      form.email ? `My email: ${form.email}.` : '',
      '',
      form.message,
    ].filter(Boolean);
    const url = whatsappLink(lines.join('\n'));
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Visit · Write · Whisper"
        title={
          <>
            We are mostly here, <br />
            <em className="italic text-teal">on WhatsApp.</em>
          </>
        }
        subtitle="The fastest way to reach us is the WhatsApp button at the corner of every page. Or use the form below — it composes a WhatsApp message for you."
      />

      {/* Two columns */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <form onSubmit={submit} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-7">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
              </div>
              <Field
                label="The occasion (wedding, festival, gift)"
                value={form.occasion}
                onChange={(v) => setForm({ ...form, occasion: v })}
              />
              <div>
                <label className="block text-[10px] tracking-widest-3 uppercase text-charcoal/55 mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 focus:border-teal outline-none py-3 px-1 text-charcoal placeholder:text-charcoal/30 resize-none transition-colors"
                  placeholder="Tell us a little — colour preferences, drape, the date, the dance floor."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-teal hover:bg-teal-500 text-ivory text-[11px] tracking-widest-2 uppercase px-7 py-4 transition-colors"
              >
                {sent ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
              <p className="text-[11px] text-charcoal/55 italic">
                Your details aren't stored anywhere — the form opens WhatsApp with your note already typed.
              </p>
            </form>
          </div>

          {/* Side info */}
          <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-charcoal/10 reveal" style={{ transitionDelay: '120ms' }}>
            <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-6">
              Reach the studio
            </p>
            <ul className="space-y-7">
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                primary={SITE.whatsappPretty}
                href={whatsappLink()}
                blurb="Same-day replies, almost always within an hour."
              />
              <ContactRow
                icon={Mail}
                label="Email"
                primary={SITE.email}
                href={`mailto:${SITE.email}`}
                blurb="For longer briefs and bridal enquiries."
              />
              <ContactRow
                icon={Instagram}
                label="Instagram"
                primary={`@${SITE.instagram}`}
                href={SITE.instagramUrl}
                blurb="Studio diaries, behind-the-loom moments, new drops."
              />
              <ContactRow
                icon={MapPin}
                label="Studio"
                primary={SITE.address}
                blurb="Visits by appointment. Tea is on us."
              />
              <ContactRow icon={Clock} label="Hours" primary={SITE.hours} />
            </ul>
          </aside>
        </div>
      </section>

      {/* Map-like art */}
      <section className="bg-sand py-20 md:py-28 mt-20 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4">
              Find Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-charcoal tracking-tight">
              In a pink-walled gully <em className="italic text-teal">in Shahpur Jat.</em>
            </h2>
            <p className="mt-5 text-charcoal/65 leading-relaxed max-w-md">
              The studio is on the first floor, above the pottery shop. Look
              for the marigold strings on the door. Ring the bell twice — the
              first ring is usually for someone else.
            </p>
          </div>
          <div className="aspect-[4/3] bg-teal/10 relative overflow-hidden reveal" style={{ transitionDelay: '120ms' }}>
            <img
              src="/images/models/gifts-pair.jpg"
              alt="The studio, on a Diwali afternoon"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-ivory px-5 py-3 shadow-lg text-[11px] tracking-widest-2 uppercase text-teal">
                Studio · Shahpur Jat
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-widest-3 uppercase text-charcoal/55 mb-2">
        {label}{required && <span className="text-rose-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-charcoal/20 focus:border-teal outline-none py-3 px-1 text-charcoal placeholder:text-charcoal/30 transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  primary,
  href,
  blurb,
}: {
  icon: LucideIcon;
  label: string;
  primary: string;
  href?: string;
  blurb?: string;
}) {
  const content = (
    <>
      <Icon size={16} strokeWidth={1.4} className="text-rose-400 mt-1 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-[10px] tracking-widest-3 uppercase text-charcoal/50 mb-1">{label}</p>
        <p className="text-charcoal text-[15px] leading-snug">{primary}</p>
        {blurb && <p className="text-xs text-charcoal/55 mt-1 leading-relaxed">{blurb}</p>}
      </div>
    </>
  );
  return (
    <li className="flex gap-4 group">
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex gap-4 hover:text-teal transition-colors"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

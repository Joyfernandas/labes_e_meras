import { Scissors, Sparkles, ShieldCheck, Truck, MessageCircle, Hand } from 'lucide-react';

const BADGES = [
  {
    icon: Hand,
    title: 'Made by Hand',
    text: 'Single-karigar craftsmanship. No assembly lines, no shortcuts.',
  },
  {
    icon: Scissors,
    title: 'Made-to-Measure',
    text: 'Free alterations & fit consultations on every piece.',
  },
  {
    icon: Truck,
    title: 'Worldwide Shipping',
    text: 'Complimentary domestic above ₹4,999. International on request.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Concierge',
    text: 'Speak to a real person at the studio. Same-day replies.',
  },
  {
    icon: Sparkles,
    title: 'Slow Crafted',
    text: '42-day average turnaround. Some pieces take ninety.',
  },
  {
    icon: ShieldCheck,
    title: 'Lifetime Care',
    text: 'Free repairs and re-weaving on every garment, forever.',
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-y border-charcoal/8">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-12 md:gap-y-14">
          {BADGES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="text-center reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Icon
                size={28}
                strokeWidth={1.2}
                className="text-teal mx-auto mb-4"
              />
              <p className="text-[11px] tracking-widest-2 uppercase text-charcoal mb-2 font-medium">
                {title}
              </p>
              <p className="text-xs text-charcoal/65 leading-relaxed max-w-[180px] mx-auto">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

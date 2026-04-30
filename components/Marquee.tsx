type Props = {
  items?: string[];
  className?: string;
};

const DEFAULT_ITEMS = [
  'Hand-woven',
  'Made-to-Measure',
  'Naturally Dyed',
  'Slow Crafted',
  'For Women',
  'For Men',
  'Heirloom Quality',
  'Modern Edit',
  'Festive 2026',
];

export default function Marquee({ items = DEFAULT_ITEMS, className = '' }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`bg-teal text-ivory py-5 overflow-hidden border-y border-teal-500 ${className}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 px-6 text-[11px] tracking-widest-3 uppercase whitespace-nowrap"
          >
            <span className="opacity-90">{item}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-50" aria-hidden="true">
              <circle cx="7" cy="7" r="2" fill="currentColor" />
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

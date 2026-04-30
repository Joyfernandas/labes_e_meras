type Props = { className?: string };

export default function Logomark({ className = '' }: Props) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span className="font-display text-[1.65rem] leading-none tracking-tight">
        Libas
      </span>
      <span className="font-display italic text-[1.05rem] leading-none text-rose-400">
        e
      </span>
      <span className="font-display text-[1.65rem] leading-none tracking-tight">
        Miras
      </span>
    </span>
  );
}

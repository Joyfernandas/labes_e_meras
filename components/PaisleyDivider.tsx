type Props = {
  className?: string;
  color?: string;
};

export default function PaisleyDivider({
  className = '',
  color = 'currentColor',
}: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-teal ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-current opacity-30" />
      <svg
        width="56"
        height="20"
        viewBox="0 0 56 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70"
      >
        <path
          d="M28 2C24 2 21 5 21 10C21 15 24 18 28 18C32 18 35 15 35 10C35 5 32 2 28 2Z"
          stroke={color}
          strokeWidth="0.7"
          fill="none"
        />
        <circle cx="28" cy="10" r="1.4" fill={color} />
        <path d="M2 10 L17 10" stroke={color} strokeWidth="0.7" />
        <path d="M39 10 L54 10" stroke={color} strokeWidth="0.7" />
        <circle cx="17" cy="10" r="1" fill={color} />
        <circle cx="39" cy="10" r="1" fill={color} />
      </svg>
      <span className="h-px flex-1 bg-current opacity-30" />
    </div>
  );
}

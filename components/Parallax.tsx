'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

type Props = {
  children?: ReactNode;
  speed?: number;
  as?: 'div' | 'span' | 'section' | 'figure';
  className?: string;
  style?: CSSProperties;
  rotate?: boolean;
};

type Item = {
  el: HTMLElement;
  speed: number;
  rotate: boolean;
  visible: boolean;
};

const items = new Set<Item>();
let started = false;
let scheduled = false;
let viewportH = 0;
let io: IntersectionObserver | null = null;

function tick() {
  scheduled = false;
  if (!items.size) return;
  items.forEach((item) => {
    if (!item.visible) return;
    const rect = item.el.getBoundingClientRect();
    const centered = rect.top + rect.height / 2 - viewportH / 2;
    const translate = -centered * item.speed;
    item.el.style.transform = item.rotate
      ? `translate3d(0, ${translate.toFixed(2)}px, 0) rotate(${(translate * 0.02).toFixed(2)}deg)`
      : `translate3d(0, ${translate.toFixed(2)}px, 0)`;
  });
}

function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(tick);
}

function onResize() {
  viewportH = window.innerHeight || document.documentElement.clientHeight;
  schedule();
}

function ensureStarted() {
  if (started) return;
  started = true;
  viewportH = window.innerHeight || document.documentElement.clientHeight;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        for (const item of items) {
          if (item.el === entry.target) {
            item.visible = entry.isIntersecting;
            break;
          }
        }
      }
      schedule();
    },
    { rootMargin: '25% 0px 25% 0px' }
  );
}

export default function Parallax({
  children,
  speed = 0.2,
  as = 'div',
  className = '',
  style,
  rotate = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;

    ensureStarted();
    const item: Item = { el, speed, rotate, visible: false };
    items.add(item);
    io!.observe(el);
    schedule();

    return () => {
      items.delete(item);
      io?.unobserve(el);
      el.style.transform = '';
    };
  }, [speed, rotate]);

  const cn = `will-change-transform ${className}`;
  const commonProps = { className: cn, style };

  if (as === 'span')
    return (
      <span ref={ref as React.Ref<HTMLSpanElement>} {...commonProps}>
        {children}
      </span>
    );
  if (as === 'section')
    return (
      <section ref={ref as React.Ref<HTMLElement>} {...commonProps}>
        {children}
      </section>
    );
  if (as === 'figure')
    return (
      <figure ref={ref as React.Ref<HTMLElement>} {...commonProps}>
        {children}
      </figure>
    );
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} {...commonProps}>
      {children}
    </div>
  );
}

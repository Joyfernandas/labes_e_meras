'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const observed = new WeakSet<Element>();
    const observe = (el: Element) => {
      if (observed.has(el)) return;
      observed.add(el);
      io.observe(el);
    };

    document.querySelectorAll<HTMLElement>('.reveal').forEach(observe);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList?.contains('reveal')) observe(node);
          node.querySelectorAll?.<HTMLElement>('.reveal').forEach(observe);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

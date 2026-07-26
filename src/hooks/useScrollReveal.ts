import { useEffect } from 'react';

/**
 * Reveals every `.reveal` element as it enters the viewport by adding
 * `.revealed`. Includes the legacy site's safety net: if the observer
 * never fires (old browser, JS error), a timeout reveals everything so
 * content is never left hidden.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (elements.length === 0) return;

    const revealAll = () => elements.forEach((el) => el.classList.add('revealed'));

    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    // Safety net: never leave content hidden.
    const fallback = window.setTimeout(revealAll, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}

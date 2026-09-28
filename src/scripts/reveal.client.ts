// Reveal: fade-up 12px / 500ms ease-out when an element enters the viewport.
//
// DOM hooks
//   .reveal                      the element to reveal. Gets `.is-in`.
//   data-reveal-delay="120"      optional stagger in ms (sets --reveal-delay).
//
// The hidden state only applies under <html class="js"> (set inline in the
// head), so content is visible without JS. Reduced motion or no
// IntersectionObserver: everything is revealed at once.

export function initReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
  if (els.length === 0) return;

  els.forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.setProperty('--reveal-delay', `${Number.parseInt(delay, 10) || 0}ms`);
  });

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

// Count-up for key figures (1.2s ease-out, once, when 60% visible).
//
// DOM hook
//   [data-countup="20000"]        REQUIRED final integer
//   [data-countup-suffix=" m²"]   optional literal after the number
//   [data-countup-group]          present: group thousands with a narrow
//                                 no-break space ("20 000")
//
// The server-rendered text is already the final formatted value, so the right
// number shows without JS, under reduced motion and for crawlers. The
// animation replaces the text only once the element scrolls into view.
// A min-width is locked from the final value so the layout never jitters.

const NNBSP = ' ';
const DURATION = 1200;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function format(el: HTMLElement, value: number): string {
  const n = el.dataset.countupGroup != null
    ? String(value).replace(/\B(?=(\d{3})+(?!\d))/g, NNBSP)
    : String(value);
  return `${n}${el.dataset.countupSuffix ?? ''}`;
}

function run(el: HTMLElement, target: number): void {
  const start = performance.now();
  const frame = (now: number) => {
    const t = Math.min(1, (now - start) / DURATION);
    el.textContent = format(el, Math.round(target * easeOut(t)));
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

export function initCountUp(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-countup]'));
  if (els.length === 0) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        obs.unobserve(el);
        const target = Number.parseInt(el.dataset.countup ?? '', 10);
        if (!Number.isFinite(target)) continue;
        el.style.minWidth = `${el.getBoundingClientRect().width}px`;
        run(el, target);
      }
    },
    { threshold: 0.6 }
  );
  els.forEach((el) => io.observe(el));
}

// Responsive image presets. Import these instead of hand-writing widths.
//
//   import { HERO_WIDTHS, HALF_SIZES, capWidths } from '../lib/images';
//   <Picture src={img} widths={capWidths(img, HALF_WIDTHS)} sizes={HALF_SIZES} ... />
//
// astro:assets never upscales, but listing widths above the source would
// emit duplicate candidates; capWidths drops them and adds the native width
// as the largest candidate instead.
import type { ImageMetadata } from 'astro';

export const IMAGE_FORMATS: ('avif' | 'webp')[] = ['avif', 'webp'];

/** Full-bleed hero photo. */
export const HERO_WIDTHS = [640, 960, 1280, 1600, 2000, 2400];
export const HERO_SIZES = '100vw';

/** Half-width block (SplitSection, PageHead photo). */
export const HALF_WIDTHS = [480, 720, 960, 1200];
export const HALF_SIZES = '(min-width: 900px) 50vw, 100vw';

/** Card slot (about a third of the container). */
export const CARD_WIDTHS = [400, 640, 800];
export const CARD_SIZES = '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw';

export function capWidths(image: ImageMetadata, widths: number[]): number[] {
  const kept = widths.filter((w) => w < image.width);
  // Some requested widths exceed the source: serve the native width instead.
  if (kept.length < widths.length) kept.push(image.width);
  return kept.sort((a, b) => a - b);
}

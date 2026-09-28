// Text helpers for headings rendered in uppercase via CSS.
//
// `text-transform: uppercase` turns "m²" into "M²". withUnits() escapes a
// plain-text title and wraps every unit that must keep its case in
// <span class="unit">, which tokens.css exempts from the transform. Use the
// result with set:html.

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => ESCAPES[c] ?? c);
}

/** Escaped HTML with "m²" / "m³" wrapped in <span class="unit">. */
export function withUnits(text: string): string {
  return escapeHtml(text).replace(/\bm([²³])/g, '<span class="unit">m$1</span>');
}

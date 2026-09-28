// App orchestrator: the single client entry point, imported once by
// src/layouts/Base.astro. Each module exports an idempotent init function
// that is safe on pages without its DOM hooks.
//
// Module scripts are deferred, so the DOM is parsed when this runs.
import { initMenu } from './menu.client';
import { initReveal } from './reveal.client';
import { initCountUp } from './countup.client';
import { initForms } from './form.client';

function initAll(): void {
  initMenu();
  initReveal();
  initCountUp();
  initForms();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
  initAll();
}

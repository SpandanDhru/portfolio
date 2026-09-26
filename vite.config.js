import { defineConfig } from 'vite';

// Relative asset paths, so the build works at spandandhru.github.io/portfolio/
// and still works unchanged if the site moves to a custom domain.
export default defineConfig({
  base: './',
});

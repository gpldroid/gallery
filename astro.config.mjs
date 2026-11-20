import { defineConfig } from 'astro/config';

// This repository is published as a GitHub Pages project site:
// https://gpldroid.github.io/gallery/
export default defineConfig({
  site: 'https://gpldroid.github.io',
  base: '/gallery',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
  build: { format: 'directory' },
});

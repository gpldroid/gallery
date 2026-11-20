import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://trendora.example',
  output: 'static',
  compressHTML: true,
  build: { format: 'directory' },
});
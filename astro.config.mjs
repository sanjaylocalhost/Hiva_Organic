// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hiva-organic.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
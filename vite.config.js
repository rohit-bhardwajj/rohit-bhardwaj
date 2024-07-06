// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  preflight:false,
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: './src/sections/Technologies/tailwind.config.js',
        }),
        autoprefixer,
      ],
    },
  },
});

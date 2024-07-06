import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './src/sections/Technologies/postcss.config.cjs' // Updated to .cjs
  }
});

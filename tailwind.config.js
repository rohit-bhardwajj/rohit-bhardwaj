// src/tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: true, // Disable preflight if you don't want Tailwind's base styles
  },
  content: [
    'index.html',
    './src/sections/Technologies/**/*.{jsx,js,ts,tsx}', // Ensure this path covers your Technology component
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// src/tailwind.config.js
module.exports = {
  corePlugins: {
    preflight: false, // Disable preflight if you don't want Tailwind's base styles
  },
  content: [
    'index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/sections/Technologies/**/*.{jsx,js,ts,tsx}', // Ensure this path covers your Technology component
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ ],
};

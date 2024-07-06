// src/sections/Technologies/tailwind.config.js
export const corePlugins = {
  preflight: false, // Disable Tailwind's base styles if necessary
};
export const content = [
  './src/sections/Technologies/**/*.{jsx,js,ts,tsx}', // Ensure this path covers your Technology component
];
export const theme = {
  extend: {},
};
export const variants = {
  extend: {},
};
export const plugins = [];

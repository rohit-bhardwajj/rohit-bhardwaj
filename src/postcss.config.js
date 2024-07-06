module.exports = {
  plugins: [
    require('tailwindcss')({
      config: './src/sections/Technologies/tailwind.config.js'
    }),
    require('autoprefixer')
  ]
};

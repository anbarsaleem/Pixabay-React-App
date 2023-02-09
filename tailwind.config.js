/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      scale: {
        '200': '2.0',
      },
      screens: {
        'xsm': '420px'
      }
    }
  },
  plugins: [],
}
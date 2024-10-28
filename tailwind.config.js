/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.input-autofill': {
          '&:-webkit-autofill': {
            'box-shadow': '0 0 0px 1000px #F8F9FC inset',
            '-webkit-text-fill-color': '#030E16'
          },
        },
      });
    },
  ],
}
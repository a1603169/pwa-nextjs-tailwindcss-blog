/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const flipping_card = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      maxHeight: {
        '128': '32rem'
      },
      maxWidth: {
        '700': '700px',
        '800': '800px',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  plugins: [flipping_card],
};

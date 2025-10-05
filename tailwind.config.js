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
      animation: {
        marquee: "marquee 3s linear infinite",
        marquee2: "marquee2 10s linear infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      maxHeight: {
        '128': '32rem'
      },
      maxWidth: {
        '700': '700px',
        '800': '800px',
        '1/2': '50%',
        '3/4': '75%',
      },
      spacing: {
        '1/100': '1%',
        '5/100': '5%',
        '12/100': '12%',
      }
    },
  },
  plugins: [flipping_card, require('@tailwindcss/typography')],
};

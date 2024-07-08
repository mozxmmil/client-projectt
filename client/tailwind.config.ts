const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // your paths
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient-light":
          "linear-gradient(270deg, #fff 30%, hsla(0, 0%, 100%, 0))",
        "custom-gradient-dark":
          "linear-gradient(270deg, #333 30%, hsla(0, 0%, 20%, 0))",
        "custom-gradient-lightl":
          "linear-gradient(90deg, #fff 30%, hsla(0, 0%, 100%, 0))",
        "custom-gradient-darkl":
          "linear-gradient(90deg, #333 30%, hsla(0, 0%, 20%, 0))",
      },
      keyframes: {
        upanddown: {
          "0%": { top: "20%" },
          "50%": { top: "25%" },
          "100%": { top: "20%" },
        },
        middle: {
          "0%": { top: "14%" },
          "50%": { top: "17%" },
          "100%": { top: "14%" },
        },
        down: {
          "0%": { top: "70%" },
          "50%": { top: "73%" },
          "100%": { top: "70%" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        wave:{
          "0%": { width: "0vw", height: "0vw" },
          "100%": { width: "30vw", height: "30vw",opacity:0 },
        },
        wave1: {
          "0%": { width: "0vw", height: "0vw" },
          "100%": { width: "30vw", height: "30vw",opacity:0 },
        },
        wave2: {
          "0%": { width: "0vw", height: "0vw" },
          "100%": { width: "30vw", height: "30vw",opacity:0 },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        upanddown: "upanddown 7s 1s infinite",
        middle: "middle 7s  infinite",
        down: "down 7s  infinite",
        wave: "wave2 3s linear 1s infinite",
        wave1: "wave1 3s linear 2s infinite",
        wave2: "wave2 3s linear 3s infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gold: {
          400: "#e8ac04",
        },
      },
      fontFamily: {
        brand: "var(--font-brand)",
        header: "var(--font-header)",
        body: "var(--font-body)",
      },
      screens: {
        xs: "321px",
        hero: "784px",
        herotext: "451px",
      },
      minWidth: {
        "screen-lg": "1024px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

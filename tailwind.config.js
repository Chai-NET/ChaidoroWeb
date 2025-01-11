import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      screens: {
        xsm: "400px", // Ultra small
        uxl: "2000px", // Ultra big
        // => @media (min-width: 2000px) { ... }
      },
      colors: {
        primary: "var(--color-darkest)",
        secondary: "var(--color-darker)",
        secondary45: "var(--color-dark)",
        text: "var(--color-text)",
        clockText: "var(--color-clockText)",
        bgPrimary: "var(--color-bg)",
        accent: "var(--color-accentColor)",
        blax: "#252525",
        chocolate: "#503a3a",
        coffee: "#a98282",
        cream: "#e5d4d4",
      },
      fontFamily: {
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
        RobotoThin: ["Roboto", "sans-serif"],
        RobotoLight: ["Roboto", "sans-serif"],
        RobotoRegular: ["Roboto", "sans-serif"],
        RobotoMedium: ["Roboto", "sans-serif"],
        RobotoBold: ["Roboto", "sans-serif"],
        RobotoBlack: ["Roboto", "sans-serif"],
        WorkSans: ["Work Sans", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        AlbertSans: ["Albert Sans", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"],
        nsl: ["Noto Sans Lao", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};

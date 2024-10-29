/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        greta: "2000px",
        // => @media (min-width: 2000px) { ... }
      },
      colors: {
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
  plugins: [],
};

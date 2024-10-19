const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Neue Haas Grotesk Display Pro , Inter",
      },
      colors: {
        blue: "#377DFF",
        black: "#343839",
        black2: "#141718",
        beige: "#F3F5F7",
        greyLogo: "#6C7275",
        green: "#38CB89",
        greyLight: "#E8ECEF",
      },
      screens: {
        xsm: "440px",
        hero:'737px',
        md: "875px",
        lg: "1080px",
        xl: "1288px",
      },
      fontSize: {
        xsm: "12px",
      },
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};

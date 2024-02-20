/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        sm: "640px",
        md: "766px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [nextui()],
};

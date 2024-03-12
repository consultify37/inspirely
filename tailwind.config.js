/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent-white": "rgba(242, 244, 255, 0.75);",
        "primary": "#0F52FF",
        "onPrimary": "#FFF",
        "secondary": "#00103C",
        "onSecondary": "white",
        "tertiary": "#01EA88",
        "onTertiary": "#00103C",
        "yellow": "#FFCE00",
        "onYellow": "#00103C",
        "admin-background": "#F9FAFF",
        "admin-card": "#E3E8FF",
        "admin-header": "#C6CFFF"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

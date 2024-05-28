/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#686881",
        "custom-bold": "#505470",
        "custom-text": "#8B8B8B",
      },
    },
  },
  variants: {},
  plugins: [],
};
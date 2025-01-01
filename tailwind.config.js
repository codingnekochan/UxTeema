/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  colors: {
   black: "#000000",
   white: "#FFFFFF",
   brand: "#813057",
   gray1: "#8F8F8F",
   gray2: "#B6B6B6",
   gray3: "#A7A7A7",
   gray4: "#DED6D9",
   gray5: "#72727245",
  },
  fontFamily: {
   satoshi: ["Satoshi", "sans-serif"],
   cabin: ["Cabin", "sans-serif"],
  },
  extend: {},
 },
 plugins: [],
};

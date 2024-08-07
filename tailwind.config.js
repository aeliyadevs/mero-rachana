/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nepaliFont: ["Noto Sans Devanagari", "sans-serif"],
        primaryFont: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#0ea5e9",
      },
    },
  },
  plugins: [],
};

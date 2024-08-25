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
      animation: {
        fade: "fade 1s ease-in-out infinite",
      },
      keyframes: {
        fade: {
          "0%, 100%": { background: "#f2f2f2" },
          "50%": { background: "#e6e6e6" },
        },
      },
    },
  },
  plugins: [],
};

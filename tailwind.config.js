/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1B2132",
        primary: "#ECC63F",
        button: "#00AF92",
        white1: "#FFFFFF",
        white3: "#DDDDDD",
        white4: "#CCCCCC",
        border: "#5A5F6B",
        input: "#313746",
        error: "#ff3333",
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

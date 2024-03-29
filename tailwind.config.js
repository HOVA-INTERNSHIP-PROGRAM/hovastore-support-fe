/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#581845",
        secondary: "#F9FAFC",
        secondaryLight: "#F3F4F6",
        black: "#000000",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};

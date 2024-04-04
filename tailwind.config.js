/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#581845",
        secondary: "#F3F4F6",
        secondaryLight: "#F3F4F6",
        black: "#000000",
      },
      fontFamily: {
        Lato: ["Lato"],
      },
      width: {
        '620': '620px',
      },
      height: {
        '620': '620px',
      },
      width: {
        '486': '486px',
      },
      height: {
        '486': '486px',
      },
      screens: {
        'sml': '320px',
        'mdm': '620px',
      },
    },
  },
  plugins: [],
};

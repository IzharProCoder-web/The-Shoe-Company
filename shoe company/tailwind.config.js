/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media600: "560px",
        media1000: "1025px",
      },
      backgroundImage: {
        "tetimonial-section": "url('/img/testimonail.png')",
      },
    },
  },
  plugins: [],
};

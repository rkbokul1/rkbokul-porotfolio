/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fe6601",
          secondary: "#ed6e67",
          accent: "#86370e",
          neutral: "#3d4451",
          // "base-100": "#281e32",
          "base-100": "#212428"
        },
      },
      // "dark",
      "cupcake",
    ],
  },
}

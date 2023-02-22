/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        lightslategray: "#8484a0",
        darkslateblue: "#5756b3",
        ghostwhite: "#eef0fa",
        snow: "#fff",
      },
      fontFamily: { archivo: "Archivo", "body-body-1": "Poppins" },
    },
    fontSize: { base: "16px" },
  },
  corePlugins: { preflight: false },
};

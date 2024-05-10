const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        nunito: "'Nunito Sans', sans-serif",
        raleway: "'Raleway', sans-serif",
        indie: "'Indie Flower', cursive",
        karla: "'Karla', sans-serif",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('@tailwindcss/forms'),
  ],
};

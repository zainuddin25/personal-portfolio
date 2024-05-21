/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0a192f",
        "secondary-white": "#8892B0",
        "primary-white": "#CCD6F6",
        "primary-color": "#57DFC2",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

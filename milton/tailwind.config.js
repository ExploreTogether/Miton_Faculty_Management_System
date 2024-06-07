/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#e6e6e6",
        "secondary" : "#5c4a4a",
        "tertiary" : "#d4f8fc",
      }
    },
  },
  plugins: [],
}


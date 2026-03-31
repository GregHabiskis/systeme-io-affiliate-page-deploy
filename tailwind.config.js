/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#0077cc',
        primaryHover: '#0066b3',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./contact.html",
    "./privacy.html",
    "./terms.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0277b6',
        primaryHover: '#0369a1',
      },
    },
  },
  plugins: [],
}

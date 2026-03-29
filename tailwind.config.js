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
        primary: '#0077cc',
        primaryHover: '#0066b3',
      },
    },
  },
  plugins: [],
}

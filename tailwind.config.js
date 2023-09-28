/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, ts}'],
  theme: {
    extend: {},
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#7da640'
    }
  },
  plugins: [],
}


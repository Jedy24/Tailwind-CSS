/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '60px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        dark: '#020617',
        grey: '#94a3b8',
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}


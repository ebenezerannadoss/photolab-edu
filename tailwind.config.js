/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.06)'
      },
      dropShadow: {
        'soft': '0 6px 20px rgba(0,0,0,0.4)'
      }
    }
  },
  plugins: []
}

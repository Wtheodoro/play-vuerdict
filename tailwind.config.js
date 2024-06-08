/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FA9021',
          dark: '#E87D0E'
        },
        'gradient-orange': {
          to: '#FB9E3C',
          from: '#FA8305'
        }
      }
    }
  },
  plugins: []
}

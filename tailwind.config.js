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
        },
        green: {
          grade: '#2CFF28'
        }
      },
      keyframes: {
        customBounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-20px)'
          },
          '60%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        'bounce-slow': 'customBounce 12s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0033ff',
          'blue-dark': '#0022cc',
          orange: '#ff7f00',
          'orange-light': '#ff9a33',
          yellow: '#ffc107',
          dark: '#111111',
          'dark-2': '#1a1a1a',
          'dark-3': '#252525',
          gray: '#333333',
          'gray-mid': '#6c757d',
          'gray-light': '#f5f5f7',
          border: '#e9ecef',
          'border-dark': '#2e2e2e',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 1s',
        'float-delayed-2': 'float 4s ease-in-out infinite 2s',
        'float-delayed-3': 'float 4s ease-in-out infinite 1.5s',
        'fade-up': 'fadeUp 0.6s ease forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #0d0040 50%, #001a80 100%)',
        'orange-glow': 'radial-gradient(circle at center, rgba(255,127,0,0.3) 0%, transparent 70%)',
        'blue-glow': 'radial-gradient(circle at center, rgba(0,51,255,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 127, 0, 0.4)',
        'glow-blue': '0 0 30px rgba(0, 51, 255, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

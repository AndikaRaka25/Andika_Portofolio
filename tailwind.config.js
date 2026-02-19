/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#38BDF8",
        "primary-dark": "#0ea5e9",
        "primary-content": "#0f172a",
        "background-light": "#f5f7f8",
        "background-dark": "#0F172A",
        "surface-light": "#ffffff",
        "surface-dark": "#1e293b",
        "text-main-light": "#0f172a",
        "text-main-dark": "#f8fafc",
        "text-sub-light": "#64748b",
        "text-sub-dark": "#94a3b8",
        "gold": "#F59E0B",
        "gold-light": "#FCD34D"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both, blink 1s step-end infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        drawLine: {
          '0%': { height: '0' },
          '100%': { height: '100%' }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

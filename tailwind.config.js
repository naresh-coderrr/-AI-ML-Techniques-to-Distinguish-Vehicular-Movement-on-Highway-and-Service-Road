/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0a0e1a',
          850: '#0c1322',
          800: '#0f1623',
          700: '#161f33',
          600: '#1d2942',
          500: '#27364f',
        },
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          glow: '#38e1ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.37)',
        glow: '0 0 20px rgba(34,211,238,0.35)',
        'glow-sm': '0 0 12px rgba(34,211,238,0.25)',
      },
    },
  },
  plugins: [],
};

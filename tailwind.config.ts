import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#E8EBF3',
          100: '#C5CCDF',
          200: '#8E9DBF',
          300: '#57709F',
          400: '#2E4E85',
          500: '#0F172A',
          600: '#0B1222',
          700: '#080D19',
          800: '#050910',
          900: '#020408',
        },
        amber: {
          DEFAULT: '#F59E0B',
          50: '#FEF9EC',
          100: '#FDE8B4',
          200: '#FBCF6A',
          300: '#F9B72A',
          400: '#F59E0B',
          500: '#D4860A',
          600: '#A96C08',
          700: '#7D5006',
          800: '#523504',
          900: '#271A02',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

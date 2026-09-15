/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light greens (backgrounds, accents)
        leaf: {
          50:  '#f0f9f1',
          100: '#dcf0dd',
          200: '#b9e1bc',
          300: '#8bcb91',
          400: '#5cae63',
          500: '#3d8f44',
          600: '#2d7233',
          700: '#245a28',
          800: '#1e4722',
          900: '#163518',
        },
        // Deep forest (dark mode)
        forest: {
          50:  '#eef3ee',
          100: '#d6e0d7',
          200: '#adc1af',
          300: '#7d9b80',
          400: '#557557',
          500: '#335236',
          600: '#233d26',
          700: '#172a19',
          800: '#0f1d11',
          900: '#08110a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
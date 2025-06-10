/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.css',          // ensure CSS files are scanned for @apply
  ],

  theme: {
    extend: {
      colors: {
        /* brand palette */
        navy:      '#0A0F2D',   // text / accents
        gold:      '#D4AF37',   // site-wide background
        champagne: '#FFF8E1',   // light-gold (replacement for pure white)
        offwhite:  '#D4AF37',   // keep for optional neutral areas
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter:   ['Inter',   'sans-serif'],
      },

      boxShadow: {
        subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },

      transitionDuration: {
        300: '300ms',
      },

      borderRadius: {
        property: '12px',
      },
    },
  },

  plugins: [],
};
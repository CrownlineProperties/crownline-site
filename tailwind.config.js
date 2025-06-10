/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        navy:     '#0A0F2D',
        offwhite: '#F4F5F7',

        /* ← site-wide background colour (gold) */
        gold:     '#D4AF37',
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
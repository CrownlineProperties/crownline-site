/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        navy:     '#0A0F2D',
        offwhite: '#D4AF37',

        /* site-wide background colour  */
        gold:     '#D4AF37',     // ← changed from #E7B10A
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
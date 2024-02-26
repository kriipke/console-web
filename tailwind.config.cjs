/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.5rem',
      'lg': '.5rem',
      'xl': '.8rem',
      '2xl': '.5rem',
    },
    extend: {
      colors: {
        'ct-dark-600': '#222',
        'ct-dark-200': '#666',
        'ct-dark-100': '#f5f6f7',
        'ct-blue-600': '#e9e9e9',
        'ct-yellow-600': 'rgba(241, 196, 15, 1)',
      },
      fontFamily: {
        OpenSans: ['Open Sans, sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1125px',
          xl: '1125px',
          '2xl': '1125px',
        },
      },
    },
  },
  plugins: [],
};

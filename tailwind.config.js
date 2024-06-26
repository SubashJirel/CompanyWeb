/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#E53B3A',
        primary_blue: '#001C48',
      },
      screens: {
        'mini-desktop': '870px',
      },
    },
  },
  plugins: [],
};

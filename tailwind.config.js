/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f54265',
        secondary: '#F5385D',
      },
    },
  },
  plugins: [require('daisyui')],
};

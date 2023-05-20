/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f54265',
        secondary: '#F5385D',
        grayPrimary: '#535454',
        graySecondary: '#323333',
      },
    },
  },
  plugins: [require('daisyui')],
};

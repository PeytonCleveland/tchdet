/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        type: 'type 1s ease-out .8s 1 alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '3%, 6%': { transform: 'translateX(1ch)' },
          '9%, 12%': { transform: 'translateX(2ch)' },
          '15%, 18%': { transform: 'translateX(3ch)' },
          '21%, 24%': { transform: 'translateX(4ch)' },
          '27%, 30%': { transform: 'translateX(5.5ch)' },
          '33%, 36%': { transform: 'translateX(7ch)' },
          '39%, 42%': { transform: 'translateX(8.5ch)' },
          '45%, 48%': { transform: 'translateX(9ch)' },
          '51%, 54%': { transform: 'translateX(10ch)' },
          '57%, 60%': { transform: 'translateX(11ch)' },
          '63%, 66%': { transform: 'translateX(12ch)' },
          '69%, 72%': { transform: 'translateX(13ch)' },
          '75%, 78%': { transform: 'translateX(14ch)' },
          '81%, 84%': { transform: 'translateX(15ch)' },
          '87%, 90%': { transform: 'translateX(16ch)' },
          '93%, 96%': { transform: 'translateX(17ch)' },
          '98%, 100%': { transform: 'translateX(18.5ch)' },
        },
      },
    },
  },
  plugins: [],
};

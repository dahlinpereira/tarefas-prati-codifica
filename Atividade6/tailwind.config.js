/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007bff',
          DEFAULT: '#007bff',
          dark: '#3b82f6',
          hover: {
            light: '#0056b3',
            dark: '#60a5fa',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      lineClamp: {
        2: '2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
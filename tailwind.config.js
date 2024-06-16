/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#409bf1',
        secondary: '#96d2fa',
        tertiary: '#2254ab',
        light: '#eff8ff',
        dark: '#18181b',
      }
    },
  },
  plugins: [],
}
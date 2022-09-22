/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#3b82f6",
        "secondary": "#6b7280",
      },
      backgroundImage: {
        "navigation": "url('/src/assets/images/navigation.png')",
      }

    },
    fontFamily: {

    }
  },
  plugins: [],
}

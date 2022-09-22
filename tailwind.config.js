/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#3b82f6",
        "secondary": "#6b7280",
        "tertiary": "#fff",
        "accent": "#F05130",
        "light-accent": "#E48547",
      },
      backgroundImage: {
        "navigation": "url('/src/assets/images/navigation.png')",
        "banner": "url('/src/assets/images/banner.png')",
      }

    },
    fontFamily: {
      'navigation': ['Roboto', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
      'headers': ['Patrick Hand', 'cursive'],
    }
  },
  plugins: [],
}

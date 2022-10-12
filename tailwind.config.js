/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#1A1919",
        "secondary": "#171616",
        "tertiary": "#0B0B0B",
        "text-color": "#fffbfe",
        "accent": "#104d7c",
      },
      backgroundImage: {
        "banner": "url('/src/assets/images/banner.webp')",
      }

    },
    fontFamily: {
      'navigation': ['Roboto', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
      'headers': ['Orbitron', 'cursive'],
    }
  },
  plugins: [],
}

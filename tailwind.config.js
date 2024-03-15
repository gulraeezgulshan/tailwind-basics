/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gmail' : {
          '50': '#fdf4f3',
          '100' : '#fce6e4',
          '500' : '#de493d'
        }
      },
    },
  },
  plugins: [],
};

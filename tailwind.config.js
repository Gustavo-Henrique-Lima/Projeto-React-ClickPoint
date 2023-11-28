/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{jsx,ts,js,tsx,mdx}',
    './src/components/**/*.{jsx,ts,js,tsx,mdx}',
    './src/app/**/*.{jsx,ts,js,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      },
      padding: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '30': '30px',
      },
      borderRadius: {
        '10': '10px',
      },
      width:{
        '10': '10px',
        '20': '20px',
        '30': '30px',
      },
      height:{
        '10': '10px',
        '20': '20px',
        '30': '30px',
      },
    },
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/pexels-photo-3760093 1.png')",
        'serv-bg': "url('./assets/photo-1491895200222-0fc4a4c35e18 2.png')",
        'serv-work': "url('./assets/Mask groupp.png')",
        'work-bg': "url('./assets/Rectangle 54.png')",
        "background-grad": "linear-gradient(129.92deg, #FFFFFF -23.83%, #00135A 80.16%)",
      }
    },
  },
  plugins: [],
}


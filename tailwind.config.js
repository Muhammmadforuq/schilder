/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat',' sans-serif'],
        raleway:['Raleway','sans-serif'],
        roboto:['Roboto','sans-serif'],
      },
      colors:{
        brand:{
          black:{
            100:"#999999",
            200:"#222222",
            300:"#333333",
          },
          yellow:"#f4bc22",
          gray:{
            200:"#f7f7f7",
            300:"#e2e2e2",
            400:"#7a7a7a",
            500:"#555555",
          },

        }
      },
      backgroundImage: {
        'hero': "url('../assets/img/hand-paint-paint-roller.jpg')",
        'layer-black':"linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)",
        'project':"linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
      },
    },
  },
  plugins: [],
}


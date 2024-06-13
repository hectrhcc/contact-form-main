/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Red": "hsl(0, 66%, 54%)",
        "Green-lighter": "hsl(148, 38%, 91%)",
        "Green-medium": "hsl(169, 82%, 27%)",
        "White": "hsl(0, 0%, 100%)",
        "Grey-medium": "hsl(186, 15%, 59%)",
        "Grey-darker":"hsl(187, 24%, 22%)" 
      }

    },
  },
  plugins: [],
}
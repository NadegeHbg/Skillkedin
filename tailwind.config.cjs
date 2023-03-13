/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
  },
  fontSize: {
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
  },
  fontFamily: {
      mont: ["Montserrat", "regular"],
  },

  extend: {
      colors: {
          primary: "#252D48",
          secondary: "#6E8387",
          wrong: "#FF5D5D",
          neutral: "#FFFFFF",
      },
      maxWidth: {
          1: "100%",
          "3/4": "75%",
          "1/2": "50%",
          "1/4": "25%",
          "1/5": "20%",
          "1/3": "30%",
      },
      maxHeight: {
          1: "100%",
          "3/4": "75%",
          "1/2": "50%",
          "1/4": "25%",
          "1/5": "20%",
          "1/6": "10%",
      },
      minWidth: {
          1: "100%",
          "3/4": "75%",
          "1/2": "50%",
          "1/4": "25%",
          "1/5": "20%",
          "1/3": "33%",
      },
  },
},
plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      mi: { max: "510px" },
      xi: { max: "360px" },
    },
    extend: {
      fontFamily: {
        vollkorn: ["Vollkorn", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        title: "titleAnimation 5s ease-in-out infinite",
      },
      keyframes: {
        titleAnimation: {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            color: "#ffffff", // Start and end with white
          },
          "25%": {
            transform: "scale(1.2) rotate(1deg)",
            color: "#f39c12", // Orange
          },
          "50%": {
            transform: "scale(1) rotate(-1deg)",
            color: "#e74c3c", // Red
          },
          "75%": {
            transform: "scale(1.2) rotate(1deg)",
            color: "#3498db", // Blue
          },
        },
      },
    },
  },
  plugins: [],
};

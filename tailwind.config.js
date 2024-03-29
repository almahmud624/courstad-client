/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jumpping: {
          "0%, 100%": {
            transform: "translateY(-30px)rotate(45deg) ",
          },
          "50%": {
            transform: "translateY(0px)rotate(45deg) ",
          },
        },
        jumpping2: {
          "0%": {
            transform: "translateY(10px)rotate(45deg) ",
          },
          "100%": {
            transform: "translateY(0px)rotate(0deg) ",
          },
        },
        jumpping3: {
          "0%, 100%": {
            transform: "translateY(-20px)rotate(-30deg) ",
          },
          "50%": {
            transform: "translateY(0px)rotate(-30deg) ",
          },
        },
        border: {
          "0%, 100%": {
            border: "1px solid white",
          },
          "50%": {
            border: "1px solid #2D6D4E",
          },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        jumpping: "jumpping 4.5s ease-out infinite",
        jumpping3: "jumpping3 4.5s ease-out infinite",
        jumpping2: "jumpping2 1s ease-out",
        fade: "fade 1s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

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
        border: {
          "0%, 100%": {
            border: "1px solid white",
          },
          "50%": {
            border: "1px solid #2D6D4E",
          },
        },
      },
      animation: {
        jumpping: "jumpping 4.5s ease-out infinite",
        border: "border 2.5s ease-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

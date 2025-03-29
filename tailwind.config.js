module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5AC5CB",
          dark: "#3ea3a9",
          light: "#7dd3d8",
          100: "rgba(90, 197, 203, 0.1)",
          200: "rgba(90, 197, 203, 0.2)",
        },
      },
      keyframes: {
        updown: {
          "0%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        updown: "updown 2s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

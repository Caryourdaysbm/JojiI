/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          orange: "#f03829",
          pageMainColor: "#f5f3f3",
          ashBgColor: "#f5f3f3",
          babyPinkBg: "#f5eee9",
          ashText: "#9b9fa7",
          pepperRed: "#f03829",
          blackText: "#515151",
        },
      },
    },
    plugins: [],
  };
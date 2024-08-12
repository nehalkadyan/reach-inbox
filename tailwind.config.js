/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#CCCCCC",
        lightBorder: "#707172",
        customBlue1: "rgba(75, 99, 221, 1)",
        customBlue2: "rgba(5, 36, 191, 0.99)",
        alreadyHaveAnAccount: "#909296",
        signIn: "#C1C2C5",
        Border1: "#343A40",
        darkGray1: "#111214",
        darkGray2: "#121212",
        background: "#25262B",
        copyright: "#5C5F66",
        mainBG: "#000000",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

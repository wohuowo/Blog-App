module.exports = {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
    ,
  ],
  theme: {
    extend: {
      colors: {
        body: "#04080F",
        "selected-text": "#62B6CB",
        theme: "#1B2A41",
        nav: "#404053",
        secondary: "#CCC9DC",
        badge: "#233754",
        "input-border": "#0C1821",
        input: "#324A5F",
      },
      fontFamily: {
        poppins: ["'Poppins'", "san-serif"],
      },
    },
  },
  plugins: [],
};

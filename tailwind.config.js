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
        body: "#FBFBFF", //ghost white
        nav: "#D3D2C7", //timberwolf
        "selected-text": "#CE4760", //brick red
        theme: "#0353A4", //USAFA blue
        secondary: "#335C67", //deep space sparkle
        badge: "#233754",
        "input-border": "#0C1821",
        input: "#D8E2DC",
        tc: "#070707", //rich black #040411
        hov: "#69747C",
      },
      fontFamily: {
        poppins: ["'Poppins'", "san-serif"],
      },
    },
  },
  plugins: [],
};

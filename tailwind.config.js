/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "serif"],
        barlowCondensed: ["Barlow Condensed", "serif"],
      },
      backgroundImage: {
        "home-bg-lg": "url('/assets/home/background-home-desktop.jpg')",
        "home-bg-sm": "url('/assets/home/background-home-mobile.jpg')",
        "home-bg-md": "url('/assets/home/background-home-tablet.jpg')",

        "planet-bg-lg":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "planet-bg-sm":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "planet-bg-md":
          "url('/assets/destination/background-destination-tablet.jpg')",

        "crew-bg-lg": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-bg-sm": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-bg-md": "url('/assets/crew/background-crew-tablet.jpg')",

        "technology-bg-lg":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-bg-sm":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-bg-md":
          "url('/assets/technology/background-technology-tablet.jpg')",
      },
    },
  },
  plugins: [],
};

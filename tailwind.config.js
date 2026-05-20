/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          blue: "#3B60FF",
          paper: "#f2efe8",
          soft: "rgb(59 96 255 / 0.12)",
          muted: "rgb(59 96 255 / 0.62)",
          border: "rgb(59 96 255 / 0.78)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "Avenir Next", "Helvetica Neue", "Arial", "sans-serif"],
        chinese: ["PingFang HK", "PingFang SC", "Microsoft YaHei", "sans-serif"],
      },
    },
  },
  plugins: [],
};

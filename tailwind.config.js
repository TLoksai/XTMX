module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#080412", // Your primary background color
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};


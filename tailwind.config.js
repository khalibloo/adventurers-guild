module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#1e6d56",
        ["primary-tint"]: "#eef4f3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

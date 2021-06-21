module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            DEFAULT: "#43AE8F",
            50: "#E2F4EF",
            100: "#D0EDE5",
            200: "#ABDFD0",
            300: "#86D1BB",
            400: "#62C2A6",
            500: "#43AE8F",
            600: "#358971",
            700: "#276452",
            800: "#184034",
            900: "#0A1B16",
          },
          bg: "#101A22",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

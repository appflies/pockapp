/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B8B8B",
        secondary: {
            DEFAULT: "#686881",
            100: "#505470",
            200: "#343434",
            300: "#676767",
            400: "#181818",
            500: "#979797",
            600: "#ECECEC",
            700: "#FF0000",
            800: "#8B8B8B",
            900: "#979797"
        },
        green: {
            DEFAULT: "#0F9946",
            100: "rgba(138, 245, 168, 0.5)",
        },
        blues: {
            DEFAULT: "#3629B7",
            100: "#5459EA",
            200: "#192A3E",
            300: "#858AA0",
        },
        rojo: {
            DEFAULT: "#FF4267",
        },
        negro: {
            DEFAULT: "#343434",
            100: "#8F8F8F"
        },
        customblue: "#5459EA",
        violet: "#505470",
        inputborder: "#CECECE",
      },
    },
    fontFamily: {
        pothin: ["Poppins-Thin", "sans-serif"],
        poextralight: ["Poppins-ExtraLight", "sans-serif"],
        polight: ["Poppins-Light", "sans-serif"],
        poregular: ["Poppins-Regular", "sans-serif"],
        pomedium: ["Poppins-Medium", "sans-serif"],
        posemibold: ["Poppins-SemiBold", "sans-serif"],
        pobold: ["Poppins-Bold", "sans-serif"],
        poextrabold: ["Poppins-ExtraBold", "sans-serif"],
        poblack: ["Poppins-Black", "sans-serif"],
        mothin: ["Montserrat-Thin", "sans-serif"],
        moextralight: ["Montserrat-ExtraLight", "sans-serif"],
        molight: ["Montserrat-Light", "sans-serif"],
        moregular: ["Montserrat-Regular", "sans-serif"],
        momedium: ["Montserrat-Medium", "sans-serif"],
        mosemibold: ["Montserrat-SemiBold", "sans-serif"],
        mobold: ["Montserrat-Bold", "sans-serif"],
        moextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        moblack: ["Montserrat-Black", "sans-serif"]
    }
  },
  variants: {},
  plugins: [],
};
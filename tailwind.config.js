/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "san-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#191919",
        textColor: "rgba(255, 255, 255, 0.85)",
        designColor: "#edff20",
        titleRoundBg:
          "linear-gradient(135deg, rgba(120, 204, 109, 0.15) 0%, rgba(120, 204, 109, 1) 100%)",
      },
      animatidon: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
        "reverse-spin-long": "reverse-spin 35s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px rgba(237, 255, 32, 1",
        testShadow: "11px 0px 13px -15px rgba(0, 0, 0, 1",
      },
      // screens: {
      //   sml: "500px",
      //   md: "667px",
      //   md1: "768px",
      //   lg: "960px",
      //   lg1: "1040px",
      //   xl: "1200px",
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      animation: {
        // "spin-slow": "spin 70s linear infinite",
        // "reverse-spin": "reverse-spin 50s linear infinite",
        // "reverse-spin-long": "reverse-spin 35s linear infinite",
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
      screens: {
        xsm: "430px",   // extra Small devices (xs phones)
        sm: "576px",   // Small devices (phones)
        md: "767px",   // Medium devices (tablets)
        lg: "1024px",  // large devices (desktops)
        xl: "1200px",   // Extra Large devices (large desktops)
        cus: "1000px",   // custom devices (custom desktops)
      },
    },
  },
  plugins: [],
}
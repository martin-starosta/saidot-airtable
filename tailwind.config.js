/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      lg: "992px",
      md: "768px",
      sm: "360px",
    },
    container: {
      center: true,
    },
    spacing: {
      ...defaultTheme.spacing,
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "80px",
      s: "20px",
      l: "48px",
      xl: "56px",
      108: "27rem",
      modal: "700px",
      "card-w": "160px",
      "card-h": "194px",
      58: "58px",
      25: "25px",
      12: "12px",
      6: "6px",
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      sans: ["Inter", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      heading: ["Merriweather", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      fontWeight: {
        500: 500,
      },
      colors: {
        "light-blue": "#F1F8FC",
        "light-blue-2": "#D6E6FD",
        "light-red": {
          DEFAULT: "#F8EADF",
          700: "#FFAD9C",
          500: "#FFE0DA",
        },
        "dark-blue": {
          DEFAULT: "#074CB3",
          900: "#3A3C4A",
        },
        "dark-green": "#158B6B",
        "saidot-blue": {
          DEFAULT: "#3381F7",
          100: "#ECF3FE",
          900: "#3381F7" /* Blue */,
          800: "#074CB3" /* Dark Blue */,
          700: "#80V0FA" /*Light Blue 1*/,
          600: "#ACD4FF" /*Light Blue 2*/,
          500: "#D6E6FD" /*Light Blue 3*/,
          400: "#ECF3FE" /*Light Blue 4*/,
        },
        "saidot-green": {
          DEFAULT: "#22DEAB",
          500: "#C8F7EA" /*Light Green 1*/,
        },
        "dark-gray": {
          400: "#2C2C2C",
          500: "#808080",
          600: "#888888",
          700: "#565656",
          800: "#424848",
          900: "#202828",
        },
        "light-gray": {
          900: "#B3B3B3",
          800: "#C3C3C3",
          200: "#D5D5D5",
          100: "#DEDFDF",
        },
        "saidot-red": {
          DEFAULT: "#FFE0DA",
          900: "#E92800",
          error: "#FF5A38",
        },
        "mui-blue": "#18A0FB",
        "gradient-green": {
          low: "#59E6C0",
          full: "#22DEAB",
        },
        "gradient-red": {
          low: "#FFC2B5",
          full: "#FFAD9C",
        },
        state: {
          approved: "#158B6B",
          rejected: "#FF5A38",
        },
        chart: {
          blue: "#085BD7",
        },
        jira: {
          primary: {
            text: "#0747A6",
            background: "#DEEBFF",
          },
          todo: {
            text: "#42526E",
            background: "#DFE1E6",
          },
          done: {
            text: "#127251",
            background: "#E3FCEF",
          },
          purple: {
            DEFAULT: "#54499C",
            light: "#E9E6FC",
          },
        },
      },
      fontSize: {
        h1: ["2.75rem", "62px"],
        h2: ["2rem", "48px"],
        h3: ["1.5rem", "48px"],
        h4: ["1.25rem", "48px"],
        h5: ["1.25rem", "48px"],
        44: ["44px"],
        32: ["32px"],
        24: ["24px"],
        20: ["20px"],
        18: ["18px"],
        16: ["16px"],
        14: ["14px"],
        12: ["12px"],
      },
      lineHeight: {
        62: "62px",
        40: "40px",
        30: "30px",
        24: "24px",
        22: ["22px"],
        20: ["20px"],
        16: ["16px"],
      },
      transitionProperty: {
        height: "height",
        mb: "margin-bottom",
        visibility: "visibility",
      },
      backgroundImage: {
        login: 'url("../../styles/images/login_background.svg")',
        confidentiality:
          'url("../../styles/images/confidentiality_background.svg")',
        card: 'url("../../styles/images/card_bg.svg")',
        dashboardCircleBg: 'url("../../styles/images/dashboard_bg_circle.svg")',
      },
      animation: {
        "spin-fast": "spin 0.7s linear infinite",
        fade: "fadeOut 0.3s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      height: {
        8: "8px",
        16: "16px",
        24: "24px",
        36: "36px",
        48: "48px",
        64: "64px",
        120: "120px",
        129: "129px",
        170: "170px",
        180: "180px",
      },
      width: {
        8: "8px",
        16: "16px",
        24: "24px",
        48: "48px",
        64: "64px",
        164: "164px",
        344: "344px",
        "platform-content": "710px",
        login: "26.625rem",
      },
      boxShadow: {
        card: "0px 3px 14px rgba(0, 0, 0, 0.12)",
      },
      gridTemplateColumns: {
        4: "repeat(4, minmax(0, 16px))",
        7: "repeat(7, minmax(0, 16px))",
      },
    },
  },
  plugins: [],
};

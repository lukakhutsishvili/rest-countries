/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: ["12px", "normal"],
        mid: ["14px", "normal"],
        large: ["18px", "normal"],
        xLarge: ["22px", "normal"],
        xlLarge: ["32px", "normal"],
      },
      padding: {
        input: "14px 0px 14px 74px",
        filter: "14px 19px 14px 24px",
        countryDiv: "6px 30px",
      },
      boxShadow: {
        header: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        input: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
        div: " 0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
      },
      colors: {
        search: "#B2B2B2",
        darkheader: "#2B3844",
      },
      absolute: "244px",
      transitionDuration: {
        trans: "500ms",
      },
      screens: {
        large: "1440px",
      },
      minWidth: {
        form: "480px",
        div: "264px",
      },
      width: {
        div: "264px",
        img: "560px",
      },
      height: {
        height: "336px",
        img: "401px",
      },
      gap: {
        gap: "74px",
      },
      gridTemplateColumns: {
        gridCol: ["130px", "auto"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#231815",
          2: "#E45302",
          3: "#000000",
          4: "#0C0C0C",
        },
        n: {
          1: "#FFFFFF",
          2: "#1A1A1A",
          3: "#808080",
          4: "#F5F5F5",
          5: "#E8E8E8",
        },
      },
      fontFamily: {
        lato: ["var(--font-lato)", ...fontFamily.sans],
        korataki: ["var(--font-korataki)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },
      screens: {
        "extra-lg": "1920px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".h2": {
          "@apply font-korataki text-color-1 text-[24px] leading-[33.6px] md:text-[32px] md:leading-[44.8px] lg:text-[40px] lg:leading-[56px] extra-lg:text-[44px] extra-lg:leading-[61.6px]":
            {},
        },
        ".h4": {
          "@apply font-bold text-[18px] leading-[18px] text-n-1": {},
        },
        ".footer-links": {
          "@apply text-[16px] leading-[16px] text-n-5": {},
        },
        ".container": {
          "@apply max-w-[1240px] mx-auto px-[35px] md:px-[44px] xl:max-w-[1400px]":
            {},
        },
      });
    }),
  ],
};

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        lime: {
          700: "#c99c33",
          "700_28": "#c99c3328",
          "700_35": "#c99c3335",
          "700_a8": "#c99c33a8",
          "700_b2": "#c99c33b2",
          "700_c4": "#c99c33c4",
          "700_a0": "#c99c33a0",
        },
        gray: { 400: "#c0bebe", "500_d6": "#acacacd6", "400_01": "#bfbdbd" },
        blue_gray: { 100: "#d9d9d9", "900_d6": "#242c3bd6" },
        indigo: {
          "900_a5": "#071e94a5",
          "900_ed": "#071e94ed",
          "900_cc": "#071e94cc",
          "900_dd": "#071e94dd",
        },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        white: { A700_77: "#ffffff77", A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

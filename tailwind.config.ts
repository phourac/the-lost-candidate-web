import type { Config } from "tailwindcss";

const colors = {
  primary: {
    main: "#024F87",
    light: "#8DCDFF",
    lighter: "#F7F9FA",
    content: "#FFFFFF",
    typography: "#090A0A",
    dark: "#284573",
  },
  secondary: {
    main: "#404446",
    grey: "#72777A",
    dark: "#303437",
  },
  paper: "#f8f8fb",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary.main,
        "primary-content": colors.primary.content,
        "primary-light": colors.primary.light,
        "primary-lighter": colors.primary.lighter,
        "primary-typography": colors.primary.typography,
        "primary-dark": colors.primary.dark,
        secondary: colors.secondary.main,
        "secondary-grey": colors.secondary.grey,
        "secondary-dark": colors.secondary.dark,
        paper: colors.paper,
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;

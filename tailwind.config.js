/** @type {import{'tailwindcss'}.Config} */
module.exports = {
  darkMode: "classes",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      lineHeight: {
        loose: "2",
      },
      color: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
    },
  },
};

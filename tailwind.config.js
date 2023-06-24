/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-black": "#0D0E12",
        "light-black": "#15181E",
        "light-grey": "rgba(227, 229, 232, 0.52)",
        "t-white": "rgba(227,229,232,0.9)",
        "t-gray": "#a4a4a4",
      },
      fontFamily: {
        sans: ["var(--fontSans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

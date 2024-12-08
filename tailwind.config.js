/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        "jockey-one": ["Jockey One", "cursive"],
      },

      colors: {
        "australian-mint": "var(--australian-mint)",
        "yellowish-tan": "var(--yellowish-tan)",
        "pale-muave": "var(--pale-muave)",
        "day-sky-blue": "var(--day-sky-blue)",
        "lavender-mist": "var(--lavender-mist)",
        "dark-jungle-green": "var(--dark-jungle-green)",
        bianca: "var(--bianca)",
        "storm-dust": "var(--storm-dust)",
        liver: "var(--liver)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        magenta: "#FF0091",
        cherry: "#D30D46",
        softblack: "#23161E",
        hotpink: "#FF2480",
        lime: "#D9FF00",
        ink: "#000000",
        bone: "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        editorial: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        neon: "0 0 40px rgba(255, 0, 145, 0.36)",
        lime: "0 0 32px rgba(217, 255, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;

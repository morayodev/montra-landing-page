import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#223872", // Base color
          blue: "#223872", // Dark variant
        },
        secondary: {
          default: "#4ABCEB",
        },
        tertiary: {
          default: "#F6F9FC",
        },
      },
    },
  },

  plugins: [],
} satisfies Config;

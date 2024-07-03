import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-nav": "#b6becc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFmXv9Rh3UbpKnbXdLmiglCAoeSTfJd2VjZRs9laDcA&s)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateAndReturn: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
        },
      },
      animation: {
        "rotate-90": "rotateAndReturn 700ms ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      cursor: {
        custom: "url(https://img.icons8.com/sci-fi/48/blue-pointer.png), auto",
      },
      fontFamily: {
        sans: ["__Inter_20951f"],
      },
    },
  },
  plugins: [],
};

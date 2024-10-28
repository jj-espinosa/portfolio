/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        autoRun: "autoRun 20s linear infinite",
      },
      keyframes: {
        autoRun: {
          "0%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

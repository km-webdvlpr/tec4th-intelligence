import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#e8dfd2",
        clay: "#c7ad91",
        ember: "#8b5e3c",
        ink: "#161311",
        dusk: "#4f463f",
        mist: "#f7f3ee",
      },
      boxShadow: {
        panel: "0 20px 60px rgba(22, 19, 17, 0.08)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top, rgba(139, 94, 60, 0.12), transparent 40%), linear-gradient(180deg, rgba(247, 243, 238, 0.9), rgba(247, 243, 238, 1))",
      },
    },
  },
  plugins: [],
};

export default config;

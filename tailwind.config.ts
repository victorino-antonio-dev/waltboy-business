import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060913",
        midnight: "#08111f",
        electric: "#17c9ff",
        violet: "#8b5cf6",
        graphite: "#101827"
      },
      boxShadow: {
        glow: "0 0 70px rgba(23, 201, 255, 0.18)",
        card: "0 20px 70px rgba(0, 0, 0, 0.26)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
} satisfies Config;

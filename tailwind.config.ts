import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#121212",
        textPrimary: "#EDEDED",
        textSecondary: "#888888",
        accentGlow: "#00D1FF",
        accentSecondary: "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px 0 rgba(0, 209, 255, 0.35)"
      }
    }
  },
  plugins: []
}
export default config

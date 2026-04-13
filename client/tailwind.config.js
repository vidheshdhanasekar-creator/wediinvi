/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        deepred: "#8B0000",
        beige: "#F5F5DC",
        gold: "#D4AF37",
        "gold-light": "#F5D76E",
        "gold-dark": "#B8860B",
        cream: "#FFF8E7",
        "dark-bg": "#1a0a0a",
        "dark-card": "#2d1010",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Cormorant Garamond", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-up": "fadeUp 1s ease forwards",
        "card-open": "cardOpen 1.2s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 10px #D4AF37" },
          "50%": { boxShadow: "0 0 30px #D4AF37, 0 0 60px #D4AF37" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        cardOpen: {
          "0%": { transform: "scaleY(0)", opacity: 0 },
          "100%": { transform: "scaleY(1)", opacity: 1 },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37, #F5D76E, #B8860B, #D4AF37)",
        "red-gradient": "linear-gradient(135deg, #8B0000, #c0392b, #8B0000)",
        "hero-gradient": "linear-gradient(180deg, #1a0a0a 0%, #3d0000 50%, #1a0a0a 100%)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // Scans all React files
    "./public/index.html"            // Includes HTML file for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",         // Deep blue
        secondary: "#9333ea",       // Purple
        accent: "#f59e0b",          // Amber
        light: "#f3f4f6",           // Light gray
        dark: "#1f2937"             // Dark gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],     // Modern font
        serif: ['Merriweather', 'serif']   // Elegant serif font
      },
      boxShadow: {
        'xl': '0 10px 30px rgba(0, 0, 0, 0.15)',      // Premium shadow
        '2xl': '0 20px 40px rgba(0, 0, 0, 0.25)'      // Smooth shadow
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }
    }
  },
  plugins: []
};

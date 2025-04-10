/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        primary: '#0f1117',    // Dark background
        accent: '#646cff',     // Accent color for interactive elements
        classyText: '#d1d5db', // Softer text color (optional)
      },
    },
  },
  plugins: [],
};

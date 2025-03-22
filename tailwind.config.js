/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3674B5",  // Deep Blue
        secondary: "#578FCA", // Light Blue
        accent: "#A1E3F9",    // Sky Blue
        soft: "#D1F8EF"       // Mint Green
      },
    },
  },
  plugins: [],
}


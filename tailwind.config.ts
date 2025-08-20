import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#f5c2d2', // Light pink
          DEFAULT: '#d5006d', // Main pink
          dark: '#a0003a', // Dark pink
        },
        black: {
          DEFAULT: '#000000', // Black
          light: '#1a1a1a', // Light black
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Elegant font
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Extend active variant
      textColor: ['active'], // Extend active variant
    },
  },
  plugins: [],
};

export default config;
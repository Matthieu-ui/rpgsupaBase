/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      form: {
        "input": {
          "border-radius": "0.5rem",
          "border": "1px solid #2A303C",
          "padding": "0.5rem",
          "color": "#fff",
          "background-color": "#2A303C",
          "box-shadow": "0 0 10 0.5rem rgba(433, 245, 255, 0.25)",
        },
        "select": {
          "border-radius": "0.5rem",
          "border": "1px solid #2A303C",
          "padding": "0.5rem",
          "color": "#fff",
          "background-color": "#2A303C",
          "box-shadow": "0 0 10 0.5rem rgba(433, 245, 255, 0.25)",
        },
        "textarea": {
          "border-radius": "0.5rem",
          "border": "1px solid #2A303C",
          "padding": "0.5rem",
          "color": "#fff",
          "background-color": "#2A303C",
          "box-shadow": "0 0 10 0.5rem rgba(433, 245, 255, 0.25)",
        }
      },

      label: {
        "color": "#fff",
        "background-color": "#2A303C",
        "box-shadow": "0 0 10 0.5rem rgba(433, 245, 255, 0.25)",
      },


      colors: {
        "primary": "#2A303C",
        "secondary": "#191D24",
        "accent": "#f08802",
        "neutral": "#191D24",
        "base-100": "#2A303C",
        "info": "#3ABFF8",
        "success": "#7ED321",
        "warning": "#FBBD23",
        "error": "#F87272",
      },

      shadowGlow: {
        "box-shadow": "0 0 10 0.5rem rgba(433, 245, 255, 0.25)",
      },
      
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
  },


    },
  },
  plugins: [
    require('tailwindcss-neumorphism'),
    require('@tailwindcss/forms')

  ],
}


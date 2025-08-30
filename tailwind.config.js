/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        sweet: "0 10px 25px -5px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        'paper': "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%), url('/paper-texture.png')"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
      extend: {
          backgroundImage: {
            'hero-pattern': "url('/hero_abstract_sm.jpg')"
          },
          colors: {
            'night-50': '#EFF4F6',
            'night-100': '#CEDEE4',
            'night-200': '#ADC7D2',
            'night-300': '#8CB1C0',
            'night-400': '#6B9BAE',
            'night-500': '#518194',
            'night-600': '#3F6473',
            'night-700': '#2D4852',
            'night-800': '#22373F',
            'night-900': '#101A1E'
          }
      },
  },
    plugins: [
    require('@tailwindcss/typography')
    ],
}

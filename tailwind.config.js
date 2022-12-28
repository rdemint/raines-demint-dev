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
            'night-900': '#101A1E',
            'alien-50': '#F5FDE7',
            'alien-100': '#EBFBD0',
            'alien-200': '#DCF8AA',
            'alien-300': '#D2F692',
            'alien-400': '#BEF263',
            'alien-500': '#A1EF34',
            'alien-600': '#93DE12',
            'alien-700': '#70B805',
            'alien-800': '#455A30',
            'alien-900': '#2B381E'
          }
      },
  },
    plugins: [
    require('@tailwindcss/typography')
    ],
}

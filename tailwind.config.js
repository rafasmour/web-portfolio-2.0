/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#213555',
          secondary: '#3E5879',
          accent: '#BCCCDC',
          background: '#FBFBFB',
        },
        dark: {
          primary: '#E17564',
          secondary: '#BE3144',
          accent: '#872341',
          background: '#09122C',
        },
      },
    },
  },
  plugins: [],
}


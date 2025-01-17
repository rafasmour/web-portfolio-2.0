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
      //https://play.tailwindcss.com/q6LZjWKr97 type animation
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s"
      },
    },
  },
  plugins: [],
}


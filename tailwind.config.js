/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    screens: {
      'xs': {'min': '320px', 'max': '389px'},
      'sm': {'min': '390px', 'max': '479px'},
      'md': {'min': '480px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1365px'},
      '2xl': {'min': '1366px', 'max': '1535px'},
      '3xl': {'min': '1536px', 'max': '1919px'},
      '4xl': {'min': '1920px'},

    },
    fontSize: {
      'xsmall': '26px',
      'small': '30px',
      'medium': '34px',
      'large': '37px',
      'extralarge': '40px',
      '2extralarge': '42px',
      '3extralarge': '55px',
      "4extralarge": '65px',
     },
    colors: {
      'accent': '#146EBE',
      'light': '#ECECEC',
      'grid': '#505050',
      'grid-light': '#646464',
      'dark': '#323234',
    },
    fontFamily: {
      sans: ['var(--font-Axiforma)']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
      zIndex: {
        '150': '150',
      }
    },
  },
  plugins: [],
}

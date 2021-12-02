module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  prefix: 'tw-',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          background: '#2F80ED',
          lightBackground: '#F6F8FB',
          border: '#97BEF4',
        },
        green: {
          background: '#219653'
        },
        grey: {
          loaderBackground: '#F2F2F2',
          lightGrey: '#BDBDBD',
          darkGrey: '#4F4F4F'
        }
      },
      animation: {
        lefttoright: 'lefttoright 3s ease-in-out 1s infinite running'
      },
      keyframes: {
        lefttoright: {
          '0%' : { transform: 'translateX(-100px)' },
          '100%' : { transform: 'translateX(350px)' }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

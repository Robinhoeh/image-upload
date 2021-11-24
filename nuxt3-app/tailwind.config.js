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
        }
        grey: {
          loaderBackground: '#F2F2F2',
          lightGrey: '#BDBDBD',
          darkGrey: #4F4F4F
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

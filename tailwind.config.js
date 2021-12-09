module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue, js. ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        base: {
          DEFAULT: '#262D3A',
          dark: '#1B1E2A',
        },
        blue: {
          DEFAULT: '#6763FD',
        },
        purple: {
          DEFAULT: '#B84EF1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

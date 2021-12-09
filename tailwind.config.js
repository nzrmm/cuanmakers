module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue, js. ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        base: {
          DEFAULT: '#262D3A',
          dark: '#1B1E2A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

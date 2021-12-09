module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue, js. ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        base: {
          secondary: '#C4C4C4',
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
      borderRadius: {
        8: '8px',
        12: '12px',
        20: '20px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

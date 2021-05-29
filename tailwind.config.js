module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '1sm': '0.9375rem',
        '1base': '1.0625rem',
        '2lg': '1.375rem',
      },
      borderRadius: {
        sm: '0.25rem',
      },
      spacing: {
        '0.75': '0.1875rem',
        '7.5': '1.875rem',
        '11.25': '2.8125rem',
        15: '3.75rem',
        '30': '7.5rem',
      },
      colors: {
        dark: '#171C21',
        primary: {
          300: '#0F72E5',
          500: '#1266C8'
        },
        grey: {
          400: '#999DA2'
        }
      },
      minHeight: {
        '62.5': '15.625rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

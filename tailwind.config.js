module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        sm: '0.25rem',
      },
      spacing: {
        '7.5': '1.875rem',
        15: '3.75rem',
      },
      colors: {
        dark: '#171C21',
        primary: {
          300: '#0F72E5',
          500: '#1266C8'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

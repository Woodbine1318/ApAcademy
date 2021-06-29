const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    fontFamily: {
      body: 'var(--font-family-body)',
      display: 'var(--font-family-display)',
    },
    fontSize: {
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
    },
    extend: {
      colors: {
        primary: {
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          DEFAULT: 'var(--color-blue)',
        },
        background: 'var(--color-blue-100)',
      },
      padding: {
        constrained: '1.6rem',
        'constrained-md': '4.2rem',
        'constrained-lg': 'max(6.2rem, calc((100vw - 1600px) / 2 + 6.2rem))',
      },
      minWidth: {
        32: '8rem',
      },
      minHeight: {
        80: '20rem',
      },
      maxHeight: {
        200: '50rem',
      },
      backgroundImage: (theme) => ({
        'button-shape': `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODkiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCA4OSAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTg3Ljk5NDcgMTUuODE3NEM4OS41MTkyIDcuNzkzOTEgODMuMDgxMiAwLjQ4MDg5NiA3NC45MjkyIDAuOTc1OTU4TDguNTg5MDQgNS4wMDQ3MUMzLjkzMDggNS4yODc2IDAuNDczMTI4IDkuNDM1ODQgMS4wMzM4MSAxNC4wNjg5TDIuNTg2MzQgMjYuODk3NkMzLjExMTY2IDMxLjIzODUgNi43MzA5IDM0LjU0MzUgMTEuMTAxNSAzNC42NzM1TDc2LjQ1ODcgMzYuNjE3OEM4MC44MDMgMzYuNzQ3IDg0LjU5NyAzMy42OTk5IDg1LjQwODMgMjkuNDNMODcuOTk0NyAxNS44MTc0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTc0Ljk1OTUgMS40NzUwNEw4LjYxOTM1IDUuNTAzNzlDNC4yNDg0NyA1Ljc2OTIzIDEuMDA0MSA5LjY2MTU3IDEuNTMwMTkgMTQuMDA4OEwzLjA4MjcyIDI2LjgzNzVDMy41NzgzMyAzMC45MzI5IDYuOTkyOTEgMzQuMDUxMSAxMS4xMTYzIDM0LjE3MzdMNzYuNDczNSAzNi4xMThDODAuNTcyMiAzNi4yMzk5IDg0LjE1MTcgMzMuMzY1MSA4NC45MTcxIDI5LjMzNjdMODcuNTAzNSAxNS43MjQxQzg4Ljk2NzEgOC4wMjA4NCA4Mi43ODYyIDAuOTk5NzM4IDc0Ljk1OTUgMS40NzUwNFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjEyIi8+Cjwvc3ZnPgo=
          )`,
        shape: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA3MCA1MSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMC4zMjU0NDUgMjAuMjUzMkMtMC44NzAwMzQgOC44MTMxNSA4LjgwNjM0IC0wLjgwNjggMjAuMjM5MiAwLjQ1NTU4TDU4Ljg5NjQgNC43MjM5OEM2NS4xMDU0IDUuNDA5NTUgNjkuNjczIDEwLjg2MzUgNjkuMjU4MSAxNy4wOTY0TDY3Ljk3OTkgMzYuMjk5NEM2Ny41NTI0IDQyLjcyMzMgNjIuMzk1NSA0Ny44MTY1IDU1Ljk2NjggNDguMTY0MkwxNS42Mjc1IDUwLjM0NjFDOC44NTUxNiA1MC43MTI0IDIuOTg1MDcgNDUuNzA0NCAyLjI4MDE4IDM4Ljk1ODlMMC4zMjU0NDUgMjAuMjUzMloiIGZpbGw9IiMzOUM0RkYiLz4KPC9zdmc+Cg==
              )`,
      }),
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        ':root': {
          '--color-blue': '#39C4FF',
          '--color-blue-100': '#F6FAFC',
          '--color-blue-200': '#E0F0F8',
          '--color-white': '#ffffff',
          '--color-black': '#000000',
          '--font-family-body': '"Hind", sans-serif',
          '--font-family-display': '"Poppins", sans-serif',
          '--font-weight-regular': '400',
          '--font-weight-semibold': '600',
          '--font-size-sm': '1.25rem',
          '--font-size-base': '1.563rem',
          '--font-size-md': '1.953rem',
          '--font-size-lg': '2.441rem',
          '--font-size-xl': '3.052rem',
          '--font-size-2xl': '3.815rem',
          '--font-size-3xl': '4.768rem',
        },
        html: {
          overflowX: 'hidden',
          fontSize: '62.5%',
          scrollBehavior: 'smooth',
        },
        body: {
          textRendering: 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          fontSmoothing: config('theme.fontSmoothing.antialiased'),
          fontFamily: config('theme.fontFamily.body'),
          fontSize: config('theme.fontSize.base'),
        },
        '.webkit-mask-image': {
          '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        },
        'summary::marker': {
          content: '""',
        },
        'summary::-webkit-details-marker': {
          display: 'none',
        },
      });
    }),
  ],
};

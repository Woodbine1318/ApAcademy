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
      });
    }),
  ],
};

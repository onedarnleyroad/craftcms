/* eslint-disable quote-props */
// Convert a unit to rem, eg...
// p-4 -> 1rem;
const rem = (i) => `${i * 4 / 16}rem`;

const makeRange = (from, to, step, cb) => {
  const config = {};
  for (let i = from; i <= to; i += step) {
    config[i] = cb(i);
  }
  return config;
};

const spacing = {
  px: '1px',
  '2px': '2px',
  // It's a lot. But, this is the design studio we're in,
  // you need a lot of random sizes, so let's just lean on purge...
  ...makeRange(0, 80, 1, rem),
  ...makeRange(80, 200, 4, rem)
};

const columns = {
  '1/2': '50%',
  '2/2': '100%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '3/3': '100%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '4/4': '100%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '5/5': '100%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '6/6': '100%',
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
  '10/10': '100%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  '12/12': '100%',
};

module.exports = {
  prefix: '',
  purge: false,
  important: false,
  separator: ':',
  theme: {
    aspectRatio: {
      '16x9': 16 / 9,
      '3x2': 3 / 2,
      '1x1': 1,
      '31x33': 31 / 33,
    },
    screens: {
      mobile: {max: '639px'},
      xs: {min: '480px'},
      sm: {min: '640px'},
      md: {min: '768px'},
      lg: {min: '1024px'},
      xl: {min: '1280px'},
      '2xl': {min: '1440px'},
      '3xl': {min: '1600px'},
      '4xl': {min: '1920px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',

      // Use CSS vars for themes:
      // theme: 'var(--theme-color, rgb(30, 34, 169) )',

      // Use make range to create a range of opacity, eg
      black: {
        default: 'rgba(0,0,0,1)',
        // will produce black-10, black-20, eg rgba(0,0,0,0.1) and so on....
        ...makeRange(10, 90, 10, i => `rgba(0,0,0,${i / 100})`)
      },
      white: {
        default: 'rgba(255,255,255,1)',
        ...makeRange(10, 90, 10, i => `rgba(255,255,255,${i / 100})`)
      },
    },

    spacing: {
      ...spacing,
      ...columns
    },

    namedWidths: {
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      screenw: '100vw',
      screenh: '100vh',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: 'currentColor',
    }),
    fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: [
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif',
			],
			mono: [
				'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'
			],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // Fonts from 10px to 60px, in REM:
      // eg text-10, text-11 ... text-60
      ...makeRange(10, 60, 1, i => `${i / 16}rem`),
      // text-62, text-64 etc...
      ...makeRange(62, 70, 2, i => `${i / 16}rem`),
    },

    // For all "sizes", use the same approach,
    // but it's a lot going in. It's flexible, and purge helps us,
    // so I think it's fine, but you may wish for clarity.
    margin: (theme, {negative}) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    height: theme => ({
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    padding: theme => ({
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    maxHeight: theme => ({
      full: '100%',
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    maxWidth: theme => ({
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    minHeight: theme => ({
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    minWidth: theme => ({
      ...theme('spacing'),
      ...theme('namedWidths'),
    }),
    opacity: {
      ...makeRange(0, 100, 5, o => `${o / 100}`)
    },
  },
  variants: {
    aspectRatio: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
    fill: ['responsive', 'group-hover'],
    fontWeight: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    outline: ['responsive', 'focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'group-hover', 'focus'],
  },
  corePlugins: {
    container: false
  },
  plugins: [

    // ASPECT RATIO:
    function({theme, addUtilities, variants}) {

      const base = {
        height: '0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      };

      addUtilities({
        '.ar-base': base
      });

      Object.entries(theme('aspectRatio')).forEach(([key, value]) => {
        addUtilities({
          [`.ar-${key}`]: {
            ...base,
            paddingBottom: `${100 / (value)}%`,
          }
        }, {
          variants: variants('aspectRatio')
        });
      });

    },
  ],
};

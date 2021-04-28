const rem = (i) => `${(i * 4) / 16}rem`;

const makeRange = (from, to, step, cb) => {
  const config = {};
  for (let i = from; i <= to; i += step) {
    config[i] = cb(i);
  }
  return config;
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // Tailwind uses `sans` on `html` as part of preflight
      sans: [
        'ui-sans-serif',
        'system-ui',
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
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      spacing: {
        em: '1em',
        px: '1px',
        '2px': '2px',
        ...makeRange(0, 80, 1, rem),
        ...makeRange(80, 200, 4, rem),
      },
      fontSize: {
        // eg text-10, text-11 ... text-60
        ...makeRange(10, 60, 1, (i) => `${i / 16}rem`),
        // text-62, text-64 etc...
        ...makeRange(62, 70, 2, (i) => `${i / 16}rem`),
      },
      maxWidth: {
        ...makeRange(0, 80, 1, rem),
        ...makeRange(80, 200, 4, rem),
      },
      minHeight: {
        ...makeRange(0, 80, 1, rem),
        ...makeRange(80, 200, 4, rem),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
}

module.exports = {
  corePlugins: {
    container: false,
  },
  darkMode: false,
  mode: 'jit',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: [
      './templates/**/*.twig',
    ],
  },
  theme: {
    extend: {
      minHeight: {
        'screenh' : '100vh'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  variants: {}
};

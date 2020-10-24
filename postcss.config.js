const autoprefixer = require('autoprefixer')

const cssnano = require('cssnano')({
	preset: 'default',
	discardUnused: false,
	discardComments: {
		removeAll: true
	}
})

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./templates/**/*.twig'
	],
	whitelistPatterns: [
		/js-/
	],
	defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
})

const tailwind = require('tailwindcss')(
	'./tailwind.config.js'
)

module.exports = ({ options }) => {
	return {
		plugins: [
			tailwind,
			autoprefixer,
      ...options.mode === 'production'
				? [
					purgecss,
					cssnano
        ] : []
		]
	}
}

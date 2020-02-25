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
		'./templates/**/*.twig',
		'./src/**/*.vue'
	],
	whitelistPatterns: [
		/js-/
	],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
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
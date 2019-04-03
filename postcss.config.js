
const cssnano = require("cssnano");
const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:/]+/g) || [];
	}
}

module.exports = ({ options }) => {

	let plugins = [
		require('tailwindcss')('./tailwind.js'),
		require('autoprefixer'),
		purgecss({
			content: ['./templates/**/*.twig', './src/js/components/**/*.vue'],
			extractors: [{
				extractor: TailwindExtractor,
				extensions: ["twig", "vue"]
			}]
		})
	];

	if (options.mode === 'production') {

		plugins = [
			...plugins,
			cssnano({
				preset: 'default',
				discardUnused: false,
				discardComments: { removeAll: true }
			})
		];
	}

	return {
		plugins
	};
};
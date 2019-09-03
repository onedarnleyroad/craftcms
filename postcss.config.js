
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
			content: ['./templates/**/*.twig', './src/js/components/**/*.vue', './templates/**/*.html'],
			extractors: [{
				extractor: TailwindExtractor,
				extensions: ["twig", "vue", "html"],
				whitelistPatterns: [
					/* 
						Setup a tailwind whitelist here, or you can do it in HTML
						but you can use regex here for matching, good for namespaced
						library CSS like Flickity, eg:

					 	/flickity/,
				 		/previous/,
						/next/,
					*/
				]
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
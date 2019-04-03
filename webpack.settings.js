const path = require("path");

module.exports = {

	base: './src/js/',
	publicPath: 'assets/',
	path: path.resolve(__dirname, 'web/assets'),
	entries: [
		"app"
	],

	// Filenames for JS files
	output: {
		production: '[name].[hash].js',
		development: '[name].js',
		legacy: 'legacy-[name].[hash].js',
		css: '[name].[hash].css',
		library: 'ww-country',
	},

	html: {
		// Templates:
		template: path.resolve(__dirname, "src/html/scripts.html"),
		// If you're using the raeder/craft-http2-server-push-twig plugin, then
		// you can use this template:
		// template: path.resolve(__dirname, "src/html/scripts-server-push.html"),

		// Outputs File
		filename: (entry, target) => path.resolve(__dirname, `templates/_readonly/html/${target}_${entry}.twig`),
	},

	aliases: {
		'components': path.resolve(__dirname, "./src/js/components"),
		'parts': path.resolve(__dirname, "./src/js/parts"),
		'libs': path.resolve(__dirname, "./src/js/libs"),
		'config': path.resolve(__dirname, "./src/config"),
		'@css': path.resolve(__dirname, "./src/scss"),
		vue$: 'vue/dist/vue.common.js',
	},

	babel: {
		modern: {
			modules: false,
			targets: {
				chrome: '60',
				safari: '10.1',
				ios: '10.3',
				firefox: '54',
				edge: '15',
			},
		},

		legacy: {
			modules: false,
			// targets: '> 1%, last 2 versions, Firefox ESR'
		}

	}
};

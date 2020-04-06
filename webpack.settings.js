const path = require("path");
const version = process.env.npm_package_version;

module.exports = {

	base: './src/js/',
	publicPath: 'assets/',
	path: path.resolve(__dirname, 'web/assets'),
	entries: [
		"app"
	],

	// Filenames for JS files
	output: {
		production: `[name].[chunkhash]-${version}.js`,
		development: `[name].js`,
		legacy: `legacy-[name].[chunkhash]-${version}.js`,
		css: `[name].[chunkhash]-${version}.css`,
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
		'@': path.resolve(__dirname, "./src/js"),
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

	},

	devServer: {
		port: 9000,
		https: true,
		host: 'localhost'
	}
};

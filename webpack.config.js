/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const settings = require('./webpack.settings');

module.exports = env => {

	
	/*
	
	Decide on the environment settings, whether legacy
	production or devServer, the compilation will behave a little
	differently.

	To sum up, 
	
	Production means: 
		1. Compile an HTML scripts file,
		2. Extract CSS into separate css files as needed
		3. Use a modern browser preset for transpiling, eg, quite a lot of things are left as is, due to modern browsers being able to use ES6. HTML Scripts are imported as type=module to avoid being downloaded by legacy browsers.
		
	Legacy means:
		1. Compile an HTML scripts file,
		2. Some CSS will ajax in, if needed, but it will not write CSS to hard drive, 
			since it will use the one that "production" builds
		3. A more severe transpiling will happen on babel, for legacy browsers.
		4. Nomodule scripts are being 

		Legacy basically means IE11. So, maybe one day we can decide ot just not do it.

	DevServer means:
		1. Hot Module Replacement (HMR) is used
		2. Nothing is written to the hard drive,
		3. The devServer is run (duh)
		4. Production transpiling happens, which means not much.


	*/
	const legacy = !!(env && env.legacy);
	const production = legacy || (env && env.production);
	const devServer = env && env.devServer;

	// Target is a string, switched between production, development or legacy, based
	// on the env above. 
	let target = production ? 'production' : 'development';
	target = legacy ? 'legacy' : target;

	console.log(`Compiling for ${target}`);

	// Based on the target, figure out a path for scripts.
	// This still affects devServer, so HMR knows where to 
	// look for.
	
	// Path, used to load scripts in on the browser.
	const publicPath = `${settings.publicPath}${target}/`;

	// File path, where is the file located...
	const filePath = `${settings.path}/${target}`;

	// Generate the entries list. It will get the list from webpack.settings.js
	const entry = {};
	// It'll look through each name and find the file, so in most cases
	// it'll go from `app` to `./src/js/app.js`
	settings.entries.forEach(name => entry[name] = `${settings.base}${name}.js`);

	// Webpack.settings.js will store a function to compile a script tag for each entry
	const filename = settings.html.filename(entry, target);
	console.log( filename );

	/**
	 * WEBPACK PLUGINS.
	 * 
	 * All sorts of things that are part of compilation.
	 * 
	 * Webpack expects an array of plugins.
	 */

	// Start the plugins array.
	// This is the shared between any target, so all situations will use these pplugins:
	let plugins = [
		// Load vue components:
		new VueLoaderPlugin(),

		// This is a basic plugin that makes the ENV available, so 
		// for example, we don't import certain things in legacy.
		new webpack.DefinePlugin({ ENV: { production, legacy } })
	];

	// For NON dev server builds, i.e. production and legacy...
	if ( !devServer ) {

		// We write script tags to disk...
		const htmlWebpackPlugins = [];

		// Loop through each entry and...
		settings.entries.forEach(entry => {


			// Create an HTMLWebpackPlugin that will generate our script.twig
			htmlWebpackPlugins.push(
				new HtmlWebpackPlugin({
					entry,
					filename,
					alwaysWriteToDisk: true,
					minify: {
						collapseWhitespace: true,
						preserveLineBreaks: true,
					},
					template: settings.html.template,
					inject: false,
					// We exclude any scripts that AREN'T this entry, to avoid
					// writing every entry to every script file. 

					// Entries are not designed to co-exist with others, in our setup, eg
					// "app" for the front end, or "Cp" for the control panel. but never both on one page.
					excludeChunks: settings.entries.filter(name => name != entry),

					// Environment Vars. Our script template can decide
					// what to do based on this.
					production,
					devServer,
					legacy
				})
			);
		});


		// Re assign our plugins array...
		plugins = [

			// Clean out any compiled JS first:
			new CleanWebpackPlugin([`${filePath}/*.js`, `${filePath}/*.css`], {
				root: false,
				allowExternal: true,
			}),
			// Add in our html script writing plugins:
			...htmlWebpackPlugins,
			// Add the hard disk plugin to write HTML rather than inject
			new HtmlWebpackHarddiskPlugin(),

			// Add our default plugins back in
			...plugins
		];

		// Write CSS if production - don't do on Legacy,
		// as that legacy will use the production css.
		if (production) {
			plugins.push(new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: settings.output.css
			}));
		}

	} else {
		// HMR for dev server only, it doesn't need anything else on top of the standard.
		plugins.push( new webpack.HotModuleReplacementPlugin() );
	}


	// Settings file will define how to name our JS and CSS files.
	let outputFilename;
	if (legacy) {
		outputFilename = settings.output.legacy;
	} else {
		outputFilename = production ? settings.output.production : settings.output.development;
	}

	// Finally we can start outputting our actual webpack config file. 
	// This below could have been a lot more hard coded, as now it's
	// largely configured by settings and logic above. But the property
	// names here are the ones you'd look up on webpack docs.
	return {

		// Let's add in our plugins array. We build this above,
		// it's too complext to do when building the main object.
		plugins,

		// Let webpack know what mode we're in:
		mode: production ? 'production' : 'development',

		// Give the object of all our entries, eg 'app', or 'cp' etc...
		entry,

		// Tell webpack how and where to save:
		output: {
			// how to name files once bundled
			filename: outputFilename,
			// Where to retrieve async modules from, or where to load HMR modules:
			publicPath: devServer ? `http${settings.devServer.https ? 's' : ''}://localhost:${settings.devServer.port}/${publicPath}` : `/${publicPath}`,
			// where to find the entries
			path: filePath,
		},

		// How to optimise the build:
		optimization: {
			// As long as the chunk name doesn't equal CP (we'd just want one bundle for that)
			// then split chunks as necessary. this does async modules, and splits vendors / manifest.
			splitChunks: {
				chunks: chunk => chunk.name !== 'cp',
			},
			// Generate a manifest file that tells webpack where to get chunks from. 
			runtimeChunk: {
				name: "manifest",
			},
		},

		// Resolve is what maps aliases. Rather than having to worry about complicated, nested relative paths
		// eg within folders, we can just the @ symble. The common pattern is to use point "@" to "src/js",
		// so that import "@/libs/helpers" would look in "src/js/libs/helpers.js"
		resolve: {
			alias: settings.aliases
		},

		// Module setting is what defines our actual transformers,
		// it defines the actual compilation. This is what were' here for in the end
		// so it runs through the files it encounters, all imported from the entry point 
		// (eg app.js) and decides what to do with them. Genereally it's based on 
		// file extensions.
		module: {
			rules: [

				// Use Vue-loader plugin for vue files.
				// These are converted to JS so in turn will get
				// passed down to the JS rule below, i.e. babel.
				{
					test: /\.vue$/,
					loader: "vue-loader"
				},
				
				// For JS files, we run babel loader.
				{
					test: /\.js$/,
					// But we exclude node_modules
					exclude: /(node_modules|bower_components)/,

					use: [{
						loader: "babel-loader",
						options: {
							presets: [
								// two possible babel settings depending on whether we are a legacy
								// or modern build
								[
									"@babel/preset-env",
									legacy ? settings.babel.legacy : settings.babel.modern
								]
							],
							// Add in rest spread plugin so we can { ...spread } objects
							plugins: [require("@babel/plugin-proposal-object-rest-spread")]
						}
					}]
				},
				{
					// For CSS or SCSS files...
					test: /\.(s*)css$/,
					use: [
						// Use our extract plugin if we are in production, i.e.
						// not on dev server,
						// If not production then just use style-loader and webpack
						// will import CSS dynamically, upon javaScript execution.
						production ? {
							loader: MiniCssExtractPlugin.loader,
							options: {},
						} : 'style-loader',
						
						// Also use css loader
						'css-loader',
						// and also use postcss. ctx will pass 
						// the 'mode' to our postcss.config.js file, 
						// so we can choose to minify or not, purge or not.
						{
							loader: 'postcss-loader',
							options: {
								config: {
									ctx: {
										mode: production ? 'production' : 'development',
									}
								}
							}
						},
						// And pass our sass loader. 
						'sass-loader',
					]
				},
			]
		},
		
		// Finally, add devServer settings. These are ignored
		// if the devServer flag is not enabled.
		devServer: {
			// from settings, decide where to look
			// for the dev server. Most cases it's just https://localhost:9000/assets/development,
			// the settings below build that out.
			https: settings.devServer.https,
			host: settings.devServer.host,
			publicPath: `${settings.devServer.https ? 'https' : 'http'}://${settings.devServer.host || 'localhost'}:${settings.devServer.port}/assets/development/`,
			port: settings.devServer.port,

			// hardcoded settings, this just makes things easier to work with craft.
			stats: {
				colors: true
			},

			disableHostCheck: true,
			watchContentBase: false,
			contentBase: './templates/',
			compress: true,
			hot: true,
			inline: true,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			}
		}
	};
};

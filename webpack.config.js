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

	const legacy = !!(env && env.legacy);
	const production = legacy || (env && env.production);
	const devServer = env && env.devServer;

	// Custom target...
	let target = production ? 'production' : 'development';
	target = legacy ? 'legacy' : target;

	console.log(`Compiling for ${target}`);


	const publicPath = `${settings.publicPath}${target}/`;
	const filePath = `${settings.path}/${target}`;

	console.log( publicPath );
	console.log( filePath );

	// Generate entries list
	const entry = {};
	settings.entries.forEach(name => entry[name] = `${settings.base}${name}.js`);

	const htmlWebpackPlugins = [];
	settings.entries.forEach(entry => {

		const filename = settings.html.filename(entry, target);

		// And again for our dev mode, not-inlined version:
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
				excludeChunks: settings.entries.filter(name => name != entry),

				// Environment Vars:
				production,
				devServer,
				legacy
			})
		);
	});

	let plugins = [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		// Built up above...
		...htmlWebpackPlugins,
		new HtmlWebpackHarddiskPlugin(),
		new webpack.DefinePlugin({ ENV: { production, legacy } })
	];

	if ( !devServer ) {
		plugins = [
			new CleanWebpackPlugin([`${filePath}/*.js`, `${filePath}/*.css`], {
				root: false,
				allowExternal: true,
			}),
			...plugins
		];
	}


	if (production) {
		plugins.push(new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: settings.output.css
		}));
	}

	let outputFilename;
	if (legacy) {
		outputFilename = settings.output.legacy;
	} else {
		outputFilename = production ? settings.output.production : settings.output.development;
	}

	return {

		mode: production ? 'production' : 'development',
		entry,

		output: {
			filename: outputFilename,
			publicPath: devServer ? `https://localhost:9000/${publicPath}` : `/${publicPath}`,
			path: filePath,
			library: settings.library
		},

		optimization: {
			splitChunks: {
				chunks: chunk => chunk.name !== 'cp',
			},
			runtimeChunk: {
				name: "manifest",
			},
		},

		resolve: {
			alias: settings.aliases
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
				},
				{
					test: /\.vue$/,
					loader: "vue-loader"
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,

					use: [{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									legacy ? settings.babel.legacy : settings.babel.modern
								]
							],
							plugins: [require("@babel/plugin-proposal-object-rest-spread")]
						}
					}]
				},
				{
					test: /\.(s*)css$/,
					use: [
						production ? {
							loader: MiniCssExtractPlugin.loader,
							options: {},
						} : 'style-loader',
						'css-loader',
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
						'sass-loader',
					]
				},
			]
		},

		// See above...
		plugins,


		devServer: {
			watchContentBase: true,
			contentBase: './templates/',
			https: true,
			compress: true,
			hot: true,
			inline: true,
			port: 9000,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			}
		}
	};
};

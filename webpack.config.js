/* eslint-env node */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
  const devServer = !!(env && env.devServer);

	// Target is a string, switched between production, development or legacy, based
	// on the env above. 
  let target = production ? 'production' : 'development';
  target = legacy ? 'legacy' : target;

  console.log(`Compiling for ${target} with devServer ${devServer ? 'enabled' : 'disabled'}`);

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

  const htmlWebpackPlugins = [];
  settings.entries.forEach(entry => {

    const filename = settings.html.filename(entry, target);

    // And again for our dev mode, not-inlined version:
    if ( !devServer ) {
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          entry,
          filename,
          alwaysWriteToDisk: true, // provided by html-webpack-harddisk-plugin
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
    }
  });

  let plugins = [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({ ENV: { production, legacy } }),
    new CleanWebpackPlugin(),
  ];

  if ( !devServer ) {
    plugins = [
      ...plugins,
      ...htmlWebpackPlugins,
      new HtmlWebpackHarddiskPlugin(),

    ];
  } else {
    plugins = [
      ...plugins,
      new webpack.HotModuleReplacementPlugin(),
    ];
  }


  if (production) {
    plugins.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: settings.output.css
    }));
    plugins.push(new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      test: /\.(js)($|\?)/i,
      exclude: [
        /vendor/,
        /manifest/
      ]
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
      publicPath: devServer ? `http${settings.devServer.https ? 's' : ''}://localhost:${settings.devServer.port}/${publicPath}` : `/${publicPath}`,
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
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.js$/,

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
            'css-loader?url=false',
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
      // from settings
      https: settings.devServer.https,
      host: settings.devServer.host,
      publicPath: `${settings.devServer.https ? 'https' : 'http'}://${settings.devServer.host || 'localhost'}:${settings.devServer.port}/assets/development/`,
      port: settings.devServer.port,

      // hardcoded
      stats: {
        colors: true
      },

      disableHostCheck: true,
      watchContentBase: true,
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

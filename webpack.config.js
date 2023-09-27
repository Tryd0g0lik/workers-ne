// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = [
	{
		name: 'webpack_frontend',
		entry: './src/app/frontend/webpack.config.js',
		output: {
			filename: 'frontend.js',
			path: path.resolve(__dirname, 'dist')
		},
		target: 'web'
		// Дополнительные настройки для config1
	},
	{
		name: 'webpack_backend',
		entry: './src/app/backend/webpack.dev.js',
		output: {
			filename: 'backend.js',
			path: path.resolve(__dirname, 'dist'),
			libraryTarget: "commonjs"
		},
		target: 'node18.17'
		// Дополнительные настройки для config2
	},
	{
		mode: 'none',
		entry: './src/index.js',
		target: ['web', 'node18.17'],
		//
		output: {
			path: path.resolve(__dirname, 'dist'),
			chunkFormat: 'commonjs',
		},

		plugins: [
			// new HtmlWebpackPlugin({
			// 	template: 'src/app/index.html',
			// 	minify: {
			// 		// exclude the minification
			// 		collapseWhitespace: false
			// 	}
			// }),

			// new MiniCssExtractPlugin({
			// 	filename: '[name].css',
			// }),

			new webpack.SourceMapDevToolPlugin({
				filename: '[file].map.[query]',
				exclude: path.resolve(__dirname, 'src/app'),
			})

			// new OptimizeCssAssetsPlugin()

			// Add your plugins here
			// Learn more about plugins from https://webpack.js.org/configuration/plugins/
		],
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/i,
		// попробовать добавить ЭRule.excludeЭ
		// exclude: [
		// 	"**/node_modules",

					// ],
					loader: 'ts-loader',
					include: [
						path.resolve(__dirname, 'src/app/frontend/src/ts'),
						path.resolve(__dirname, 'src/app/backend/src')
					]

				},
				{
					test: /\.js$/i,
					// exclude: /node_modules/,
					include: [
						path.resolve(__dirname, 'src/app/frontend/src/ts'),
						path.resolve(__dirname, 'src/app/backend/src')
					],
					use: [{
						loader: 'babel-loader',
						options: {

							configFile: "./babelrc"
						}
					}]

				}
				// {
				// 	test: /\.s?[ac]ss$/i,
				// 	include: [
				// 		path.resolve(__dirname, 'src/app/frontend/src/styles/style.scss')
				// 	],
				// 	use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader", 'postcss-loader']

				// },
				// {
				// 	test: /\.html$/i,
				// 	loader: 'html-loader'
				// },
				// {
				// 	test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				// 	type: 'asset/resource',
				// 	generator: {
				// 		filename: 'pic/[name][ext]'
				// 	}
				// }
				// Add your rules for custom modules here
				// Learn more about loaders from https://webpack.js.org/loaders/
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
		},
		stats: {
			errorDetails: true
		}

	}];

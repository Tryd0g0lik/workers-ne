// src\app\serwiceWorker\webpack.config.js

// Generated using webpack-cli http://github.com/webpack/webpack-cli
const path = require('path');
const webpack = require('webpack');
// const isProduction = process.env.NODE_ENV == 'production';


module.exports = {
	entry: './index.js',
	mode: 'development',// process.nextTick.MODE_ENV === 'production',
	target: 'web',
	output: {
		filename: 'serwiceWorker.js',
		path: path.resolve(__dirname, '../../../dist'),
		// libraryTarget: 'global'
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map.[query]',
			exclude: path.resolve(__dirname, './')
		})
		// Add your plugins here
		// Learn more about plugins from http://webpack.js.org/configuration/plugins/
	],

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				include: [
					path.resolve(__dirname, "./src")

				],
				options: { configFile: path.resolve(__dirname, "./tsconfig.json") }
			},
			{
				test: /\.js$/i,
				include: [
					path.resolve(__dirname, './src')
				],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						],
						plugins: [
							'@babel/plugin-transform-class-properties',
						],
						configFile: "../../../.babelrc"
					}
				}],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},

			// Add your rules for custom modules here
			// Learn more about loaders from http://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
		alias: {
			'@priority-data': path.resolve(__dirname, './src/some-best-cache/cacher/priority-data/index.ts'),

		}
	},
};

// module.exports = () => {
// 		config.mode = 'production';
// 		config.mode = 'development';

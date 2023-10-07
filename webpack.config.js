// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack');
// const isProduction = process.env.NODE_ENV == 'production';


module.exports = {
	entry: './index.js',
	mode: process.nextTick.MODE_ENV === 'production',
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
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				include: [
					path.resolve((__dirname, "./src"))
				],
				options: { configFile: path.resolve(__dirname, "../../../tsconfig.json") }
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
							'@babel/plugin-proposal-class-properties',
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
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
};

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = 'production';


// 	} else {
// 		config.mode = 'development';
// 	}
// 	return config;
// };

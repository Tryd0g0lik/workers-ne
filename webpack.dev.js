// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const ESLintPlugin = require('eslint-webpack-plugin');
// const isProduction = process.env.NODE_ENV == 'production';


module.exports = merge(common, {
	// entry: './src/index.ts',
	mode: "development",

	devServer: {
		host: 'localhost',
		static: {
			directory: path.resolve(__dirname, '../../../dist'),
			statucOptions: {
				redirect: true
			}
		},
		watchFiles: [
			"./src/serve.ts"
		],

		compress: true,
		historyApiFallback: true,


	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new ESLintPlugin({
		// 	files: path.resolve(__dirname, 'src/')
		// })
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	]
	// stats: {
	// 	errorDetails: false
	// }
})

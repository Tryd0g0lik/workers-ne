// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: "development",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map.[query]',
			exclude: path.resolve(__dirname, 'src/app'),
		})
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	]
	// stats: {
	// 	errorDetails: false
	// }
})

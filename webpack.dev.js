process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
// ESLintPlugin = require('eslint-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
	// Set the mode to development or production
	mode: process.env.NODE_ENV,
	// Control how source maps are generated
	// devtool: 'source-map', //or 'source-map',//'cheap-module-source-map'

	// Spin up a server for quick development


	plugins: [
		// Only update what has changed on hot reload
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			files: [
				path.resolve(__dirname, 'src/app/backend/src'),
				path.resolve(__dirname, 'src/app/frontend/src/ts')

			]
		})
	]
});

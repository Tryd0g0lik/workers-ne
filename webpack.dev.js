process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackTagsPlugin = require("html-webpack-include-assets-plugin");
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
		}),
		// new HtmlWebpackPlugin({
		// 	template: './src/app/index.html'
		// }),
		// new HtmlWebpackTagsPlugin({
		// 	append: true,
		// 	jsExtensions: ['.js'],
		// 	cssExtensions: ['.css'],
		// 	tags: ['frontend.js', 'main.css'],
		// })
	]
});

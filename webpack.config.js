// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	mode: "none",
	target: 'web',
	output: {
		filename: 'frontend.js',
		path: path.resolve(__dirname, '../../../dist'),
		libraryTarget: "commonjs"
	},
	node: process.env.NODE_ENV,
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../../../dist'),

		},

		watchFiles: [
			'./src/app/styles',
			'./src/app/ts',
			'./src/app/serve.ts'
		],

		compress: true,
		historyApiFallback: true,
		open: true,
		port: 8080
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '../index.html',
			minify: {
				// exclude the minification
				collapseWhitespace: false
			}
		}),

		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map.[query]',
			exclude: path.resolve(__dirname, 'src/app'),
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				include: [
					path.join(__dirname, 'src/ts')
				]
			},
			{
				test: /\.js$/i,
				include: [
					path.resolve(__dirname, 'src')
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
				test: /\.s?[ac]ss$/i,
				include: [
					path.resolve(__dirname, './src/styles/style.scss')
				],
				use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader", 'postcss-loader']

			},
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'pic/[name][ext]'
				}
			}

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
};

// module.exports = () => {
//     if (isProduction) {
//         config.mode = 'production';



//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };

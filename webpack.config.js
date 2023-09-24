// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = MiniCssExtractPlugin.loader;



module.exports = {
	entry: './src/index.ts',
	mode: "none",
	// output: {
	// 	path: path.resolve(__dirname, 'dist'),
	// },
	node: process.env.NODE_ENV,
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: 'index.html',
		// }),

		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				// exclude: ['/node_modules/']
				include: [
					path.resolve(__dirname, 'src')
				]
			},
			{
				test: /\.s?[ac]ss$/i,
				include: [
					path.resolve(__dirname, './src/app/scss')
				],
				use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader", 'postcss-loader']

			},
			// {
			// 	test: /\.s[ac]ss$/i,
			// 	use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
			// },
			// {
			// 	test: /\.css$/i,
			// 	use: [stylesHandler, 'css-loader', 'postcss-loader'],
			// },
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
//     if (isProduction) {
//         config.mode = 'production';


//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };

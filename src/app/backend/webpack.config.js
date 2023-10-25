// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: "none",

	target: 'node',
	output: {
		filename: 'backend.js',
		path: path.resolve(__dirname, '../../../dist')
	},

	// plugins: [
	// new webpack.SourceMapDevToolPlugin({
	// 	filename: '[file].map.[query]',
	// 	exclude: path.join(__dirname, 'src'),
	// }),
	// Add your plugins here
	// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	// ]
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				include: [
					path.resolve(__dirname, "src")
				],
				options: {
					configFile: path.resolve(__dirname, '../../../tsconfig.json'),
				}
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
			// {
			// 	test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
			// 	type: 'asset',
			// },

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/

		],
		exprContextCritical: false
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
}

// module.exports = () => {}
// 'production';
// 'development';


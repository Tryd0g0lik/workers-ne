// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require('path');

module.exports = [
	{
		name: 'my-webpack-frontend',
		entry: './src/app/frontend/webpack.config.js',
		// Дополнительные настройки для config1
	},
	{
		name: 'workers-ne-serwiceWorker',
		entry: './src/app/serwiceWorker/webpack.config.js',
	},

<<<<<<< HEAD
	// {
	// 	name: 'webpack_backend',
	// 	entry: './src/app/backend/webpack.config.js',
	// 	// Дополнительные настройки для config2
	// },
	{
		mode: 'none',
		entry: './src/index.js',
=======
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
							'@babel/plugin-transform-class-properties',
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
>>>>>>> c795420c1ca4f0637fd444c6e12733c8d94aead8

		plugins: [
			// Add your plugins here
			// Learn more about plugins from https://webpack.js.org/configuration/plugins/
		],
		module: {
			rules: [

				{
					test: /\.js$/i,
					include: [
						path.resolve(__dirname, 'src/app/frontend/src/ts'),
						path.resolve(__dirname, 'src/app/backend/src'),
						path.resolve(__dirname, 'src/app/serwiceWorker')
					]
				}

				// Add your rules for custom modules here
				// Learn more about loaders from https://webpack.js.org/loaders/
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
			// alias: {

			// 	'@priority-data': path.resolve(__dirname, './src/app/serwiceWorker/src/some-best-cache/cacher/priority-data/index.ts'),
			// 	'@strategy-FetchThenCache': path.resolve(__dirname, './src/app/serwiceWorker/src/some-best-cache/fetch-then-cache/index.ts')
			// }
		},
		stats: {
			errorDetails: true
		}
	}];

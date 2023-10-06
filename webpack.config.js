// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require('path');

module.exports = [
	{
		name: 'webpack_frontend',
		entry: './src/app/frontend/webpack.config.js',
		// Дополнительные настройки для config1
	},
	{
		name: 'webpack_backend',
		entry: './src/app/backend/webpack.dev.js',
		// Дополнительные настройки для config2
	},
	{
		name: 'workers-ne-serwiceWorker',
		entry: './src/app/serwiceWorker/webpack.config.js'
	},
	{
		mode: 'none',
		entry: './src/index.js',

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
						path.resolve(__dirname, 'src/app/backend/src')
					]
				}

				// Add your rules for custom modules here
				// Learn more about loaders from https://webpack.js.org/loaders/
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
		},
		stats: {
			errorDetails: true
		}

	}];

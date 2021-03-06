const path = require('path');

module.exports = {
	mode: 'development',
	watch: true,
	entry: './src/js/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: 'dist/js/'
	},
	module: {
	  rules: [
		    {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
		    },
		    {
				test: /\.scss?$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			}
	  	]
	}
};
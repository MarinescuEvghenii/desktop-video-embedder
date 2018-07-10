const path = require('path');

module.exports = {
	entry: './src/App.js',

	output: {
		path     : path.resolve('./assets/js/'),
		filename : 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}, {
				test: /\.scss$/,
				use : [
					{
						loader : "style-loader",
					},
					{
						loader  : "css-loader",
						options : {
							modules               : true,
							sourceMap             : true,
							localIdentName        : '[name]-[local]-[hash:base64:2]',
							convertToAbsoluteUrls : true
						}
					},
					{
						loader : "sass-loader",
					}
				]
			}
		]
	},

	plugins: []
};

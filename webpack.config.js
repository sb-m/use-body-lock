const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		library: 'use-lock-body',
		libraryTarget: 'commonjs2'
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'react-router-dom': 'react-router-dom'
	}
};

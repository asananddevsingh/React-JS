module.exports = {
	entry: {
        "animate": './src/Animate.js',
        "twowaybinding": './src/TwoWayBinding.js',
    },
	output:{
		path: __dirname,
		filename: '[name].js'
	},
	module:{
		loaders:[{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};

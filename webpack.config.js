const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	context: path.resolve(__dirname, ''),
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['.vue', '.js', '.css'],
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options:{
					postcss: [require('autoprefixer')({
						browsers: [
							'last 2 versions',
							'last 4 Android versions',
							'last 3 iOS versions'
						]
					})]
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
			}
		]
	}
}

// production configurations
if (process.env.NODE_ENV === 'production')
{
  module.exports.output.filename = '[name].min.js'

  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({filename: "[name].min.css", allChunks: true})
  ]

}
else
{
  // development configurations
  module.exports.output.filename = '[name].js'

  module.exports.module.loaders = module.exports.module.loaders.concat([
	{
	  	test: /\.css$/,
	    use: ExtractTextPlugin.extract({
	      fallback: "style-loader",
	      use: "css-loader"
	    })
	}
  ])

  module.exports.plugins = [
  	new ExtractTextPlugin({filename: "[name].css", allChunks: false})
  ]

  module.exports.devServer = {
    contentBase: './'
  }

  module.exports.devtool = '#source-map'
}
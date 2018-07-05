var path = require('path')
var webpack = require('webpack')

module.exports = {
	//entry: './src/main.js',
	entry: './src/lib/index.js',//修改入口文件
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
//		filename: 'build.js'
		filename:'alert987654321.js',//修改打包后的输出文件名
		library:'alert987654321',//使用require引入时的模块名
		libraryTarget:'umd',//会生成不同的und代码，可以是commonjs标准的，可以是amd标准的，可以是script标签引入的
		umdNamedDefine:true//会对umd构建过程中的amd模块进行命名，否则使用define
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			}, {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
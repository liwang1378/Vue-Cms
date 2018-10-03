//node语法
var path = require('path')
//在内存中，根据指定的模板页面，生成内存页面并自动注入到页面底部
var htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: path.join(__dirname, './src/main.js'),//入口文件
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [//所有webpack插件的配置节点
		new htmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module: {//配置所有第三方loader模块
		rules: [
			{test : /\.css$/, use: ['style-loader','css-loader']},//处理css
			{test : /\.less$/, use: ['style-loader','css-loader', 'less-loader']},//处理less
			{test : /\.scss$/, use: ['style-loader','css-loader', 'sass-loader']},//处理scss
			{test : /\.(jpg|png|gif|bmp|jpeg)$/,use: 'url-loader?limit=124715&name=[hash:8]-[name].[ext]'},//limit<=文件大小,显示图片url,否则以base64编码
			{test : /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},//处理字体
			{test : /\.vue$/, use: 'vue-loader' },//处理vue模板文件
			{test : /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	},
	resolve: {
		alias: {
			"vue$": 'vue/dist/vue.js'
		}
	}
}

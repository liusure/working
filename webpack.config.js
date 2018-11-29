var webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'js/index': './src/js/index.js'  //入口文件
  },
  output: {
    filename: '[name].js',      //打包后index.js的名字，
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(['dist']),
  ]
}
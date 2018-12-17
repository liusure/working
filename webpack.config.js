var webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    header: path.join(__dirname, "./src/js/header.js"),
    utils: path.join(__dirname, "./src/js/utils.js"),
    urls: path.join(__dirname, "./src/js/urls.js"),
    i18n: path.join(__dirname, "./src/js/i18n.js"),
    index: path.join(__dirname, "./src/js/index.js"),
    institution: path.join(__dirname, "./src/js/institution.js"),
    service: path.join(__dirname, "./src/js/service.js"),
    resource: path.join(__dirname, "./src/js/resource.js"),
    case: path.join(__dirname, "./src/js/case.js"),
    news: path.join(__dirname, "./src/js/news.js"),
    contact: path.join(__dirname, "./src/js/contact.js"),
    newsDetail: path.join(__dirname, "./src/js/newsDetail.js"),
    caseDetail: path.join(__dirname, "./src/js/caseDetail.js"),
    institutionList: path.join(__dirname, "./src/js/institutionList.js"),
    institutionDetail: path.join(__dirname, "./src/js/institutionDetail.js"),
    lawyerDetail: path.join(__dirname, "./src/js/lawyerDetail.js")
  },
  output: {
    filename: 'static/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ttf|wtoff|eot|png|jpe?g|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.join('static', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: '/node_modules/'
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.less/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/page/index.html",
      chunks: ["i18n", "header", "index"],
    }),
    new HtmlWebpackPlugin({
      filename: "institution.html",
      template: "./src/page/institution.html",
      chunks: ["i18n", "header", "institution"]
    }),
    new HtmlWebpackPlugin({
      filename: "service.html",
      template: "./src/page/service.html",
      chunks: ["i18n", "header", "service"]
    }),
    new HtmlWebpackPlugin({
      filename: "resource.html",
      template: "./src/page/resource.html",
      chunks: ["i18n", "header", "resource"]
    }),
    new HtmlWebpackPlugin({
      filename: "case.html",
      template: "./src/page/case.html",
      chunks: ["i18n", "header", "case"]
    }),
    new HtmlWebpackPlugin({
      filename: "news.html",
      template: "./src/page/news.html",
      chunks: ["i18n", "header", "news"]
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/page/contact.html",
      chunks: ["i18n", "header", "contact"]
    }),
    new HtmlWebpackPlugin({
      filename: "newsDetail.html",
      template: "./src/page/newsDetail.html",
      chunks: ["i18n", "header", "newsDetail"]
    }),
    new HtmlWebpackPlugin({
      filename: "caseDetail.html",
      template: "./src/page/caseDetail.html",
      chunks: ["i18n", "header", "caseDetail"]
    }),
    new HtmlWebpackPlugin({
      filename: "institutionList.html",
      template: "./src/page/institutionList.html",
      chunks: ["i18n", "header", "institutionList"]
    }),
    new HtmlWebpackPlugin({
      filename: "institutionDetail.html",
      template: "./src/page/institutionDetail.html",
      chunks: ["i18n", "header", "institutionDetail"]
    }),
    new HtmlWebpackPlugin({
      filename: "lawyerDetail.html",
      template: "./src/page/lawyerDetail.html",
      chunks: ["i18n", "header", "lawyerDetail"]
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/app.[contenthash:12].css"
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    inline: true,
    proxy: {
      '/cms': {
        target: 'http://jfb.zledong.com',
        changeOrigin: true
      }
    }
  }
}
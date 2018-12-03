var webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        header: path.join(__dirname, "./src/js/header.js"),
        i18n: path.join(__dirname, "./src/js/i18n.js"),
        index: path.join(__dirname, "./src/js/index.js"),
        service: path.join(__dirname, "./src/js/service.js"),
        resource: path.join(__dirname, "./src/js/resource.js"),
        case: path.join(__dirname, "./src/js/case.js"),
        contact: path.join(__dirname, "./src/js/contact.js"),
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
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
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
        inline: true
    }
}
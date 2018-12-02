var webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: path.join(__dirname, "./src/js/index.js")
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ttf|wtoff|eot|png|jpe?g|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_modules/'
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            autoprefixer: true
                        }
                    }
                ]
            }, {
                test: /\.less/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "staticcss/app.[contenthash:12].css"
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
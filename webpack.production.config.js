var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        mian: './main.jsx',
        foot: './foot.jsx'
    },
    output: {
        path: __dirname + '/assets/',
        filename: '[name]-[chunkhash].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.jsx$/, loader: "react-hot!jsx?harmony"},
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"},
            {test: /\.(css|scss)$/, loader: ExtractTextPlugin.extract("style", "css!sass")}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name]-[chunkhash].js'
        }),
        new ExtractTextPlugin('[name]-[contenthash].css'),
        new HtmlWebpackPlugin({
            title: 'my app',
            template: 'src/template/index.html'
        })
    ]
};
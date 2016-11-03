var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {main: './main.js'},
    output: {
        path: __dirname + '/assets/',
        filename: '[name].js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.jsx$/, loader: "react-hot!jsx?harmony"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.(css|scss)$/, loader: "style!css!sass"}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
            }
        })
    ]
};
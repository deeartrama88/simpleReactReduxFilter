var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader' },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    output: {
        path: '/',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};

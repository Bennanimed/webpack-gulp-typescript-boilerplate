'use strict';

const webpack = require('webpack');
const path    = require('path');

module.exports = {
    watch   : true,
    output  : {
        path            : __dirname + '/build',
        filename        : './app.js'
    },
    devtool : 'source-map',
    module  : {
        loaders : [
            {
                test    : /(\.ts|\.js)$/,
                loader  : 'babel-loader',
                query   : {
                    presets : [ 'es2015' ]
                },
                exclude : path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve : {
        extensions : [ '', '.ts', '.tsx', '.js', '.jsx' ]
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings : false
            },
            output  : {
                comments : false
            }
        })
    ]
};

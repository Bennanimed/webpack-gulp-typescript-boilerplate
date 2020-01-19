'use strict';

module.exports = {
  watch  : true,
  output : {
    path      : __dirname + '/build',
    filename    : './app.js'
  },
  devtool : 'source-map',
  module : {

  },
  resolve : {
    extensions : [  '.ts', '.tsx', '.js', '.jsx' ]
  },
  optimization: {
    minimize: true
  }
};

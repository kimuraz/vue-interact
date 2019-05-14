var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var env = config.build.env

module.exports = {
  entry: './src/vue-interact/index.js',
  output: {
    library: 'vue-interact',
    libraryTarget: 'umd',
    filename: './dist/vue-interact.bundle.js',
  },
};

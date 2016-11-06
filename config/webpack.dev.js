var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var path = require('path');

//debugger
commonConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/","webpack/hot/only-dev-server");

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  devServer: {
    contentBase: '../src',
    historyApiFallback: true,
    stats: 'minimal',
    inline: true
  }
});

const path = require('path');
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  devtool: '#eval-source-map',
  entry: path.resolve(__dirname, '../examples/main.js'),
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      beeuty: '../../src/index',
      vue: 'vue/dist/vue.esm.js'
      // vue: 'vue/dist/vue.runtime.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/index.html')
    })
  ],
});

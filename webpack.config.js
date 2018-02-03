const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    pop: path.join(__dirname, 'src', 'pop'),
    background: path.join(__dirname, 'src', 'background')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets')
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }, {
      test: /.scss?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    },{
      test: /\.svg/,
      loader: 'svg-url-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.scss']
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js'
    // }),
    new ExtractTextPlugin('style.css')
  ]
};
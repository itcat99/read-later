const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    pop: path.join(__dirname, 'src', 'pop'),
    background: path.join(__dirname, 'src', 'background'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets'),
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /.scss?$/,
        include: [path.resolve(__dirname, 'src')],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.scss'],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

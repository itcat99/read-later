const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      include: path.resolve(__dirname, 'src'),
    }),
  ],
};

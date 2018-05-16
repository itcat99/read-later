const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /.scss?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        }),
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
      name: 'commons',
      cacheGroups: {
        vendor: {
          name: 'commons',
        },
      },
    },
  },
  plugins: [
    // new webpack
    // .optimize
    // .CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js'
    // }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
};

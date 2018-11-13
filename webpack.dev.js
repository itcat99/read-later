const commonConfig = require('./webpack.common');

module.exports = Object.assign({}, commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
    noEmitOnErrors: true,
  },
});

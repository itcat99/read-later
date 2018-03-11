const commons = require('./webpack.commons')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// const plugins = [].concat(commons.plugins);

module.exports = Object.assign({}, commons, {
  "mode": "production",
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
})
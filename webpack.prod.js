const commons = require('./webpack.commons')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const plugins = [].concat(commons.plugins, [new UglifyJsPlugin()]);

module.exports = Object.assign({}, commons, {
  plugins
})
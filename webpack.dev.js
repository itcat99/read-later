const commons = require('./webpack.commons')

module.exports = Object.assign({}, commons, {
  devtool: false,
  "mode": "development"
})
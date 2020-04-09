const merge = require('webpack-merge');
const config = require('./base.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 9000,
  },
})

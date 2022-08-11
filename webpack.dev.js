const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // https://habr.com/ru/post/509250/
  devServer: {
    static: '/dist',
  },
});

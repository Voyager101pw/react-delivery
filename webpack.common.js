const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// https://www.npmjs.com/package/mini-css-extract-plugin

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    historyApiFallback: true, // https://blog.jimmydc.com/webpack-history-api-fallback/
    static: {
      directory: path.join(path.resolve(), 'dist', 'public'),
    },
    open: true,
    port: 5000,
  },

  plugins: [
    new MiniCssExtractPlugin(),
    // Извлекает CSS в отдельные файлы.
    // Он создает файл CSS для каждого файла JS, который содержит CSS. (only webpack v5)

    // new HtmlWebpackPlugin({
    //   title: 'Production',
    //   template: './src/index.html',
    // }),
  ],

  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader', // Внедряет CSS в DOM.
          // https://www.npmjs.com/package/style-loader

          'css-loader', // Позволяет импортировать '.css' внутрь js-файлов.
          // https://www.npmjs.com/package/css-loader
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'post-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // исключать
        use: 'babel-loader', // транспилирует из es2015+ в ES5(2009)
      },
      {
        test: /\.(svg|png|jp?eg|gif)$/i,
        type: 'asset/resource', // https://webpack.js.org/guides/asset-modules/
      },
    ],
  },
};

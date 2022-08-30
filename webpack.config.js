const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.join(__dirname, 'src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/', // для более быстрой компиляции рекомендуется использовать фиксированный publicPath (например , '/' или '').
  },

  devServer: {
    historyApiFallback: true, // https://blog.jimmydc.com/webpack-history-api-fallback/
    open: true,
    port: 5000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // watchFiles: {
    //   paths: ['src/index.pug'],
    //   options: {
    //     usePolling: true,
    //   },
    // },
  },
  // devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.join(__dirname, 'public/index.html'),
      },
    ),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.pug$/,
      //   loader: '@webdiscus/pug-loader',
      //   options: {
      //     method: 'render', // fastest method to generate static HTML files
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // исключать
        use: 'babel-loader', // транспилирует из es2015+ в старые стандарты ES5(2009) для поддержки.
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource', // модули ресурсов заменяют ранее исп.loader такие как raw,url,file-loader.
        // https://webpack.js.org/guides/asset-modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

// + entry
// После передачи входной(entry) точки происходит построение графов зависимостей,
// т.е. всех зависимостей, которые находятся и внутри entry-файла.
// Далее извлеченные зависимости проходят через фабрику модулей - NormalModuleFactory
// Если путь до зависимости валидный, то происходит создание модуля.
// После создания, модуль начинает проходить обработку через loader
// Далее в работу включается JavascriptParser - класс вебпака который расщиряет
// библиотеку Tapable. К слову, вся работа вебпака построена на этой библе, поскольку
// она позволяет работать тем или иным эл.вебпака в разных режимах синх,асинх,парал и тд.
// Последний этап, оптимизация - удаление лишних пробелов, замена имен переменных
// на более короткие(там где это необходимо), дробление(chanked) если было указано в настройках
// и выдача готовых файлов в output.

// Dependency graph - построение графа зависимостей
// NormalModuleFactory - зависимости проходят через фабрику модулей
// Resolver - проверка пути, если путь валидный идем дальше.
// Modules - создаем модуль
// loaders - модуль проходит через loaders
// Javascript Parser
// Optimization - оптимизация и выдача готовых файлов в output.

// + plugins
// Плагины более мощный инструмент чем loader. Плагины делятся на два типа: нативные, которые
// поставляются из коробки и посторонние. Главное отличие плагина от loader в том, что
// плагины могут включатся в работу на любом этапе компиляции с помощью хуков.
// Все плагины в вебпаке это классы этим объясняется более мощная настройка плагина в отличии
// от loader

// MiniCssExtractPlugin - создает файл CSS для каждого файла JS, который содержит CSS.
// (only webpack v5)

// style.loader - исп в dev режиме. Помещает стили в DOM-дерево через dev-сервер в секцию <head>
// для отбр. в браузере. В отличии от MiniCss... он не извлекает стили в отдельный файл, а напрямую
// встраивает в браузер через память пк, что отображается на скорости вебпака
// MiniCssExtractPlugin.loader - исп в prod режиме. Извлекает стили отдельным файлом

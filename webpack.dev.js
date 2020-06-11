const path              = require('path'); // nodejs path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Entry and output
const paths = {
  SRC: path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist'),
};

// nodejs module
module.exports = {
  mode: 'development',

  // ENTRY point //
  entry: paths.SRC,


  // DEV-SERVER //
  watch: true,
  devServer: {
    port: 8000,
    overlay: { warnings: false, errors: true }
  },
  watchOptions: { ignored: /node_modules/ },
  devtool: 'cheap-module-source-map',


  // OUTPUT (where save compiled data in RAM) //
  output: {
    filename: 'bundle.js',
    path: paths.DIST,
    publicPath: '', // src="publicPath/bundle.js"
  },


  // common configs + aliases
  resolve: {
    extensions: ['.js', '.jsx'], // for React
    alias: {
      Api:    path.resolve(__dirname, 'src', 'api'),
      Store:  path.resolve(__dirname, 'src', 'store'),
      Routes: path.resolve(__dirname, 'src', 'components/routes'),
      Layout: path.resolve(__dirname, 'src', 'components/layout'),
      Consts: path.resolve(__dirname, 'src', 'consts'),
      Utils:  path.resolve(__dirname, 'src', 'utils'),

      // static files
      Images: path.resolve(__dirname, 'static', 'img'),
      Styles: path.resolve(__dirname, 'static', 'scss'),
      Fonts:  path.resolve(__dirname, 'static', 'fonts'),
    }
  },


  // CONFIGS //
  module: {
    rules: [

      // JS //
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },

      // CSS // with style-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader' },
        ]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]',
          }
        }]
      },

      // FONTS //
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' },
          }
        ]
      },
    ]
  },

  // PLUGINS configs //
  plugins: [
    // html-source //
    new HtmlWebpackPlugin({
      favicon: './static/img/icons/favs/favicon.png',
      template: __dirname + '/static/index.html',
    }),

    // auto-open browser //
    new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
  ]
};

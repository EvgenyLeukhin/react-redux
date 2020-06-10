const path                    = require('path'); // nodejs path
const WebpackBar              = require('webpackbar');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const CompressionPlugin       = require('compression-webpack-plugin');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const TerserPlugin            = require('terser-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin   = require('favicons-webpack-plugin');

// Entry and output
const paths = {
  SRC: path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};

// nodejs module
module.exports = {
  mode: 'production',


  // ENTRY point //
  entry: paths.SRC,


  // OUTPUT (where save compiled data in HDD) //
  output: {
    filename: 'bundle-[hash:8].js',
    path: paths.DIST,
    publicPath: '' // src="publicPath/bundle.js"
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
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      // CSS //
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'img/[name]-[hash:8].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true },
          }
        ]
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

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ sourceMap: true, parallel: true }),
    ],
  },

  // PLUGINS configs //
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),

    // gzip compress //
    new CompressionPlugin({ algorithm: 'gzip' }),

    // min css //
    new OptimizeCSSAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),

    // css bundle //
    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }),

    // html-source //
    new HtmlWebpackPlugin({
      template: __dirname + '/static/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      },
    }),

    // favicons //
    new FaviconsWebpackPlugin({
      logo: './static/img/icons/favs/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff',
    }),
  ]
};

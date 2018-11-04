const {resolve} = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [resolve(__dirname, '../src/index.js')],
  output: {
    filename: 'bundle.min.js',
    path: resolve(__dirname, '../dist/js')
  },
  resolve: {
    alias: {
      src: resolve(__dirname, '../../../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": ["last 2 versions", "ie >= 10"]
                }
              }],
              "react"
            ],
            "plugins": [
              "transform-runtime",
              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        },
        exclude: /node_modules\/(?!superstruct).*/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:3]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')('last 2 versions', 'ie 10')
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
};
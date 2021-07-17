const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TARGET = process.env.npm_lifecycle_event
console.log('event target:', TARGET)
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output:
    {
      path: path.resolve(__dirname, 'public'),
      filename: 'index_bundle.js'

    },
  resolve:
    {
      extensions: ['.js', '.jsx', '.json', '.css']
    },
  module:
    {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }, {
          test: /\.less$/,
          use: ['style', 'css', 'less']
        }, {
          test: /\.woff$/,
          use: ['url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]']
        }, {
          test: /\.woff2$/,
          use: ['url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]']
        }, {
          test: /\.(eot|ttf|svg|gif|png|jpeg)$/,
          use: ['file-loader']
        }
      ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })

  ]
}

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: './src/index.js',
  output:
    {
      path: path.resolve(__dirname, 'dist'),
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
          test: /\.(eot|ttf|svg|gif|png|jpeg|ico)$/,
          use: ['file-loader']
        }
      ]
    },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{ from: 'index.html' }]
    // }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}

module.exports = config

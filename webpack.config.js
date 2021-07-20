const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.(eot|ttf|svg|gif|png|jpeg)$/,
        use: ['file-loader']
      },
      {
        test: /\.less$/,
        use: ['style', 'css', 'less']
      }, {
        test: /\.woff$/,
        use: ['url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]']
      }, {
        test: /\.woff2$/,
        use: ['url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]']
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
    // alias: {
    //   'react-dom': '@hot-loader/react-dom'
    // }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{ from: 'index.html' }]
    // }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
}

module.exports = config

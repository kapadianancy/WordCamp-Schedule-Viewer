var webpack = require('webpack');
const {merge} = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
const path=require('path');

const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

var common = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx','.css']
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: ['babel-loader'],
            exclude: /(node_modules)/
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }, {
            test: /\.less$/,
            use: ['style', 'css', 'less']
        }, {
            test: /\.woff$/,
            use: ["url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"]
        }, {
            test: /\.woff2$/,
            use: ["url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"]
        }, {
            test: /\.(eot|ttf|svg|gif|png|jpeg)$/,
            use: ["file-loader"]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
};

if (TARGET === 'dev' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true
        },
        output: {
            publicPath: 'http://localhost:8080/public'
        },
        plugins: [
            new NpmInstallPlugin({
                save: true // --save
            })
        ]
    });
}

if (TARGET === 'build' || TARGET=="start") {
    module.exports = merge(common, {
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack-react',
                template: './public/index.html'
            })
        ]
    });
}
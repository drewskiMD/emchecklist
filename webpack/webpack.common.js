const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const app_root = 'src'

module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    entry: [
        "@babel/polyfill",
        __dirname + "/" + app_root + "/index.jsx",
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'postcss-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

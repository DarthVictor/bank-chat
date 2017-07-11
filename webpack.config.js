const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    } ,
    devtool: 'source-map',
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true,
        openPage: '',
        contentBase:  [path.join(__dirname, 'public'), path.join(__dirname, 'build')],
        compress: true
    },

    resolve: {
        extensions: ['.jsx',  '.js']
    },

    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.scss$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
            test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                     { loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' }
                ]
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    failOnError: true,
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]    
}
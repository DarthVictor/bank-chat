const webpack = require('webpack')
const path = require('path')
const isProduction = process.argv.indexOf('-p') >= 0

const config = {
    entry: [
        path.resolve(__dirname, 'src/main')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    } ,
    externals: isProduction ?{
            // Use external version of React
        react: 'React',
        'react-dom' : 'ReactDOM'
    } : {},
    devtool: isProduction ? 'source-map' : 'eval',
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        historyApiFallback: true,
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
    plugins: !isProduction ? [
        new webpack.HotModuleReplacementPlugin()        
    ]
    :[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            React: 'React', react: 'React', 'window.react': 'React', 'window.React': 'React'
        })
    ]
}

module.exports = config
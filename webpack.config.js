const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@': __dirname + '/src'
        }
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px'
                            },
                            javascriptEnabled: true
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'}
                ]
            }, {
                test: /(\.js|\.jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(woff|svg|eot|ttf|otf)/,
                loader: 'file',
                options: {
                    limit: 10000
                },
                include: /node_modules/
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: '8087'
    }
}
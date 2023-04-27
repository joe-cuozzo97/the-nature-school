const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(process.cwd(), 'src', 'web', 'index.js'),
    output: {
        clean: true,
        path: path.resolve(process.cwd(), 'build', 'static'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.EnvironmentPlugin({ ...process.env }),
      new HtmlWebpackPlugin({ filename: 'index.html', template: path.resolve(process.cwd(), 'public', 'index.html')})
    ],
};
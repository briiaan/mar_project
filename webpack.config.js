const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Add this line to resolve both .js and .jsx extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.template.html', // Specify the HTML template file
            filename: 'index.html',
            title: 'Mar | A Pretty Minimalist Budget Tracker',
            meta: {
                viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings.html'
        }),
        new MiniCssExtractPlugin(), // Add MiniCssExtractPlugin instance
    ],
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: [/node_modules/, /server/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react", "@babel/preset-flow"],
                        plugins: ["babel-plugin-syntax-hermes-parser"]
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: {
                        removeComments: false,
                        collapseWhitespace: false,
                    }
                }
            },
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ],
            }
        ]
    }
};

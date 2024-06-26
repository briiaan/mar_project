const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'], // Add this line to resolve both .js and .jsx extensions
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
            template: './src/templates/login.template.html',
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/signup.template.html',
            filename: 'signup.html'
        }),
        new MiniCssExtractPlugin(), // Add MiniCssExtractPlugin instance
    ],
    module: {
        rules: [
            {
                test: /\.m?[jt]sx?$/,
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
             {
       
               test: /\.(woff|woff2|eot|ttf|otf)$/i,
       
               type: 'asset/resource',
       
             }
        ]
    }
};

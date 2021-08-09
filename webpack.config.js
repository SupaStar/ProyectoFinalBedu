const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/assets/js/index.js',
        buscar: './src/assets/js/buscar.js',
        mealId: './src/assets/js/mealId.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'busqueda.html',
            template: './src/busqueda.html',
            chunks: ['buscar']
        }),
        new HtmlWebpackPlugin({
            filename: 'meal.html',
            template: './src/meal.html',
            chunks: ['mealId']
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader'
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}

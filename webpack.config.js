const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/assets/js/index.js',
        buscar: './src/assets/js/buscar.js',
        footer: './src/assets/js/footer.js',
        header: './src/assets/js/header.js',
        carousel: './src/assets/js/carousel.js',
        about_us: './src/assets/js/about_us.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main', 'footer', 'header', 'carousel']
        }),
        new HtmlWebpackPlugin({
            filename: 'busqueda.html',
            template: './src/busqueda.html',
            chunks: ['buscar']
        }),
        new HtmlWebpackPlugin({
            filename: 'about_us.html',
            template: './src/about_us.html',
            chunks: ['about_us', 'footer', 'header']
        }),
        new HtmlWebpackPlugin({
            filename: 'recipe.html',
            template: './src/recipe.html',
            chunks: ['footer', 'header']
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    }
                ],
            },
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

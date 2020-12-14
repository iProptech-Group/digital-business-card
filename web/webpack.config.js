const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './assets/app.js',
    output: {
        path: path.resolve(__dirname, 'static/js/'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new SVGSpritemapPlugin('assets/images/sprites/*.svg', {
            output: {
                filename: 'spritemap.svg', // located at webpack output path
                svg: {
                    sizes: true,
                },
                svgo: true,
            }
        }),
        // This plugin will copy images in src/assets/images to images/ in build directory
        new CopyWebpackPlugin({
            patterns: [
                {from: 'assets/images', to: 'images'},
            ]
        }),
    ]
};

'use strict'

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../resources/assets/js/app.js'),
  output: {
    path: path.resolve(__dirname, '../resources/static/js'),
    filename: 'app.js'
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
};

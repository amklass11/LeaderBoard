const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
  })],
  devServer: {
    static: './docs',
  },
  mode: 'development',
};
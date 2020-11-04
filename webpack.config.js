const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './src/styles/main.css'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: path.resolve(__dirname, 'src/styles'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(png|ttf)$/,
        include: path.resolve(__dirname, 'src/shared'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ExtractTextPlugin({
      filename: './style.bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackInlineSVGPlugin({
      inlineAll: true,
    }),
  ],
};

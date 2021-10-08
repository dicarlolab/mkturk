const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry:'./src/Index.tsx',
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new HtmlWebpackPlugin({
      title: 'MkFiles ReactJS',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: '[name].css'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    })
  ],
  output: {
    path: path.resolve(__dirname, '../../public/mkfiles-reactjs'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sass|css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/bootstrap/dist/css')
        ],
        sideEffects: true
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.sass'],
  },
  devtool: false,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}
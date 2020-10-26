const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: [path.resolve(__dirname, 'src/main.ts'), path.resolve(__dirname, 'src/utils.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Liveplot2',
      template: './src/index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../../public/liveplot2"),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        sideEffects: true
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  }
};

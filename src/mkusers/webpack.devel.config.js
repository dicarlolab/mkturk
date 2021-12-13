const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: [path.resolve(__dirname, 'src/main.ts')],
    admin: [path.resolve(__dirname, 'src/admin/main.ts')],
    user: [path.resolve(__dirname, 'src/user/main.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'MkUsers',
      template: './src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      title: 'MkUsers Admin',
      template: './src/admin/index.html',
      chunks: ['admin'],
    }),
    new HtmlWebpackPlugin({
      title: 'MkUsers User',
      template: './src/user/index.html',
      chunks: ['user'],
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../public/mkusers'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/bootstrap/dist'),
        ],
        sideEffects: true,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
    },
  },
};

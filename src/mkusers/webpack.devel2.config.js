const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

/**
 * Main Config
 */

const config = {
  mode: 'development',
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

// public config
const configPublic = Object.assign({}, config, {
  entry: {
    main: [path.resolve(__dirname, 'src/main.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'MkUsers Landing',
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../public/mkusers'),
    filename: '[name].bundle.js',
  },
});

const configAdmin = Object.assign({}, config, {
  entry: {
    main: [path.resolve(__dirname, 'src/admin/main.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'MkUsers Admin',
      template: './src/admin/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../public/mkusers/admin'),
    filename: '[name].bundle.js',
  },
});

const configUser = Object.assign({}, config, {
  entry: {
    main: [path.resolve(__dirname, 'src/user/main.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'MkUsers User',
      template: './src/user/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../public/mkusers/user'),
    filename: '[name].bundle.js',
  },
});

module.exports = [configPublic, configAdmin, configUser];

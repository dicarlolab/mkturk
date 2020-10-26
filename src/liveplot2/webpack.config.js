const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  mode: 'production',
  entry: {
    main: [path.resolve(__dirname, 'src/main.ts'), path.resolve(__dirname, 'src/utils.ts'), path.resolve(__dirname, 'src/styles.css')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Liveplot2',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../../public/liveplot2"),
    filename: '[name].js',
    sourceMapFilename: '[name].[contenthash].map.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          }
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        sideEffects: true
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src")
      },
      
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

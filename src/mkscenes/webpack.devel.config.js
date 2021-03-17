const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: [path.resolve(__dirname, 'src/main.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'MkScenes',
      template: './src/index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../../public/mkscenes"),
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
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/jsoneditor/dist'), path.resolve(__dirname, 'node_modules/bootstrap/dist/css')],
        sideEffects: true
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
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

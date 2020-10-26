const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/main.ts', './src/utils.ts']
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Liveplot2',
      template: './src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, "../../public/liveplot2"),
    filename: '[name].js',
    sourceMapFilename: '[name].map.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

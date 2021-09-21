const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  mode: 'production',
  entry: {
    main: [path.resolve(__dirname, 'src/main.ts')],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['**/*', '!mkfiles_rfid.js', '!mkfiles_extendKeys.js']
    }),
    new HtmlWebpackPlugin({
      title: 'MkFiles2',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: '[name].css',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: ['[name].css']
    })
  ],
  output: {
    path: path.resolve(__dirname, "../../public/mkfiles2"),
    filename: '[name].bundle.js',
    
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/jsoneditor/dist'),
          path.resolve(__dirname, 'node_modules/bootstrap/dist/css'),
          path.resolve(__dirname, 'node_modules/tabulator-tables/dist/css'),
        ],
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
      },
      
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
    splitChunks: {
      chunks: 'all'
    }
  }
};

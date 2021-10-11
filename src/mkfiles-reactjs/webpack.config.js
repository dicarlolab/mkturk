const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry:'./src/Index.tsx',
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'MkFiles ReactJS',
      template: './src/index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../public/mkfiles-reactjs'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [ 'source-map-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.(sass|css)$/i,
        use: [ 'style-loader', 'css-loader' ],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/bootstrap/dist/css'),
          path.resolve(__dirname, 'node_modules/tabulator-tables/dist/css'),
          path.resolve(__dirname, 'node_modules/react-tabulator/lib')
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
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  }
}
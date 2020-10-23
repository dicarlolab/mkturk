const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src") + "/main.ts",
  },
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
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: 'source-map'
};

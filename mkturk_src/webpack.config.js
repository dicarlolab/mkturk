const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src") + "/main.ts",
  output: {
    filename: "mkturk-refactor.js",
    path: path.resolve(__dirname, "../public")
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
  }
};
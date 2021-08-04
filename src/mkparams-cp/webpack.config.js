const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src") + "/main.ts",
  output: {
    filename: "mkparams.js",
    path: path.resolve(__dirname, "../../public/mkparams")
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

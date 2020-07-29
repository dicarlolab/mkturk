const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, "src") + "/App.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../../public/worker-example")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src")
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["node_modules"]
  },
  devtool: false
};

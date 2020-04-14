const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src") + "/main.ts",
  output: {
    filename: "mkcolony.js",
    path: path.resolve(__dirname, "../../public/mkcolony")
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

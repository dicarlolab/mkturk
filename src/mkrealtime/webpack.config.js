const path = require('path');

module.exports = {
  entry: {
    client: path.resolve(__dirname, "src") + "/client.ts",
    server: path.resolve(__dirname, 'src') + '/server.ts'
  },
  output: {
    path: path.resolve(__dirname, "../../public/mkrealtime"),
    filename: '[name].js'
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
  devtool: false
};

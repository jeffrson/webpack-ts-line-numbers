const path = require('path')
const nodeExternals = require('webpack-node-externals')

const server = {
  mode: 'development',
  target: "node",
  entry: "./startup.ts",
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { onlyCompileBundledFiles: true },
        exclude: /node_modules/,
      }
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [ '.ts' ]
  }
}

module.exports = [server];

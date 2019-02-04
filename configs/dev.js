const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const common = require("./common");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
    compress: true
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: []
});

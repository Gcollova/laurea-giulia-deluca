const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    historyApiFallback: true,
  },
});

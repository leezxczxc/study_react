const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["react", "react-dom"],
    app: path.resolve(__dirname, "..", "src", "client", "index.tsx")
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },
  devtool: "source-map", // 디버깅할 소스맵 사용
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 확인 가능한 확장자로 ts, tsx 추가
    alias: {
      components: path.resolve(__dirname, "..", "src", "client", "components"),
      models: path.resolve(__dirname, "..", "src", "client", "models")
    }
  },
  performance: {
    hints: "warning"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
  // some options...
};

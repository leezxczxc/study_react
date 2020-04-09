const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    vendor: ["react", "react-dom"],
    app: path.resolve(__dirname, "..", "client", "src", "index.tsx")
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },
  devtool: "source-map", // 디버깅할 소스맵 사용
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 확인 가능한 확장자로 ts, tsx 추가
    alias: {
      components: path.resolve(__dirname, "..", "client", "src", "components"),
      models: path.resolve(__dirname, "..", "client", "src", "models"),
      repositories: path.resolve(__dirname, "..", "client", "src", "repositories"),
      reduce: path.resolve(__dirname, "..", "client", "src", "reduce"),
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
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

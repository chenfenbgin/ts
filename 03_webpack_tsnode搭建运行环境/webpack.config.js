// 1.package.json中配置完 -> "build": "webpack",打包就会加载这个配置文件
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  // 4. 配置resolve
  resolve: {
    extensions: [".ts", ".js"],
  },

  // 5. 安装npm instal webpack-dev-server， 搭建本地服务，package.json中配置 'serve": "webpack serve"

  // 7. 配置devServer
  devServer: {},
  module: {
    rules: [
      {
        // 2. 需要先安装 npm install ts-loader typescript -D
        test: /\.ts$/,
        loader: "ts-loader",

        // 3. 我们需要生成tsconfig.json ,使用 tsc --init
      },
    ],
  },
  // 6. npm install html-webpack-plugin -D
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

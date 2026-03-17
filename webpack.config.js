const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",   // Entry point for your JavaScript

  output: {
    filename: "main.js",      // Bundled JS file
    path: path.resolve(__dirname, "dist"),
    clean: true,              // Clears dist folder before each build
  },

  mode: "development",

  devServer: {
    static: "./dist",
    port: 8080,
    open: true,               // Opens browser automatically
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Uses your template.html
    }),
  ],
};
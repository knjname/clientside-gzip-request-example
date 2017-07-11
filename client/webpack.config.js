const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dist.js",
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
}

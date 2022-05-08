const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'boundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: false,
        port: 8888,
        publicPath: '/xuni/'
    }
}

const path = require("path");

module.exports = {
  mode: 'development',
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "markdown-editor.js"
  }
};

const webpack = require("webpack");
const imports = require("./imports");
const VueSsrClientPlugin = require("vue-server-renderer/client-plugin");


module.exports = {
  entry: {
    app: "./src/entry-client.js"
  },
  output: {
    path: imports.distPath,
    // filename: "js/[name].[chunkhash].main.js"
    filename: "dist/[name].js"
  },
  plugins: [
    // Import NODE_ENV into webpack, which tells Uglify to remove all devel-
    // opment code blocks from Vue. Reduces final bundle size by ~230KB at 
    // the time of writing.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      "process.env.VUE_ENV": "'client'"
    }),
    new VueSsrClientPlugin({
      filename: "client-manifest.json"
    })
  ]
};

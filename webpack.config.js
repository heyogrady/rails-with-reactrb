var path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    client_only: "./webpack/client_only.js",
    client_and_server: "./webpack/client_and_server.js"
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts', 'webpack'),
    filename: "[name].js",
    publicPath: "/webpack/"
  },
  module: {
    loaders: [
      // add any Loaders here
    ]
  },
  resolve: {
    root: path.join(__dirname, '..', 'webpack')
  },
};

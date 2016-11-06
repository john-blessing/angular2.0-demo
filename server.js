var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config');

var server = new WebpackDevServer(webpack(webpackConfig),{
    clientLogLevel: "info",
    quiet: false,
    noInfo: true,
    hot: true,
    compress: true,
    stats: { colors: true }
});
server.listen(8080, "localhost", function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8080');
  console.log('Opening your system browser...');
});
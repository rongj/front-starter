const ignore=()=> {
  var extensions = ['.css', '.scss','.less','.png','.jpg','.gif']; 
  for (let i = 0, len = extensions.length; i < len; i++) {
    require.extensions[extensions[i]] = function () {
      return false;
    };
  }
}
ignore();

// require("source-map-support").install();

require('babel-register');

// require("css-modules-require-hook")({
//   generateScopedName: "[name]_[local]_[hash:base64:5]",
//   camelCase: true,
// });

// require("asset-require-hook")({
//   extensions: ["jpg", "png", "gif", "webp"],
//   name: "static/media/[name].[ext]",
//   limit: 10000
// });

require('./src/server.entry.js');
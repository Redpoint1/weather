const package = require("./package.json");

process.env.VUE_APP_VERSION = package.version;
process.env.VUE_APP_AUTHOR = package.author;
process.env.VUE_APP_BUG_REPORT = package.bugs.url;
process.env.VUE_APP_COPYRIGHT = new Date().getFullYear();

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: process.env.BACK_END_SERVER,
        ws: true,
        changeOrigin: true
      }
    }
  }
};

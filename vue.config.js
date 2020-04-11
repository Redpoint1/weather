const packageMeta = require("./package.json");

process.env.VUE_APP_VERSION = packageMeta.version;
process.env.VUE_APP_AUTHOR = packageMeta.author;
process.env.VUE_APP_BUG_REPORT = packageMeta.bugs.url;
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

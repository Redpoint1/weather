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

module.exports = {
  publicPath: "./",
  devServer: {
    port: "8083",
    proxy: {
      "/baiduAPI": {
        target: "https://aip.baidubce.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/baiduAPI": "",
        },
      },
      "/multiB":{
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
      "/multi": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};

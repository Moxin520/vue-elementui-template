module.exports = {
  productionSourceMap: false,
  devServer: {
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
      // "/OneChaos": {
      //   target: "http://192.168.96.129:9998",
      //   ws: true,
      //   changeOrigin: true
      // }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_vars.scss";`
      }
    }
  }
};

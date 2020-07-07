const path = require("path");
const utils = {
  assetsPath: function(_path) {
    const assetsSubDirectory =
      process.env.NODE_ENV === "production"
        ? // 生产环境下的 static 路径
          "static"
        : // 开发环境下的 static 路径
          "static";

    return path.posix.join(assetsSubDirectory, _path);
  },
  resolve: function(dir) {
    return path.join(__dirname, "..", dir);
  }
};
module.exports = {
  productionSourceMap: false,
  publicPath: "/",
  outputDir: "dist",
  // devServer: {
  //   https: false, // https:{type:Boolean}
  //   open: true, //配置自动启动浏览器
  //   proxy: {
  //     "/OneChaos/chaos/api": {
  //       target: "http://121.199.33.1:8888",
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     "/OneChaos": {
  //       target: "http://127.0.0.1.:9998/",
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_vars.scss";`
      }
    }
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
          loader: "url-loader",
          options: {
            limit: 10000,
            name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
          }
        }
      ]
    }
  }
};

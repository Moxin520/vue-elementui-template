import Vue from "vue";

const requireContext = require.context(
  "./global", //指定文件夹
  true, //是否递归
  /\.vue$/ //以vue结尾
);

//遍历该文件夹下的文件,并注册
requireContext.keys().forEach(fileName => {
  const componentConfig = requireContext(fileName);
  Vue.component(
    componentConfig.default.name || componentConfig.name,
    componentConfig.default || componentConfig
  );
});

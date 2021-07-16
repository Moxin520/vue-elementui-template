import Vue from "vue";
import App from "./App.vue";
import store from "./store"; //vuex状态管理
import router from "./router"; //路由插件
import "normalize.css/normalize.css"; //确保项目在各个浏览器的样式大部分标准相同
import "nprogress/nprogress.css"; //进度条样式(路由跳转等)
import "./assets/styles/styles.scss"; //自己创建的样式文件
import "./components"; //导入全局注册的组件的文件
import "./plugins/element.js";
import echarts from "echarts";
import axios from "axios"; //导入axios
import Fragment from "vue-fragment";
import print from "print-js";
import Heatmap from "heatmap.js";

Vue.prototype.$print = print;
Vue.prototype.$Heatmap = Heatmap;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios; //注册到vue上

Vue.use(echarts);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

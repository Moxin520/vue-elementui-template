import Vue from "vue";
import App from "./App.vue";
import store from "./store"; //vuex状态管理
import ElementUI from "element-ui"; //elementui样式插件库
import "normalize.css/normalize.css"; //确保项目在各个浏览器的样式大部分标准相同
import "nprogress/nprogress.css"; //进度条样式(路由跳转等)
import "./assets/styles/styles.scss"; //自己创建的样式文件
import router from "./router"; //路由插件
import "./components"; //导入全局注册的组件的文件

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

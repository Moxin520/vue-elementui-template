import axios from "axios"; //导入axios插件
import store from "@/store"; //导入vuex,可以获取其中的值
import NProgress from "nprogress"; //导入进度条
import { Message } from "element-ui";

NProgress.configure({ showSpinner: false }); //不展示进度条的小圈圈

//初始化axios
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, //基础接口地址
  timeout: 12000, //接口超时限制
  headers: {
    //定义部分请求/返回头
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers["token"] = store.state.token; //在请求头自动添加token
    NProgress.start(); //开始进度条
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    NProgress.done(); //结束进度条
    return response;
  },
  err => {
    Message.error(err.message);
    NProgress.done();
    return Promise.reject(err);
  }
);

export default request;

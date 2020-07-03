import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getToken, removeToken } from "@/utils/auth";
import router from "@/router";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000000 // request timeout
  // 为了数据备份下载大型文件所设定的时长
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.cancelToken = new axios.CancelToken(function(cancel) {
      store.commit("user/pushToken", { cancelToken: cancel });
    });
    // do something before request is sent
    if (store.getters.token) {
      // 给请求头加上token
      config.headers["token"] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.data.code === 500) {
      Message({
        message: response.data.msg,
        type: "error"
      });
    }
    return response;

    // // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || "Error",
    //     type: "error",
    //     duration: 5 * 1000
    //   });

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm(
    //       "You have been logged out, you can cancel to stay on this page, or log in again",
    //       "Confirm logout",
    //       {
    //         confirmButtonText: "Re-Login",
    //         cancelButtonText: "Cancel",
    //         type: "warning"
    //       }
    //     ).then(() => {
    //       store.dispatch("user/resetToken").then(() => {
    //         location.reload();
    //       });
    //     });
    //   }
    //   return Promise.reject(new Error(res.message || "Error"));
    // } else {
    //   return res;
    // }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          // console.log("err111111111111" + error.response.status); // for debug
          removeToken();
          router.replace({
            path: "/403",
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        case 404:
          router.replace({
            path: "/404",
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        case 500:
          router.replace({
            path: "/500",
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
      }
    }
    // Message({
    //   message: error.message,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;

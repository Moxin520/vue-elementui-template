import { getToken, removeToken } from "@/utils/auth";
import { logout } from "../api/user";

var lastTime = new Date().getTime();
var currentTime = new Date().getTime();
var timeOut = 10 * 60 * 1000; // 设置超时时间： 30分
var token;
window.onload = function() {
  window.document.onmousedown = function() {
    localStorage.setItem("lastTime", new Date().getTime());
  };
};

function checkTimeout() {
  token = getToken();
  currentTime = new Date().getTime(); // 更新当前时间
  lastTime = localStorage.getItem("lastTime");
  // console.log(currentTime - lastTime);
  // console.log(timeOut);
  if (currentTime - lastTime > timeOut) {
    // 判断是否超时
    console.log("长时间未操作而超时");
    // var url = window.location.href
    // var newUrl = url.match(/(\S*)#/)[1]
    if (typeof token !== "undefined") {
      console.log("退出");
      logouts();
    }
    // window.open(newUrl + '#/login', '_self')
  }
}

function logouts() {
  logout().then(res => {
    if (res.data.code === 200) {
      window.localStorage.clear();
      removeToken();
      location.reload();
    }
  });
}

// async function logout() {
//   await store.dispatch('user/logout')
//   router.push(`/login?redirect=${this.$route.fullPath}`)
//   location.reload()
// }
/* 定时器 间隔60秒检测是否长时间未操作页面 */
window.setInterval(checkTimeout, 60000);

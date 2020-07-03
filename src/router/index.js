import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress"; //导入进度条
// import store from "../store";
import Layout from "@/views/layout/layout";
import { getToken } from "@/utils/auth"; // get token from cookie

Vue.use(VueRouter);
NProgress.configure({ showSpinner: false }); // NProgress Configuration

export const routes = [
  {
    path: "/",
    component: Layout,
    name: "dashboard",
    isShow: true,
    redirect: "/dashboard",
    meta: {
      title: "首页",
      icon: "el-icon-s-promotion"
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/Home.vue"),
        isShow: true,
        meta: {
          title: "首页",
          icon: "el-icon-s-promotion"
        }
      }
    ]
  },
  {
    path: "/example",
    name: "Example",
    component: Layout,
    redirect: "/test",
    isShow: true,
    meta: {
      title: "示例界面",
      icon: "el-icon-data-analysis"
    },
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/test.vue"),
        isShow: true,
        meta: {
          title: "测试页面",
          icon: "el-icon-document"
        }
      },
      {
        path: "test1",
        name: "Test1",
        component: () => import("@/views/test/test1.vue"),
        isShow: true,
        meta: {
          title: "测试页面1",
          icon: "el-icon-document"
        }
      },
      {
        path: "printjs",
        name: "printjs",
        component: () => import("@/views/test/printjs.vue"),
        isShow: true,
        meta: {
          title: "打印案例",
          icon: "el-icon-document"
        }
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/error/404.vue"),
    isShow: false
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    isShow: false
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/About.vue")
  // }
];

const createRouter = () =>
  new VueRouter({
    mode: "history", // require service support
    routes: routes
  });
const router = createRouter();

// 去掉点击重复路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
// to, from,
router.beforeEach((to, from, next) => {
  let token = getToken();
  NProgress.start(); //开始进度条
  let require = true;
  if (require) {
    console.log("路由信息: to", to, "from:", from, token);
    if (token) {
      console.log("111111111112222", to.path);
      if (to.path == "/login") {
        next({ path: "/dashboard" });
        NProgress.done();
      } else {
        next();
      }
    } else {
      if (to.path == "/login") {
        next();
        NProgress.done();
      } else {
        next({
          path: "/login", // 未登录则跳转至login页面
          query: { redirect: to.fullPath } // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
        });
        NProgress.done();
      }
    }
  } else {
    next();
  }
});
// to, from
router.afterEach(() => {
  NProgress.done();
});

export default router;

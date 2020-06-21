import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress"; //导入进度条

Vue.use(VueRouter);
NProgress.configure({ showSpinner: false }); // NProgress Configuration

export const routes = [
  {
    path: "/",
    name: "Home",
    component: resolve => require([`../views/Home.vue`], resolve),
    isShow: true,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/example",
    name: "Example",
    component: resolve => require([`../views/test/test.vue`], resolve),
    isShow: true,
    meta: {
      title: "示例界面"
    },
    children: [
      {
        path: "/test",
        name: "Test",
        component: resolve => require([`../views/test/test.vue`], resolve),
        isShow: true,
        meta: {
          title: "测试页面"
        }
      }
    ]
  },
  {
    path: "/example1",
    name: "Example1",
    isShow: true,
    component: resolve => require([`../views/test/test1.vue`], resolve),
    meta: {
      title: "示例界面1"
    },
    children: [
      {
        path: "/test1",
        name: "Test1",
        component: resolve => require([`../views/test/test1.vue`], resolve),
        isShow: true,
        meta: {
          title: "测试页面1"
        }
      },
      {
        path: "/test",
        name: "Test",
        component: resolve => require([`../views/test/test.vue`], resolve),
        isShow: true,
        meta: {
          title: "测试页面"
        }
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: resolve => require([`../views/error/404.vue`], resolve),
    isShow: false
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
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
  NProgress.start(); //开始进度条
  next();
  console.log("路由信息: to", to, "from:", from);
});
// to, from
router.afterEach(() => {
  NProgress.done();
});

export default router;

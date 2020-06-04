import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress"; //导入进度条
import Home from "../views/Home.vue";

Vue.use(VueRouter);
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

// to, from,
router.beforeEach((to, from, next) => {
  NProgress.start(); //开始进度条
  next();
});
// to, from
router.afterEach(() => {
  NProgress.done();
});

export default router;

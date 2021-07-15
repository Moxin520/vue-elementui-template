<!-- 父级菜单 -->
<template>
  <div>
    <logo :collapse="isCollapse"></logo>
    <el-scrollbar class="scrollbar" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path === '/dashboard' ? '/' : $route.path"
        class="el-menu-vertical-demo elmenuTree"
        router
        background-color="#fff"
        text-color="#000"
        active-text-color="#1890FF"
        :collapse="isCollapse"
      >
        <template v-for="route in routeList">
          <MenuTree
            v-if="route.isShow"
            :key="route.name"
            :item="route"
            :base-path="route.path"
          ></MenuTree>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const logo = () => import("./logo");
const MenuTree = () => import("./MenuTree");
export default {
  name: "Menu",
  components: {
    MenuTree,
    logo
  },
  computed: {
    ...mapGetters(["menuOpen"]),
    isCollapse() {
      //isCollapse true 展开  false收缩
      return !this.menuOpen;
    },
    routeList() {
      return this.$router.options.routes;
    }
  }
};
</script>

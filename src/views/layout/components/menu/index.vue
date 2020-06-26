<!-- 父级菜单 -->
<template>
  <div>
    <logo :collapse="isCollapse"></logo>
    <el-scrollbar class="scrollbar">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo elmenu"
        @open="handleOpen"
        router
        unique-opened
        @close="handleClose"
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
import MenuTree from "./MenuTree";
import logo from "./logo";

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
    }
  },
  data() {
    return {
      routeList: this.$router.options.routes
    };
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log("路由:", this.routeList);
    console.log("1111111111111", this.isCollapse);
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {}
};
</script>
<style lang="scss" scoped>
.elmenu {
  // height: calc(100vh - 50px);
  height: 100vh;
  text-align: left;
  z-index: 9999;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.scrollbar {
  overflow-x: hidden !important;
}
</style>

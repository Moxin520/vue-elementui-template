<!-- 父级菜单 -->
<template>
  <div>
    <el-menu
      style="min-width:200px;text-align: left;height: calc(100vh - 60px);"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      router
      unique-opened
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuTree from "./MenuTree";
export default {
  name: "Menu",
  components: {
    MenuTree
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
    console.log("1111111111111", this.menuOpen);
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
<style lang="scss" scoped></style>

<!-- 父级菜单 -->
<template>
  <div style="height: 100%;">
    <el-menu
      style="min-width:200px;text-align: left;height: 100%;"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      router
      unique-opened
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <MenuTree :routeList="this.routeList"></MenuTree>
    </el-menu>
  </div>
</template>

<script>
import MenuTree from "./MenuTree";
export default {
  name: "Menu",
  components: {
    MenuTree
  },
  data() {
    return {
      routeList: this.$router.options.routes
    };
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log("路由:", this.routeList);
  },

  methods: {
    handleOpen(val) {
      console.log("555555555555555555555", val);
    },
    handleClose() {}
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {}
};
</script>
<style lang="scss" scoped></style>

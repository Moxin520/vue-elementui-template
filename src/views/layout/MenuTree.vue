<!-- 左侧菜单 -->
<template>
  <div style="height: 100%;">
    <div v-for="routes in routeList" :key="routes.path">
      <div v-if="routes.isShow">
        <el-submenu :index="routes.path" v-if="routes.children">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>{{ routes.meta.title }}</span>
          </template>
          <MenuTree :routeList="routes.children"></MenuTree>
        </el-submenu>
        <el-menu-item v-else :index="routes.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ routes.meta.title }}</span>
        </el-menu-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuTree",
  props: ["routeList"],
  components: {},
  data() {
    return {};
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log("子路由:", this.routeList);
  },

  methods: {}

  //生命周期 - 创建完成（访问当前this实例）
  // created() {}
};
</script>
<style scoped>
.menu {
  height: 100vh;
}
</style>

<!-- 左侧菜单 -->
<template>
  <div>
    <!-- <div v-for="routes in item" :key="routes.path"> -->
    <!-- <div v-if="item.isShow"> -->
    <el-submenu
      :index="resolvePath(item.path)"
      v-if="item.isShow && item.children && item.children.length > 1"
    >
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-for="route in item.children">
        <MenuTree
          :item="route"
          :base-path="resolvePath(route.path)"
          :key="route.name"
          v-if="route.isShow && route.children && route.children > 0"
        ></MenuTree>
        <el-menu-item v-else :index="resolvePath(route.path)" :key="route.name">
          <i :class="route.meta.icon"></i>
          <span slot="title">{{ route.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-submenu>
    <el-menu-item v-else :index="resolvePath(item.path)">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import path from "path";

export default {
  name: "MenuTree",
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    // isNest: {
    //   type: Boolean,
    //   default: false
    // },
    basePath: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log("子路由:", this.item, this.basePath);
  },

  methods: {
    resolvePath(...paths) {
      console.log("666666666666666666", ...paths);
      return path.resolve(this.basePath, ...paths);
    }
  }

  //生命周期 - 创建完成（访问当前this实例）
  // created() {}
};
</script>
<style scoped>
.menu {
  height: 100vh;
}
</style>

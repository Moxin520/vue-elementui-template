<!-- 左侧菜单 -->
<template>
  <fragment>
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
  </fragment>
</template>

<script>
import path from "path";
export default {
  name: "MenuTree",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    resolvePath(...paths) {
      return path.resolve(this.basePath, ...paths);
    }
  }
};
</script>

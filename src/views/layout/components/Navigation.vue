<template>
  <div class="header">
    <div class="right">
      <div class="isCollapseClassName">
        <el-button
          type="text"
          icon="el-icon-s-fold"
          @click="changeCollapse"
        ></el-button>
      </div>
      <div></div>
      <!-- <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#1890ff"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navigation",
  computed: {
    ...mapGetters(["menuOpen"]),
    isCollapse() {
      //isCollapse true 展开  false收缩
      return !this.menuOpen;
    }
  },
  data() {
    return {
      activeIndex2: "2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changeCollapse() {
      console.log("11111111111111111", this.isCollapse);
      this.$store.commit("settings/SET_MENUOPEN", this.isCollapse);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 50px;
  background-color: #1890ff;
  .logo {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    line-height: 50px;
  }
  .m200 {
    width: 200px;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  }
  .m60 {
    width: 60px;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  }
}
</style>

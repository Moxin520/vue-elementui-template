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
      <div>用户名</div>
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
  align-items: center;
  color: white;
  height: 50px;
  padding: 0 20px 0 10px;
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

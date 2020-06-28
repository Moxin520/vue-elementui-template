<template>
  <div class="header">
    <div class="right">
      <div class="isCollapseClassName">
        <el-button
          type="text"
          :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="changeCollapse"
        >
        </el-button>
        <breadcrumb></breadcrumb>
      </div>
    </div>
    <div class=" left">
      <div class="information">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar
              size="medium"
              fit="fill"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div style="margin:0 10px; padding:0 10px">
              <el-avatar
                shape="square"
                :size="150"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              ></el-avatar>
              <el-divider>头像</el-divider>
            </div>
            <el-dropdown-item command="a" icon="el-icon-user-solid"
              >个人信息
            </el-dropdown-item>
            <el-dropdown-item command="b" icon="el-icon-s-home"
              >退出登陆</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
    return {};
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changeCollapse() {
      this.$store.commit("settings/SET_MENUOPEN", this.isCollapse);
    },
    handleCommand() {}
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  color: white;
  height: 50px;
  padding: 0 10px 0 10px;
  justify-content: space-between;
  background-color: #1890ff;

  .right {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .isCollapseClassName {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .left {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .information {
      margin-right: 20px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
}
</style>

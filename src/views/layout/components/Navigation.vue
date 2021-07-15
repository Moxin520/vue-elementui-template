<template>
  <div class="header">
    <div class="isCollapseClassName">
      <el-button type="text" :icon="icons" @click="changeCollapse"> </el-button>
      <breadcrumb></breadcrumb>
    </div>
    <div class="isCollapseClassName">
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
</template>

<script>
import { mapGetters } from "vuex";
import { removeToken } from "@/utils/auth"; // get token from cookie
export default {
  name: "Navigation",
  computed: {
    ...mapGetters(["menuOpen"]),
    isCollapse() {
      //isCollapse true 展开  false收缩
      return !this.menuOpen;
    },
    icons() {
      return this.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold";
    }
  },
  methods: {
    changeCollapse() {
      this.$store.commit("settings/SET_MENUOPEN", this.isCollapse);
    },
    handleCommand(command) {
      if (command == "b") {
        this.$store.commit("user/SET_TOKEN", false);
        removeToken();
        this.$router.push({
          path: "/login"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 50px;
  padding: 0 30px 0 5px;
  justify-content: space-between;
  box-shadow: 0 5px 4px -4px rgba(0, 20, 40, 0.2);
  .el-dropdown-link {
    cursor: pointer;
  }
}
</style>

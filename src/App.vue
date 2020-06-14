<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="primary">主要按钮</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-container>
      <el-card shadow="always" style="height:calc(100vh - 2px)">
        <el-aside>
          <div>
            <span
              style="height:60px;line-height:60px;align-items:center"
              :style="isCollapse ? 'width:60px' : 'width:200px'"
              >{{ isCollapse ? "Logo" : "This is Logo" }}</span
            >

            <div>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </el-aside>
      </el-card>

      <el-container>
        <el-header>
          <!-- <el-card
            class="box-card"
            shadow="always"
            style="height:60px;display:flex; justify-content:space-between;align-items:center;padding:0 10px"
          > -->
          <el-card
            shadow="always"
            style="height:60px;display:flex; align-items:center;padding:0 10px"
          >
            <div style="display:flex;">
              <i
                :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                @click="isCollapse = !isCollapse"
              ></i>
              <div style="margin-left:20px">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                  >
                  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div>
          </el-card>
          <!-- </el-card> -->
        </el-header>

        <el-main> <article style="flex:1;padding:20px"></article></el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: calc(100vh - 60px);
}
</style>

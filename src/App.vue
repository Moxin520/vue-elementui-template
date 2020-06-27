<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

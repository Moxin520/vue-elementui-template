<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="menuBottom">
      <Menu></Menu>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./views/layout/Navigation.vue";
import Menu from "./views/layout/Menu.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Menu
    // HelloWorld
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.menuBottom {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>

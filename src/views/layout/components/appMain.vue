<!-- 显示区 -->
<template>
  <div class="appMain">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "appMain",
  components: {},
  data() {
    return {};
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  methods: {},

  //生命周期 - 创建完成（访问当前this实例）
  created() {}
};
</script>
<style lang="scss" scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  height: 100%;
  width: 100%;
  opacity: 0;
  transform: translateX(30px);
}
.appMain {
  overflow: hidden;
}
</style>

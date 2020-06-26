<!-- logo -->
<template>
  <div class="logo">
    <transition name="sidebarLogoFade" mode="out-in">
      <div v-if="collapse" class="logoTitle" key="logoImage">
        <i class="el-icon-share logoImage"></i>
      </div>
      <div v-else class="logoTitle" key="logoTitle">
        <i class="el-icon-share logoImage"></i>
        <span class="title">我是logo呀</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "logo",
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
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
.sidebarLogoFade-enter-active {
  transition: opacity 2s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
.logo {
  background-color: #1890ff;
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #1890ff;
  text-align: center;
  overflow: hidden;
  .logoTitle {
    width: 100%;
    height: 100%;
    .logoImage {
      width: 30px;
      font-size: 30px;
      height: 30px;
      vertical-align: middle;
      margin: 0 5px;
    }
    .title {
      vertical-align: middle;
      font-size: 26px;
    }
  }
}
</style>

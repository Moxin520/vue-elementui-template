<!-- logo -->
<template functional>
  <div class="logo">
    <transition name="sidebarLogoFade" mode="out-in">
      <div v-if="props.collapse" key="logoImage">
        <i class="el-icon-sunny logoImage"></i>
      </div>
      <div v-else key="logoTitle">
        <i class="el-icon-sunny logoImage"></i>
        <span>demo学习</span>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: default;
  font-size: 20px;
  .logoImage {
    width: 30px;
    height: 30px;
    font-size: 24px;
  }
}
</style>

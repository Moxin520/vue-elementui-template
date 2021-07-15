<!-- 显示区 -->
<template functional>
  <div class="appMain">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.appMain {
  margin: 10px;
}
</style>

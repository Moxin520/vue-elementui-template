<!-- 显示区 -->
<template functional>
  <div style="margin: 10px;">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

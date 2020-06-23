<!-- 显示区 -->
<template>
  <div class="appMain"><router-view></router-view></div>
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
.appMain {
  padding: 20px;
}
</style>

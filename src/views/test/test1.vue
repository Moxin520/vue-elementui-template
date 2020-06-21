<!-- 测试界面1 -->
<template>
  <div>测试界面1</div>
</template>

<script>
export default {
  name: "test1",
  components: {},
  data() {
    return {};
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  methods: {},

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log("33333333333");
  }
};
</script>
<style lang="scss" scoped></style>

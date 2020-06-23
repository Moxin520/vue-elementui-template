<!-- 导航 -->
<template>
  <div class="layout">
    <Navigation></Navigation>
    <div class="main">
      <MenuTree></MenuTree>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
import { Navigation, MenuTree, appMain } from "@/views/layout/components";

export default {
  name: "layout",
  components: { Navigation, MenuTree, appMain },
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
.layout {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>

<!-- 测试界面1 -->
<template>
  <div class="content">
    <!-- <el-card shadow="always"> -->
    <!-- 测试界面1
      <div v-for="(item, index) in coustomer" :key="item">
        <p v-if="item.c == index">{{ item.name }}</p>
      </div> -->
    <!-- </el-card> -->

    <iframe style="width:100%;height:100vh" :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      src: "/chaos/sample/system/role/list"
    };
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

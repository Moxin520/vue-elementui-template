<!-- 测试界面1 -->
<template>
  <div class="content">
    <!-- <el-card shadow="always"> -->
    <!-- 测试界面1
      <div v-for="(item, index) in coustomer" :key="item">
        <p v-if="item.c == index">{{ item.name }}</p>
      </div> -->
    <iframe style="width:100%;height:100vh" :src="src" frameborder="0"></iframe>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  name: "test1",
  components: {},
  data() {
    return {
      coustomer: [
        { name: "ssss", c: "0" },
        { name: "aaaaa", c: "1" }
      ],
      src: "/OneChaos/page/system/role/list"
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

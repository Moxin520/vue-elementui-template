<!-- 测试界面 -->
<template>
  <div class="content">
    <el-card shadow="always">
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="active"
        :inactive-value="inactive"
      >
      </el-switch>
      <div style="margin:40px">绑定值:{{ value }}</div>
      <el-button type="primary" plain @click="change" size="mini"
        >切换</el-button
      >
    </el-card>
  </div>
</template>

<script>
export default {
  name: "test",
  components: {},
  data() {
    return {
      value: "1",
      active: "2",
      inactive: "1"
    };
  },

  // //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log("222222222");
  },

  methods: {
    change() {
      if (this.value === "1") {
        this.value = "2";
      } else if (this.value === "2") {
        this.value = "1";
      }
    }
  }

  // //生命周期 - 创建完成（访问当前this实例）
  // created() {}
};
</script>
<style scoped></style>

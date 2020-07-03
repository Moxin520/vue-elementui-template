<!-- 登陆界面 -->
<template>
  <div>
    我是登陆界面

    <el-button type="primary" plain @click="handleLogin">登陆</el-button>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      loginForm: {
        userName: "moxin",
        password: "123456",
        code: "aa123"
      }
    };
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  methods: {
    handleLogin() {
      this.$store.commit("user/SET_TOKEN", true);
      console.log("444444444");
      this.$router.push({
        path: "/dashboard"
      });
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      // this.$store
      //   .dispatch("user/login", this.loginForm)
      //   .then(() => {
      //     this.$router.push({
      //       path: "/"
      //     });
      //   })
      //   .catch(() => {});
      // } else {
      //   return false;
      // }
      // });
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {}
};
</script>
<style lang="scss" scoped></style>

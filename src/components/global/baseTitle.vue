<!-- 我是测试是否自动全局注册 -->
<template>
  <div>
    我是通过全局注册的组件,可以用对应的标签直接使用
    {{ messages }}
  </div>
</template>

<script>
export default {
  name: "baseTitle",
  //注册组件
  components: {},
  data() {
    return {
      messages: "hello world"
    };
  }
  //生命周期 - 挂载完成（访问DOM元素）
  //   mounted:{},

  // //逻辑方法
  // methods:{

  //   },
  //生命周期 - 创建完成（访问当前this实例）
  // created(){
  // },
};
</script>
<style scoped></style>

<!-- printjs使用 -->
<template>
  <div>
    <div style="width:100%;" id="printarea">
      <p class="text">我是测试打印机功能的</p>
    </div>
    <el-button @click="printimg()">打印</el-button>
  </div>
</template>

<script>
import print from "print-js";
export default {
  name: "printjs",
  components: {},
  data() {
    return {};
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  methods: {
    printimg() {
      // print(this.$refs.printarea);
      const style =
        "@page {  } " +
        "@media print { .print-div{ padding:8px;background-color:#cccccc;line-height:12px } .red{ color:#f00} .green{color:green}";
      print({
        printable: "printarea",
        type: "html",
        style: style, // 亦可使用引入的外部css;
        scanStyles: false
      });
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {}
};
</script>
<style lang="scss" scoped></style>

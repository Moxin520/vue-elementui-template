<template>
  <div>
    <img ref="img1" src="../../../assets/images/1.png" alt="" />
    <img ref="img2" src="../../../assets/images/2.png" alt="" />
    <img ref="img17" src="../../../assets/images/17.png" alt="" />
    <canvas ref="myCanvas" style="border:1px solid #d3d3d3;background:#ffffff;"
      >canvas画图</canvas
    >
  </div>
</template>

<script>
export default {
  mounted() {
    let myCanvas = this.$refs.myCanvas;
    var ctx = myCanvas.getContext("2d");
    var img1 = this.$refs.img1;
    var img2 = this.$refs.img2;
    var img17 = this.$refs.img17;
    // 将图片画到canvas上面上去！
    this.$nextTick(() => {
      // ctx.globalAlpha = 0.7;
      ctx.drawImage(img1, -30, -30);
      ctx.drawImage(img1, 30, -30);
      ctx.drawImage(img2, 90, -30);
      ctx.drawImage(img2, 150, -30);
      ctx.drawImage(img17, 210, -30);
      ctx.drawImage(img17, -30, 20);
      ctx.drawImage(img17, 30, 20);
      ctx.drawImage(img2, 90, 20);
      ctx.drawImage(img17, 120, 1);
      ctx.drawImage(img17, 180, 20);
      ctx.drawImage(img17, 120, 60);
    });
  },
  methods: {}
};
</script>

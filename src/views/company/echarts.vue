<template>
  <div>
    <h1 style="text-align:center">echarts</h1>
    <div class="lineBox">
      <div ref="line1" class="line"></div>
      <div ref="line2" class="line"></div>
      <div ref="line3" class="line"></div>
    </div>
  </div>
</template>

<script>
const option = {
  xAxis: {
    type: "category",
    axisTick: {
      alignWithLabel: true
    },
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      type: "line",
      markArea: {
        animation: false,
        data: [
          [
            {
              name: "text1",
              xAxis: 3,
              label: {
                show: false,
                position: ["20%", -20]
              }
            },
            {
              xAxis: 8
            }
          ]
        ]
      },
      markLine: {
        name: "text2",
        symbol: "none",
        lineStyle: {
          type: "dashed"
        },
        label: {
          show: true,
          formatter: "text2",
          color: "red"
        },
        animation: false,
        data: [
          {
            lineStyle: {
              opacity: 0.7,
              width: 1
            },
            xAxis: 4
          }
        ]
      }
    }
  ]
};
export default {
  mounted() {
    this.line1 = this.$echarts.init(this.$refs.line1);
    this.line2 = this.$echarts.init(this.$refs.line2);
    this.line3 = this.$echarts.init(this.$refs.line3);
    this.line1.setOption(option);
    this.line2.setOption(option);
    this.line3.setOption(option);
    window.addEventListener("resize", () => {
      this.line1.resize();
      this.line2.resize();
      this.line3.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
.lineBox {
  display: flex;
  justify-content: space-around;
  .line {
    width: 100%;
    height: 300px;
  }
}
</style>

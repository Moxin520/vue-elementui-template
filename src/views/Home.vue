<template>
  <div class="home">
    <el-card shadow="always" class="content">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <div
        style="height:400px;width:300px;backgroundColor:#161D3B;color:white;"
      >
        <div style="height:100px;text-align:left">
          <div>单位GDP能耗量 （tce/万元）</div>
          <div style="margin-top:20px;">
            <span style="font-size:34px;font-weight: bold;">0.244 </span>
            <span style="margin-left:10px;color:red;font-size:14px"
              >-2.1%
            </span>
            <span style="margin-left:2px">同比</span>
          </div>
        </div>
        <div style="display:flex;text-align:left">
          <div
            class="total-class"
            id="myChart"
            :style="{ width: '150px', height: '300px' }"
          ></div>
          <div style="margin-left:20px;width:200px;">
            <div style="margin-top:100px;">
              <div style="font-size:34px;margin:10px 0">0.2</div>
              <div>标杆水平</div>
            </div>
            <div style="margin-top:55px">
              <div style="display:flex;margin-bottom:20px">
                <div
                  style="width:14px;height:14px;border-radius: 50%;backgroundColor:#04c3f1;margin-right:10px"
                ></div>
                <div>当前完成值</div>
              </div>
              <div style="display:flex;">
                <div
                  style="width:14px;height:14px;border-radius: 50%;backgroundColor:#54e568;margin-right:10px"
                ></div>
                <div>上一年完成值</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import echarts from "echarts";
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      let data = [
        {
          name: "常规",
          value: 75.17
        },
        {
          name: "紧急",
          value: 200.35
        }
        // {
        //   name: "疑难",
        //   value: 95.36
        // }
      ];
      let xAxisData = [];
      let seriesData1 = [];
      let sum = 0;
      let barTopColor = ["#02c3f1", "#53e568", "#a154e9"];
      let barBottomColor = [
        "rgba(2,195,241,0.1)",
        "rgba(83, 229, 104, 0.1)",
        "rgba(161, 84, 233, 0.1)"
      ];
      data.forEach(item => {
        xAxisData.push(item.name);
        seriesData1.push(item.value);
        sum += item.value;
      });
      let option = {
        backgroundColor: "#161D3B",
        grid: {
          left: "0%",
          bottom: "5%"
        },
        xAxis: {
          data: xAxisData,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 25,
            align: "center",
            formatter: function(params, index) {
              return (
                "{a|" +
                ((seriesData1[index] / sum) * 100).toFixed(2) +
                "%}" +
                "\n" +
                "{b|" +
                params +
                "}"
              );
            },
            textStyle: {
              fontSize: 14,
              color: "#ffffff",
              rich: {
                a: {
                  fontSize: 12,
                  color: "#ffffff"
                },
                b: {
                  height: 20,
                  fontSize: 14,
                  color: "#ffffff"
                }
              }
            }
          },
          interval: 0
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: "柱顶部",
            type: "pictorialBar",
            symbolSize: [18, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  return barTopColor[params.dataIndex];
                }
              }
            },
            label: {
              show: true,
              position: "top",
              fontSize: 8
            },
            symbolPosition: "end",
            data: seriesData1
          },
          {
            name: "柱底部",
            type: "pictorialBar",
            symbolSize: [18, 10],
            symbolOffset: [0, 3],
            z: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  return barTopColor[params.dataIndex];
                }
              }
            },
            data: seriesData1
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 1,
                      color: barTopColor[params.dataIndex]
                    },
                    {
                      offset: 0,
                      color: barBottomColor[params.dataIndex]
                    }
                  ]);
                },
                opacity: 0.6
              }
            },
            z: 16,
            silent: true,
            barWidth: 18,
            barGap: "-100%", // Make series be overlap
            data: seriesData1
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>
<style lang="scss">
.a {
  font-weight: bold;
  justify-content: space-between;
  border-radius: 50%;
}
</style>

<template>
  <div class="heatmap">
    <h1 style="text-align:center">热力图</h1>
    <el-select
      v-model="value1"
      multiple
      placeholder="请选择"
      v-if="showSelect"
      :collapse-tags="isTolength"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <HeatMap></HeatMap>
    <CanvasMap></CanvasMap>
  </div>
</template>

<script>
const HeatMap = () => import("./components/heatmapc.vue");
const CanvasMap = () => import("./components/canvasMap.vue");
export default {
  components: { HeatMap, CanvasMap },
  computed: {
    isTolength() {
      return this.value1.length > 10;
    }
  },
  watch: {
    isTolength(newValue) {
      if (newValue) {
        this.showSelect = false;
      }
      this.$nextTick(() => {
        this.showSelect = true;
      });
    }
  },
  data() {
    return {
      value1: "",
      showSelect: true,
      options: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29
      ]
    };
  },

  methods: {
    getchange(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.heatmap {
  padding: 10px;
}
</style>

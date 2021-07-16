<template>
  <div class="heatmap">
    热力图
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

    <el-select
      v-model="value"
      multiple
      placeholder="请选择"
      @change="getchange"
    >
      <el-option
        v-for="item in optionsa"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
    <HeatMap></HeatMap>
  </div>
</template>

<script>
const HeatMap = () => import("./components/heatmapc.vue");
export default {
  components: { HeatMap },
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
      optionsa: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ["选项1", "选项2"],
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

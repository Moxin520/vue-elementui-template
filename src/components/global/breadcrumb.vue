<!-- 面包屑 -->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="fade" mode="out-in">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path">
          <a
            v-if="typeof item.redirect === 'undefined'"
            class="son"
            @click.prevent="handleLink(item)"
            style="color: white;cursor: pointer;"
            >{{ item.meta.title }}</a
          >
          <span v-else class="parent">
            {{ item.meta.title }}
          </span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  components: {},
  data() {
    return {
      levelList: []
    };
  },
  watch: {
    $route: "getBreadList"
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  methods: {
    getBreadList() {
      let matched = this.$route.matched;
      this.levelList = matched;
      console.log(this.levelList);
    },
    handleLink(item) {
      this.$router.push(item.path);
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getBreadList();
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.38s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.fade-move {
  transition: all 0.38s;
}

.fade-leave-active {
  position: absolute;
}

.parent {
  color: black;
  font-weight: bold;
}
.son {
  color: white;
  cursor: pointer;
}
</style>

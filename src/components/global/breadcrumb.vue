<!-- 面包屑 -->
<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="fadeBreadcrumb" mode="out-in">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <span
          v-if="typeof item.redirect === 'undefined'"
          @click.prevent="handleLink(item)"
          class="sons"
        >
          {{ item.meta.title }}
        </span>
        <span v-else class="parent">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      levelList: []
    };
  },
  watch: {
    $route: "getBreadList"
  },
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
  created() {
    this.getBreadList();
  }
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  margin: 0 20px;
  .parent {
    cursor: default;
  }
  .sons {
    cursor: pointer;
  }
}
</style>

<!-- 导航 -->
<script>
import { Navigation, MenuTree, appMain } from "@/views/layout/components";
export default {
  name: "layout",
  components: { Navigation, MenuTree, appMain },
  render(h) {
    return h("div", { class: "layout" }, [
      h(MenuTree, { class: "MenuTree" }),
      h("div", { class: "main" }, [h(Navigation), h(appMain)])
    ]);
  }
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  overflow: hidden;
  .main {
    flex: 1;
  }
}
</style>

<template>
  <div>
    <h1 style="text-align:center">拖拽</h1>
    <h3>{{ count }}</h3>
    <el-button @click="dialogVisible = true">弹框</el-button>
    <el-button @click="startTime" :disabled="isStrat" style="z-index:9999999999"
      >开始计时</el-button
    >
    <el-button @click="endTime">结束计时</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      :append-to-body="true"
      :modal="false"
      width="30%"
      title="拖拽弹框"
      v-dialogDrag
    >
      每秒计时: {{ count }}
    </el-dialog>
  </div>
</template>

<script>
// 用于将方法转化为流,用于worker多线程
// fn: 函数方法
const fn2workerURL = fn => {
  var blob = new Blob(["(" + fn.toString() + ")()"], {
    type: "application/javascript"
  });
  return URL.createObjectURL(blob);
};
function tt() {
  let cnt = 0;
  let start = performance.now(),
    wait = 1000,
    delay = 0;
  // 计时回调
  function foo() {
    cnt++;
    postMessage(cnt);
    delay = performance.now() - (start + 1000 * cnt);
    // 将延迟时间与计时器等待时间抵消
    let newWait = wait - delay;
    setTimeout(foo, newWait);
  }
  setTimeout(foo, wait);
}
export default {
  data() {
    return {
      dialogVisible: false,
      count: 0,
      isStrat: false
    };
  },
  created() {
    this.t = null;
    this.a = fn2workerURL(tt);
    this.timestamp = 0;
  },
  deactivated() {
    this.endTime();
  },
  methods: {
    //动态计算时长
    getTimeS() {
      let runTime = new Date().getTime();
      ++this.count;
      let time = runTime - (this.timestamp + this.count * 1000);
      this.t && clearTimeout(this.t);
      this.t = setTimeout(() => {
        clearTimeout(this.t);
        runTime = 0;
        this.getTimeS();
      }, 1000 - time);
    },
    getTT() {
      if (typeof Worker !== "undefined") {
        if (typeof this.w == "undefined") {
          this.w = new Worker(this.a);
        }
        this.w.onmessage = event => {
          this.count = event.data;
        };
      } else {
        let w = setTimeout(() => {
          clearTimeout(w);
          this.timestamp = performance.now();
          this.getTimeS();
        }, 0);
        console.log("抱歉，你的浏览器不支持 Web Workers...");
      }
    },
    startTime() {
      this.isStrat = true;
      this.getTT();
    },
    endTime() {
      this.isStrat = false;
      this.count = 0;
      this.t && clearTimeout(this.t);
      if (typeof this.w != "undefined") {
        this.w.terminate();
        this.w = undefined;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// 覆盖层元素增加可穿透点击事件
.el-dialog__wrapper {
  pointer-events: none;
}
// 弹窗层元素不可穿透点击事件（不影响弹窗层元素的点击事件）
/deep/ .el-dialog {
  pointer-events: auto !important;
}
</style>

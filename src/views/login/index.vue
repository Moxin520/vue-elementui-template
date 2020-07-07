<!-- 登陆界面 -->
<template>
  <!-- <div>
    我是登陆界面

    <el-button type="primary" plain @click="handleLogin">登陆</el-button>
  </div> -->
  <div class="body">
    <div
      class="container"
      ref="container"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    >
      <h1>login</h1>
      <form action="">
        <input
          type="text"
          v-model.trim="loginForm.userName"
          class="tbx"
          placeholder="账户"
        />
        <input
          type="password"
          v-model.trim="loginForm.password"
          class="tbx"
          placeholder="密码"
        />
        <input type="button" class="sub" value="登陆" @click="handleLogin" />
      </form>
      <span :style="styleXY" ref="span" :class="className"> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      loginForm: {
        userName: "moxin",
        password: "123456",
        code: "aa123"
      },
      isIn: true,
      isOut: false,
      span: "",
      con: "",
      styleXY: {},
      className: ""
    };
  },

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},

  methods: {
    handleLogin() {
      this.$store.commit("user/SET_TOKEN", true);
      console.log("444444444");
      this.$router.push({
        path: "/dashboard"
      });
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      // this.$store
      //   .dispatch("user/login", this.loginForm)
      //   .then(() => {
      //     this.$router.push({
      //       path: "/"
      //     });
      //   })
      //   .catch(() => {});
      // } else {
      //   return false;
      // }
      // });
    },
    mouseOver(e) {
      if (this.isIn) {
        //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
        let inx = e.clientX - e.target.offsetLeft;
        let iny = e.clientY - e.target.offsetTop;
        this.styleXY = {
          left: inx + "px",
          top: iny + "px"
        };
        this.className = "";
        this.className = "in";
        this.isIn = false;
        this.isOut = true;
      }
    },
    mouseLeave(e) {
      if (this.isOut) {
        let inx = e.clientX - e.target.offsetLeft;
        let iny = e.clientY - e.target.offsetTop;
        console.log("xyout:", inx, iny);
        this.styleXY = {
          left: inx + "px",
          top: iny + "px"
        };
        this.className = "";
        this.className = "out";
        this.isOut = false;
        setTimeout(() => {
          this.styleXY = {};
          this.className = "";

          this.isIn = true;
        }, 500);
      }
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {}
};
</script>
<style lang="scss" scoped>
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 450px;
  border-radius: 20px;
  background-color: #34495e;
  box-shadow: 15px 15px 10px rgba(33, 45, 58, 0.3);
  overflow: hidden;
  position: relative;
}

.container form {
  display: flex;
  width: 300px;
  height: 230px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.container form .tbx {
  width: 250px;
  height: 40px;
  outline: none;
  border: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  background: none;
}
.container form .tbx::placeholder {
  color: #fff;
  font-size: 15px;
}

.container form .sub {
  width: 250px;
  height: 40px;
  line-height: 30px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 20px;
  letter-spacing: 5px;
  color: #fff;
  background: none;
  cursor: pointer;
  margin-top: 10px;
}

.container h1 {
  z-index: 1;
  color: #ecf0f1;
  letter-spacing: 5px;
  padding-left: 5px;
  font-size: 50px;
  font-weight: 100;
  font-family: PangMenZhengDao;
  text-shadow: 5px 5px 5px rgba(33, 45, 58, 0.3);
}

/* 设置鼠标进入的样式 */
.container .in {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #3498bd;
  transform: translate(-50%, -50%);
  /* 使用in动画，持续0.5s,缓出的时间函数，停留在最后一帧 */
  animation: in 0.5s ease-out forwards;
}
/* 设置鼠标离开的样式 */
.container .out {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: #3498bd;
  transform: translate(-50%, -50%);
  animation: out 0.5s ease-out forwards;
}
/* 设置鼠标进入时，元素的动画 */
@keyframes in {
  /* 初始关键帧 */
  0% {
    width: 0;
    height: 0;
  }
  /* 结尾关键帧 */
  100% {
    width: 1200px;
    height: 1200px;
  }
}
/* 设置鼠标离开时，元素的动画 */
@keyframes out {
  /* 初始关键帧 */
  0% {
    width: 1200px;
    height: 1200px;
  }
  /* 结尾关键帧 */
  100% {
    width: 0;
    height: 0;
  }
}
</style>

<template>
  <div style="display:flex">
    <div ref="brain" class="brain"></div>
    <threeDemo1></threeDemo1>
  </div>
</template>

<script>
import * as THREE from "three";
const OrbitControls = require("three-orbit-controls")(THREE);
import { OBJLoader } from "three-obj-mtl-loader";
import img from "@/assets/images/12.png";
import threeDemo1 from "./components/threeDemo1.vue";
export default {
  name: "ThreeDemo",
  components: { threeDemo1 },
  data() {
    return {};
  },
  created() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); //创建渲染器
    this.scene = new THREE.Scene(); // 创建场景
    this.loader = new OBJLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.decalGroup = new THREE.Group();
    this.mesh = null;
    this.camera = null;
    this.controls = null;
    this.publicPath = process.env.BASE_URL;
    this.object = null;
    this.material = null;
  },
  mounted() {
    this.container = this.$refs.brain;
    this.width = this.container.offsetWidth; //窗口宽度
    this.height = this.container.offsetHeight; //窗口高度
    this.container.addEventListener("dblclick", this.onMouseDblclick, false);
    this.foundMoudel();
    this.foundLight();
    this.foundCamera();
    this.loaderObj();
    this.render();
  },
  methods: {
    // 加载obj文件
    loaderObj() {
      this.textureLoader.load(img);
      this.loader.load(this.publicPath + "./static/brain.obj", obj => {
        this.material = new THREE.MeshPhongMaterial({
          map: img,
          color: 0xb4adaf,
          side: THREE.DoubleSide,
          vertexColors: THREE.NoColors,
          specular: 0x444444,
          transparent: true,
          depthTest: true,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -4,
          wireframe: false
        });
        this.object = obj;
        let object = obj.children[0];
        object.geometry.center();
        object.name = "brain";
        this.scene.add(obj);
      });
    },
    // 创建网格模型
    foundMoudel() {
      this.textureLoader.load(img, img => {
        let geometry = new THREE.SphereGeometry(15, 15, 15); //创建一个立方体几何对象Geometry
        let material = new THREE.MeshLambertMaterial({
          map: img,
          // color: 0x0000ff,
          opacity: 1,
          transparent: true,
          side: THREE.DoubleSide,
          vertexColors: THREE.NoColors,
          depthTest: true,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -4,
          wireframe: false
        }); //材质对象Material
        let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        mesh.name = "1";
        mesh.position.set(20, 80, 10);
        let geometry1 = new THREE.SphereGeometry(15, 15, 15); //创建一个立方体几何对象Geometry
        let material1 = new THREE.MeshLambertMaterial({
          color: 0x0000ff,
          opacity: 1,
          transparent: true,
          side: THREE.DoubleSide,
          vertexColors: THREE.NoColors,
          depthTest: true,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -4,
          wireframe: false
        }); //材质对象Material
        let mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
        mesh1.name = "2";
        mesh1.position.set(-20, 80, 10);
        this.scene.add(mesh); //网格模型添加到场景中
        this.scene.add(mesh1); //网格模型添加到场景中
      });
    },
    //创建光源
    foundLight() {
      let point = new THREE.PointLight(0xdddfe2);
      point.position.set(0, 500, 500); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      let point1 = new THREE.PointLight(0xdddfe2);
      point1.position.set(0, -500, -500); //点光源位置
      this.scene.add(point1); //点光源添加到场景中
      //环境光
      let ambient = new THREE.AmbientLight(0x555555);
      this.scene.add(ambient);
    },
    // 相机设置
    foundCamera() {
      let k = this.width / this.height; //窗口宽高比
      let s = 150; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(0, 250, 0); //设置相机位置
      this.camera.up.set(0, 0, 1);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.renderer.setSize(this.width, this.height, true); //设置渲染区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement); //创建控件对象
      // 如果使用animate方法时，将此函数删除
      // this.controls.addEventListener('change', this.render)
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = false;
      // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
      this.controls.dampingFactor = 0.25;
      this.controls.rotateSpeed = 0.25;
      // 是否可以缩放
      this.controls.enableZoom = false;
      // 是否自动旋转
      this.controls.autoRotate = false;
      // 设置相机距离原点的最远距离
      this.controls.minDistance = 1;
      // 设置相机距离原点的最远距离
      this.controls.maxDistance = 1000;
      // 是否开启右键拖拽
      this.controls.enablePan = false;
      this.controls.target.set(0, 0, 0);
      this.container.appendChild(this.renderer.domElement); //body元素中插入canvas对象
    },
    // 创建渲染器
    render() {
      this.renderer.clear();
      //执行渲染操作   指定场景、相机作为参数
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render); //请求再次执行渲染函数render
    },
    // 鼠标双击触发的方法
    onMouseDblclick(event) {
      event.preventDefault();
      let raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();
      // 获取模型坐标数据
      let rect = this.renderer.domElement.getBoundingClientRect();
      // 获取鼠标点击坐标数据
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, this.camera);
      let intersects = raycaster.intersectObjects(this.scene.children, true);
      if (intersects.length > 0) {
        console.log("选中头模坐标:", intersects[0].object.name);
      } else {
        console.log("未选中头模");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.brain {
  width: 30vw;
  height: 50vh;
  border: 1px solid black;
  margin: 5px;
}
</style>

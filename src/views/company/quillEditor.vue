<template>
  <div>
    <h1 style="text-align:center">富文本编辑器</h1>
    <div class="ql-editor" style="height:400px">
      <quillEditor
        ref="quillEditor"
        v-model="content"
        :options="editOptions"
        style="height:300px"
      ></quillEditor>
    </div>
    <p ref="printarea" class="ql-editor" v-html="content"></p>
  </div>
</template>

<script>
import print from "print-js";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { addQuillTitle } from "./components/quill-title";
import html2canvas from "html2canvas";
export default {
  components: { quillEditor },
  data() {
    return {
      content: `<p><strong>我是标题</strong></p><p>	 <strong>大家</strong><em>都来</em><u>试试</u><s>打印机</s>的<span style="color: rgb(230, 0, 0);">效果</span><sup>怎么样</sup></p>
      <ol><li>asdas</li></ol> <h1>是的</h1>`,
      editOptions: Object.freeze({
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
              // ["blockquote", "code-block"], //引用，代码块
              [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
              [{ list: "ordered" }, { list: "bullet" }], //列表
              [{ script: "sub" }, { script: "super" }], // 上下标
              [{ indent: "-1" }, { indent: "+1" }], // 缩进
              [{ direction: "rtl" }], // 文本方向
              [{ size: ["small", false, "large", "huge"] }], // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
              [{ color: [] }], // 字体颜色，{ background: [] }字体背景颜色
              // [{ font: [] }], //字体
              [{ align: [] }], //对齐方式
              ["clean"], //清除字体样式
              // ["image", "video"], //上传图片、上传视频
              ["saveData"], //新添加的工具
              ["print"]
            ],
            handlers: {
              saveData: this.saveContent,
              print: this.printimg
            }
          }
        },
        theme: "snow"
      })
    };
  },
  mounted() {
    const saveDatabtn = document.querySelector(".ql-saveData");
    saveDatabtn.innerHTML = '<div style="width:40px;">保存</div>';
    const printbtn = document.querySelector(".ql-print");
    printbtn.innerHTML = '<div style="width:40px;">打印</div>';
    addQuillTitle();
    // //禁用编辑期
    this.$refs.quillEditor.quill.enable(false);
    this.$nextTick(function() {
      //丢掉编辑器焦点并重新启用编辑器
      this.$refs.quillEditor.quill.blur();
      this.$refs.quillEditor.quill.enable(true);
    });
  },
  methods: {
    saveContent() {
      console.log(this.content);
    },
    printimg() {
      html2canvas(this.$refs.printarea, {
        width: 800,
        scale: 1.5
      }).then(canvas => {
        const url = canvas.toDataURL();
        this.img = url;
        print({
          printable: url,
          type: "image",
          documentTitle: "nirFocus"
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ql-editor {
  letter-spacing: 2px;
}
</style>

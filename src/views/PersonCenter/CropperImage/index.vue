<template>
  <div id="contain" v-show="modelShow">
    <div class="header">
      <span>更换头像</span>
      <span @click="modelShow=false" class="iconfont icon-cuowu"></span>
    </div>
    <div class="cropper-content">
      <div class="cropper">
      <vue-cropper
        ref="cropper"
        :img="originalimg"
        :outputSize="option.outputSize"
        :outputType="option.outputType"
        :info="option.info"
        :canScale="option.canScale"
        :autoCrop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth"
        :autoCropHeight="option.autoCropHeight"
        :fixed="option.fixed"
        :fixedNumber="option.fixedNumber"
        :full="option.full"
        :fixedBox="option.fixedBox"
        :canMove="option.canMove"
        :canMoveBox="option.canMoveBox"
        :original="option.original"
        :centerBox="option.centerBox"
        :height="option.height"
        :infoTrue="option.infoTrue"
        :maxImgSize="option.maxImgSize"
        :enlarge="option.enlarge"
        :mode="option.mode"
        @realTime="realTime"
      >
      </vue-cropper>
      </div>
      <div class="show-preview">
        <p class="text">预览</p>
      <div :style="previews.div" class="preview">
        <img :src="previews.url" :style="previews.img" />
      </div>
      </div>
    </div>
    <div class="btn">
      <button @click="uploadImg('blob')">保存</button>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  components: {
    VueCropper
  },
  props:['originalimg'],
  data() {
    return {
      modelShow:false,
      previews: {},
      option: {
        img: '', //裁剪图片的地址
        outputSize: 0.4, //裁剪生成图片的质量(可选0.1 - 1)
        outputType: 'jpeg', //裁剪生成图片的格式（jpeg || png || webp）
        info: true, //图片大小信息
        canScale: true, //图片是否允许滚轮缩放
        autoCrop: true, //是否默认生成截图框
        // autoCropWidth: 300,  //默认生成截图框宽度
        // autoCropHeight: 300, //默认生成截图框高度
        fixed: true, //是否开启截图框宽高固定比例
        // fixedNumber: [1, 1], //截图框的宽高比例
        full: false, //false按原比例裁切图片，不失真
        fixedBox: true, //固定截图框大小，不允许改变
        canMove: true, //上传图片是否可以移动
        canMoveBox: false, //截图框能否拖动
        original: false, //上传图片按照原始比例渲染
        centerBox: true, //截图框是否被限制在图片里面
        height: true, //是否按照设备的dpr 输出等比例图片
        infoTrue: false, //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 1000, //限制图片最大宽度和高度
        enlarge: 1, //图片根据截图框输出比例倍数
        mode: '100% auto' //图片默认渲染方式
      }
    }
  },
  methods: {
    //实时预览函数
    realTime(data) {
      this.previews = data
    },
    //保存图片
    uploadImg(type) {
      this.$refs.cropper.getCropData(async (data) => {
        this.$bus.$emit('getPic',data)
        this.modelShow=false
      })
    }
  }
}
</script>

<style scoped>
.text{
  text-align: center;
  color: rgb(63, 63, 63);
  font-size: 16px;
}
.inp{
  position: absolute;
  z-index: 100;
}
.btn{
  text-align: right;
}
.btn button{
  padding: 10px;
  width: 100px;
  border-radius: 6px;
  border: none;
  background-color: rgb(32, 190, 230);
  font-size: 16px;
  color: white;
  cursor: pointer;
}
.btn button:active{
  background-color: rgb(98, 211, 239);
}
.header{
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  color: rgb(63, 63, 63);
  border-bottom: 1px solid rgba(0, 0, 0, 0.43);
  margin-bottom: 10px;
  font-size: 16px;
}
.header span:last-child{
  margin-left: 600px;
  cursor: pointer;
}
#contain{
  width: 750px;
  height: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  top: 50%;
  box-shadow: 0px 0px 10px 0px black;
  border-radius: 10px;
  padding: 15px;
  z-index: 10;
  background-color: rgb(255, 255, 255);
}
.cropper {
  width: 400px;
  height: 400px;
}
.preview {
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
}
.show-preview {
  width: 300px;
  height: 300px;
  position: absolute;
  right: 30px;
  top: 100px;
}
</style>

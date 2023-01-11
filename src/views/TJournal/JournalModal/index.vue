<template>
  <div class="window" v-if="show">
    <div class="modal">
      <div class="title">
        <span>标题：</span>
        <input v-model="title" type="text" name="" id="">
      </div>
      <div class="content">
        <p>内容:</p>
        <textarea v-model="content" name="" id="" rows="7"></textarea>
      </div>
      <div class="img">
        <label for="file">添加图片</label>
        <input type="file" id="file" @change="selectImg">
        <img v-for="(img,index) in images" :key="index" :src="img" alt="">
      </div>
      <div class="sub">
        <span @click="cancelJournal">取消</span>
        <span @click="subJournal" class="iconfont icon-fabu">发布</span>
      </div>
    </div>
  </div>
</template>

<script>
import {compressAccurately} from 'image-conversion';
export default {
  name: 'JournalModal',
  data() {
    return {
      images:[],
      title:'',
      content:'',
      show:false
    }
  },
  methods: {
    selectImg(e){
      let file=e.target.files[0]
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        alert('请选择图片类型文件')
      }else{
        compressAccurately(file,400).then((res)=>{
        let src= window.URL.createObjectURL(res)
        if(this.images.length<3) this.images.push(src)
        else alert('最多选取三张图片')
      })
      }
    },
    subJournal(){
      let {title,content,images}=this
      if(!title || !content) return alert('请填写完整的标题与内容')
      let date=new Date()
      let year=date.getFullYear()
      let day=date.getMonth()+1+'-'+date.getDate()
      let show=false
      this.$emit('getJournal',{year,day,title,content,images,show})
      this.title=''
      this.content=""
      this.images=[]
      this.show=false
    },
    cancelJournal(){
      this.title=''
      this.content=""
      this.images=[]
      this.show=false
    }
  },
}
</script>

<style scoped>
.window{
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.301);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
.modal {
  width: 60%;
  height: 70%;
  position: absolute;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  padding: 20px;
}
.title{
  font-size: 17px;
}
.title input{
  width: 85%;
  height: 40px;
  border: none;
  border-bottom: 2px solid rgb(92, 92, 92);
  padding-left: 20px;
  outline: none;
}
.content{
  margin-top: 30px;
  font-size: 14px;
}
.content p{
  font-size: 17px;
}
.content textarea{
  width: 85%;
  padding: 15px;
  margin-left: 40px;
}
.img{
  margin-top: 20px;
  width: 100%;
  height: 200px;
}
.img input{
  display: none;
}
.img label{
  font-size: 13px;
  width: 100px;
  height: 30px;
  display: block;
  text-align: center;
  line-height: 30px;
  background-color: rgb(221, 127, 242);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}
.img img{
  max-width: 30%;
  max-height: 180px;
  margin-left: 10px;
}
.sub{
  margin-top: 20px;
  text-align: right;
}
.sub span{
  width: 85px;
  height: 30px;
  background-color: rgb(207, 207, 204);
  display: inline-block;
  vertical-align: top;
  text-align: center;
  line-height: 30px;
  font-size: 17px;
  margin-left: 15px;
  cursor: pointer;
  user-select: none;
}
.sub span:last-child{
  background-color: #40a0ffdd;
}
.sub span:last-child:active{
  background-color: #74b4f5dd;
}
.sub span:first-child:active{
  background-color: rgb(169, 169, 167);
}
</style>

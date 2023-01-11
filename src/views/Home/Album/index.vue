<template>
<div class="big">
<transition
name="animate__animated animate__bounce"
enter-active-class="animate__zoomIn"
>
<div class="album" v-show="albumShow">
        <div class="title">
          <p id="p1">ALBUM</p>
          <p id="p2"></p>
          <p id="p3">相册</p>
        </div>
        <div class="photos" >
          <div @click="photoActive" :id="`pic${index+1}`" class="unactive" v-for="(item,index) in albumTitle" :key="index">
            <p>{{item}}</p>
          </div>
      </div>
        <div class="moreBtn">
          <button @click="goAlbum">MORE</button>
        </div>
  </div>
</transition>
</div>
</template>

<script>
export default {
  name:'Album',
  props:{
    albumShow:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      albumTitle:['个人特写','森林公园','日本《茶道》','动物公园']
    }
  },
  methods: {
    goAlbum(){
      this.$router.push('/album')
      // window.document.scrollTop=0
    },
    photoActive(e){
      for(let i=0;i<4;i++){
        e.target.parentElement.children[i].className='unactive'
      }
      e.target.className='active'
    }
  },
  mounted() {
    window.document.getElementById('pic2').click()
  },
}
</script>

<style scoped>
#pic1{
  background-image: url('./images/pic1.webp');
}
#pic2{
  background-image: url('./images/pic2.webp');
}
#pic3{
  background-image: url('./images/pic3.webp');
}
#pic4{
  background-image: url('./images/pic4.webp');
}
.big{
  width: 100%;
  min-width: 1200px;
  margin-top: 100px;
}
.album{
  width: 1000px;
  margin: auto;
  padding-bottom: 50px;
}
.album .title{
  text-align: center;
}
.album .title #p1{
  font-size: 26px;
  color: rgb(68 68 68);
  margin-bottom: 10px;
}
.album .title #p3{
  font-size: 20px;
  color: rgb(68 68 68);
}
.album .title #p2{
  width: 40px;
  height: 3px;
  background-color: rgb(255 192 1);
  margin: auto;
}
.album .moreBtn{
  text-align: center;
  margin-top: 80px;
}
.album .moreBtn button{
  width: 162px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
  background: #ffc001;
  border-radius: 26px;
  border: none;
  cursor: pointer;
}
.album .photos{
  width: 1000px;
  height: 440px;
  display: flex;
  margin-top: 30px;
}
.album .photos div{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 5px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 5px 5px 10px rgb(193, 193, 193);
}
.album .photos div p{
  white-space: nowrap;
  overflow: hidden;
  word-wrap: normal;
}
.unactive{
  flex:4;
  transition: .5s;
}
.active {
  flex: 10;
  transition: .5s;
}
.unactive p,
.active p {
  position: relative;
  color: #fff;
  left: 50px;
}

.unactive p {
  top: 620px;
  transition: .5s;
}

.active p {
  top: 540px;
  transition: .5s;
}
</style>
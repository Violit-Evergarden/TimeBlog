<template>
<transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceIn"
    >
  <div id="content" v-show="show">
    <div class="slideDate">
      <p class="year">{{year}}</p>
      <p class="day">{{day}}</p>
    </div>
    <div class="line"> </div>
    <div class="content">
      <p class="title">{{title}}</p>
      <p class="text">{{content}}</p>
      <div class="img">
        <img v-for="(imgIndex,index) in images" :key="index" :src="require(`./images/jimg${imgIndex}.webp`)">
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name:'ArticleStatic',
  data(){
    return {
    }
  },
  props:['year','day','title','content','images','show'],
}
</script>

<style scoped>
#content{
  min-width: 1200px;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}
.slideDate{
  width: 70px;
  height: 300px;
  padding-top: 30px;
}
.year{
  font-size: 24px;
  color: rgb(68 68 68);
}
.day{
  font-size: 14px;
  color: rgb(119 119 119);
  margin-top: 10px;
}
.line{
  width: 1px;
  height: 260px;
  margin-left: 70px;
  margin-right: 100px;
  background-color: rgba(0, 0, 0, 0.119);
}
.img{
  align-content: space-between;
}
.img img:first-child{
  margin-left: -6px;
}
img{
  width: 290px;
  height: 170px;
  margin-left: 30px;
}
.title{
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
}
.text{
  width: 910px;
  line-height: 30px;
  font-size: 14px;
  color:rgb(102 102 102) ;
  margin-bottom: 20px;
}
</style>
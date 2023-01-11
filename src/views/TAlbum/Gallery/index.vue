<template>
<transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceIn"
    >
  <div id="content" v-show="show">
    <div class="line1">
      <div>
        <img src="./images/g1.webp" alt="">
        <p>湖南-张家界</p>
      </div>
      <div>
        <img src="./images/g2.webp" alt="">
        <p>内蒙古-油菜花</p>
      </div>
      <div>
        <img src="./images/g3.webp" alt="">
        <p>俄罗斯-克里姆林宫</p>
      </div>
    </div>
    <div class="line2">
      <div>
        <img src="./images/g4.webp" alt="">
        <p>新西兰-霍比屯</p>
      </div>
      <div>
        <img src="./images/g5.webp" alt="">
        <p>希腊-爱情海</p>
      </div>
      <div>
        <img src="./images/g6.webp" alt="">
        <p>贵州-万亩樱花园</p>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name:'Gallery',
  props:['show']
}
</script>

<style scoped>
#content{
  width: 1200px;
  margin: auto;
  color: rgb(102 102 102);
}
#content div{
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
p{
  padding-top: 10px;
}
.line1,.line2{
  margin-bottom: 40px;
}
.line1 div,.line2 div{
  margin-left: 30px;
}
.line1 div:first-child,.line2 div:first-child{
  margin-left: 0;
}
img{
  transition: .3s;
}
img:hover{
  transform: scale(1.1);
}
</style>
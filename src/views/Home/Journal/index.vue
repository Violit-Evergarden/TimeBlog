<template>
  <div class="journal">
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceIn"
    >
    <div class="jouTitle" v-show="titleShow">
      <p id="p1">
        <span>JOURNAL</span>
        <span></span>
      </p>
      <p id="p2">
        <span>日志</span>
      </p>
      <p id="p3">
        <router-link to="/journal"><span>MORE+</span></router-link>
      </p>
    </div>
    </transition>
     <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceIn"
    >
    <div id="content" v-show="imgConShow">
      <div class="imgCon"  key="2">
      <div id="con1">
        <div>
          <img src="./images/con1.webp" alt="" />
        </div>
        <p class="title">深深的爱，淡淡的香</p>
        <p class="textcon">
          一朵花，皎洁，素雅，渐渐地演变成了一幅画，印在了记忆的长河里。那花，叶细长，翠翠的，花开时，伸出一只长长的颈，花儿在
        </p>
        <p class="time">2020-07-27</p>
      </div>
      <div id="con2">
        <div>
          <img src="./images/con2.webp" alt="" />
        </div>
        <p class="title">遇见你，不知是美好还是错误</p>
        <p class="textcon">
          我一直用心向着阳可是我始终摆脱不了那后阴影，我从来没有承认过我的感情路有多么坎坷，因为离人要走所以所有的一切都那么惨白无
        </p>
        <p class="time">2020-07-27</p>
      </div>
      </div>
      <div class="textList" key="3">
      <div class="text">
        <div class="head">
          <p class="year">2020</p>
          <p class="day">07-27</p>
        </div>
        <div class="bar"></div>
        <div class="con">
          <p class="title">请好好珍惜“路痴”朋友</p>
          <p class="content">
            小时候啊，总盼望着长大，认为长大好啊，长大了，可以买好多好多的衣服
            吃的
            玩的，而且还没有人管自己，多好啊!长大后啊，总是盼望着童年，原来长大难啊，小时候，可以无忧无虑的撒娇
            玩耍 胡闹，而且也没有人骂自己 ，多好啊!
          </p>
        </div>
      </div>
      <div class="text">
        <div class="head">
          <p class="year">2020</p>
          <p class="day">07-27</p>
        </div>
        <div class="bar"></div>
        <div class="con">
          <p class="title">是夜，静守那一季相思</p>
          <p class="content">
            今年的天气比去年同期要冷的多，入冬的雪肆意狂掠了深秋仅存的些许温暖，落叶飘零，斑驳在雪野里，弥漫着季节的落寞，街道两旁的树上，还凌乱的摇曳着片片不甘心谢幕的黄叶，被风吹过，不甘心地再次炫舞落寞。在这样的季节
          </p>
        </div>
      </div>
      <div class="text">
        <div class="head">
          <p class="year">2020</p>
          <p class="day">07-27</p>
        </div>
        <div class="bar"></div>
        <div class="con">
          <p class="title">你的名字就是我的心痛</p>
          <p class="content">
            独坐角落看下雨的窗外，眼前的风景都蒙上了一层帘幕，细雨漫天，叫人看得不真切,就好似她的心。一滴一串雨点以断了线的珠子，往远处看去，好象一块灰幕遮住了视线，灰蒙蒙一片。　　雨点在水面上画出了一个一个的音符。如一杯
          </p>
        </div>
      </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Journal',
  // props:['titleShow','imgConShow','textShow']
  props:{
    titleShow:{
      type:Boolean,
      default:true
    },
    imgConShow:{
      type:Boolean,
      default:true
    },
    textShow:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
.journal {
  padding-top: 140px;
  width: 100%;
  min-width: 1200px;
  height: 600px;
  margin-bottom: 250px;
  display: flex;
  justify-content: center;
}
.jouTitle {
  width:20%;
  min-width: 160px;
}
.jouTitle #p1 span:first-child {
  font-size: 26px;
}
.jouTitle #p1 span:last-child {
  display: inline-block;
  width: 3px;
  height: 21px;
  background-color: rgb(255 192 1);
  margin-left: 30px;
}
.jouTitle #p2 span {
  font-size: 20px;
  margin-left: 75px;
}
.jouTitle #p3 {
  margin-top: 50px;
}
.jouTitle #p3 span {
  font-size: 14px;
  cursor: pointer;
  margin-left: 70px;
  color: #666;
}
.jouTitle #p3 span:hover {
  color: rgb(255 192 1);
}
@media screen and (max-width: 1200px){
  .jouTitle{
    margin-left: 0%;
  }
}
#content{
  min-width: 880px;
  width: 60%;
}
.imgCon {
  width: 60%;
  min-width: 880px;
  height: 360px;
  cursor: default;
  display: flex;
  justify-content: space-between;
}
.imgCon #con1 {
  width: 48%;
  min-width: 420px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: #fff;
}
.imgCon #con1 div {
  overflow: hidden;
  border-radius: 6px;
}
.imgCon #con1 div img {
  width: 100%;
  height: 200px;
  transition: 0.7s;
  cursor: pointer;
}
.imgCon #con1 div img:hover {
  transform: scale(1.2);
}
.imgCon #con1 .title {
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
}
.imgCon #con1 .title:hover {
  color: rgb(255 192 1);
  cursor: pointer;
}
.imgCon #con1 .textcon {
  font-size: 14px;
  color: #878787;
  margin-left: 20px;
  margin-top: 20px;
}
.imgCon #con1 .time {
  font-size: 14px;
  color: #878787;
  margin-left: 20px;
  margin-top: 20px;
}
.imgCon #con2 {
  width: 48%;
  min-width: 420px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: #fff;
  margin-left: 40px;
}
.imgCon #con2 div {
  overflow: hidden;
  border-radius: 6px;
}
.imgCon #con2 div img {
  width: 100%;
  height: 200px;
  transition: 0.7s;
  cursor: pointer;
}
.imgCon #con2 div img:hover {
  transform: scale(1.2);
}
.imgCon #con2 .title {
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
}
.imgCon #con2 .title:hover {
  color: rgb(255 192 1);
  cursor: pointer;
}
.imgCon #con2 .textcon {
  font-size: 14px;
  color: #878787;
  margin-left: 20px;
  margin-top: 20px;
}
.imgCon #con2 .time {
  font-size: 14px;
  color: #878787;
  margin-left: 20px;
  margin-top: 20px;
}

.textList {
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  width: 890px;
  border-radius: 15px;
  padding-top: 10px;
  margin-top: 40px;
  cursor: default;
}
.textList .text {
  border-bottom: 1px solid #62697152;
  width: 800px;
  height: 110px;
  margin-left: 50px;
  margin-top: 20px;
}
.textList .text:last-child {
  border: none;
}
.textList .text div {
  display: inline-block;
}
.textList .head .year {
  font-size: 26px;
  color: #626971;
  margin-bottom: 20px;
}
.textList .head .day {
  font-size: 14px;
  color: #626971;
}
.textList .bar {
  width: 1px;
  height: 60px;
  background-color: #63696e48;
  margin-left: 20px;
}
.textList .con {
  width: 700px;
}
.textList .con .title {
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.textList .con .title:hover {
  color: rgb(255 192 1);
  cursor: pointer;
}
.textList .con .content {
  font-size: 14px;
  color: #878787;
  margin-bottom: 10px;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

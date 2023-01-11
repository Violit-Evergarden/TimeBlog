<template>
<div class="personFile" v-show="personShow">
  <transition
  name="animate__animated animate__bounce"
  enter-active-class="animate__bounceIn"
  >
  <div class="jouTitle" v-show="personShow">
      <p id="p1">
        <span>PERSONAL FILE</span>
        <span></span>
      </p>
      <p id="p2">
        <span>个人档</span>
      </p>
      <p id="p3">
        <router-link to="/personinfor"><span>MORE+</span></router-link>
      </p>
    </div>
  </transition>
    <transition
    name="animate__animated animate__bounce"
    enter-active-class="animate__lightSpeedInLeft"
    >
    <div class="personInfor" v-show="personShow">
      <div class="personImg">
        <img src="./images/personImg.webp" alt="" />
      </div>
      <div class="personText">
        <p class="title">Emily-Summer</p>
        <div>
          <p><span>性别： 女</span></p>
          <p><span>年龄： 20</span></p>
          <p><span>生日： 7月1日</span></p>
          <p><span>星座： 巨蟹座</span></p>
          <p><span>现居地： 中国 广州</span></p>
          <p><span>婚姻状况： 单身</span></p>
        </div>
        <div>
          <p><span>血性： O型</span></p>
          <p><span>故乡： 中国</span></p>
          <p><span>职业： 小说家、编辑总监</span></p>
          <p><span>公司名称： 诺亚方舟言语公司</span></p>
          <p><span>公司所在地：中国 广州</span></p>
          <p><span>详细地址： XXX省XXX市XXX区XXX路</span></p>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Personfile',
  props:{
    personShow:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
.personFile {
  width: 100%;
  min-width: 1200px;
  background-color: rgb(255, 246, 246);
  padding-top: 100px;
  padding-bottom: 70px;
  overflow: hidden;
}
.personFile .jouTitle {
  width: 230px;
  position: absolute;
  margin-left: 4%;
}
.personFile .jouTitle #p1 span:first-child {
  font-size: 26px;
}
.personFile .jouTitle #p1 span:last-child {
  display: inline-block;
  width: 3px;
  height: 21px;
  background-color: rgb(255 192 1);
  margin-left: 30px;
}
.personFile .jouTitle #p2 span {
  font-size: 20px;
  margin-left: 130px;
}
.personFile .jouTitle #p3 {
  margin-top: 50px;
}
.personFile .jouTitle #p3 span {
  font-size: 14px;
  cursor: pointer;
  margin-left: 135px;
  color: black;
}
.personFile .jouTitle #p3 span:hover {
  color: rgb(255 192 1);
}
.personFile .personInfor {
  width: 900px;
  height: 392px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  background-color: white;
  display: inline-block;
  margin-left: 30%;
}
.personFile .personInfor div {
  display: inline-block;
}
.personFile .personInfor .personText {
  margin-left: 80px;
}
.personFile .personInfor .personText p {
  font-size: 14px;
  color: rgb(119 119 119);
  margin-bottom: 25px;
}
.personFile .personInfor .personText div {
  margin-right: 80px;
  transform: translateY(-50px);
}
.personFile .personInfor .personText .title {
  font-size: 20px;
  color: #000;
  margin-bottom: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.215);
  padding-bottom: 30px;
}
</style>

<template>
<transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__lightSpeedInRight"
    >
  <div id="content" v-show="show">
    <div class="moreinfo">
      <p class="head">More</p>
      <div class="info">
      <div>
        <p>喜欢的颜色：蓝色</p>
        <p>喜欢的数值：7</p>
        <p>喜欢的美食：火锅、川菜</p>
      </div>
      <div>
        <p>喜欢的明星：刘德华</p>
        <p>喜欢的景点：新西兰、四川</p>
        <p>喜欢的电影：可可西里</p>
      </div>
      <div>
        <p>喜欢的运动：篮球</p>
        <p>喜欢的歌曲：turn down for what</p>
        <p>喜欢的动漫：紫罗兰永恒花园</p>
      </div>
      <div>
        <p>喜欢的饮料：橙汁</p>
        <p>喜欢的装扮：洛丽塔</p>
        <p>喜欢的宠物：小猫、小狗</p>
      </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name:'MoreInfo',
  props:['show']
}
</script>

<style scoped>
#content{
  width: 100%;
  min-width: 1200px;
  margin-top: 70px;
  margin-bottom: 70px;
}
.head{
  font-size: 20px;
  color: rgb(68 68 68);
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(2, 2, 2, 0.149);
  width: 1000px;
  margin: auto;
}
.moreinfo{
  width: 1200px;
  height: 320px;
  box-shadow: 0px 0px 10px 0 rgb(133, 133, 133);
  border-radius: 10px;
  margin: auto;
  background-color: white;
}
.info{
  width: 1000px;
  margin: auto;
  margin-top: 50px;
}
.info div{
  display: inline-block;
  margin: auto;
  font-size: 14px;
  color: rgb(119 119 119);
  margin-left: 90px;
}
.info div:first-child{
  margin-left: 0px;
}
.info div p{
  line-height: 45px;
}
</style>
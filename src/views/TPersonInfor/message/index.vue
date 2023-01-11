<template>
<transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInLeft"
    >
  <div id="content" v-show="show">
    <div class="message">
      <div class="line"></div>
      <p class="head">发表您的留言：</p>
      <p class="form">
        姓名：<input type="text" name="" id="">
        邮箱：<input type="text" name="" id="">
        电话：<input type="text" name="" id="">
      </p>
      <p class="text">
        <span>内容：</span>
        <textarea name="" id="" cols="144" rows="4" placeholder="留言需审核后才会显示"></textarea>
      </p>
      <button>提交留言</button>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name:'Message',
  props:['show']
}
</script>

<style scoped>
#content{
  width: 100%;
  min-width: 1200px;
  padding-bottom: 70px;
  margin: auto;
}
.line{
  width: 1300px;
  height: 2px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.114);
  margin-bottom: 50px;
}
.message{
  color: rgb(102 102 102);
  font-size: 14px;
  width: 1250px;
  margin: auto;
}
.head{
  margin-bottom: 30px;
}
.form{
  margin-bottom: 30px;
  margin-left: 30px;
}
.form input{
  width: 234px;
  height: 32px;
  margin-right: 105px;
  padding-left: 10px;
  border-color: rgba(0, 0, 0, 0.218);
}
.text{
  margin-bottom: 30px;
  margin-left: 30px;
}
.text textarea{
  padding: 10px;
  border-color: rgba(0, 0, 0, 0.218);
}
.text span{
  display: inline-block;
  transform: translateY(-40px);
}
button{
  width: 219px;
  height: 44px;
  color: white;
  background-color:#ffad2b ;
  border: none;
  cursor: pointer;
  display: block;
  margin: auto;
}
</style>
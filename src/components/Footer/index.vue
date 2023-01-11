<template>
  <div class="conFooter">
      <div class="footerTable">
        <span>WELCOME</span>
        <ul>
          <router-link to="/home" active-class="active" ><li>主页</li></router-link>
          <router-link to="/journal" active-class="active"><li>日志</li></router-link>
          <router-link to="/album" active-class="active"><li>相册</li></router-link>
          <router-link to="/personinfor" active-class="active"><li>个人档</li></router-link>
          <router-link to="/friends" active-class="active"><li>好友</li></router-link>
        </ul>
      </div>
      <div class="myInfor">
        <span>QQ：2232102177</span>
        <span>联系电话：0717-7743517</span>
        <span>联系邮箱：2232102177@qq.com</span>
        <span>联系地址：湖北省武汉市洪山区</span>
      </div>
    </div>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style>
.conFooter{
  background-image: url(./images/footer.jpg);
  height: 449px;
  color: #666;
  text-align: center;
  width: 100%;
  min-width: 1200px;
}
.footerTable{
 padding-top: 60px;
}
.footerTable span{
  font-size: 24px;
  color: rgb(255 192 1);
}
.footerTable ul{
  margin-top: 20px;
}
.footerTable ul li{
  cursor: pointer;
}
.footerTable ul a{
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin-left: 4%;
  width: 75px;
  height: 55px;
  line-height: 55px;
}
.footerTable ul a:first-child{
  margin-left: 0%;
}
.myInfor{
  margin-top: 80px;
}
.myInfor span:first-child{
  margin-left: 0;
}
.myInfor span{
  margin-left: 7%;
  font-size: 14px;
}
</style>
<template>
  <div class="headerTable">
      <div class="myControl">
        <p v-if="shown" class="nickname">{{userData.nickname}}</p>
        <p v-if="!shown" class="nickname">用户昵称</p>
        <div>
          <img v-if="show" :src="userData.user_pic" alt="">
          <img v-if="!show" src="./images/download.png" alt="">
          <div>
            <router-link to="/personcenter"><p><i class="iconfont icon-geren1"></i> 个人中心</p></router-link>
            <p @click="outLogin"><i class="iconfont icon-tuichu4"></i> 退出登录</p>
          </div>
        </div>
      </div>
      <div class="forMargin">
        <img v-show="show" id="img1" :src="userData.user_pic" alt="">
        <img v-show="show==false" id="img1" src="./images/download.png" alt="">
      </div>
      <div class="mytext">
        <span>WELCOME</span>
      </div>
      <div class="myline">
        <span></span>
      </div>
      <div class="myword">
        <span v-show="shows">{{userData.signature}}</span>
        <span v-show="shows==false">您还没有设置个性签名，快去个人中心设置吧！</span>
      </div>
      <div class="headerList">
        <ul>
          <router-link to="/home" active-class="active" ><li>主页</li></router-link>
          <router-link to="/journal" active-class="active"><li>日志</li></router-link>
          <router-link to="/album" active-class="active"><li>相册</li></router-link>
          <router-link to="/personinfor" active-class="active"><li>个人档</li></router-link>
          <router-link to="/friends" active-class="active"><li>好友</li></router-link>
        </ul>
      </div>
    </div>
</template>

<script>
import {getUserInfo} from '@/api'
export default {
  name:'Header',
  data(){
    return {
      userData:{},
      show:false,
      shown:false,
      shows:false
    }
  },
  methods: {
    outLogin(){
      localStorage.removeItem('token')
      this.$router.replace('/login')
    },
    async UserInfo(){
      let result=await getUserInfo()
      if(result){
        if(result.status===0){
          this.userData=result.data
          if(this.userData.user_pic) this.show=true
          if(this.userData.nickname) this.shown=true
          if(this.userData.signature) this.shows=true
        }else{
          localStorage.removeItem('token')
          // this.$router.replace('/login')
          console.log(result)
        }
      }
    }
  },
  mounted() {
    this.UserInfo()
  },
  watch:{
    $route(to,from){
      if(to.path=='/friends'){
        this.$bus.$emit('dynamicInfo',{user_pic:this.userData.user_pic,nickname:this.userData.nickname})
      }
    }
  }
}
</script>

<style scoped>
a{
  color: black;
}
.myControl{
  position: absolute;
  width: 100%;
  min-width: 1200px;
}
.nickname{
  position: absolute;
  font-size: 16px;
  color: white;
  margin-left: 91%;
  margin-top: 40px;
}
.myControl>div{
  margin-left: 79%;
  width: 200px;
  height: 200px;
  margin-top: 15px;
}
.myControl div img{
  width: 70px;
  display: block;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 15px white;
  cursor: pointer;
  margin: auto;
}
.myControl div img:hover+div{
  opacity: 1;
  visibility: visible;
  height: 104px;
}
.myControl div div{
  color: white;
  text-align: center;
  font-size: 17px;
  background-color: rgb(41, 41, 41);
  border-radius: 10px;
  opacity: 0;
  visibility:hidden;
  height: 0px;
  transition: .4s;
}
.myControl div div:hover{
  opacity: 1;
  height: 104px;
  visibility: visible;
}
.myControl div div p{
  color: white;
  margin: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  border-radius: 10px;
}
.myControl div div p:hover{
  color: white;
  background-color: rgb(25, 176, 206);
  visibility: visible;
}
.myControl div div p:first-child{
  border-bottom: 2px solid rgba(236, 236, 236, 0.223);
}
.headerTable{
  height: 410px;
  min-width: 1200px;
  width: 100%;
  background-image: url(./images/download.jpg);
}
.forMargin{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 256px;
}
.forMargin #img1{
  transform: translateY(-5px);
  border-radius: 50%;
  width: 190px;
  border-radius: 50%;
  border:5px solid white
}
.mytext{
  text-align: center;
  font-size: 24px;
}
.myline{
  text-align: center;
}
.myline span{
  display: inline-block;
  width: 43px;
  height: 3px;
  background-color: rgb(255 192 1);
}
.myword{
  text-align: center;
  font-size: 14px;
  color: rgb(119 119 119);
}
.headerList{
  margin-top: 10px;
}
.headerList ul{
  color: rgb(119 119 119);
  text-align: center;
}
.headerList ul a{
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin-left: 30px;
  width: 75px;
  height: 55px;
  line-height: 55px;
  cursor: pointer;
  text-decoration: none;
}
.headerList ul li:hover{
  border-bottom: 3px solid  rgb(255 192 1);
  color:rgb(255 192 1);
  cursor: pointer;
}
.active{
  border-bottom: 3px solid  rgb(255 192 1);
  color:rgb(255 192 1);;
}
</style>
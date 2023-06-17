<template>
  <div class="container">
    <div class="slideBar">
      <p>
        <span class="iconfont icon-geren1"></span>
        <span>个人中心</span>
      </p>
      <div>
        <img v-show="show" :src="userData.user_pic" alt="" />
        <img v-show="!show" src="./images/download.png" alt="" />
      </div>
      <ul>
        <router-link active-class="active" to="">我的资料</router-link>
        <router-link to="">账号安全</router-link>
        <router-link to="">隐私设置</router-link>
        <router-link to="">邀请注册</router-link>
      </ul>
    </div>
    <div class="content">
      <div class="topbar">
        <router-link to="/home">首页/</router-link>
        <router-link to="">个人中心/</router-link>
        <router-link to="">我的资料</router-link>
        <button @click="outLogin">退出登录</button>
      </div>
      <div class="main">
        <transition>
        <i class="subresult" v-show="showResult" ref="subresult">{{subresult}}</i>
        </transition>
        <div class="head">
          <span></span>
          <span>我的资料</span>
        </div>
        <div class="photo">
          <span>我的头像：</span>
          <img v-show="show" :src="userData.user_pic" alt="" />
          <img v-show="!show" src="./images/download.png" alt="" />
          <label for="file">点击更换头像</label>
          <input id="file" type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="selectImg($event)" />
        </div>
        <div class="nickname">
          <span>昵称：</span>
          <input type="text" name="" id="" v-model.lazy="userData.nickname" />
        </div>
        <div class="username">
          <span>用户名：</span>
          <span>{{ userData.username }}</span>
        </div>
        <div class="mytext">
          <span>我的签名：</span>
          <textarea
            v-model.lazy="userData.signature"
            name=""
            id=""
            cols="73"
            rows="4"
          ></textarea>
        </div>
        <div class="gender" ref="gender">
          <span>性别：</span>
          <button
            @click="userData.gender = '0'"
            :class="{ cur: userData.gender == 0 }"
          >
            男
          </button>
          <button
            @click="userData.gender = 1"
            :class="{ cur: userData.gender == 1 }"
          >
            女
          </button>
          <button
            @click="userData.gender = 2"
            :class="{ cur: userData.gender == 2 }"
          >
            保密
          </button>
        </div>
        <div class="block">
          <span class="demonstration">出生日期：</span>
          <el-date-picker
            v-model="userData.birthday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <button class="submit" @click="submitInfo">保存</button>
      </div>
    </div>
    <CropperImage ref="cropper" :originalimg="originalimg"></CropperImage>
  </div>
</template>

<script>
import CropperImage from './CropperImage'
import { getUserInfo, updateUserInfo } from '@/api'
export default {
  name: 'PersonCenter',
  components: {
    CropperImage,
},
  methods: {
    outLogin() {
      localStorage.removeItem('token')
      this.$router.replace('/login')
    },
    async UserInfo() {
      let result = await getUserInfo()
      if (result) {
        if (result.status === 0) {
          this.userData = result.data
        } else {
          localStorage.removeItem('token')
          this.$router.replace('/login')
          console.log(result)
        }
      }
    },
    async submitInfo() {
      clearTimeout(timer)
      let timer
      let data = { ...this.newInfo, id: this.userData.id }
      if (Object.keys(data).length > 1) {
        let result = await updateUserInfo(data)
        if (result) {
          if (result.status == 0) {
            this.subresult='保存成功'
            this.showResult=true
            timer=setTimeout(() => {
              this.showResult=false
            }, 1000);
            this.newInfo={}
          } else {
            this.subresult='保存失败'
            this.showResult=true
            this.$refs.subresult.style.backgroundColor='red'
            timer=setTimeout(() => {
              this.showResult=false
            }, 1000);
            console.log(result)
          }
        }else{
          this.subresult='保存失败'
          this.showResult=true
          this.$refs.subresult.style.backgroundColor='red'
          timer=setTimeout(() => {
              this.showResult=false
            }, 1000);
        }
      }else{
        this.subresult=''
        this.subresult='信息未发生变动'
        this.$refs.subresult.style.backgroundColor='yellow'
        this.showResult=true
        timer=setTimeout(() => {
          this.showResult=false
        }, 1000);
      }
    },
    //选择图片
    selectImg(e) {
      this.$refs.cropper.modelShow=true
      let file = e.target.files[0]
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        console.log('请选择图片类型文件')
        return false
      }
      //转化为blob
      let reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        this.originalimg = data
      }
      //转化为base64
      reader.readAsDataURL(file)
    },
  },
  data() {
    return {
      showResult:false,
      subresult:'',
      originalimg:'',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      userData: {},
      newInfo: {}
    }
  },
  created() {
    this.UserInfo()
    this.$bus.$on('getPic',(data)=>{
      this.userData.user_pic=data
    })
  },
  mounted() {
    this.newInfo={}
  },
  watch: {
    'userData.nickname'(nval) {
      this.newInfo.nickname = nval
    },
    'userData.signature'(nval) {
      this.newInfo.signature = nval
    },
    'userData.gender'(nval) {
      this.newInfo.gender = nval
    },
    'userData.birthday'(nval) {
      this.newInfo.birthday = nval
    },
    'userData.user_pic'(nval){
      this.newInfo.user_pic=nval
    }
  },
  computed:{
    show(){
      return this.userData.user_pic?true:false
    }
  }
}
</script>

<style scoped>
.v-enter,.v-leave-to{
  opacity: 0;
  top: 0;
}
.v-enter-to,.v-leave{
  opacity: 1;
  top: 40%;
}
.v-enter-active,.v-leave-active{
  transition: 1s ;
}
.subresult{
  position: absolute;
  display: block;
  left: 48%;
  padding: 20px 40px;
  background-color: rgb(59, 209, 134);
  font-size: 20px;
  color: white;
  border-radius: 4px;
}
.container{
  width: 100%;
  min-width: 1200px;
  height: 100vh;
}
.container>div{
  display: inline-block;
  vertical-align: top;
}
.content{
  width: 80.6%;
}
#file {
  display: none;
}
.cur {
  background-color: rgb(74, 231, 245) !important;
}
.main {
  font-size: 16px;
  height: 90vh;
  min-width: 1000px;
}
.main span {
  display: inline-block;
  text-align: right;
  width: 100px;
}
.main>div {
  margin-bottom: 2%;
  padding-left: 4%;
}
.mian>div:last-child{
  margin-bottom: 0;
}
.main img {
  width: 10%;
  margin-left: 3%;
}
.nickname input {
  padding-left: 10px;
  height: 30px;
}
.submit {
  width: 10%;
  height: 50px;
  background-color: rgb(52, 224, 243);
  border: none;
  border-radius: 6px;
  color: rgb(255, 255, 255);
  display: block;
  margin: 0 auto;
  cursor: pointer;
}
.submit:active {
  background-color: rgb(12, 159, 175);
}
.gender button {
  width: 50px;
  height: 30px;
  margin-left: 30px;
  border-radius: 4px;
  border: none;
  background-color: rgb(213, 213, 213);
  cursor: pointer;
}
.username span:last-child {
  text-align: center;
}
.mytext {
  display: flex;
}
.mytext textarea {
  padding: 10px;
}
.photo {
  display: flex;
  align-items: center;
}
.photo label {
  background-color: rgb(6, 192, 170);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 6px;
  padding: 14px;
  cursor: pointer;
  margin-left: 4%;
}
.photo label:active {
  background-color: rgb(45, 162, 172);
}
.head {
  border-bottom: 1px solid rgba(0, 0, 0, 0.304);
  color: rgb(9, 187, 214);
  font-size: 20px;
  font-weight: bold;
  height: 8.5vh;
}
.head span:first-child {
  width: 10px;
  height: 45px;
  background-color: rgb(31, 222, 222);
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 10px;
}
.head span:last-child {
  text-align: center;
  transform: translateY(-15px);
}
.slideBar {
  color: white;
  font-size: 16px;
  text-align: center;
  width: 19vw;
  min-width: 200px;
  background-color: rgba(0, 0, 0, 0.777);
  user-select: none;
  height: 100vh;
}
img {
  width: 180px;
  border-radius: 50%;
  border: 4px solid white;
}
p {
  text-align: left;
  font-size: 22px;
  margin-bottom: 10%;
  padding-left: 10%;
  margin-top: 5%;
}
.iconfont {
  font-size: 24px;
}
ul {
  margin-top: 10%;
}
ul > a {
  display: block;
  padding: 14px 0px 14px 0px;
  cursor: pointer;
}
ul > a:hover {
  background-color: rgb(126, 255, 255);
  color: rgb(62, 62, 62);
}
ul > a:active {
  background-color: rgb(1, 188, 188);
}
.active {
  background-color: rgb(126, 255, 255);
  color: rgb(62, 62, 62);
}
.topbar {
  height: 10vh;
  background-color: rgba(35, 144, 187, 0.721);
  font-size: 16px;
  min-width: 1000px;
  overflow: hidden;
}
.topbar a {
  display: inline-block;
  margin-top: 2%;
  cursor: pointer;
}
.topbar a:first-child {
  margin-left: 3%;
}
.topbar button {
  margin-left: 60vw;
  padding: 14px 6px 14px 6px;
  color: white;
  border-radius: 5px;
  background-color: rgb(37, 37, 37);
}
.topbar button:hover {
  background: rgb(44, 44, 44);
}
.topbar button:active {
  background-color: black;
}
</style>

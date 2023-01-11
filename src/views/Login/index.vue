<template>
  <div id="content">
    <div :class="mode">
      <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInDown"
        leave-active-class="animate__backOutLeft"
      >
        <p id="logSuc" v-show="showBool.isLogSucShow">注册成功！请登录</p>
      </transition>
      <div class="form sign-in">
        <transition
          name="animate__animated animate__bounce"
          enter-active-class="animate__shakeY"
          leave-active-class="animate__rotateOut"
        >
          <p v-show="showBool.isLoginWrong" class="prompt">
            {{ wrongRule.loginWrongRule }}
          </p>
        </transition>
        <h2>欢迎回来</h2>
        <label>
          <span>用户名</span>
          <input autocomplete="off" v-model.trim="formData.username" />
        </label>
        <label>
          <span>密码</span>
          <form>
          <input autocomplete="off" @keyup.enter="login(formData.username, formData.password)" type="password" v-model.trim="formData.password" />
          <input type="text" name="" id="" v-show="false">
          </form>
        </label>
        <p class="forgot-pass"><span>忘记密码？</span></p>
        <button
          type="button"
          class="submit"
          @click.prevent="login(formData.username, formData.password)"
        >
          登 录
        </button>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>还未注册？</h2>
            <p>立即注册，开始探索！</p>
          </div>
          <div class="img__text m--in">
            <h2>已有帐号？</h2>
            <p>有帐号就登录吧，好久不见了！</p>
          </div>
          <div class="img__btn" @click="modeChange">
            <span class="m--up">注 册</span>
            <span class="m--in">登 录</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>立即注册</h2>
          <label>
            <span>用户名</span>
            <form action="">
            <input
            autocomplete="off"
              type="text"
              v-model.trim="formData.username"
              placeholder="请输入5~12位用户名"
              @blur="checkUname(formData.username)"
            /></form>
            <span
              v-show="showBool.isRegUname"
              class="iconfont icon-cuowu2"
              id="icon1"
              ><i>{{ wrongRule.usernameRule }}</i></span
            >
          </label>
          <label>
            <span>密码</span>
            <form action="">
            <input
            autocomplete="off"
              type="password"
              v-model.trim="formData.password"
              placeholder="请输入6~15位密码"
              @blur="checkPwd(formData.password)"
            /></form>
            <span
              v-show="showBool.isRegPwd"
              class="iconfont icon-cuowu2"
              id="icon1"
              ><i>{{ wrongRule.passwordRule }}</i></span
            >
          </label>
          <label>
            <span>邮箱（可选）</span>
            <input
              type="email"
              v-model.trim="formData.email"
              @blur="checkEmail(formData.email)"
            />
            <span
              v-show="showBool.isRegEmail"
              class="iconfont icon-cuowu2"
              id="icon1"
              ><i>{{ wrongRule.emailRule }}</i></span
            >
            
          </label>
          <button
            type="button"
            class="submit"
            @click.prevent="
              reguser(formData.username, formData.password, formData.email)
            "
          >
            注 册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqRegister,reqLogin,reqCheckUser} from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      mode: 'content',
      formData: {
        username: '',
        password: '',
        email: ''
      },
      wrongRule: {
        usernameRule: '',
        passwordRule: '',
        emailRule: '',
        loginWrongRule: ''
      },
      showBool: {
        isLoginWrong: false,
        isRegUname: false,
        isRegPwd: false,
        isRegEmail: false,
        isLogSucShow: false
      },
    }
  },
  methods: {
    animateLoginWrong() {
      this.showBool.isLoginWrong = true
      setTimeout(() => {
        this.showBool.isLoginWrong = false
      }, 1500)
    },
    modeChange() {
      this.formData.password = ''
      this.formData.username = ''
      this.formData.email = ''
      this.showBool.isLoginWrong = false
      this.showBool.isRegUname = false
      this.showBool.isRegPwd = false
      this.showBool.isRegEmail = false
      this.showBool.isLogSucShow = false
      if (this.mode === 'content') {
        this.mode = ['content', 's--signup']
      } else {
        this.mode = 'content'
      }
    },
    async login(username, password) {
      if (!username) {
        this.wrongRule.loginWrongRule = '请填写用户名'
        this.animateLoginWrong()
      } else if (!password) {
        this.wrongRule.loginWrongRule = '请填写密码'
        this.animateLoginWrong()
      } else {
        let result= await reqLogin({username,password})
        if(result){
          if(result.status===0){
            localStorage.setItem('token', result.token)
            this.userinfo=result.data
            this.$router.push('/home')
          }else{
            console.log(result)
            this.wrongRule.loginWrongRule = '用户名或密码错误'
            this.animateLoginWrong()
          }
        }else{
          this.wrongRule.loginWrongRule = '发生未知错误，请稍后再试'
          this.animateLoginWrong()
        }
      }
    },
    async reguser(username, password, email) {
      if (username && password) {
        let result= await reqRegister({username,password,email})
        if(result.status===0){
          this.modeChange()
          this.showBool.isLogSucShow = true
          setTimeout(() => {
            this.showBool.isLogSucShow = false
          }, 1500)
        }else{
          console.log(result)
        }
      }
    },
    async checkUname(uname) {
      if (!uname) {
        ;(this.wrongRule.usernameRule = '用户名不能为空'),
          (this.showBool.isRegUname = true)
      } else if (uname.length < 5) {
        ;(this.wrongRule.usernameRule = '用户名过短'),
          (this.showBool.isRegUname = true)
      } else if (uname.length > 12) {
        ;(this.wrongRule.usernameRule = '用户名过长'),
          (this.showBool.isRegUname = true)
      } else {
        let reg = /^[a-zA-Z]([a-zA-Z0-9_]+)?$/
        if (!reg.test(uname)) {
          ;(this.wrongRule.usernameRule = '字母数字下划线，开头字母'),
            (this.showBool.isRegUname = true)
        } else {
          let result=await reqCheckUser({username:uname})
          if(result){
            if(result.status===0){
              this.showBool.isRegUname = false
            }else{
              this.wrongRule.usernameRule = '用户名以被占用'
              this.showBool.isRegUname = true
            }
          }
        }
      }
    },
    checkPwd(pwd) {
      if (!pwd) {
        this.wrongRule.passwordRule = '密码不能为空'
        this.showBool.isRegPwd = true
      } else if (pwd.length < 6) {
        this.wrongRule.passwordRule = '密码不能少于6位'
        this.showBool.isRegPwd = true
      } else if (pwd.length > 15) {
        this.wrongRule.passwordRule = '密码不能大于15位'
        this.showBool.isRegPwd = true
      } else {
        this.showBool.isRegPwd = false
      }
    },
    checkEmail(email) {
      if (email) {
        let reg =
          /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        if (!reg.test(email)) {
          this.wrongRule.emailRule = '邮箱格式错误，请重新输入'
          this.showBool.isRegEmail = true
        } else {
          this.showBool.isRegEmail = false
        }
      }
    }
  }
}
</script>

<style scoped>
/* #content{
  background-image: url('./images/bgimg.jpg') !important;
} */
#logSuc {
  position: absolute;
  left: 273px;
  top: 100px;
  font-size: 17px;
  background-color: bisque;
  padding: 10px;
  z-index: 10;
}
.forgot-pass span {
  cursor: pointer;
}
.forgot-pass span:hover {
  color: rgb(132, 132, 132);
}
.prompt {
  position: absolute;
  font-size: 14px;
  background-color: #c5fffe;
  color: red;
  width: 200px;
  text-align: center;
  margin-left: 220px;
  margin-top: -20px;
  border-radius: 7px;
}
#icon1 {
  display: block;
  font-size: 20px;
  color: red;
  position: absolute;
  margin-left: 250px;
  margin-top: -30px;
}
#icon1 i {
  font-size: 12px;
}
input,
button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.content {
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 900px;
  height: 550px;
  margin: -300px 0 0 -450px;
  background: rgb(241, 241, 241);
}

.form {
  position: relative;
  width: 640px;
  height: 100%;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: rgb(241, 241, 241);
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.content.s--signup .sub-cont {
  -webkit-transform: translate3d(-640px, 0, 0);
  transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}

.img:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url(./images/bg.jpg);
  background-size: cover;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content.s--signup .img:before {
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}

.img__text p {
  font-size: 14px;
  line-height: 1.5;
}

.content.s--signup .img__text.m--up {
  -webkit-transform: translateX(520px);
  transform: translateX(520px);
}
.img__text.m--in {
  -webkit-transform: translateX(-520px);
  transform: translateX(-520px);
}

.content.s--signup .img__text.m--in {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 30px;
}

.img__btn span {
  position: absolute;
  cursor: pointer;
  color: white;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
}

.img__btn span.m--in {
  -webkit-transform: translateY(-72px);
  transform: translateY(-72px);
}

.content.s--signup .img__btn span.m--in {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.content.s--signup .img__btn span.m--up {
  -webkit-transform: translateY(72px);
  transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 12px;
  color: #909399;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.forgot-pass a {
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.sign-in {
  transition-timing-function: ease-out;
}
.content.s--signup .sign-in {
  transition-timing-function: ease-in-out;
  transition-duration: 0.6s;
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.sign-up {
  -webkit-transform: translate3d(-900px, 0, 0);
  transform: translate3d(-900px, 0, 0);
}
.content.s--signup .sign-up {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>

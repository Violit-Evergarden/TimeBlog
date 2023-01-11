import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

//导入动画
import 'animate.css'
//引入Firstimg组件将其注册为全局组件
import Firstimg from '@/views/Home/Firstimg'
Vue.component(Firstimg.name,Firstimg)
import {DatePicker,Message} from "element-ui"
Vue.component(DatePicker.name,DatePicker)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this//安装全局事件总线
    Vue.prototype.$message = Message;
  }
}).$mount('#app')

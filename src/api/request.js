//对axios进行二次封装
import axios from "axios";

//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import 'nprogress/nprogress.css'
//start：进度条开始     done:进度条结束

//利用axios的create方法创建一个axios实例
//request就是axios,只不过稍微配置一下
const request=axios.create({
  baseURL:'http://localhost:8889',    //10.127.251.222 //10.132.181.172
  timeout:5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
})



//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config)=>{
  //config：配置对象，里面有一个属性很重要，header请求头
  const token=localStorage.getItem('token')
  if(token){
    config.headers.Authorization=token
  }
  //进度条开始动
  nprogress.start();
  return config
})

//响应拦截器
request.interceptors.response.use((res)=>{
  //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
  //进度条结束
  nprogress.done()
  return res.data
},(err)=>{
  //响应失败的回调函数
  return Promise.reject(new Error('false'))
})


export default request
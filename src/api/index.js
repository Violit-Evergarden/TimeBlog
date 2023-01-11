//当前这个模块对api接口进行统一管理
import request from "./request";
import qs from 'qs'

//注册
export const reqRegister=(data)=>request.post('/api/reguser',qs.stringify(data))
//登录
export const reqLogin=(data)=>request.post('/api/login',qs.stringify(data))
//检测用户名是否被占用
export const reqCheckUser=data=>request.post('/api/checkuser',qs.stringify(data))
//查询用户信息的请求
export const getUserInfo=()=>request.get('/my/getuserinfo')
//更新用户信息的请求
export const updateUserInfo=(data)=>request.post('/my/updateuserinfo',qs.stringify(data))
//搜索用户的请求
export const searchUserInfo=(username)=>request.get(`/my/searchuser?username=${username}`)
//添加好友的接口
export const addFriends=(id)=>request({url:`/my/addfriends?otherId=${id}`,method:'get'})
//获取好友信息的接口
export const getFriendsInfo=()=>request.get('/my/getfriendsinfo')
//删除好友的接口
export const deleteFriends=(otherId)=>request.get(`/my/deletefriends?otherId=${otherId}`)

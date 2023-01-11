import VueRouter from 'vue-router'


let originPush =VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace

VueRouter.prototype.push=function(location,resolve,reject){
  if(resolve&&reject){
    orginPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace=function(location,resolve,reject){
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

let router= new VueRouter({
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
  routes:[
    {
      path:'/home',
      component:()=>import('@/views/Home'),
      meta:{show:true}
    },
    {
      path:'/login',
      component:()=>import('@/views/Login'),
      meta:{show:false}
    },
    {
      path:'/journal',
      component:()=>import('@/views/TJournal'),
      meta:{show:true}
    },
    {
      path:'/album',
      component:()=>import('@/views/TAlbum'),
      meta:{show:true}
    },
    {
      path:'/personinfor',
      component:()=>import('@/views/TPersonInfor'),
      meta:{show:true}
    },
    {
      path:'/friends',
      component:()=>import('@/views/TFriends'),
      meta:{show:true}
    },
    {
      path:'/personcenter',
      component:()=>import('@/views/PersonCenter'),
      meta:{show:false}
    },
    {
      path:'*',
      redirect:'/home'
    }
  ],
})

router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('token')){
    if(to.path=='/login'){
      next('/home')
    }else{
      next()
    }
    next()
  }else{
    if(to.path!=='/login'){
      next('/login')
    }else{
      next()
    }
  }
})

export default router
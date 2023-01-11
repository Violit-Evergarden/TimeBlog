<template>
  <div class="friendlist">
    <div class="smalllist" v-show="showSmall" ref="smalllist">
      <ul>
        <li>发送消息</li>
        <li>查看资料</li>
        <li>了解动态</li>
        <li @click="deleteFri">解除好友关系</li>
      </ul>
    </div>
    <div class="head">
      <p id="p1">
        <span>Friends List</span>
        <span></span>
      </p>
      <p id="p2">
        <span>好友列表</span>
      </p>
    </div>
    <div class="list">
      <div class="search">
        <span @click="showModal" class="iconfont icon-tianjiahaoyou"></span>
        <input type="text" name="" id="">
        <span class="iconfont icon-sousuo5"></span>
      </div>
      <div class="online">
        <p class="title" @click.prevent="showOnline(onShowHid)"><i ref="angel1" class="iconfont icon-youjiantou9"></i><span>在线好友</span><span class="friendnum">{{friendsList.length}}/14</span></p>
        <div class="onlineList" ref="onlineList">
          <div v-for="(friend,index) in friendsList" :key="index" class="friends" @contextmenu.prevent="showSmallList(friend.id,$event)">
            <div class="info1">
              <img :src="friend.user_pic" alt="">
            </div>
            <div class="info2">
              <p>{{friend.nickname}}</p>
              <p>{{friend.signature}}</p>
            </div>
            </div>
          </div>
      </div>
      <div class="outline">
        <p @click="showOutline(outShowHid)" class="title"><i ref="angel2" class="iconfont icon-youjiantou9"></i><span>离线好友</span><span class="friendnum">2/14</span></p>
        <div class="outlineList" ref="outlineList">
          <div class="friends" @contextmenu.prevent="showSmallList">
        <div class="info1">
          <img src="./images/download.png" alt="">
        </div>
        <div class="info2">
          <p>时间与她都是刺客</p>
          <p>既然黑夜出自王座，就让光明......</p>
        </div>
          </div>
          <div class="friends" @contextmenu.prevent="showSmallList">
          <div class="info1">
            <img src="./images/download.png" alt="">
          </div>
          <div class="info2">
            <p>时间与她都是刺客</p>
            <p>既然黑夜出自王座，就让光明......</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFriendsInfo,deleteFriends} from '@/api'
export default {
  name:'FriendList',
  data(){
    return {
      onShowHid:false,
      outShowHid:false,
      showSmall:false,
      friendsList:[],
      clickId:''
    }
  },
  watch:{
    showSmall(nval,oval){
      if(nval){
        document.body.addEventListener('click',this.hiOrShow)
      }else{
        document.body.removeEventListener('click',this.hiOrShow)
      }
    }
  },
  methods:{
    hiOrShow(){
      this.showSmall=false
    },
    showOnline(){
      if(this.onShowHid){
        this.$refs.onlineList.style.height=0
        this.$refs.angel1.className='iconfont icon-youjiantou9'
        this.onShowHid=false
      }else{
        this.$refs.onlineList.style.height=this.friendsList.length*78.6+'px'
        this.$refs.angel1.className='iconfont icon-youjiantou9 iconfram'
        this.onShowHid=true
      }
    },
    showOutline(){
      if(this.outShowHid){
        this.$refs.outlineList.style.height=0
        this.$refs.angel2.className='iconfont icon-youjiantou9'
        this.outShowHid=false
      }else{
         this.$refs.outlineList.style.height=this.$refs.outlineList.childNodes.length*78.6+'px'
        this.$refs.angel2.className='iconfont icon-youjiantou9 iconfram'
        this.outShowHid=true
      }
    },
    showSmallList(clickId,e){
      this.$refs.smalllist.style.top=e.pageY-790+'px';
      this.$refs.smalllist.style.left=e.pageX+15+'px';
      this.showSmall=true
      this.clickId=clickId
    },
    showModal(){
      this.$bus.$emit('showSearchModal',this.idList)
    },
    async getFriends(){
      let result=await getFriendsInfo()
      if(result.status==0){
        let idList=[]
        this.friendsList=result.friendsInfoList
        result.friendsInfoList.forEach(item=>{
          idList.push(item.id)
        })
        this.$bus.$emit('getIdList',idList)
      }
      else console.log(result)
    },
    async deleteFri(){
      let result=await deleteFriends(this.clickId)
      if(result.status==0) {
        this.getFriends()
        this.$refs.onlineList.style.height=(this.friendsList.length-1)*78.6+'px'
        this.$message({
          message: '删除好友成功',
          type: 'success'
        });
      }else{
        this.$message.error('删除失败')
      }
    }
  },
  mounted() {
    this.getFriends()
    this.$bus.$on('updateFriendList',()=>{
      this.getFriends()
      this.$refs.onlineList.style.height=(this.friendsList.length+1)*78.6+'px'
    })
  },
}
</script>

<style scoped>
.search input{
  width: 180px;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 30px;
  margin-left: 10px;
}
.search span:first-child{
  cursor: pointer;
}
.search span:last-child{
  position: absolute;
  left: 68%;
  line-height: 35px;
  font-size: 18px;
  z-index: 10;
  color: #000;
  font-weight: bold;
}
.smalllist{
  position: absolute;
  text-align: center;
  z-index: 10;
  font-size: 12px;
  color: #000;
  background-color: rgb(255, 247, 247);
}
.smalllist li{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid white;
  cursor: pointer;
  padding: 6px;
}
.smalllist li:hover{
  background-color: rgb(44, 44, 44);
  color: white;
}
.smalllist li:last-child{
  border: none;
}
.head {
  width: 230px;
  margin-left: 100px;
  margin-bottom: 20px;
}
.head #p1 span:first-child {
  font-size: 26px;
}
.head #p1 span:last-child {
  display: inline-block;
  width: 3px;
  height: 21px;
  background-color: rgb(255 192 1);
  margin-left: 30px;
}
.head #p2 span {
  font-size: 20px;
  margin-left: 60px;
}
.head{
  font-size: 20px;
  color: #000;
}
i{
  color: white;
  display: inline-block;
  transition: .5s;
  margin-right: 4px;
}
.iconfram{
  transform: rotate(90deg);
}
.friendlist{
  color: white;
  padding-top: 60px;
  overflow: auto;
  position: absolute;
}
.friendnum{
  display: inline-block;
  margin-left: 120px;
}
.list{
  width: 250px;
  height: 100vh;
  background-color: rgb(69, 69, 69);
  padding: 10px;
}
.list>div{
  margin-bottom: 10px;
}
.onlineList{
  height: 0;
  transition: .5s;
  overflow: hidden;
}
.outlineList{
  height: 0;
  transition: .5s;
  overflow: hidden;
}
.friends{
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.247);
}
.friends:hover{
  background-color: rgba(143, 143, 143, 0.527);
}
.friends img{
  width: 50px;
  border: 2px solid white;
  border-radius: 50%;
}
.title{
  font-size: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.title span{
  cursor: pointer;
}
.friends div{
  display: inline-block;
}
.info2{
  transform: translateY(-10px);
}
.info2 p{
  margin-top: 10px;
  margin-left: 10px;
}
.info2 p:last-child{
  color: rgb(198, 198, 198);
}
.online{
  border-bottom: 1px solid rgba(255, 255, 255, 0.493);
}
.outline{
  border-bottom: 1px solid rgba(255, 255, 255, 0.493);
}
</style>
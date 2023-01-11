<template>
  <div class="modal" v-show="modalShow">
    <div class="main">
      <div class="search">
        <input type="text" name="" v-model.trim="searchUser" placeholder="请输入您要搜索的用户名" id="">
        <button @click="searchFriend(searchUser)">搜索</button>
      </div>
      <transition name="animate__animated animate__bounce" enter-active-class="animate__bounceInUp">
      <div class="result" v-show="resultShow">
        <div class="img">
          <img :src="searchResult.user_pic" alt="">
        </div>
        <div class="info">
          <p class="nickname">{{searchResult.nickname}}</p>
          <p class="signature">{{searchResult.signature}}</p>
        </div>
        <div class="btn">
          <button @click="appendFriend(searchResult.id)">添加</button>
        </div>
      </div>
      </transition>
      <div class="noneResult" v-show="!resultShow">
        <p>未找到对应用户</p>
      </div>
      <div class="close">
        <button @click="closeModal">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
import {searchUserInfo,addFriends} from '@/api'
export default {
  name:'SearchFriends',
  data(){
    return {
      modalShow:false,
      searchUser:'',
      searchResult:{},
      idList:[]
    }
  },
  computed:{
    resultShow(){
      return JSON.stringify(this.searchResult)!='{}'
    }
  },
  methods: {
    closeModal(){
      this.modalShow=false
      this.searchUser=''
      this.searchResult={}
    },
    async searchFriend(username){
      this.searchResult={}
      if(!this.searchUser) return alert('请输入要搜索的用户名！')
      let result=await searchUserInfo(username)
      if(result.status==0){
        this.searchResult=result.data
      }else if(result.status==2){

      }else{
        console.log(result)
        alert('发生未知错误')
      }
    },
    async appendFriend(id){
      if(this.idList.indexOf(id)!=-1) return this.$message({
          message: '您已拥有该好友，请勿重复添加',
          type: 'warning'
        });
      let result=await addFriends(id)
      if(result.status==0){
        this.$bus.$emit('updateFriendList')
        this.$message({
          message: '添加好友成功',
          type: 'success'
        });
      }
      else this.$message.error('添加失败')
    }
  },
  mounted() {
    this.$bus.$on('showSearchModal',()=>{
      this.modalShow=true
    })
    this.$bus.$on('getIdList',(idList)=>{
      this.idList=idList
    })
  },
}
</script>

<style scoped>
.noneResult{
  margin-top: 20%;
}
.noneResult p{
  font-size: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.56);
}
.modal{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.375);
  position: fixed;
  top: 0;
  left: 0;
}
.main{
  width: 50%;
  height: 50%;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  transform: translate(-50%,-50%);
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 20px;
}
.search input{
  width: 80%;
  height: 35px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  padding-left: 15px;
  font-size: 14px;
}
.search button{
  width: 100px;
  height: 40px;
  background-color: rgb(234, 222, 3);
  color: white;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
}
.search button:active{
  background-color: rgb(247, 238, 58);
}
.result{
  margin-top: 100px;
}
.result div{
  display: inline-block;
  vertical-align: top;
}
.result .img img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgb(135, 133, 133);
}
.info{
  width: 70%;
  height: 60px;
  margin-left: 13px;
}
.info .nickname{
  font-size: 14px;
  margin-top: 5px;
}
.info .signature{
  margin-top: 14px;
}
.btn button{
  width: 70px;
  height: 30px;
  margin-top: 15px;
  background-color: rgb(2, 154, 113);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.btn button:active{
  background-color: rgb(4, 201, 148);
}
.close{
  margin-left: 86%;
  position: absolute;
  top: 90%;
  background-color: antiquewhite;
}
.close button{
  width: 80px;
  height: 35px;
  border-radius: 5.5px;
  border: none;
  color: white;
  background-color: darkcyan;
  cursor: pointer;
  font-size: 14px;
}
.close button:hover{
  background-color: rgb(2, 117, 117);
}
</style>
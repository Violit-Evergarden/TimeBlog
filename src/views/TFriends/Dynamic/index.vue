<template>
  <div id="content">
    <div class="modal" v-show="showModal">
      <div class="main">
        <p id="close"><span @click="showModal=false">✖</span> </p>
        <textarea v-model="oneDynamic.content" placeholder="说点什么吧：" name="" id="" rows="4"></textarea>
        <div class="imgpic" >
          <img v-for="(img,index) in oneDynamic.img" :key="index" :src="img" alt="">
        </div>
        <div class="emoji" v-show="emojiShow">
          <span @click="getEmoji(index)" v-for="(emoji,index) in emojiList" :key="index">{{emoji}}</span>
        </div>
        <div class="modalfooter">
          <span @click.stop="emojiShow=!emojiShow" class="iconfont icon-biaoqing"></span>
          <label for="file" class="iconfont icon-tupian"></label><input @change="selectImg" style="display:none" type="file" id="file">
          <span class="iconfont icon-aite"></span>
          <span class="iconfont icon-number-sign"></span>
          <span id="sub" @click="subDynamic" class="iconfont icon-fabu">发表</span>
        </div>
      </div>
    </div>
    <div class="subBtn">
      <button @click="showModal=true"><span class="iconfont icon-chuangjian">新增动态</span></button>
    </div>
    <div class="title">
      <p id="p1">Dynamic</p>
      <p id="p2"></p>
      <p id="p3">动态</p>
    </div>
    <div class="content">
      <div class="dynamic" v-for="(item,index) in allDynamic" :key="index">
        <div class="head">
          <div class="pic">
            <img :src="item.userPic" alt="">
          </div>
          <div class="info">
            <p class="name">{{item.nickname}}</p>
            <p class="time">{{item.time}}</p>
          </div>
        </div>
        <div class="con">
          <p class="text">{{item.content}}</p>
          <div class="photo">
            <img v-for="(img,index) in item.img" :key="index" :src="img" alt="">
          </div>
        </div>
        <div class="footer">
          <p class="footer1">
            <span>浏览{{item.viewNum}}次</span>
            <span @click="letGood(item.id,item.nickname,$event)" class="iconfont icon-dianzan"></span>
            <span class="iconfont icon-pinglun"></span>
            <span class="iconfont icon-fenxiang"></span>
          </p>
          <p class="footergood" ><span class="iconfont icon-dianzan"></span><span v-show="item.goodPerson.length">{{item.goodPerson.join('、')}}等{{item.goodPerson.length}}人觉得很赞</span> </p>
          <div class="comments">
            <div class="onecomm" v-for="(comment,index) in item.comments" :key="index">
              <div class="commpic">
                <img :src="item.userPic" alt="">
              </div>
              <div class="commtext">
                <p class="name">{{item.nickname}}<span>：{{comment.text}}</span></p>
                <p class="time"> {{comment.time}} </p>
              </div>
            </div>
          </div>
          <div class="footer2">
            <input @keyup.enter="subComments(item.id,$event)" placeholder="发布一条友善的评论~" type="text" name="" id="">
            <span class="iconfont icon-zhaoxiang"></span>
          </div>
        </div>
      </div>
      <div class="dynamic">
        <div class="head">
          <div class="pic">
            <img src="./images/download.png" alt="">
          </div>
          <div class="info">
            <p class="name">生活如床上的衣服</p>
            <p class="time">07:16</p>
          </div>
        </div>
        <div class="con">
          <pre class="text">感谢omicron让我可以享受五一劳动节早八的美好时光而且校门口的包子铺居然都放假了，真是十八万点暴击
Hello
Mayday!
可以光明正大cue一下五月天了，哈哈</pre>
          <div class="photo">
            <img src="./images/baozi.jpg" alt="">
          </div>
        </div>
        <div class="footer">
          <p class="footer1">
            <span>浏览8次</span>
            <span class="iconfont icon-dianzan"></span>
            <span class="iconfont icon-pinglun"></span>
            <span class="iconfont icon-fenxiang"></span>
          </p>
          <p class="footergood"><span class="iconfont icon-dianzan"></span> 工商gj2001 蓝国祯、工商gj1901柴欣华、Smiling、周郎、夺命喵九、M逗、147.、共8人觉得很赞</p>
          <div class="comments">
            <div class="onecomm">
              <div class="commpic">
                <img src="./images/download.png" alt="">
              </div>
              <div class="commtext">
                <p class="name">生活如床上的衣服<span>：会考虑对方角度来说巅峰时刻考虑对方角度来说巅峰时刻考虑对方角度来说巅峰时刻提防乐山大佛大量水分减少到了发生了地方</span></p>
                <p class="time">07:16</p>
              </div>
            </div>
            <div class="onecomm">
              <div class="commpic">
                <img src="./images/download.png" alt="">
              </div>
              <div class="commtext">
                <p class="name">生活如床上的衣服<span>：会考虑对方角度来说巅峰时刻考虑对方角度来说巅峰量水分减少到了发生了地方</span></p>
                <p class="time">07:16</p>
              </div>
            </div>
          </div>
          <div class="footer2">
            <input placeholder="发布一条友善的评论~" type="text" name="" id="">
            <span class="iconfont icon-zhaoxiang"></span>
          </div>
        </div>
      </div>
      <div class="dynamic">
        <div class="head">
          <div class="pic">
            <img src="./images/download.png" alt="">
          </div>
          <div class="info">
            <p class="name">时间与她都是刺客</p>
            <p class="time">08:46</p>
          </div>
        </div>
        <div class="con">
          <p class="text">去年十一假期一家人去青岛玩了5天，去之前本想自由行，提前1个月开始做准备，结果发现不单单是青岛市内的一些景点外，美的其实是青岛周边比如刘公岛、八仙渡、鸡鸣岛、八大关等等，这些是一定要去的，因为景点比较分散，所以自己定酒店、查路线、买门票太过于繁琐了，而且还不…</p>
          <div class="photo">
            <img src="./images/dynamic1.webp" alt="">
            <img src="./images/dynamic2.webp" alt="">
            <img src="./images/dynamic3.webp" alt="">
          </div>
        </div>
        <div class="footer">
          <p class="footer1">
            <span>浏览8次</span>
            <span class="iconfont icon-dianzan"></span>
            <span class="iconfont icon-pinglun"></span>
            <span class="iconfont icon-fenxiang"></span>
          </p>
          <p class="footergood"><span class="iconfont icon-dianzan"></span> 工商gj2001 蓝国祯、工商gj1901柴欣华、Smiling、周郎、夺命喵九、M逗、147.、共8人觉得很赞</p>
          <div class="comments">
            <div class="onecomm">
              <div class="commpic">
                <img src="./images/download.png" alt="">
              </div>
              <div class="commtext">
                <p class="name">生活如床上的衣服<span>：会考虑对方角度来说巅峰时刻考虑对方角度来说巅峰时刻考虑对方角度来说巅峰时刻提防乐山大佛大量水分减少到了发生了地方</span></p>
                <p class="time">07:16</p>
              </div>
            </div>
            <div class="onecomm">
              <div class="commpic">
                <img src="./images/download.png" alt="">
              </div>
              <div class="commtext">
                <p class="name">生活如床上的衣服<span>：会考虑对方角度来说巅峰时刻考虑对方角度来说巅峰量水分减少到了发生了地方</span></p>
                <p class="time">07:16</p>
              </div>
            </div>
          </div>
          <div class="footer2">
            <input placeholder="发布一条友善的评论~" type="text" name="" id="">
            <span class="iconfont icon-zhaoxiang"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {compressAccurately} from 'image-conversion';
export default {
  name:'Dynamic',
  data() {
    let goodOrNot=false
    return {
      showModal:false,
      emojiShow:false,
      emojiList:['😀','😉','😁','😆','😅','😂','🤣','😊','🙂','😄','🙃','😇','😃','😚','🥰','😍','🤔','😘','🤭','🤫','😐','😶','🤨','😬','😏','😒','🙄','🤐','🤥','😪','😌','🤤'],
      oneDynamic:{
        id:'',
        content:'',
        img:[],
        time:'',
        userPic:'',
        nickname:'',
        viewNum:8,
        goodPerson:[],
        comments:[]
      },
      allDynamic:[]
    }
  },
  methods: {
    selectImg(e){
      let file=e.target.files[0]
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) return alert('请选则图片类型文件')
      compressAccurately(file,400).then((res)=>{
        let src=window.URL.createObjectURL(res)
        if(this.oneDynamic.img.length<4) this.oneDynamic.img.push(src)
        else alert('最多选择四张图片')
      })
    },
    getEmoji(index){
      this.oneDynamic.content+=this.emojiList[index]
    },
    hiOrShow(){
      this.emojiShow=false
    },
    subDynamic(){
      if(!this.oneDynamic.content) return alert('内容不能为空')
      this.oneDynamic.id=this.allDynamic.length
      let time=new Date()
      this.oneDynamic.time=time.getHours()+':'+(time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes())
      let dynamic=JSON.parse(JSON.stringify(this.oneDynamic))
      this.allDynamic.unshift(dynamic)
      this.showModal=false
      this.oneDynamic.img=[]
      this.oneDynamic.content=''
    },
    letGood(id,nickname,e){
      if(!this.goodOrNot){
        this.allDynamic.find((item)=>{
          if(item.id==id){
            item.goodPerson.unshift(nickname)
            e.target.style.color='rgb(14, 136, 181)'
            this.goodOrNot=true
            return true
          }
        })
      }else{
        this.goodOrNot=false
        this.allDynamic.find((item)=>{
          if(item.id==id){
            let newArr= item.goodPerson.filter((person)=>{
              return person!==nickname
            })
            item.goodPerson=newArr
            e.target.style.color='rgb(78, 78, 78)'
            return true
          }
        })
      }
    },
    subComments(id,e){
      this.allDynamic.find((item)=>{
        if(!e.target.value.trim()) return 
        if(item.id==id){
          let comment={}
          comment.text=e.target.value
          let time=new Date()
          comment.time=time.getHours()+':'+(time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes())
          item.comments.unshift(comment)
        }
      })
      e.target.value=''
    }
  },
  watch:{
    emojiShow(nval){
      if(nval){
        document.body.addEventListener('click',this.hiOrShow)
      }else{
        document.body.removeEventListener('click',this.hiOrShow)
      }
    },
  },
  mounted() {
    this.$bus.$on('dynamicInfo',({user_pic,nickname})=>{
      this.oneDynamic.userPic=user_pic
      this.oneDynamic.nickname=nickname
    })
  },
}
</script>

<style scoped>
.modal{
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.301);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
.main{
  width: 60%;
  height: 60%;
  position: absolute;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  padding: 20px;
}
.main .emoji{
  width: 200px;
  background-color: rgb(254, 254, 254);
  border: 1px solid rgba(0, 0, 0, 0.475);
  position: absolute;
  bottom: 50px;
  font-size: 20px;
  user-select: none;
}
.main .emoji span:hover{
  border: .5px solid black;
  cursor: pointer;
}
.main #close{
  font-size: 16px;
  text-align: right;
  padding-right: 20px;
}
.main #close span:hover{
  cursor: pointer;
  color: rgb(24, 178, 221);
}
.main textarea{
  width: 95%;
  height: 30%;
  padding: 8px 13px;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 2px;
}
.main .imgpic{
  height: 30%;
  margin-top: 30px;
}
.main .imgpic img:first-child{
  margin-left: 0;
}
.main .imgpic img{
  width: 24%;
  margin-left: 8px;
}
.modalfooter{
  margin-top: 75px;
  border-top: 1px solid rgb(101, 99, 99);
  padding-top: 10px;
  user-select: none;
}
.modalfooter label{
  font-size: 18px;
  margin-left: 10px;
  cursor:pointer;
  font-weight: bold;
}
.modalfooter span{
  font-size: 18px;
  margin-left: 10px;
  cursor:pointer;
  font-weight: bold;
}
.modalfooter span:hover{
  color: rgb(14, 136, 181);

}
.modalfooter span:last-child{
  border-radius: 4px;
  font-weight: normal;
  margin-left: 78%;
  background-color: rgb(10, 223, 188);
  width: 80px;
  height: 35px;
  display: inline-block;
  text-align: center;
  line-height: 35px;
  user-select: none;
  vertical-align: top;
}
.modalfooter span:last-child:active{
  background-color: rgb(45, 201, 175);
}
.subBtn{
  text-align: right;
}
.subBtn button{
  width: 140px;
  height: 50px;
  font-size: 16px;
  border-radius: 8px;
  border:none;
  color: rgb(252, 252, 252);
  background-color: rgb(21, 209, 156);
  cursor: pointer;
}
.subBtn button:active{
  background-color: rgb(77, 229, 186);
}
.subBtn button span{
  cursor: pointer;
}
#content{
  display: inline-block;
  min-width: 900px;
  margin-left: 25%;
  margin-top: 100px;
}
.title{
  width: 300px;
  text-align: center;
  margin:auto;
}
.title #p1{
  font-size: 26px;
  color: rgb(68 68 68);
  margin-bottom: 15px;
}
.title #p3{
  font-size: 20px;
  color: rgb(68 68 68);
}
.title #p2{
  width: 40px;
  height: 3px;
  background-color: rgb(255 192 1);
  margin-left: 130px;
  margin-bottom: 15px;
}
.content{
  width: 800px;
  margin:50px auto;
}
.dynamic{
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.241);
  border-radius: 6px;
  padding: 25px;
  width: 800px;
  margin-bottom: 30px;
  background-color: rgb(253, 246, 237);
}
.head>div{
  display: inline-block;
}
.pic img{
  width: 60px;
  border-radius: 50%;
  border: 1.5px solid rgb(79, 79, 79);
}
.info{
  transform: translateY(-10px);
  margin-left: 20px;
}
.name{
  font-size: 14px;
  margin-bottom: 10px;
}
.time{
  font-size: 13px;
}
.footer1{
  font-size: 13px;
  margin-bottom: 5px;
  user-select: none;
}
.footer1 span:not(:first-child){
  color: rgb(78, 78, 78);
  display: inline-block;
  transform: translateX(570px);
  margin-right: 50px;
  font-size: 20px;
  cursor: pointer;
}
.footer2 input{
  width: 750px;
  height: 35px;
  padding-left: 6px;
  padding-right: 15px;
}
.footer2 span{
  font-size: 24px;
  display: inline-block;
  transform: translate(-30px,3px);
  cursor: pointer;
}
.con{
  margin-top: 12px;
  width: 770px;
  margin-bottom: 12px;
}
.text{
  font-size: 16px;
  margin-bottom: 15px;
}
.photo img{
  width: 300px;
  margin-right: 10px;
}
.footergood{
  padding-top: 10px;
  border-top: 1px solid rgb(162, 157, 157);
}
.footergood span:first-child{
  color: rgb(40, 135, 230);
}
.comments{
  margin-top: 20px;
  margin-bottom: 20px;
}
.comments .onecomm{
  margin-top: 15px;
}
.comments .onecomm>div{
  display: inline-block;
  vertical-align: top;
}
.onecomm .commpic{
  width: 50px;
}
.onecomm .commpic img{
  width: 50px;
  border-radius: 50%;
}
.onecomm .commtext{
  width: 700px;
  margin-left: 15px;
}
.commtext .name{
  font-size: 13px;
  color: rgb(30, 187, 222);
}
.commtext .name span{
  color: #000;
}
.commtext .time{
  font-size: 12px;
}
</style>
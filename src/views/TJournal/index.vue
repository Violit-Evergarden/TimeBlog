<template>
  <div class="jourcontent">
    <Firstimg>
      <img src="@/assets/journalImg.jpg" alt="">
    </Firstimg>
    <div class="btn">
      <button @click=showModal><span class="iconfont icon-chuangjian"></span>创建日志</button>
    </div>
    <JournalModal @getJournal="getJournal" ref="journalModal"></JournalModal>
    <div class="title">
      <p id="p1">JOURNAL</p> 
      <p id="p2"></p>
      <p id="p3">日志</p>
    </div>
      <ArticleDynamic
        v-for="(item,index) in journalDataDynamic" 
        :key="index"
        :year=item.year
        :day=item.day
        :title=item.title
        :content=item.content
        :images=item.images
        :show=item.show
      ></ArticleDynamic>
      <ArticleStatic
        v-for="(item,index) in journalDataStatic" 
        :key="index"
        :year=item.year
        :day=item.day
        :title=item.title
        :content=item.content
        :images=item.images
        :show=item.show
      ></ArticleStatic>
  </div>
</template>

<script>
import ArticleDynamic from './ArticleDynamic'
import ArticleStatic from './ArticleStatic'
import JournalModal from './JournalModal'
export default {
  name:'TJournal',
  components:{
    ArticleDynamic,
    JournalModal,
    ArticleStatic,
},
  data(){
    return {
      journalDataStatic:[
        {
          year:'2022',
          day:'03-24',
          title:'深深的爱，淡淡的香',
          content:'一朵花，皎洁，素雅，渐渐地演变成了一幅画，印在了记忆的长河里。那花，叶细长，翠翠的，花开时伸出一只长长的颈，花儿在颈上绽开，花瓣不多，色浅浅的，似白玉般温润、玲珑，淡淡的香气从花蕊中溢出，香薰满屋，沁人肺腑，令人心广神怡，使人宁静安详。',
          images:[1,2,3],
          show:false
        },
        {
          year:'2022',
          day:'04-10',
          title:'遇见你，不知是美好还是错误',
          content:'我一直用心向着阳可是我始终摆脱不了那后阴影，我从来没有承认过我的感情路有多么坎坷，因为离人要走所以所有的一切都那么惨白无力。无数次我走在傍晚路灯下看着自己的影子从短变长从长变短着这样循环，就好像我的生活开始变得不在以前那么稳定了。',
          images:[4,5,6],
          show:false
        },
        {
          year:'2022',
          day:'05-25',
          title:'致，全新的一天，致，正在奋斗的你',
          content:'奋斗就是：每一天都很难，可一年一年却越来越容易不奋斗就是：每一天都很容易，可一年一年却越来越难！人生就是这样，眉毛上的汗水与眉毛下的泪水，总要选择一样。致，全新的一天，致，正在奋斗的你。',
          images:[7,8,9],
          show:false
        },
      ],
      journalDataDynamic:[]
    }
  },
  methods:{
    scrollHanlder(){
      let scrollTop=document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop>500) this.journalDataStatic[0].show=true
      if(scrollTop>900) this.journalDataStatic[1].show=true
      if(scrollTop>1300) {
        this.journalDataStatic[2].show=true
        window.removeEventListener('scroll',this.scrollHanlder)
      }
    },
    showModal(){
      this.$refs.journalModal.show=true
    },
    getJournal(data){
      this.journalDataDynamic.unshift(data)
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollHanlder,false)
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.scrollHanlder)
  }
}
</script>

<style scoped>
.btn{
  text-align: right;
  padding: 15px 55px;
}
.btn button{
  width: 140px;
  height: 50px;
  font-size: 16px;
  border-radius: 8px;
  border:none;
  color: rgb(252, 252, 252);
  background-color: rgb(251, 239, 81);
  cursor: pointer;
}
.btn button:active{
  background-color: rgb(240, 228, 56);
}
.jourcontent{
  min-width: 1200px;
  width: 100%;
  min-height: 1700px;
  overflow: hidden;
}
.title{
  text-align: center;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 70px;
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
  margin: auto;
  margin-bottom: 15px;
}
</style>
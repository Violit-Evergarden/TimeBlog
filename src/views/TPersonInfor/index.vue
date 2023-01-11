<template>
  <div class="tperson">
    <Firstimg>
      <img src="@/assets/personImg.jpg" alt="">
    </Firstimg>
    <Personfile :personShow="showBool.showInfo"></Personfile>
    <MoreInfo :show="showBool.showMore"></MoreInfo>
    <Message :show="showBool.showMesg"></Message>
  </div>
</template>

<script>
import Personfile from '@/views/Home/Personfile'
import MoreInfo from './MoreInfo'
import Message from './message'
export default {
  name:'TPersonInfor',
  data(){
    return {
      showBool:{
        showInfo:false,
        showMore:false,
        showMesg:false
      }
    }
  },
  components:{
    Personfile,
    MoreInfo,
    Message
  },
  methods:{
    scrollHanlder(){
      let scrollTop=document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop>500) this.showBool.showInfo=true
      if(scrollTop>900) this.showBool.showMore=true
      if(scrollTop>1200){
        this.showBool.showMesg=true
        window.removeEventListener('scroll',this.scrollHanlder)
      }
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
.tperson{
  min-height: 1700px;
  overflow: hidden;
}
</style>
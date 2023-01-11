<template>
  <div class="conBody">
    <Firstimg>
      <img src="@/assets/indexIMg.jpg" alt="">
    </Firstimg>
    <Journal :titleShow="showBool.tilteShow" :imgConShow="showBool.imgConShow" :textShow="showBool.textShow"></Journal>
    <Album :albumShow="showBool.albumShow"></Album>
    <Personfile :personShow="showBool.personShow"></Personfile>
  </div>
</template>

<script>
import Journal from '@/views/Home/Journal'
import Album from '@/views/Home/Album';
import Personfile from '@/views/Home/Personfile'
export default {
  name:'Home',
  data(){
    return {
      scrollTop:'',
      showBool:{
        tilteShow:false,
        imgConShow:false,
        textShow:false,
        albumShow:false,
        personShow:false
      }
    }
  },
  components:{
    Journal,
    Album,
    Personfile
  },
  methods: {
    handleScroll(){
      this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop
      if(this.scrollTop>350){
        this.showBool.tilteShow=true
        this.showBool.imgConShow=true
      }
      if(this.scrollTop>700)this.showBool.textShow=true
      if(this.scrollTop>1200) this.showBool.albumShow=true
      if(this.scrollTop>1900){
        this.showBool.personShow=true
        window.removeEventListener('scroll',this.handleScroll,false)
      }
    },
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll,false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.handleScroll)
  },
}
</script>

<style>
.conBody{
  width: 100%;
  min-width: 1200px;
  height: 2700px;
}
</style>
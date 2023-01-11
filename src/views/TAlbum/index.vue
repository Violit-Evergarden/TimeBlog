<template>
  <div class="alcon">
    <Firstimg>
      <img src="@/assets/albumImg.jpg" alt="" />
    </Firstimg>
    <Album :albumShow="showBool.showA"></Album>
    <Carousel :show="showBool.showC"></Carousel>
    <Gallery :show="showBool.showG"></Gallery>
  </div>
</template>

<script>
import Album from '@/views/Home/Album'
import Carousel from './Carousel'
import Gallery from './Gallery'
export default {
  name: 'TAlbum',
  components: {
    Album,
    Carousel,
    Gallery
  },
  data() {
    return {
      showBool: {
        showA: false,
        showC: false,
        showG: false
      }
    }
  },
  methods: {
    scrollHanlder() {
      let scrollTop =document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 400) this.showBool.showA = true
      if (scrollTop > 1100) this.showBool.showC = true
      if (scrollTop > 1600) {
        this.showBool.showG = true
        window.removeEventListener('scroll', this.scrollHanlder)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll',this.scrollHanlder)
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.scrollHanlder)
  }
}
</script>

<style scoped>
.alcon {
  width: 100%;
  min-width: 1200px;
  min-height: 2000px;
}
</style>

<template>
  <div id="container">
    <Header v-if="$route.meta.show"></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name:'',
  components:{
    Header,
    Footer,
  },
}
</script>

<style>
#container{
  background-image: url('./assets/bgimg.jpg');
  background-repeat: repeat;
  width: 100%;
  min-width: 1200px;
}
a{
  text-decoration: none !important;
}
</style>
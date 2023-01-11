<template>
  <div class="firstImg">
    <!-- <img src="./images/indexIMg.jpg" alt=""> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Firstimg'
}
</script>

<style scoped>
.firstImg{
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  background-color: antiquewhite;
}
img{
  width: 130%;
}
</style>
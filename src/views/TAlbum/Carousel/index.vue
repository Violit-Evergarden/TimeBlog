<template>
  <transition
    name="animate__animated animate__bounce"
    enter-active-class="animate__bounceIn"
  >
    <div id="content" v-show="show">
      <div class="container" ref="container" @mouseenter="stopCarousel" @mouseleave="goOnCarousel">
        <div>
          <img src="./images/c1.webp" alt="" />
          <p>云南-香格里拉</p>
        </div>
        <div>
          <img src="./images/c2.webp" alt="" />
          <p>四川-乐山大佛</p>
        </div>
        <div>
          <img src="./images/c3.webp" alt="" />
          <p>亚丁-稻城</p>
        </div>
        <div>
          <img src="./images/c4.webp" alt="" />
          <p>桂林-阳朔</p>
        </div>
        <div>
          <img src="./images/c1.webp" alt="" />
          <p>云南-香格里拉</p>
        </div>
        <div>
          <img src="./images/c2.webp" alt="" />
          <p>四川-乐山大佛</p>
        </div>
        <div>
          <img src="./images/c3.webp" alt="" />
          <p>亚丁-稻城</p>
        </div>
        <div>
          <img src="./images/c4.webp" alt="" />
          <p>桂林-阳朔</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Carousel',
  components: {},
  data() {
    return {
      timer: '',
      step:'',
      length:''
    }
  },
  props: ['show'],
  methods: {
    startCarousel() {
      this.step = 0.3
      this.length = 0
      this.timer = setInterval(() => {
        this.length += this.step
        this.$refs.container.style.marginLeft = -this.length + 'px'
        if (this.length > 1412) {
          this.length = 92
        }
      }, 5)
    },
    stopCarousel(){
      clearInterval(this.timer)
    },
    goOnCarousel(){
      this.timer = setInterval(() => {
        this.length += this.step
        this.$refs.container.style.marginLeft = -this.length + 'px'
        if (this.length > 1412) {
          this.length = 92
        }
      }, 5)
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
#content {
  margin: auto;
  width: 1200px;
  overflow: hidden;
  height: 300px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.377);
  margin-bottom: 100px;
  margin-top: 90px;
}
.container {
  width: 3000px;
  margin-top: 50px;
}
p {
  background-color: white;
  height: 30px;
  text-align: center;
  font-size: 14px;
}
.container div {
  display: inline-block;
  margin-left: 30px;
}
.container div:first-child {
  margin-left: 0;
}
</style>

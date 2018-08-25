<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <span class="iconfont img-back">&#xe605;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont city-icon">&#xe605;</span>
      </router-link>
      西岛
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      const scroll = document.documentElement.scrollTop
      if (scroll > 50) {
        if (scroll < 220) {
          const Opacity = scroll / 220 - 0.17
          this.opacityStyle.opacity = Opacity
        }
        // this.opacityStyle.opacity = 1
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import "~stylus/variblee.styl"
  .header-abs
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height:.8rem
    line-height .8rem
    border-radius .4rem
    background rgba(0,0,0,.8)
    text-align center
    .img-back
      color #fff
  .header-fixed
    position:fixed
    z-index 2
    top 0
    left 0
    right 0
    line-height .86rem
    background $bgColor
    text-align center
    color #fff
    .city-icon
      position absolute
      top:0;
      left .15rem
      color #fff
</style>

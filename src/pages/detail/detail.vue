<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="detail-content">
      <detail-center></detail-center>
    </div>
  </div>
</template>
<script>
import DetailBanner from './component/banner'
import DetailHeader from './component/detail-header'
import DetailCenter from './component/center'
import axios from 'axios'

export default {
  name: 'detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailCenter
  },
  mounted () {
    this.getBannerInfo()
  },
  methods: {
    getBannerInfo () {
      axios.get('api/detail.json').then(this.getBannerData)
    },
    getBannerData (xhr) {
      const BannerData = xhr.data
      if (BannerData.ret && BannerData.data) {
        const data = BannerData.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail-content
    height 30rem
</style>

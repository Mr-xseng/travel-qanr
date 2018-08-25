<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"></detail-banner>
  </div>
</template>
<script>
import DetailBanner from './component/banner'
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
    DetailBanner
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
<style lang="stylus" scoped></style>

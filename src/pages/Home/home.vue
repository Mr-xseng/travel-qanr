<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import axios from 'axios'
import HomeIcons from './components/icons'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconsList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json').then(this.getinfoSucc)
    },
    getinfoSucc (xhr) {
      const currntData = xhr.data
      if (currntData.ret && currntData.data) {
        const data = currntData.data
        // console.log(data)
        this.swiperList = data.swiperList
        // console.log(this.swiperList)
        this.iconsList = data.iconsList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import axios from 'axios'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json?city=' + this.city).then(this.getinfoSucc)
    },
    getinfoSucc (xhr) {
      const currntData = xhr.data
      if (currntData.ret && currntData.data) {
        const data = currntData.data
        // console.log(data)
        this.swiperList = data.swiperList
        // console.log(this.swiperList)
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  }
}
</script>

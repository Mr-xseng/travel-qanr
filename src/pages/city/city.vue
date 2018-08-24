<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hot" :letter="letter" :cities="cities"></city-list>
  </div>
</template>
<script>
import CityHeader from './components/city-header'
import CitySearch from './components/city-search'
import CityList from './components/city-lisy'
import axios from 'axios'

export default {
  data () {
    return {
      cities: {},
      hot: [],
      letter: ''
    }
  },
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json').then(this.getInfoSucc)
    },
    getInfoSucc (xhr) {
      const currentData = xhr.data
      if (currentData.ret && currentData.data) {
        const data = currentData.data
        this.cities = data.cities
        this.hot = data.hotCities
      }
    }
  }
}
</script>
<style lang="stylus" scoped></style>

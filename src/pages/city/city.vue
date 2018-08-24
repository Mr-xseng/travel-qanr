<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hot" :letter="letter" :cities="cities"></city-list>
    <city-alphabet :cities="cities" @change="handleChangeClick"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/city-header'
import CitySearch from './components/city-search'
import CityList from './components/city-lisy'
import CityAlphabet from './components/city-alphabet'
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
    CityList,
    CityAlphabet
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
    },
    handleChangeClick (letter) {
      this.letter = letter
    }
  }
}
</script>
<style lang="stylus" scoped></style>

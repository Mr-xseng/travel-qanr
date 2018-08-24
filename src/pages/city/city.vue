<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
  </div>
</template>
<script>
import CityHeader from './components/city-header'
import CitySearch from './components/city-search'
import axios from 'axios'

export default {
  data () {
    return {
      cities: {}
    }
  },
  name: 'city',
  components: {
    CityHeader,
    CitySearch
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
      }
    }
  }
}
</script>
<style lang="stylus" scoped></style>

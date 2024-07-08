import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weatherStore', {
  state:() => {
    return {
      citiesList : [],
    }
  },
  actions: {
    storeCityWeather (city) {
      this.citiesList.push(city)
      console.log(this.citiesList);
    },
    removeCitiesWeather (id) {
      this.citiesList = this.citiesList.filter(city => city.id != id)
    },
  },
  persist: true, // activation du plugin de persistance
})

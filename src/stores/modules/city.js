import { GetCityAll } from "@/services/modules/city";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    cityAll: {}
  }),
  actions: {
    async fetchCityAllAction() {
      const res =  await GetCityAll()
      this.cityAll = res.data
    }
  }
})

export default useCityStore
import axios from 'axios'
import { defineStore } from 'pinia'

export const useRequestStore: any = defineStore('requestStore', {
  state: function () {
    return {
      javascriptData: null,
      pythonData: null,
      javascriptRequestLaunched: false,
      pythonRequestLaunched: false
    }
  },
  getters: {
    async getJavascriptData() {
      await axios.get(process.env.GET_ONE_PRODUCT_URL).then(async (response: any) => {
        this.javascriptData = await response.data
      })
      this.javascriptRequestLaunched = true
    },
    async getPythonData() {
      await axios.get(process.env.GET_ONE_PRODUCT_URL).then(async (response: any) => {
        this.pythonData = await response.data
      })
      this.pythonRequestLaunched = true
    }
  }
})

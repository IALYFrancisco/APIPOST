import axios from 'axios'
import { defineStore } from 'pinia'

export const useRequestStore: Object = defineStore('requestStore', {
  state: function () {
    return {
      javascriptData: null,
      pythonData: null
    }
  },
  getters: {
    async getJavascriptData() {
      await axios.get('http://localhost:3000/product/9').then(async (response: any) => {
        this.javascriptData = await response.data
      })
    },
    async getPythonData() {
      await axios.get('http://localhost:3000/product/9').then(async (response: any) => {
        this.pythonData = await response.data
      })
    }
  }
})

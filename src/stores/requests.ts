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
  // getters: {
  //   async getJavascriptData() {
  //     await axios.get('https://apipostserver.onrender.com/product/9').then(async (response: any) => {
  //       this.javascriptData = await response.data
  //     })
  //     this.javascriptRequestLaunched = true
  //   },
  //   async getPythonData() {
  //     await axios.get('https://apipostserver.onrender.com/product/9').then(async (response: any) => {
  //       this.pythonData = await response.data
  //     })
  //     this.pythonRequestLaunched = true
  //   }
  // }
  getters: {
    async getJavascriptData() {
      await axios.get('http://127.0.0.1:3000/product/9').then(async (response: any) => {
        this.javascriptData = await response.data
      })
      this.javascriptRequestLaunched = true
    },
    async getPythonData() {
      await axios.get('http://127.0.0.1:3000/product/9').then(async (response: any) => {
        this.pythonData = await response.data
      })
      this.pythonRequestLaunched = true
    }
  }
})

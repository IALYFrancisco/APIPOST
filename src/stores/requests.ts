import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestStore: Object = defineStore('requestStore', {
  getters: {
    getOneRequest(): Object {
      // axios.get('https://apipostserver.onrender.com/product/9')
      //     .then((response) => { return response.data } )
      return axios.get('http://localhost:3000/product/9').then((response) => {
        // console.log(response)
        return response.data
      })
    }
  },
  actions: {}
})

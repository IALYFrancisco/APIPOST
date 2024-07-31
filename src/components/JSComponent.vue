<template>
  <pre>
     <span style="color:rgb(0, 255, 255);">axios</span>.<span style="color: yellow;">get</span>('https://apipostserver.onrender.com/product/9')
        .<span style="color: yellow;">then</span>(<span style="color:rgb(0, 255, 255);;">response</span> => <span style="color:rgb(0, 255, 255);">console</span>.<span style="color: yellow;">log</span>(<span style="color:rgb(0, 255, 255);">response</span>))
  </pre>
  <button @click="launchScript()">lancer ce script</button>
</template>

<script lang="ts">
import { useRequestStore } from '@/stores/requests'

export default {
  name: 'JSComponent',
  data: function () {
    return {
      scriptsLaunched: false,
      requestStore: useRequestStore(),
    }
  },
  methods: {
    launchScript() {
      this.scriptsLaunched = true
      // console.log(this.requestStore.data)
      console.log(this.requestStore.getOneRequest)
    }
  }
}
</script>

<style scoped>
pre {
  height: 100%;
  padding: 40px 20px 0px 0px;
  margin-left: -13px;
  line-height: 30px;
  font-family: Consolas, 'Courier New', monospace;
  color: rgb(255, 129, 39);
  margin-bottom: -20px;
}

button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: white;
  border-radius: 3px;
  box-shadow:
    1px 1px 5px #8c8c8c4a,
    -1px -1px 5px #8c8c8c4a;
  margin-bottom: 100px;
  outline: none;
}

button:active {
  transform: scale(0.97);
}
</style>

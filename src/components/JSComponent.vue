<!-- eslint-disable vue/no-parsing-error -->
<template>
  <p>{{ response }}</p>
  <pre class="request">
     <span style="color:rgb(0, 255, 255);">axios</span>.<span style="color: yellow;">get</span>('https://apipostserver.onrender.com/product/9')
        .<span style="color: yellow;">then</span>(<span style="color:rgb(0, 255, 255);;">response</span> => <span style="color:rgb(0, 255, 255);">console</span>.<span style="color: yellow;">log</span>(<span style="color:rgb(0, 255, 255);">response</span>))
  </pre>
  <button @click="launchScript()">lancer ce script</button>
  <div class="resultats">
    <span v-if="requestStore.javascriptData">
      <p class="result">
        <span style="display: block; color: white;">[</span>
            <span style="margin-left: 15px;">{</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"_id":</span> {{ requestStore.javascriptData[0]._id }},</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"name":</span> {{ requestStore.javascriptData[0].name }},</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"price":</span> {{ requestStore.javascriptData[0].price }},</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"description":</span style="display=:inline;"> {{ requestStore.javascriptData[0].description }}</span>
            <span style="margin-left: 15px; display: block;">}</span>
        <span style="display: block; color: white;">]</span>
      </p>
    </span>
    <span v-else style="font-family: 'Courier New', Courier, monospace"> [] </span>
  </div>
</template>

<script lang="ts">
import { useRequestStore } from '@/stores/requests'

export default {
  name: 'JSComponent',
  data: function () {
    return {
      requestStore: useRequestStore()
    }
  },
  methods: {
    async launchScript() {
      await this.requestStore.getJavascriptData
    }
  }
}
</script>

<style scoped>
span.key {
  color:rgb(0, 255, 255)
}

pre.request {
  height: 100%;
  padding: 40px 20px 0px 0px;
  margin-left: -13px;
  line-height: 30px;
  font-family: Consolas, 'Courier New', monospace;
  color: rgb(255, 129, 39);
  margin-bottom: -20px;
}

p.result {
  color: rgb(255, 129, 39);
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
  margin-bottom: 20px;
  outline: none;
}

button:active {
  transform: scale(0.97);
}

div.container div.resultats {
  width: 100%;
  height: max-content;
  border-radius: 3px;
  background-color: #5d2417;
  padding: 12px 30px 12px 30px;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  line-height: 25px;
}
</style>

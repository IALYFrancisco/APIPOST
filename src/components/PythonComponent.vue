<!-- eslint-disable vue/no-parsing-error -->
<template>
  <pre class="request">
    <span style="color:white;">response = requests.get(</span><span style="color: rgb(1, 104, 1);">"https://apipostserver.onrender.com/product/9"</span><span style="color:white;">)</span>
    <span style="color:rebeccapurple;">print</span><span style="color:white">(response)</span>
  </pre>
  <div class="congratulation">
    <button @click="launchScript()">lancer ce script</button>
    <p v-if="requestStore.pythonRequestLaunched">Bravo 🎉, vous avez exécuté votre première requette sur le serveur de APIPOST ✅.</p>
    <span v-if="requestStore.pythonRequestLaunched">
      <button class="goToGuide" v-on:click="goToGuides">
        Guides
        <img src="../assets/images/arrow.png" alt="">
      </button>
    </span>
  </div><div class="resultats">
    <span v-if="requestStore.pythonData">
      <p class="result">
        <span style="display: block; color: white;">[</span>
            <span style="margin-left: 15px;">{</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"_id":</span> {{ requestStore.pythonData[0]._id }},</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"name":</span> {{ requestStore.pythonData[0].name }},</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"price":</span> {{ requestStore.pythonData[0].price }},</span>
              <span style="margin-left: 30px; display: block;"><span class="key">"description":</span style="display:inline;"> {{ requestStore.pythonData[0].description }}</span>
            <span style="margin-left: 15px; display: block;">}</span>
        <span style="display: block; color: white;">]</span>
      </p>
    </span>
    <span v-else style="font-family: 'Courier New', Courier, monospace"> [] </span>
  </div>
</template>

<style scoped>
span.key {
  color:rgb(0, 255, 255)
}

pre.request {
  background-color: #5d2417;
  height: 100%;
  padding: 35px 20px 0px 0px;
  line-height: 30px;
  font-family: Consolas, 'Courier New', monospace;
  color: rgb(255, 129, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

p.result {
  color: rgb(232, 209, 209);
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
  outline: none;
}

button:active {
  transform: scale(0.97);
}

div.resultats {
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

div.congratulation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

div.congratulation p {
  width: 40%;
  font-size: 11px;
}

button.goToGuide {
  width: max-content;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: royalblue;
  border: 2px royalblue solid;
  height: 35px;
}

button.goToGuide img {
  width: 20px;
  margin-left: 10px;
}


@media only screen and (max-width: 609px) {
  pre.request {
    font-size: 12px;
  }

  div.congratulation p {
    font-size: 8px;
  }
}

@media only screen and (max-width: 609px) {
  pre.request {
    overflow-x: scroll;
  }

  div.congratulation {
    padding-right: 0;
  }

  div.congratulation p {
    display: none;
  }
}
</style>

<script lang="ts">
import { useRequestStore } from '@/stores/requests'

export default {
  name: 'PythonComponent',
  data: function () {
    return {
      requestStore: useRequestStore(),
      scriptLaunched: false,
    }
  },
  methods: {
    async launchScript() {
      await this.requestStore.getPythonData
      this.scriptLaunched = true
    },
    goToGuides: function() {
      this.$router.push('/guides')
    }
  }
}
</script>

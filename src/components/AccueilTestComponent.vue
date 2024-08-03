<template>
  <div v-bind:class="{ container: true, active: requestStore.javascriptRequestLaunched }">
    <div class="langages">
      <ul>
        <li>
          <RouterLink to="/" title="javascript">javascript</RouterLink>
        </li>
        <li>
          <RouterLink to="/python">python</RouterLink>
        </li>
      </ul>
      <span @click="copyScript()">
        <p v-if="scriptCopied">copié</p>
        <img src="../assets/images/copy_code.png" alt="" title="copier ces codes" />
      </span>
    </div>
    <div class="scripts">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRequestStore } from '@/stores/requests'

export default {
  name: 'AccueilTestComponent',
  data: function () {
    return {
      scriptCopied: false,
      requestStore: useRequestStore()
    }
  },
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    copyScript: function () {
      var el: any = document.querySelector('.scripts pre')
      window.navigator.clipboard.writeText(el.innerText)
      this.scriptCopied = true
      window.setTimeout(() => {
        this.scriptCopied = false
      }, 1500)
    }
  },
  mounted: function () {}
}
</script>

<style scoped>
div.container {
  width: 550px;
  height: 185px;
  margin: 0px auto 280px auto;
  background-color: #5d2417;
  border-radius: 5px;
}

div.container.active {
  margin: 0px auto 480px auto;
}

div.container div.langages {
  width: inherit;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1px solid #893623;
}

div.container div.langages ul {
  width: 60%;
  height: inherit;
  display: flex;
}

div.container div.langages ul li {
  width: max-content;
  padding: 0 15px 0 15px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 0.1px solid #893623;
  border-right: 0.1px solid #893623;
  font-size: 12px;
}

div.container div.langages ul li:nth-child(1) {
  border-top-left-radius: 5px;
}

div.container div.scripts {
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

div.container div.langages span {
  width: max-content;
  padding: 0 10px 0 15px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.container div.langages span img {
  width: 20px;
  cursor: pointer;
}

div.container div.langages span img:active {
  transform: scale(0.9);
}

div.container div.langages span p {
  color: white;
  font-size: 11px;
  margin-right: 5px;
}
</style>

<template>
  <div class="container">
    <div class="left">
      <AproposBlogComponent />
    </div>
    <div class="right">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import AproposBlogComponent from '@/components/AproposBlogComponent.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'AproposView',
  components: {
    AproposBlogComponent,
    RouterView
  }
}
</script>

<style scoped>
div.container {
  width: 900px;
  height: max-content;
  margin: 20px auto;
  display: flex;
  /* background-color: red; */
}

@media only screen and (max-width: 1350px) {

  div.container {
    width: 80%;
    margin-left: 150px;
  }
  
}

@media only screen and (max-width: 830px) {

  div.container {
    width: 80%;
    margin-left: 150px;
  }
  
}

@media only screen and (max-width: 750px) {

div.container {
  width: 100%;
  margin: auto;
}

}
</style>

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
}
</style>

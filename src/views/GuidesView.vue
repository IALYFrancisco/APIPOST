<template>
    <div class="container">
      <div class="left">
        <GuidesBlogComponent />
      </div>
      <div class="right">
        <RouterView />
      </div>
    </div>
  </template>
  
<script lang="ts">
    import GuidesBlogComponent from '@/components/GuidesBlogComponent.vue';
    import { RouterView } from 'vue-router'
  
  export default {
    name: 'GuidesView',
    components: {
      GuidesBlogComponent,
      RouterView
    }
  }
</script>
  
<style scoped>
  div.container {
    width: 900px;
    height: max-content;
    margin: 20px auto 0 auto;
    display: flex;
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
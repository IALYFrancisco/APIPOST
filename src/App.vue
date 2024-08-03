<script lang="ts">
import NavBarComponent from './components/NavBarComponent.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'app',
  components: {
    NavBarComponent,
    RouterView
  }
}
</script>

<template>
  <NavBarComponent />
  <RouterView />
</template>

<style scoped></style>

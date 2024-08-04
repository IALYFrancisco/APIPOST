<script lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'app',
  components: {
    NavBarComponent,
    RouterView,
    FooterComponent
  }
}
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>

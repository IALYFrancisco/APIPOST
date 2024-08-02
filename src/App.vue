<script lang="ts">
import MyComponent from './components/MyComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'app',
  components: {
    NavBarComponent,
    RouterView,
    MyComponent
  }
}
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <MyComponent />
</template>

<style scoped></style>

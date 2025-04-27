<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import TopBar from './components/TopBar.vue';
import HomeView from './views/HomeView.vue';


</script>

<template>
  <TopBar />
  <NavBar />
  <div class="pt-20">
    <HomeView />
  </div>
</template>

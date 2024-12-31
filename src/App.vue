<script setup lang="ts">
import Card from './components/Card.vue';
import type { CardContent } from './types/CardTypes';
import { ref } from 'vue';
import CardsContent from './Data/CardsContent.json';


let isDarkMode = ref(true);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
toggleDarkMode();

const cardsContents = ref(CardsContent as CardContent[])  
</script>

<template>
  <div :class="{ 'dark': isDarkMode }">
    <button @click="toggleDarkMode" class="flex items-center p-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded">
      <svg v-if="!isDarkMode" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 0a10 10 0 100 20A10 10 0 0010 0z" />
      </svg>
      <svg v-else class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
      </svg>
      <span class="ml-2">{{ isDarkMode ? 'Modo Claro' : 'Modo Oscuro' }}</span>
    </button>
    <div class="flex gap-8 p-8 justify-center">
      <Card :cardContent="cardsContents[0]" />
      <Card :cardContent="cardsContents[1]" />
      <Card :cardContent="cardsContents[2]" />
    </div>
  </div>
</template>

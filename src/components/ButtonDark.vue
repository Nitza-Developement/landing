<script  setup lang="ts">
import { ref, type Ref } from 'vue';

let isDarkMode: Ref<boolean> = ref(true);
const toggleDarkMode = (mode?: string | null) => {
  isDarkMode.value = mode ? true : !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('mode', '');
  }
}
toggleDarkMode(localStorage.getItem('mode'));
</script>

<template>
    <button @click="toggleDarkMode()"
      class="flex items-center p-2 rounded bg-transparent">
      <svg v-if="!isDarkMode" class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clip-rule="evenodd" fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 
          1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 
          1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 
          1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z">
        </path>
      </svg>
      <svg v-else class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clip-rule="evenodd" fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 
          1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z">
        </path>
      </svg>
    </button>
</template>
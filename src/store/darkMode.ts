import { ref, type Ref } from 'vue';

export const isDarkMode: Ref<boolean> = ref(true);
export const toggleDarkMode = (mode?: string | null) => {
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
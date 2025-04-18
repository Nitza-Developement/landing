<script lang="ts" setup>
import type { HeaderItem } from '../store/Types';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { useI18n } from 'vue-i18n';
import { ref, type Ref } from 'vue';
import { ArrowRightStartOnRectangleIcon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/vue/24/outline';

const { locale, t } = useI18n();

defineProps<{
  item: HeaderItem,
  isLanguageSelector?: boolean,
  customStyle?: string,
  isUserList?: boolean,
}>()
const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  window.location.reload();
};

const flags: Record<string, string> = {
  en: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTM4RDUxQjYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTM4RDUxQzYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MzhENTE5NjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MzhENTFBNjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAJkAAQABBQEAAAAAAAAAAAAAAAAHAgMEBQYBAQEAAgMBAQAAAAAAAAAAAAAAAgYBBAUDBxAAAAQBBwkHBAMBAAAAAAAAAQIDBAAREhMFBhYHMaHRkpPTFVVWIUGRIjIzFFFhQtKCIyVFEQAAAgMQAgIBBQAAAAAAAAAAAfACAxEhMVGBoRJSghNTBBRUBRVBcZHRMmHhIkJD/9oADAMBAAIRAxEAPwDlhqtFarm7o4qNFlE3Cx3LoRonRkzgAJthKQRE/b2zhyxa6ThuQwQePY1hmjZ9nxYyXx3cwFDJ8G/6QACFJSiFHMmTs0RvDo+PfiEHBjN6jaGamEywqz/iDxFKcLVr8gRA5HUpJwGCT8YkbQ3fl7yfoBubIVNU94KpSrBVdk0cJuqesREKBaiE4EM3ESAM3ygAy98c7lHFmC1I3nvZDp8O2as8wqbJWku+9G8JNuvhv1Ep4l/SKpdMqwufZcjgFP8AYXXw36iU8S/pC6ZVg7LkcAp/sLr4b9RKeJf0hdMqwdlyOAU/2PS2Zw5KYDFtGoBgGUBASgICH8IXTKsMHyPIn/gSSiHmhQQqZFU4fFBw1dkKu7AF0nAgoUJjYkwaFQMk+XL3hF6WfWjfKDx7jHzobIW3+gNX/GXpQcnPwmcXiRQ+JLSfMo5BT75mbvjzdedd8Q/1hiAWG5iHTSdgoRQjYtXFO/RSAjVsM4fK8b0f95gk9XfJ3xI4o6T3k/R+AGdZo9UNLRVO8rZis4q5Ur0xjJmCgX8yhSnbJf1URSmylljR5JZUmC1J8v4vefEI6fDs2y+YVJidFd9w5PRiR7w4V8iceAb6KreMaqfIueg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWQvDhXyJx4BvoXjGqnyGg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWRGhLF2+aNSt2lnHiLgyazd8vNFUqyahgEAKUQEpJACScUe2LrqGRm6axfoPndAxfGylsxcCldR7walFctXeeeCgpUc75E2ky+aTJEb9m5+ZUo/2CgcQoTsviKBSrK2eeKVi2BuWr3YJzQRK2ERApkwLMVl7O02eMm3Y1icfdlCgsNvZCobb1XaJhWwWXcA6blcC7UVA1GsdedIYCSABJANJIWNPkMwrcmSp0jecIb3HZdRdsRNFqCj7piSr0W96YLqH0xXL1pVFk63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7ichXwTFnnTXNuIUG0ZJII6zisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0tjT3Xsd1aO0JpjzulKw6HZZzbTGF17HdWjtCaYXSlYOyzm2mMLr2O6tHaE0wulKwdlnNtMYXXsd1aO0JphdKVg7LObaYwuvY7q0doTTC6UrB2Wc20xhdex3Vo7QmmF0pWDss5tpjC69jurR2hNMLpSsHZZzbTGF17HdWjtCaYXSlYOyzm2mMcE499T2/Ub2/Rl/H7fSNMxaVPxKGWEW9WMCQasADVgAasADVgAasAFxv76ft+ovuejL+X2+sZIRX/ABOGSEf/2Q==",
  es: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODQ3Mjc2MTYxM0MxMUU3ODJENDgwMDE3MDIxNjRGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyODQ3Mjc2MjYxM0MxMUU3ODJENDgwMDE3MDIxNjRGOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI4NDcyNzVGNjEzQzExRTc4MkQ0ODAwMTcwMjE2NEY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI4NDcyNzYwNjEzQzExRTc4MkQ0ODAwMTcwMjE2NEY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAI4AAQACAgMAAAAAAAAAAAAAAAAEBQEDAgYHAQEAAgMBAQAAAAAAAAAAAAAAAgYDBAUBBxAAAQMBBgMFCAMAAAAAAAAAAQIDBAAREpMFVQZR0RYyktIzFTFBIkJiExQ0YXGREQACAQEGBQMDBQAAAAAAAAAAAQIDETGRUhMUIUFREgRxoSJhgTLwscHRBf/aAAwDAQACEQMRAD8ApFOOLUVKUVKUbVKJJJJ95rln0xIxeVxNALyuJoBeVxNALyuJoBeVxNALyuJoDKXHEKCkqKVJNqVAkEEe8UDR7x6BkWnRcFvw1R9zVzSxZXdafV4nFeS7babW7Ihw2GGkqW46tlsJSlItJPw1m8edarNRU2rfqzx1qnJybKyBL2JNnrhNxGmXb9xhciGGkOKtu3bxT8JvggBVnD2105+FUsfbVeN/D1/SJz14xUndzslbYWvoGRadFwW/DXG3NXNLFkdafV4j0DItOi4LfhpuauaWLGtPq8R6BkWnRcFvw03NXNLFjWn1eI9AyLTouC34abmrmlixrT6vEegZFp0XBb8NNzVzSxY1p9XiT6wGM6vuF8QkFMWJLiflvoVmMlX47iS2oFF5KG1POAKCRZeb/wAqwLxYqEJW2vstSfX6Xe7Njxvm+Li+26/+bFgzOxsz2q4p9qQuL+XFlqBelXY6xHKQEFJIZBVeCrRZaKsFD/LhoRlWj+azP+zR8rynOpKFNy+KuSt+XuXMERVyHpbUKQw7IN2Q+6uOptZaN1ASGnHFAhJ+YCqr53jqnRptO3jL0v5cLfW37Gbul+LaaXrbx9V+xOrkgUAoBQCgKSREczGG9CGVpyq8QtUkfaV91YcCiVhtRUSeJrt1/JppU7JqXarOCljxSRHx6s1NuSl92vYhP7FQiOlMaW0VvtluaS0oG0qcsWiwi8brtnxe8A/xWat51Hsj8pSceXLl1uuNil5Vkm3CzD3LmKsmXc9ITF+2lSDmFrRW6kKF0KuEr/q2tTy6sJUIRU4uUeSUrePHmrOF15pwlPudttnqrPtx5k+uSZhQCgFAeFdUbj1OVjL51dtnRyRwLDoU8qHVG49TlYy+dNnRyRwGhTyodUbj1OVjL502dHJHAaFPKh1RuPU5WMvnTZ0ckcBoU8qHVG49TlYy+dNnRyRwGhTyodUbj1OVjL502dHJHAaFPKh1RuPU5WMvnTZ0ckcBoU8qHVG49TlYy+dNnRyRwGhTyohyf2XfK7avK7Ht+T6eFbTJRuV5r7teEh3aAd2gHdoB3aAd2gNkb9lryu2nzex7fn+njXqIyud5/9k=",
};

const icons = [
  UserCircleIcon,
  ShoppingCartIcon,
  HeartIcon,
  ArrowRightStartOnRectangleIcon,
];

const isOpen: Ref<boolean> = ref(false);
</script>

<template>
  <div class="relative z-20 flex">
    <!-- aqui se selecciona que tipo de elemento se va a pintar, menu, menu de lenguaje o enlace -->
    <div
      class="inline-flex items-center text-sm lg:text-base font-medium text-slate-700 rounded-full hover:text-primary"
      @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <div>
        <a v-if="isLanguageSelector"
          class="flex after:absolute hover:after:-bottom-10 after:inset-0 relative items-center text-base" href="#">
          <img alt="flag" class="h-3.5 me-3" :src="flags[t('header.config.code')]">
          <span class="font-medium text-xs text-white">
            {{ t('header.config.actual') }}
          </span>
        </a>
        <a v-else-if="isUserList" class="relative flex items-center text-base text-slate-600 hover:text-primary"
          href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user"
            class="lucide lucide-user w-5 h-5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </a>
        <a v-else class="flex py-2 px-4 items-center cursor-pointer">
          {{ item.name }}
          <ChevronDownIcon class="size-5 flex-none text-gray-400" />
        </a>
      </div>
    </div>
    <!-- aqui se hace el tipo de transition y se crea el panel del menu en dependencia de su tipo -->
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <div v-show="isOpen" :class="customStyle ? customStyle : 'bg-red'"
        class="absolute top-full whitespace-nowrap z-10 rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"
        @mouseenter="isOpen = true" @mouseleave="isOpen = false">
        <div>
          <div v-for="(item, index) in item.innerItems" :key="index">
            <span v-if="isLanguageSelector && item.lang" @click="changeLanguage(item.lang)"
              class="cursor-pointer flex items-center gap-2 font-normal text-slate-600 py-2 px-3 rounded"
              href="javascript:void(0)">
              <img alt="flag" class="h-4" :src="flags[item.lang]">
              {{ item.name }}
            </span>
            <a v-else-if="isUserList"
              class="flex items-center gap-3 m-1 font-normal text-slate-600 py-2 px-3 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
              href="javascript:void(0)">
              <component :is="icons[index]" class="size-5 text-gray-600" />
              {{ item.name }}
            </a>
            <a v-else :href="item.href" class="flex items-center font-normal text-slate-600 py-2 
            px-3 transition-all hover:text-slate-950 hover:bg-slate-100 rounded">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

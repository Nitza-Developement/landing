<script lang="ts" setup>
import { PopoverGroup } from '@headlessui/vue';
import Dropdown from './Dropdown.vue';
import type { HeaderContent } from '../store/Types';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
import { isDarkMode } from '../store/darkMode';
const { getLocaleMessage, locale } = useI18n();


const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  window.location.reload();
}

const localeMessages = getLocaleMessage(savedLocale());
const headerContent: HeaderContent = <HeaderContent>localeMessages.header; 
</script>

<template>
  <header class="fixed bg-white dark:bg-slate-950 shadow-lg dark:shadow-slate-400 dark:shadow-md w-full h-20">
    <nav class="mx-auto h-full flex max-w-7xl items-center justify-between p-2 lg:px-10" aria-label="Global">
      <div class="flex lg:flex-1">
        <a  href= "#" class="-m-1.5 p-1.5 flex gap-2">
          <img v-if="!isDarkMode" class="h-8 w-auto" src="https://coderthemes.com/yum/assets/logo-dark-6dbab3e1.png" alt="" />
          <img v-else class="h-8 w-auto" src="https://coderthemes.com/yum/assets/logo-light-35c89c2c.png" alt="" />
        </a>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <template v-for="item, index in headerContent.items" :key="index">
          <Dropdown :item="item" v-if="item.innerItems"/>
          <a v-else :item="item" :href="item.href" class="flex items-center font-semibold text-gray-900 dark:text-white">{{ item.name }}</a>
        </template>
        <Dropdown :item="headerContent.config" :custom-process="changeLanguage"/>
      </PopoverGroup>
    </nav>
  </header>
</template>
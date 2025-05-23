<script lang="ts" setup>
import Dropdown from './Dropdown.vue';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
import type { HeaderContent } from '../store/Types';
import MegaMenu from './MegaMenu.vue';
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';
const { getLocaleMessage } = useI18n();


const localeMessages = getLocaleMessage(savedLocale());
const headerContent: HeaderContent = <HeaderContent>localeMessages.header;
const isOpenMenu = ref(false);
const toggleMobileMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <header
    class="sticky bg-white z-10 flex justify-center top-0 border-b border-slate-200 bg-transparent dark:bg-slate-950 dark:border-slate-800">
    <div class="lg:h-20 h-14 w-full flex justify-center items-center">
      <div class="container">
        <div class="flex items-center justify-between p-4">
          <div class="flex">
            <!-- Mobile Menu Toggle Button -->
            <button @click="toggleMobileMenu" class="xl:hidden block ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="menu"
                class="lucide lucide-menu w-7 h-7 text-slate-600 me-4 hover:text-primary">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>

            <!-- Navbar Brand Logo -->
            <a href="home.html">
              <img src="/imagenes/logo-dark-6dbab3e1.png" alt="logo" class="h-10 flex dark:hidden">
              <img src="/imagenes/logo-light-35c89c2c.png" alt="logo" class="h-10 hidden dark:flex">
            </a>
          </div>
          <!-- Nevigation Menu -->
          <!-- el menu del nav esta siendo pintado por la directiva v-for -->
          <ul class="xl:flex 2xl:ml-60 items-center justify-center hidden relative">
            <li class="dark:text-slate-300" v-for="item, index in headerContent.items" :key="index">
              <Dropdown v-if="item.innerItems" :item='item' :customStyle="'mt-3 min-w-48 -left-8'" />
              <MegaMenu v-else-if="item.megaMenuContent" :item='item' />
              <a class="cursor-pointer py-2 px-4" v-else>{{ item.name }}</a>
            </li>
          </ul>

          <ul class="flex items-center justify-end gap-x-6">
            <!-- Search Form Input -->
            <li class="2xl:flex relative hidden">
              <input class="ps-10 pe-4 py-2.5 block w-64 border border-transparent placeholder-orange-500 
                  rounded-full text-sm bg-orange-400/40 text-primary focus:border-orange-600 focus:outline-none"
                placeholder="Search for items..." type="search">
              <span class="absolute start-4 top-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="search" class="lucide lucide-search w-4 h-4 text-orange-500">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </span>
            </li>

            <!-- Search Button (small screen) -->
            <li class="2xl:hidden flex cursor-pointer">
              <button class="relative flex text-base transition-all text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="search" class="lucide lucide-search w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </li>

            <!-- Cart Page link -->
            <li class="flex ">
              <a href="#"
                class="relative flex text-base transition-all text-slate-600 hover:text-primary dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="shopping-bag" class="lucide lucide-shopping-bag w-5 h-5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span
                  class="absolute z-10 -top-2.5 end-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">1</span>
              </a>
            </li>

            <!-- User Dropdown -->
            <li class="flex">
              <div class="relative inline-flex">
                <Dropdown :item="headerContent.userList" :is-user-list="true"
                  :customStyle="'mt-3 min-w-44 sm:-left-20 -left-32 absolute'" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div @click="toggleMobileMenu" :class="{ 'hidden': !isOpenMenu }"
    class="xl:hidden h-svh w-full absolute top-0 z-20 bg-gray-900/50">
  </div>
  <div :class="{ 'hidden': !isOpenMenu }" class="w-3/4 xl:hidden dark:bg-slate-950 absolute top-0 z-30 bg-white h-svh">
    <div
      class="border-b-2 border-gray-100 dark:border-slate-800 dark:bg-slate-950 justify-between items-center h-14 lg:h-20 flex">
      <img src="/imagenes/logo-dark-6dbab3e1.png" alt="darkLogo" class=" mt-1 h-10 inline-block dark:hidden ml-16">
      <img src="/imagenes/logo-light-35c89c2c.png" alt="lightLogo" class="mt-1 h-10 hidden dark:inline-block ml-16">
      <XMarkIcon @click="toggleMobileMenu" class="size-8 mr-8 dark:text-slate-300 text-gray-500 hover:text-primary cursor-pointer"/>
    </div>
    <ul class="mt-6 font-medium pl-4">
      <li class="dark:text-slate-300" v-for="item, index in headerContent.itemsMovile" :key="index">
        <Dropdown v-if="item.innerItems" :item='item' :customStyle="'mt-3 pl-4 w-3/4'" />
        <div v-else class="py-2">
          <a class="cursor-pointer px-4 text-slate-700 dark:text-slate-300">{{ item.name }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>
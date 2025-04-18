<script lang="ts" setup>
import type { HeaderItem } from '../store/Types';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
import { ref } from 'vue';

defineProps<{ item: HeaderItem }>();

const isOpen = ref(false);
const selectedButton = ref<string | null>("wraps"); // Estado para rastrear el botón seleccionado

</script>

<template>
  <div class="z-20 flex">
    <!-- aqui se selecciona que tipo de elemento se va a pintar, menu, menu de lenguaje o enlace -->
    <div
      class="inline-flex relative whitespace-nowrap items-center text-sm lg:text-base font-medium text-slate-800 py-2 px-4 rounded-full hover:text-primary"
      @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <div>
        <span class="flex items-center cursor-pointer">
          {{ item.name }}
          <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
        </span>
      </div>
      <!-- aqui se hace el tipo de transition y se crea el panel del menu en dependencia de su tipo -->
      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <div v-show="isOpen"
          class="m-0 fixed top-20 right-20 bottom-auto left-20  z-30 rounded-md bg-white shadow-lg ring-1 mt-3 ring-gray-900/5"
          @mouseenter="isOpen = true" @mouseleave="isOpen = false">
          <div class="bg-white shadow-lg rounded-lg border border-slate-200 dark:bg-slate-50">
            <div class="grid grid-cols-12">
              <div class="col-span-2 text-sm w-fit">
                <div class="bg-slate-100 h-full w-full py-10 px-6">
                  <nav aria-label="Tabs" class="flex flex-col space-y-3.5">
                    <button v-for="button, index in item.megaMenuContent?.buttons" :key="index"
                      @click="selectedButton = button.id"
                      :class="selectedButton === button.id ? ' text-orange-500' : 'text-slate-600 hover:text-primary'"
                      class="justify-between !bg-transparent inline-flex items-center text-base font-medium">
                      {{ button.name }}
                      <ChevronRightIcon class="size-5 flex-none text-gray-400" />
                    </button>
                  </nav>
                </div>
              </div>

              <div class="col-span-10">
                <div class="py-10">
                  <div v-for="panel, index in item.megaMenuContent?.panels" :key="index" class="tabpanel"
                    :class="selectedButton === panel.id ? '' : 'hidden'" :id='panel.id'>
                    <div class="grid grid-cols-4 divide-x divide-slate-200">
                      <div v-for="subPanel, index in panel.subPanels" :key="index" class="ps-6">
                        <h6 class="text-base font-medium text-slate-800">
                          {{ subPanel.title }}</h6>
                        <ul class="grid space-y-3 mt-4">
                          <li v-for="item, index in subPanel.items" :key="index">
                            <a class="text-sm font-medium text-slate-600 hover:text-primary" :href="item.href">{{
                              item.name }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

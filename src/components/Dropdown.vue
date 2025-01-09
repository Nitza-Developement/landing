<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import type { HeaderItem } from '../types/CardTypes';

defineProps<{ item: HeaderItem, customProcess?: (lang: string) => void }>()
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <Popover class="relative flex">
    <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white px-1">
      {{ item.name }}
      <!-- TODO put icon -->
      <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel
        class="absolute top-full z-10 mt-3 max-w-md overflow-hidden rounded-md  bg-white shadow-lg ring-1 ring-gray-900/5">
        <div>
          <div v-for="item, index in item.innerItems" :key="index"
            class="group relative flex items-center gap-x-6 text-sm/6 hover:bg-black py-1 px-3">
            <a v-if="item.href" :href="item.href" class="block font-semibold text-gray-900">
              {{ item.name }}
            </a>
            <span v-else-if="customProcess && item.lang" @click="customProcess(item.lang)" class="cursor-pointer">
              {{ item.name }}
            </span>          
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

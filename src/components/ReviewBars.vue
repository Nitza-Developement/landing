<script lang="ts" setup>
import { StarIcon as SolidStarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as OutlineStarIcon } from '@heroicons/vue/24/outline';

defineProps<{
  img: string,
  name: string,
  text?: string,
  stars: number,
  signal?: string,
  text2?: string
}>()
</script>

<template>
  <div class="flex items-center rounded-full p-4 bg-slate-200 dark:bg-gray-800 m-4 w-fit shadow-lg
   dark:shadow-slate-400 dark:shadow-md">
    <img :src="img" alt="Review Image" class="rounded-full w-16 h-16 mr-2" />
    <div class="flex flex-col">
      <p class="font-[cursive] text-xl dark:text-white">{{ name }}</p>
      <p class="text-sm text-slate-850 dark:text-gray-300">{{ text }}</p>
      <div class="flex">
        <template v-for="star in 5">
          <SolidStarIcon v-if="star <= stars" class="h-4 w-4 text-yellow-500" />
          <OutlineStarIcon v-else class="h-4 w-4 text-yellow-500" />
        </template>
      </div>
      <p class="text-slate-950 dark:text-gray-300 ml-2 font-bold"> <span class="text-orange-500">{{ signal }}</span> {{ text2 }}</p>
    </div>
  </div>
</template>

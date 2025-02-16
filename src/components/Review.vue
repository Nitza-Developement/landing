<script lang="ts" setup>
import { StarIcon as SolidStarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as OutlineStarIcon } from '@heroicons/vue/24/outline';
import type { ReviewContent } from "../types/Types";

defineProps<{
  review: ReviewContent
}>()
</script>

<template>
  <div class="mb-4">
    <div class="flex items-center">
      <img :src="review.img" class="rounded-full w-11 h-11 mr-2">
      <div class="flex flex-col">
        <p class="font-[cursive] text-2xl dark:text-white">{{ review.name }}</p>
        <div class="flex">
          <SolidStarIcon v-for="star in review.stars" :key="star" class="h-5 w-5 text-yellow-500" />
          <OutlineStarIcon v-for="star in (5 - review.stars)" :key="star" class="h-5 w-5 text-yellow-500" />
        </div>
      </div>
    </div>
    <div class="relative px-12 py-6 mt-8">
      <div class="absolute -top-5 start-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="orange-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="quote"
          class="lucide lucide-quote h-8 w-8 fill-orange-500 rotate-180">
          <path
            d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
          </path>
          <path
            d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z">
          </path>
        </svg>
      </div>
      <div class="absolute -bottom-5 end-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="orange-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="quote"
          class="lucide lucide-quote h-8 w-8 fill-orange-500">
          <path
            d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
          </path>
          <path
            d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z">
          </path>
        </svg>
      </div>
      <p class="text-base text-slate-400 font-medium">{{ review.text }}</p>
    </div>
  </div>
</template>

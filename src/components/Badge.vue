<script lang="ts" setup>
import type { BadgeType } from '../store/Types';

defineProps<{
  type: BadgeType,
  badgeCustomStyles?: string,
  count?: number,
  text: string,
}>()
</script>

<template>
<span class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-orange-500 m-1" :class="`${badgeCustomStyles}`">
  <slot>{{ text }}</slot>
  <span v-if="type === 'count'" class="left-2 bg-red-600 rounded-full ml-1 px-1 text-white">{{ count  }}</span>
</span>
</template>
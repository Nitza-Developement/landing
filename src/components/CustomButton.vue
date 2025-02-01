<script setup lang="ts">
import type { FunctionalComponent } from 'vue';
import type { ButtonType } from '../types/Types';

defineProps<{
  method: Function,
  params?: object,
  text?: string,
  textCustomStyles?: string,
  iconCustomStyles?: string,
  Icon?: FunctionalComponent,
  type: ButtonType
}>()
</script>

<template>
  <button 
    @click="method(params)"
    class="cursor-pointer rounded-full m-1 text-white bg-orange-500" 
    :class="`
      ${textCustomStyles} 
      ${(type === 'Primary' || type === 'IconText') ? 'px-6 py-2' : type === 'Large' ? 'py-4 px-7' : 'p-3'}
    `" >
    <template class="flex">
      <Icon v-if="type === 'Icon' || type === 'IconText'" 
        class="h-6 w-6" 
        :class="`${iconCustomStyles} ${type === 'IconText' ? 'pr-1':''}`" />
      <template v-if="type !== 'Icon'">{{ text }}</template>
    </template>
  </button>
</template>
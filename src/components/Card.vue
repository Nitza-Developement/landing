<script setup lang="ts">
import type { CardContent } from '../types/types';


defineProps<{ cardContent: CardContent, bgColor: string, textColor:string }>()


</script>

<template>
    <div :class="bgColor" class="rounded-md shadow-lg border border-default-100">
        <div class="p-6">
            <div class="mb-6">
                <img :src="cardContent.imagenLink" class="">
            </div>
            <h3 :class="textColor" class="text-xl font-medium text-default-900 mb-6">{{ cardContent.title }}</h3>
            <p :class="textColor" class="text-base text-default-500">{{ cardContent.text }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>

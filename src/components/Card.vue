<script setup lang="ts">
import type { CardContent } from '../types/CardTypes';


defineProps<{ cardContent: CardContent, bgColor: string, textColor:string }>()


</script>

<template>
    <div :class="bgColor" class="rounded-md shadow-lg border">
        <div class="p-6">
            <div class="mb-6">
                <img :src="cardContent.imagenLink" class="object-cover w-16 h-16">
            </div>
            <h3 :class="textColor" class="text-xl font-medium mb-6">{{ cardContent.title }}</h3>
            <p :class="textColor" class="text-base">{{ cardContent.text }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from './components/Card.vue';
import type { CardContent } from './types/CardTypes';
import { ref } from 'vue';
import CardsContent from './Data/CardsContent.json';


let cardsContents = ref(CardsContent as CardContent[])  
</script>

<template>
  <div class="flex gap-8 p-8 justify-center">
    <Card :cardContent="cardsContents[0]"/>
    <Card :cardContent="cardsContents[1]"/>
    <Card :cardContent="cardsContents[2]"/>
  </div>
</template>

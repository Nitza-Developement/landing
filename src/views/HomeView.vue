<script setup lang="ts">
import Card from '../components/Card.vue';
import type { CardContent } from '../types/CardTypes';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';

const { getLocaleMessage } = useI18n();

const localeMessages = getLocaleMessage(savedLocale());

const cardsContent: CardContent[] = <CardContent[]>localeMessages.cardsContent;
</script>

<template>
  <div class="flex gap-8 p-8 justify-center">
    <Card :cardContent="cardContent" v-for="cardContent, index in cardsContent" :key="index" />
  </div>
  <div class="">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br> Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim vel officiis, nisi dolorum repellendus
      corrupti, quos labore repudiandae voluptas quod iusto nemo facilis qui! Magni sunt alias maiores harum? <br>
    </p>
  </div>
</template>
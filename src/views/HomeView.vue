<script setup lang="ts">
import Card from '../components/Card.vue';
import type { ButtonType, CardContent } from '../types/CardTypes';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
import CustomButton from '../components/CustomButton.vue';
import { PhoneArrowDownLeftIcon } from "@heroicons/vue/24/outline";

const { getLocaleMessage, t } = useI18n();

const localeMessages = getLocaleMessage(savedLocale());
const cardsContent: CardContent[] = <CardContent[]>localeMessages.cardsContent;
</script>

<template>          
    <CustomButton
      :method="() => console.log('click')"
      icon-custom-styles="text-white"
      :Icon="PhoneArrowDownLeftIcon"
      text-custom-styles="fixed bottom-3 right-3"
      type="Icon" />
  <div class="flex gap-8 p-8 justify-center">
    <Card :cardContent="cardContent" v-for="cardContent, index in cardsContent" :key="index" />
  </div>
  <div>
    <CustomButton
      :method="(params: object) => {console.log('click: ', params)}"
      :params="{valor1: 'valor1'}"
      :text="t('home.buttonPrimary.text')" 
      :type="<ButtonType> t('home.buttonPrimary.type')" />
    <CustomButton
      :method="() => console.log('click')" 
      :text="t('home.buttonLarge.text')" 
      :type="<ButtonType> t('home.buttonLarge.type')" /> 
    <CustomButton 
      :method="() => console.log('click')"
      :text="t('home.buttonIconText.text')" 
      :type="<ButtonType> t('home.buttonIconText.type')"      
      :Icon="PhoneArrowDownLeftIcon"
      icon-custom-styles="text-white"
      text-custom-styles="text-white" /> 
  </div>
</template>
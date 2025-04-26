<script setup lang="ts">
import Card from '../components/Card.vue';
import type { BadgeType, ButtonType, CardContent } from '../store/Types';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
import CustomButton from '../components/CustomButton.vue';
import { PhoneArrowDownLeftIcon } from "@heroicons/vue/24/outline";
import ButtonDark from '../components/ButtonDark.vue';
import Badge from '../components/Badge.vue';
import Reviews from '../components/Carrusel.vue';
import ReviewBars from '../components/ReviewBars.vue';
import Footer from '../components/Footer.vue';


const { getLocaleMessage, t } = useI18n();

const localeMessages = getLocaleMessage(savedLocale());
const cardsContent: CardContent[] = <CardContent[]>localeMessages.cardsContent;
</script>

<template>
  <ButtonDark />
  <CustomButton :method="() => console.log('click')" :Icon="PhoneArrowDownLeftIcon" type="Icon" />
  <div class="flex flex-wrap gap-8 p-8 justify-center">
    <Card :cardContent="cardContent" v-for="cardContent, index in cardsContent" :key="index" />
  </div>
  <div>
    <CustomButton :method="(params: object) => { console.log('click: ', params) }" :params="{ valor1: 'valor1' }"
      :text="t('buttons.buttonPrimary.text')" :type="<ButtonType>'Primary'" />
    <CustomButton :method="() => console.log('click')" :text="t('buttons.buttonLarge.text')"
      :type="<ButtonType>'Large'" />
    <CustomButton :method="() => console.log('click')" :text="t('buttons.buttonIconText.text')"
      :type="<ButtonType>'IconText'" :Icon="PhoneArrowDownLeftIcon" />
  </div>

  <div>
    <Badge :text="t('badges.Default.text')" :type="<BadgeType>'Default'" />
    <Badge :text="t('badges.Warning.text')" :type="<BadgeType>'Default'" />
    <Badge :text="t('badges.Error.text')" :type="<BadgeType>'Default'" />
    <Badge :text="t('badges.Notifications.text')" :type="<BadgeType>'count'" :count=8 />
  </div>
  <Reviews />
  <ReviewBars img="https://coderthemes.com/yum/assets/avatar1-25906796.png" name="Jakob Culhane" :stars=4
    text="Healthy and Delicious Food" />
  <ReviewBars img="https://coderthemes.com/yum/assets/burger-1-0c3ba5a6.svg" name="MCD Veg Burger" :stars=5
    signal="$"  text2="8.14" />
    <footer  class="border-t border-slate-200 dark:border-slate-700"><Footer/></footer>
   
</template>
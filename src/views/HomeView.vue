<script setup lang="ts">
import Card from '../components/Card.vue';
import type { BadgeType, ButtonType, CardContent } from '../types/Types';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
import CustomButton from '../components/CustomButton.vue';
import { PhoneArrowDownLeftIcon } from "@heroicons/vue/24/outline";
import ButtonDark from '../components/ButtonDark.vue';
import Badge from '../components/Badge.vue';
import Subscribe from '../components/Subscribe.vue';
import Reviews from '../components/Carrusel.vue';


const { getLocaleMessage, t } = useI18n();

const localeMessages = getLocaleMessage(savedLocale());
const cardsContent: CardContent[] = <CardContent[]>localeMessages.cardsContent;
</script>

<template>
  <ButtonDark />
  <CustomButton :method="() => console.log('click')" :Icon="PhoneArrowDownLeftIcon" type="Icon" />
  <div class="flex gap-8 p-8 justify-center">
    <Card :cardContent="cardContent" v-for="cardContent, index in cardsContent" :key="index" />
  </div>
  <div>
    <CustomButton :method="(params: object) => { console.log('click: ', params) }" :params="{ valor1: 'valor1' }"
      :text="t('buttons.buttonPrimary.text')" :type="<ButtonType>'Primary'" />
    <CustomButton :method="() => console.log('click')" :text="t('buttons.buttonLarge.text')"
      :type="<ButtonType>'Large'" />
    <CustomButton :method="() => console.log('click')" :text="t('buttons.buttonIconText.text')"
      :type="<ButtonType>'IconText'" :Icon="PhoneArrowDownLeftIcon"/>
  </div>

  <div>
    <Badge :text="t('badges.Default.text')" :type="<BadgeType>'Default'"/>
    <Badge :text="t('badges.Warning.text')" :type="<BadgeType>'Default'"/>
    <Badge :text="t('badges.Error.text')" :type="<BadgeType>'Default'"/>
    <Badge :text="t('badges.Notifications.text')" :type="<BadgeType>'count'" :count= 8 />
  </div>
  <Subscribe />
  <Reviews />
</template>
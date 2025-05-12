<script lang="ts" setup>
import Dropdown from './Dropdown.vue';
import type { HeaderContent } from '../store/Types';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
const { getLocaleMessage } = useI18n();




const localeMessages = getLocaleMessage(savedLocale());
const headerContent: HeaderContent = <HeaderContent>localeMessages.header; 
</script>
<template>
  <div class="h-8 lg:flex justify-center items-center bg-primary-950 text-white z-20">
    <div class="container">
      <nav class="flex items-center justify-between p-4">
        <Dropdown :item="headerContent.config" :is-language-selector="true" :customStyle="'mt-3 min-w-32 -left-2'"/>    
        <h5 class="text-sm text-primary-50 text-center">Free Delivery Over $50 <a class="font-semibold underline">Claim
            Offer</a></h5>

        <ul class="flex items-center justify-end gap-4">
          <li class="flex">
            <a class="text-sm hover:text-primary" href="faqs.html">Help</a>
          </li>

          <li class="flex">
            <a class="text-sm hover:text-primary" href="contact-us.html">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
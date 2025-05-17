<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<template>
  <div>
    <form class="space-y-2 mb-6">
      <label for="SubscribeEmail" class="text-xl font-medium mb-4 dark:text-white">{{ t('footer.subscribe.title') }}</label>
      <div class="flex shadow-sm">
        <input type="email" name="SubscribeEmail" id="SubscribeEmail" :placeholder="t('footer.subscribe.placeHolder')" class=" cursor-pointer rounded-s-md dark:bg-slate-900 pl-4 focus:outline-none
          focus:ring-1 focus:ring-orange-400 w-full">
        <button class="bg-orange-500 p-2 rounded-e-md">
          <ArrowRightIcon class="h-6 w-6 text-white" />
        </button>
      </div>
    </form>
    <p class="text-sm text-slate-500 mb-6">{{ t('footer.subscribe.text') }}</p>
  </div>
</template>
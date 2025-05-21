<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import type { ReviewContent } from '../store/Types';
import Review from './Review.vue';
import Badge from './Badge.vue';
import { useI18n } from 'vue-i18n';
import { apiCallForReviews } from '../functions/apiCallForReviews';

const { t } = useI18n();

// Usar la Promise
let reviews = ref<ReviewContent[]>([]);
onBeforeMount(async () => {
  reviews.value = await apiCallForReviews();
});

const activeTab = ref(0);

const setActiveTab = (index: number) => {
  activeTab.value = index;
};

onMounted(() => {
  setInterval(() => {
    if (reviews.value.length > 0) {
      if (reviews.value.length - 1 > activeTab.value) {
        activeTab.value++;
      }
      else activeTab.value = 0;
    }
  }, 5000);
});

</script>

<template>
  <div class="p-5 w-full md:w-1/2">
    <Badge :text="t('footer.reviews.badge_text')" type="Default" />
    <h2 class="text-3xl font-semibold text-slate-900 max-w-xl mb-4 mt-2 dark:text-white"
      v-html="t('footer.reviews.title')"></h2>
    <div>
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="p-5 rounded-md">
          <Review v-if="reviews[activeTab]" :review="reviews[activeTab]" />
        </div>
      </transition>
      <div class="flex justify-around mb-5 mt-2">
        <button v-for="(review, index) in reviews" :key="index" @click="setActiveTab(index)">
          <img :src="review.img" alt="Tab Image" class="w-12 h-12 rounded-full" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-list {
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
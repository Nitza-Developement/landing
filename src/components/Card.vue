<script setup lang="ts">
import type { CardContent } from '../store/Types';


defineProps<{ cardContent: CardContent }>()


</script>

<template>
	<div class="rounded-md shadow-lg border dark:border-gray-900">
		<div class="p-6">
			<div class="mb-6">
				<img :src="cardContent.imagenLink" class="object-cover w-16 h-16">
			</div>
			<h3 class="text-xl font-medium mb-6 dark:text-white">{{ cardContent.title }}</h3>
			<p class="text-base dark:text-gray-400">{{ cardContent.text }}</p>
		</div>
	</div>
</template>

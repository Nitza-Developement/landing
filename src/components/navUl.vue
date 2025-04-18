<script lang="ts" setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';

const toggleMenu = () => {
    isOpenProducts.value = !isOpenProducts.value;
};

const isOpenProducts = ref(false);

</script>

<template>
    <div class="border-b-2 border-gray-100 dark:border-gray-700 h-14 items-center flex">
        <img src="/imagenes/logo-dark-6dbab3e1.png" alt="darkLogo" class="h-15 hidden dark:inline-block ml-16">
        <img src="/imagenes/logo-light-35c89c2c.png" alt="lightLogo" class="h-15 inline-block dark:hidden ml-16">
    </div>
    <ul class="mt-6 space-y-4 font-medium text-sm pl-4">
        <li>
            <a href="#" class="px-2.5 py-2.5">Home</a>
        </li>
        <li>
            <button @click="toggleMenu"
                class="px-2.5 py-2 group w-full justify-between flex hover:bg-slate-100 rounded-md">
                <span class="group-hover:text-primary">Product</span>
                <ChevronDownIcon :class="{ 'rotate-180': isOpenProducts }"
                    class="h-5 w-5 transition-transform duration-300 text-gray-500 inline-block ml-2 group-hover:text-primary" />
            </button>
            <ul :class="{'hidden': !isOpenProducts}"
                class="pt-2 ps-2">
                <li class="py-2 px-2.5">
                    <a href="#">Product Grid</a>
                </li>
                <li class="py-2 px-2.5">
                    <a href="#">Product list</a>
                </li>
                <li class="py-2 px-2.5">
                    <a href="#">Product Details</a>
                </li>
            </ul>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">My Wishlist</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">Contact Us</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">FAQs</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">Error Page</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">Login</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">Register</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">Forgot Password</a>
        </li>
        <li class="pb-2">
            <a href="#" class="px-2.5 py-2">Reset Password</a>
        </li>
    </ul>
</template>
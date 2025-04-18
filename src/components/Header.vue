<script lang="ts" setup>
import Dropdown from './Dropdown.vue';
import { useI18n } from 'vue-i18n';
import { savedLocale } from '../i18n/i18n';
import type { HeaderContent } from '../store/Types';
import { ref } from 'vue';
import MegaMenu from './MegaMenu.vue';
const { getLocaleMessage } = useI18n();


const isOpen = ref(false);

const localeMessages = getLocaleMessage(savedLocale());
const headerContent: HeaderContent = <HeaderContent>localeMessages.header;
</script>

<template>
  <header
    class="sticky bg-white z-10 flex justify-center top-0 border-b border-slate-200 bg-transparent">
    <div class="lg:h-20 h-14 w-full flex justify-center items-center">
      <div class="container">
        <div class="flex items-center justify-between p-4">
          <div class="flex">
            <!-- Mobile Menu Toggle Button -->
            <button class="lg:hidden block " data-hs-overlay="#mobile-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="menu"
                class="lucide lucide-menu w-7 h-7 text-slate-600 me-4 hover:text-primary">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>

            <!-- Navbar Brand Logo -->
            <a href="home.html">
              <img src="/imagenes/logo-dark-6dbab3e1.png" alt="logo" class="h-10 flex dark:hidden">
              <img src="/imagenes/logo-light-35c89c2c.png" alt="logo" class="h-10 hidden dark:flex">
            </a>
          </div>

          <!-- Nevigation Menu -->
          <!-- el menu del nav esta siendo pintado por la directiva v-for -->
          <ul class="lg:flex items-center justify-center hidden relative">
            <li v-for="item, index in headerContent.items" :key="index">
              <Dropdown v-if="item.innerItems"  :item='item' :customStyle="'mt-3 min-w-52'" />
              <MegaMenu v-else-if="item.megaMenuContent"  :item='item' />
              <a class="cursor-pointer" v-else>{{ item.name }}</a>
            </li>
          </ul>

          <ul class="flex items-center justify-end gap-x-6">
            <!-- Search Form Input -->
            <li class="2xl:flex relative hidden">
              <input class="ps-10 pe-4 py-2.5 block w-64 border border-transparent placeholder-orange-500 
                  rounded-full text-sm bg-orange-400/40 text-primary focus:border-orange-600 focus:outline-none"
                placeholder="Search for items..." type="search">
              <span class="absolute start-4 top-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="search" class="lucide lucide-search w-4 h-4 text-orange-500">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </span>
            </li>

            <!-- Search Button (small screen) -->
            <li class="2xl:hidden flex ">
              <button class="relative flex text-base transition-all text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="search" class="lucide lucide-search w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </li>

            <!-- Cart Page link -->
            <li class="flex ">
              <a href="#" class="relative flex text-base transition-all text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="shopping-bag" class="lucide lucide-shopping-bag w-5 h-5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span
                  class="absolute z-10 -top-2.5 end-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">1</span>
              </a>
            </li>

            <!-- User Dropdown -->
            <li class="flex ">
              <div class="relative inline-flex"
              @mouseenter="isOpen = true" @mouseleave="isOpen = false">
                <a class="relative flex items-center text-base text-slate-600 hover:text-primary"
                  href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="user" class="lucide lucide-user w-5 h-5">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a>
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1">
                  <div v-show="isOpen" @mouseenter="isOpen = true" @mouseleave="isOpen = false"
                    class="min-w-[200px] absolute top-full -right-24 mt-4 opacity-0 z-20 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-slate-100 p-1.5 dark:bg-slate-50">
                    <ul class="flex flex-col gap-1">
                      <li>
                        <a class="flex items-center gap-3 font-normal text-slate-600 py-2 px-3 hover:text-slate-700 hover:bg-slate-100 rounded"
                          href="admin-dashboard.html" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" data-lucide="user-circle"
                            class="lucide lucide-user-circle h-4 w-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </svg> Admin</a>
                      </li>
                      <li>
                        <a class="flex items-center gap-3 font-normal text-slate-600 py-2 px-3 hover:text-slate-700 hover:bg-slate-100 rounded"
                          href="cart.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" data-lucide="shopping-cart"
                            class="lucide lucide-shopping-cart h-4 w-4">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
                            </path>
                          </svg>
                          Cart</a>
                      </li>
                      <li>
                        <a class="flex items-center gap-3 font-normal text-slate-600 py-2 px-3 hover:text-slate-700 hover:bg-slate-100 rounded"
                          href="wishlist.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" data-lucide="heart"
                            class="lucide lucide-heart h-4 w-4">
                            <path
                              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                            </path>
                          </svg>
                          Wishlist</a>
                      </li>
                      <li>
                        <a class="flex items-center gap-3 font-normal text-slate-600 py-2 px-3 hover:text-slate-700 hover:bg-slate-100 rounded"
                          href="auth-login.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" data-lucide="log-out"
                            class="lucide lucide-log-out h-4 w-4">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" x2="9" y1="12" y2="12"></line>
                          </svg> Log Out</a>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div
    class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all transform h-full max-w-[270px] w-full z-60 border-r border-slate-200 bg-white dark:bg-slate-50 open"
    aria-overlay="true" tabindex="-1">
    <div
      class="flex justify-center items-center border-b border-dashed border-slate-200 h-16 transition-all duration-300">
      <a href="home.html">
        <img src="/imagenes/logo-dark-6dbab3e1.png" alt="logo" class="h-15 flex dark:hidden">
        <img src="/imagenes/logo-light-35c89c2c.png" alt="logo" class="h-15 hidden dark:flex">
      </a>
    </div>
    <div class="h-[calc(100%-4rem)]" data-simplebar="init">
      <div class="simplebar-wrapper" style="margin: 0px;">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
            <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
              style="height: 100%; overflow: hidden;">
              <div class="simplebar-content" style="padding: 0px;">
                <nav class="hs-accordion-group p-4 w-full flex flex-col flex-wrap">
                  <ul class="space-y-2.5">
                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="home.html">
                        Home
                      </a>
                    </li>

                    <li class="hs-accordion" id="product-categories-accordion">
                      <a class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-primary hs-accordion-active:bg-slate-100 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="javascript:;">
                        Product <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" data-lucide="chevron-down"
                          class="lucide lucide-chevron-down w-5 h-5 ms-auto hs-accordion-active:rotate-180 transition-all">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </a>

                      <div id="product-categories-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] hidden">
                        <ul class="pt-2 ps-2">
                          <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                              href="product-grid.html">
                              Product Grid
                            </a>
                          </li>
                          <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                              href="product-list.html">
                              Product List
                            </a>
                          </li>
                          <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                              href="product-detail.html">
                              Product Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="wishlist.html">
                        My Wishlist
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="contact-us.html">
                        Contact Us
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="faqs.html">
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="error-404.html">
                        Error Page
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="auth-login.html">
                        Login
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="auth-register.html">
                        Register
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="auth-recoverpw.html">
                        Forgot Password
                      </a>
                    </li>

                    <li>
                      <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
                        href="auth-reset-password.html">
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="simplebar-placeholder" style="width: 269px; height: 482px;"></div>
      </div>
      <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
        <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
      </div>
      <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
        <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
      </div>
    </div>
  </div>
</template>
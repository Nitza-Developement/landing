<script lang="ts" setup>
import Subscribe from './Subscribe.vue';

</script>

<template>
    <div class="container mr-auto ml-auto pr-4 pl-4">
        <div class="grid lg:grid-cols-3 items-center gap-6 lg:py-8 py-6">
            <div class="lg:col-span-2">
                <div class="grid md:grid-cols-4 grid-cols-2 gap-6 mb-6">
                    <div class="flex flex-col gap-3">
                        <h6 class="mb-3 font-semibold text-slate-950 dark:text-white">About</h6>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">About Us</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Features</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">News</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Careers</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Services</a></div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h6 class="mb-3 font-semibold text-slate-950 dark:text-white">Company</h6>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Our Team</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Partner with Us</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">FAQs</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Blog</a></div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h6 class="mb-3 font-semibold text-slate-950 dark:text-white">Support</h6>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">About</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Support Center</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Feedback</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Contact Us</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">Accessibility</a></div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h6 class="mb-3 font-semibold text-slate-950 dark:text-white">Get in touch</h6>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">(+123) 456 789 123</a></div>
                        <div class="text-slate-600 dark:text-slate-300"><a href="javascript:void(0);">example@mail.com</a></div>
                        <div class="flex items-center gap-4">
                            <a href="#!" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="phone"
                                    class="lucide lucide-phone h-6 w-6 transition-all text-slate-600 dark:text-slate-300 hover:text-orange-500">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#!" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="globe"
                                    class="lucide lucide-globe h-6 w-6 transition-all text-slate-600 dark:text-slate-300 hover:text-orange-500">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" x2="22" y1="12" y2="12"></line>
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#!" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="instagram"
                                    class="lucide lucide-instagram h-6 w-6 transition-all text-slate-600 dark:text-slate-300 hover:text-orange-500">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#!" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="twitter"
                                    class="lucide lucide-twitter h-6 w-6 transition-all text-slate-600 dark:text-slate-300 hover:text-orange-500">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="flex flex-col gap-3">
                    <div class= "bg-primary/10 rounded-lg">
                        <div class="p-8">
                            <Subscribe/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-6 border-t border-slate-200 lg:flex hidden dark:border-slate-700">
            <div class="container">
                <div class="grid lg:grid-cols-2 items-center gap-6">
                    <div>
                        <p class="text-slate-600 dark:text-slate-400">
                            <span> {{ new Date().getFullYear() }} </span> Design crafted <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="heart"
                                class="lucide lucide-heart inline h-4 w-4 text-red-500 fill-red-500">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                                </path>
                            </svg> by Nitza-Developement
                        </p>
                    </div>

                    <div class="flex justify-end gap-6 pr-4">
                        <a href="javascript:void(0)" class="text-slate-500 font-medium">
                            Terms
                        </a>
                        <a href="javascript:void(0)" class="text-slate-500 font-medium">
                            Privacy
                        </a>
                        <a href="javascript:void(0)" class="text-slate-500 font-medium">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
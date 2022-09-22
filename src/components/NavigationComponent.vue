<template>
    <div class="h-screen flex">
        <button @click="toggle()"
            class="fixed z-30 lg:hidden peer top-4 right-4 h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-800 focus:bg-slate-700">
            <span class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 m-auto" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </span>
        </button>
        <div :style="isOpen ? showHambuger : null"
            class="z-20 hidden lg:block fixed top-0 lg:left-0 h-screen w-9/12 lg:w-3/12 bg-no-repeat bg-cover bg-center bg-navigation backdrop-brightness-0 shadow-2xl ">
            <nav role="navigation"
                class="flex flex-wrap flex-col justify-around content-center px-[10%] py-[15%] min-h-[100vh] backdrop-brightness-[0.75] ">
                <div class="flex justify-center gap-4 pb-4">
                    <img src="@/assets/logo.png" alt="" class="max-w-[200px]">
                </div>
                <div class="flex justify-center flex-wrap relative overflow-y-hidden overflow-x-hidden">
                    <ul class="space-y-2 px-4 place-items-center">
                        <li>
                            <a
                                class="flex justify-center text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out ">Forside

                                <!-- <svg sidebar-toggle-item class="hidden md:block w-6 h-6" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg> -->
                            </a>
                            <!-- <ul class="hidden peer-focus:flex">
                                <li>eraujreaiju</li>
                            </ul> -->
                        </li>
                        <li class="content-center">
                            <a href=""
                                class="flex justify-center gap-4 text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out  ">Madboder</a>
                        </li>
                        <li>
                            <a href=""
                                class="flex justify-center gap-4 text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out  ">Take
                                Away</a>
                        </li>
                        <li>
                            <a href=""
                                class="flex justify-center gap-4 text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out  ">Book
                                Bord</a>
                        </li>
                        <li>
                            <a href=""
                                class="flex justify-center gap-4 text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out  ">Selskaber</a>
                        </li>
                        <li>
                            <a href=""
                                class="flex justify-center gap-4 text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out  ">Info</a>
                        </li>
                        <li>
                            <a href=""
                                class="flex justify-center gap-4 text-tertiary font-roboto tracking-wider uppercase text-2xl hover:text-accent transition hover:scale-110 ease-in-out  ">Kontakt
                                os</a>
                        </li>

                    </ul>

                </div>
                <div>
                    <span class="text-tertiary">© 2022 <a href="https://esbjergstreetfood.com/">Esbjerg Street
                            Food</a></span>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false);
const showHambuger = ref('display: block;');

const toggle = () => {
    isOpen.value = !isOpen.value;

}
</script>

<style lang="scss" scoped>

</style>
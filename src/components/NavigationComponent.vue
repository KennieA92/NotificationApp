<template>
  <section id="navigation-section">
    <div class="h-screen flex">
      <!-- The toggle button is added to the top right side of the screen 
         On devices that are smaller than a large. 
         The JS toggles between it opening and closing. 
         A different approach to closing and opening 
         can be seen in WorkinProgressView and in the 
         PinGameComponent. -->
      <button
        @click="toggle()"
        class="fixed z-30 lg:hidden peer top-4 right-4 h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-800 focus:bg-slate-700"
      >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </button>
      <!-- Style Binding to add the styles that have been made in showHamburger
           This was done to refresh how to store styles in functions. 
           Could also be done with Tailwind Transition groups, when something is hovered or clicked. -->
      <div
        :style="isOpen ? showHamburger : null"
        class="z-20 hidden lg:block fixed top-0 lg:left-0 h-screen w-9/12 lg:w-2/12 bg-no-repeat bg-cover bg-center bg-navigation backdrop-brightness-0 shadow-2xl"
      >
        <nav
          role="navigation"
          class="flex flex-wrap flex-col justify-around content-center px-[10%] py-[15%] min-h-[100vh] border-y border-r border-accent"
        >
          <div class="flex justify-center gap-4 pb-4 hover:text-accent">
            <router-link to="/" class="m-0 max-w-[220px]"
              ><img src="@/assets/logo.png" alt="" />
              <h1
                class="text-text-color text-center text-3xl font-headers hover:text-accent"
              >
                The Sandbox
              </h1>
            </router-link>
          </div>

          <div
            class="flex justify-center flex-wrap relative overflow-y-hidden overflow-x-hidden"
          >
            <ul class="space-y-2 px-4 place-items-center">
              <li>
                <router-link
                  to="explore"
                  class="flex justify-center text-text-color font-headers tracking-wider uppercase text-xl md:text-2xl hover:text-accent transition hover:scale-110 ease-in-out"
                >
                  Explore
                </router-link>
              </li>
              <li class="content-center">
                <router-link
                  to="shop"
                  class="flex justify-center gap-4 text-text-color font-headers tracking-wider uppercase text-xl md:text-2xl hover:text-accent transition hover:scale-110 ease-in-out"
                >
                  Shop</router-link
                >
              </li>
              <li>
                <router-link
                  to="about"
                  class="flex justify-center gap-4 text-text-color font-headers tracking-wider uppercase text-xl md:text-2xl hover:text-accent transition hover:scale-110 ease-in-out"
                >
                  About</router-link
                >
              </li>
              <li class="hidden xl:block">
                <router-link
                  to="workinprogress"
                  class="flex justify-center gap-4 text-text-color font-headers tracking-wider uppercase text-xl md:text-2xl hover:text-accent transition hover:scale-110 ease-in-out"
                >
                  WIP</router-link
                >
              </li>
              <li>
                <router-link
                  to="/"
                  class="flex justify-center gap-4 text-text-color font-headers tracking-wider uppercase text-xl md:text-2xl hover:text-accent transition hover:scale-110 ease-in-out"
                  v-if="isLoggedIn"
                  @click="logout"
                  >Logout</router-link
                >
                <router-link
                  to="/login"
                  class="flex justify-center gap-4 text-text-color font-headers tracking-wider uppercase text-xl md:text-2xl hover:text-accent transition hover:scale-110 ease-in-out"
                  v-else
                  >Login</router-link
                >
              </li>
            </ul>
          </div>
          <div class="flex justify-center">
            <span class="text-text-color">© 2022 <a href="#">The Sandbox </a></span>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useUsers from "@/modules/useUsers.js";
const isOpen = ref(false);
const showHamburger = ref("display: block;");

const { isLoggedIn, isUserLoggedIn, logout } = useUsers();

// This function is used to toggle the hamburger menu
const toggle = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  isUserLoggedIn();
});
</script>

<style lang="scss" scoped></style>

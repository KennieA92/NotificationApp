<template>
  <section id="about-section">
    <BannerComponent />
    <div
      class="min-h-[50vh] flex flex-col justify-center content-center items-center text-text-color text-4xl"
    >
      <h1 class="max-w-sm md:max-w-[50%] text-center">{{ about }}</h1>
      <button
        class="bg-accent font-headers text-xl text-white px-4 py-2 mx-10 my-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-20 hover:-translate-x-96 hover:scale-110 hover:bg-blue-700 duration-300"
        @click="
          findMeaning();
          isClicked = true;
        "
        v-if="!isClicked"
      >
        Find out!
      </button>
    </div>
  </section>
</template>
<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import { ref } from "vue";

const isClicked = ref(false);
const about = ref("What is the Sandbox all about?");
const findMeaning = () => {
  about.value =
    "The Sandbox is a place where you can play games and learn about the world around you!";
  setTimeout(() => (about.value = "Just kidding. The answer is: 42"), 2500);
};
</script>

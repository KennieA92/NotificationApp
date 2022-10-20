<template>
  <section id="about-section">
    <BannerComponent />
    <div class="h-1/2 flex flex-col justify-center items-center text-text-color text-4xl">
      <h1 class="max-w-[50%] text-center"> {{about}} </h1>
      <button class="bg-accent font-headers text-xl text-white px-4 py-2 mx-10 my-4 rounded-md"
        @click="findMeaning(); isClicked = true" v-if="!isClicked">Find out!</button>

    </div>

  </section>
</template>
<script setup>
import BannerComponent from '@/components/BannerComponent.vue';
import { ref } from 'vue';

const isClicked = ref(false);
const about = ref('What is the Sandbox all about?');
const findMeaning = () => {
  about.value = 'The Sandbox is a place where you can play games and learn about the world around you!';
  setTimeout(() => (about.value = "Just kidding. The answer is: 42"), 2500);
};
</script>
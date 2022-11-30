<template>
  <!-- This is the main template for the HomeView 
       Where the Snap functionality is added. 
  -->
  <section id="home-section" class="snap-y snap-smooth h-screen overflow-y-scroll">
    <BannerComponent class="snap-start" />
    <div
      class="snap-start bg-primary-color h-1/2 flex items-center text-center justify-center text-4xl"
    >
      <h1 class="w-4/5 md:w-full">Login to access more of our site!</h1>
    </div>
    <div
      class="snap-start bg-tertiary h-1/2 flex items-center text-center text-text-color justify-center text-4xl"
    >
      <h1 class="w-4/5 md:w-full">Explore the Sandbox, a place to play and learn!</h1>
    </div>
    <div
      class="snap-start bg-text-color h-1/2 flex items-center text-center justify-center text-4xl"
    >
      <h1 class="w-4/5 md:w-full">Visit our shop to purchase our products!</h1>
    </div>
    <div
      class="snap-start bg-tertiary h-1/2 flex items-center text-text-color text-center justify-center text-4xl"
    >
      <h1 class="w-4/5 md:w-full">Read what we are all about!</h1>
    </div>
    <div
      class="hidden xl:flex snap-start bg-text-color h-1/2 items-center text-center justify-center text-4xl"
    >
      <h1 class="w-4/5 md:w-full">Keep updated with our work in progress projects!</h1>
    </div>
  </section>
</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
</script>

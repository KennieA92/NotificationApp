<template>
  <section id="home-section" class="snap-y snap-normal h-screen overflow-y-scroll">
    <BannerComponent class="snap-start" />
    <div
      class="snap-start bg-secondary h-1/2 flex items-center justify-center text-text-color text-8xl"
    >
      Placeholder
    </div>
    <div class="snap-start bg-accent h-1/2 flex items-center justify-center text-8xl">
      Placeholder
    </div>
    <div
      class="snap-start bg-tertiary h-1/2 flex items-center text-text-color justify-center text-8xl"
    >
      Placeholder
    </div>
    <div class="snap-start bg-text-color h-1/2 flex items-center justify-center text-8xl">
      Placeholder
    </div>
  </section>
</template>

<script setup>
// @ is an alias to /src
import BannerComponent from "@/components/BannerComponent.vue";
</script>

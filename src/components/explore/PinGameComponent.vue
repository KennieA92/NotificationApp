<template>
  <div class="bg-secondary flex min-h-1/2 justify-center flex-wrap">
    <div class="flex w-full md:w-1/2 flex-col justify-center text-text-color md:text-left p-10 gap-1">
      <h1 class="text-3xl ">Pin Game </h1>
      <p class="text-xl pb-3"> Made using simple JavaScript.</p>
      <p> A red dot is created at the location of the mouse relative to the parents X and Y position.
        The Values are saved to a live Firebase database using the ID of the current user.</p>
      <p> The red dots are updated live. Try to place some and clear! </p>
      <p class="text-text-color py-4"> An idea to expand this to place dots on a background image <RouterLink
          to="workinprogress" class="text-accent"> is a work in progress </RouterLink>
      </p>
    </div>
    <div class="flex w-full md:w-1/2 flex-col items-center justify-center text-text-color text-2xl py-10 gap-10">
      <h2>Place a pin by clicking on the square!</h2>
      <div class="w-80 h-80 bg-slate-900 relative" @click="clicked">
        <div v-for="pin in pins" :key="pin.id" class="absolute w-4 h-4 bg-red-500 z-10"
          :style="{ left: `${pin.xPosition}px`, top: `${pin.yPosition}px` } " @click="ThisDiv(pin, $event)">
          <div v-if="isOpen">
          </div>
        </div>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold mb-5 py-2 px-4 rounded"
        @click="deletePins">
        Clear Pins
      </button>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import usePins from "@/modules/usePins.js";

const { pins, getPinsData, deletePins, addPin } = usePins();
const isOpen = ref(false);

const clicked = (e) => {
  var rect = e.target.getBoundingClientRect();

  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  addPin(x, y);
};

const ThisDiv = (pin, e) => {
  e.stopPropagation();
};

onMounted(() => {
  getPinsData();
});
</script>

<style lang="scss" scoped>

</style>

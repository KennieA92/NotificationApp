<template>
  <div class="bg-secondary min-h-1/2 flex flex-col items-center justify-center text-text-color text-6xl py-10 gap-10">
    <h1>Place a pin!</h1>
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

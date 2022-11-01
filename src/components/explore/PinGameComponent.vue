<template>
  <div class="bg-secondary flex min-h-1/2 justify-center flex-wrap">
    <div
      class="flex w-full md:w-1/2 flex-col justify-center text-text-color md:text-left p-10 gap-1"
    >
      <h1 class="text-3xl">Pin Game</h1>
      <p class="text-xl pb-3">Made using simple JavaScript.</p>
      <p>
        A red dot is created at the location of the mouse relative to the parents X and Y
        position. The Values are saved to a live Firebase database using the ID of the
        current user.
      </p>
      <p>The red dots are updated live. Try to place some and clear!</p>
      <!-- This Paragraph contains the CTA for Work in Progress. -->
      <p class="text-text-color py-4">
        An idea to expand this to place dots on a background image
        <RouterLink to="workinprogress" class="text-blue-700 hover:text-accent">
          is a work in progress
        </RouterLink>
      </p>
    </div>
    <div
      class="flex w-full md:w-1/2 flex-col items-center justify-center text-text-color text-2xl py-10 gap-10"
    >
      <h2 class="px-10">Place a pin by clicking on the square!</h2>
      <div class="w-80 h-80 bg-slate-900 relative" @click="clicked">
        <!-- When this Div is clicked the method "clicked" is triggered. 
           The Method could have been named better. "parentContainerClicked" -->
        <div
          v-for="pin in pins"
          :key="pin.id"
          class="absolute w-4 h-4 bg-red-500 z-10"
          :style="{ left: `${pin.xPosition}px`, top: `${pin.yPosition}px` }"
          @click="ThisDiv(pin, $event)"
        >
          <!-- This goes through a list of all the previously clicked locations 
               Could have been named pinLocation 
               -->
        </div>
      </div>
      <button
        class="bg-accent text-white text-2xl font-bold mb-5 py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
        @click="isOpen = true"
      >
        Clear Pins
      </button>
      <!-- Could be a component, which has been done on the WorkInProgress  
           To demonstrate how that is done. 
           Making a component would be good practice, but it is a thin
           line between being effecient and overdoing it. 
           If it was made into another component, the props would have to be passed
           through the parent component, which would also require us to handle the emit. 
           -->
      <teleport to="body">
        <div
          class="modal backdrop-brightness-50 fixed w-screen h-screen top-0 md:left-[8.33334%] flex justify-center items-center z-50"
          v-if="isOpen"
        >
          <div
            class="md:w-1/3 w-10/12 h-1/3 bg-primary shadow-xl rounded flex flex-col justify-around items-center text-text-color"
          >
            <div class="text-center">
              <h1 class="text-2xl my-4">Are you sure you want to delete all Pins?</h1>
              <h2>Once deleted, it cannot be undone.</h2>
            </div>
            <div class="flex justify-center items-center gap-5 my-5">
              <button
                class="bg-accent text-white text-2xl font-bold mb-5 py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
                @click="isOpen = false"
              >
                Cancel
              </button>
              <button
                class="bg-accent text-white text-2xl font-bold mb-5 py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
                @click="
                  deletePins();
                  isOpen = false;
                "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </teleport>
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

<style lang="scss" scoped></style>

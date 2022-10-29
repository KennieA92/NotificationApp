<template>
  <teleport to="body">
    <div
      class="modal backdrop-brightness-50 fixed w-screen h-screen top-0 md:left-[8.33334%] flex justify-center items-center z-50"
      v-if="isOpen"
    >
      <EditNoteComponent
        :mapPin="selectedMapPin"
        @close="isOpen = false"
      ></EditNoteComponent>
    </div>
  </teleport>
  <div
    class="h-2/3 w-full relative overflow-x-hidden"
    @click="clicked"
    :style="{
      background: `url(${selectedImage.url}) no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }"
    v-if="selectedImage"
  >
    <div
      v-for="pin in mapPins"
      :key="pin.id"
      class="absolute w-6 h-6 bg-accent border-solid border-2 border-text-color rounded-full z-10"
      :style="{ left: `${pin.xPosition}%`, top: `${pin.yPosition}%` }"
      @click="
        editNotes($event, pin);
        isOpen = true;
      "
    ></div>
  </div>
  <div
    class="w-full h-3/5 flex flex-col justify-center items-center text-text-color text-2xl"
    v-else
  >
    Select a map.
    <div class="p-10">
      <div class="dropdown inline-block relative group hover:block">
        <button
          class="bg-accent text-text-color font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span class="mr-1">Maps</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden group-hover:block text-primary pt-1">
          <li v-for="image in mapImages" :key="image.id">
            <a
              class="rounded-t bg-text-color hover:bg-gray-400 py-3 px-4 block"
              @click="selectImage(image)"
              >Map Number</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import EditNoteComponent from "@/components/wip/EditNoteComponent.vue";
import useMapImages from "@/modules/useMapImages.js";
import useMapPins from "@/modules/useMapPins.js";

const { mapImages, getMapImages } = useMapImages();
const { mapPins, getMapPinsData, addMapPin } = useMapPins();
const mapPin = ref([]);
const isOpen = ref(false);
const selectedMapPin = ref(null);

onMounted(() => {
  getMapImages();
});

const selectImage = (image) => {
  selectedImage.value = image;
  getMapPinsData(selectedImage);
};

const clicked = (e) => {
  var rect = e.target.getBoundingClientRect();
  mapPin.value.xPosition = ((e.clientX - rect.left) / rect.width) * 100;
  mapPin.value.yPosition = ((e.clientY - rect.top) / rect.height) * 100;
  mapPin.value.id = selectedImage.value.id;
  addMapPin(mapPin);
};

const editNotes = (e, pin) => {
  e.stopPropagation();
  selectedMapPin.value = pin;
};

const selectedImage = ref(null);
</script>

<style lang="scss" scoped></style>

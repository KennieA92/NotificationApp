<template>
  <section id="wip-section" class="hidden xl:block">
    <MapComponent />
    <div
      class="footer-container flex justify-center items-center text-text-color flex-wrap w-4/5 md:w-3/5 text-2xl gap-5 pb-10"
    >
      <form>
        <label class="form-label self-start" for="customFile"
          >Upload your own image</label
        >
        <!-- Uploading the file using the uploadFile function in useMapStorage.js -->
        <input
          @change="uploadFile"
          type="file"
          class="self-start w-full"
          id="customFile"
        />
        <input
          class="w-10/12 py-2 text-black text-center"
          type="text"
          placeholder="Name"
          v-model="addImageData.name"
        />
        <button
          :disabled="validForm"
          type="button"
          @click="addMapImage"
          class="bg-accent text-white font-headers text-xl px-4 py-3 rounded-md"
        >
          Upload Map
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import useMapImages from "@/modules/useMapImages.js";
import MapComponent from "@/components/wip/MapComponent.vue";
import { computed } from "vue";
const { addImageData, uploadFile, addMapImage } = useMapImages();

const validForm = computed(() => {
  return !addImageData.value.name || !addImageData.value.url;
});
</script>

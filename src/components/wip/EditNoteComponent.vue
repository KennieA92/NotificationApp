<template>
  <div
    class="md:w-1/3 w-10/12 h-1/3 bg-primary shadow-xl rounded flex flex-col justify-around items-center text-text-color"
  >
    <div class="text-center">
      <h1 class="text-2xl my-4">
        Are you sure you want to delete all Pins? {{ props.mapNote }}
      </h1>
      <h2>Once deleted, it cannot be undone.</h2>
    </div>
    <div class="flex justify-center items-center gap-5 my-5">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold mb-5 py-2 px-4 rounded"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold mb-5 py-2 px-4 rounded"
        @click="
          deleteMapNote();
          isOpen = false;
        "
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
//importing defineProps should not be needed as we are using <script setup>
//But it is not working without it.
//EsLint is complaining about it.
import { defineProps } from "vue";
import useMapNotes from "@/modules/useMapNotes.js";
const props = defineProps({ mapNote: String });
const { deleteMapNote } = useMapNotes();
</script>

<style lang="scss" scoped></style>

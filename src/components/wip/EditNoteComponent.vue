<template>
  <div
    class="md:w-4/5 w-10/12 h-5/6 bg-primary shadow-xl rounded flex justify-between items-center flex-col text-text-color"
  >
    <h1 class="text-2xl m-4">Update your notes for {{ mapPin.name }}</h1>
    <input
      class="w-10/12 p-2 rounded text-primary focus:outline-none"
      type="text"
      placeholder="Name"
      v-model="mapPin.name"
    />
    <p>
      Name:
      {{ mapPin.name }}
    </p>
    <input
      class="w-10/12 p-2 rounded text-primary focus:outline-none"
      type="text"
      placeholder="Location"
      v-model="mapPin.location"
    />
    <p>
      Location:
      {{ mapPin.location }}
    </p>
    <input
      class="w-10/12 p-4 rounded text-primary focus:outline-none"
      type="text"
      placeholder="Description"
      v-model="mapPin.description"
    />
    <p>
      Description:
      {{ mapPin.description }}
    </p>
    <textarea
      class="w-10/12 p-4 rounded text-primary focus:outline-none"
      v-model="mapPin.notes"
      placeholder="Add your notes here"
    ></textarea>
    <p>Notes: {{ mapPin.notes }}</p>

    <div class="flex justify-center items-center gap-5 my-5">
      <button
        class="bg-green-500 hover:bg-green-700 text-white text-2xl font-bold mb-5 py-2 px-4 rounded"
        @click="
          editMapPin(mapPin);
          $emit('close');
        "
      >
        Update
      </button>
      <button
        class="bg-accent hover:bg-blue-700 text-white text-2xl font-bold mb-5 py-2 px-4 rounded"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="bg-red-600 hover:bg-red-400 text-white text-2xl font-bold mb-5 py-2 px-4 rounded"
        @click="
          deleteMapPin(mapPin);
          $emit('close');
        "
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
// the defineProps should not be needed, but it is
// without it I get eslint errors
// with it I get a notification that it is not needed.
// I am not sure what to believe, but this works. ¯\_(ツ)_/¯
import { defineProps, toRef } from "vue";
import useMapPin from "@/modules/useMapPins.js";
const { editMapPin, deleteMapPin } = useMapPin();

// This is the way to access props using the Script Setup syntax
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps(["mapPin"]);

// Converting the prop to a Ref.
const mapPin = toRef(props, "mapPin");
</script>

<style lang="scss" scoped></style>

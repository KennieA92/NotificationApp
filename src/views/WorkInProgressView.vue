<template>
    <section id="wip-section" class="hidden xl:block">
        <MapComponent />
        <div
            class="footer-container flex justify-center items-center text-text-color flex-wrap w-4/5 md:w-3/5 text-2xl gap-5 pb-10">
            <label class="form-label self-start" for="customFile">Upload your own image</label>
            <!-- Uploading the file using the uploadFile function in useMapStorage.js -->
            <input @change="uploadFile" type="file" class="self-start w-full" id="customFile" />
        </div>
    </section>
</template>

<script setup>
import useMapStorage from "@/modules/useMapStorage.js";
import MapComponent from "@/components/wip/MapComponent.vue";

const { uploadFile } = useMapStorage();
</script>

<template>
  <div
    class="bg-text-color min-h-screen flex flex-col items-center justify-between text-4xl"
  >
    <div
      class="header-container flex flex-col justify-center items-center pt-10 gap-5 md:w-1/2 md:text-center p-10"
    >
      <h1>Memory Game</h1>
      <p class="text-lg">
        You will see a card. Then you will have to remember that card. Then select that
        card, between other cards.
      </p>
      <p class="text-lg self-start">When you are ready. Click the Button below.</p>
      <!-- Hidden if the game is started, otherwise starts game when clicked.-->
      <button
        class="bg-accent text-text-color text-2xl font-bold mb-5 py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
        @click="startGame()"
        v-if="!isStarted"
      >
        Start Game
      </button>
    </div>
    <div class="flex body-container w-full justify-center">
      <div
        v-if="isStarted"
        class="flex flex-wrap justify-center gap-3 w-screen md:w-4/5 py-5"
      >
        <!-- Bound the image using a dynamic url stored in the object. 
           Presents the user with an image. 
           Presents the user with a list of images.
           Clicking an image will trigger the function "checkImage" -->
        <img
          class="w-[30vw] object-cover"
          :src="`${singleImage.url}`"
          alt=""
          v-if="isFirstImage && singleImage"
        />
        <img
          class="w-1/4 md:w-[15vw] object-cover"
          :src="`${images.url}`"
          v-else
          v-for="images in memoryImages"
          :key="images.id"
          @click="checkImage(images)"
        />
      </div>
      <div v-else class="h-64"></div>
    </div>

    <div
      class="footer-container flex flex-col justify-center items-center flex-wrap w-4/5 md:w-3/5 text-2xl gap-5 pb-10"
    >
      <label class="form-label self-start" for="customFile">Upload your own image</label>
      <input @change="uploadFile" type="file" class="self-start w-full" id="customFile" />
    </div>
    <button
      class="bg-accent text-white text-2xl font-bold mb-5 py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
      @click="isOpen = true"
    >
      Delete Images
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
          class="md:w-1/3 w-10/12 h-1/3 bg-primary shadow-xl rounded flex flex-col justify-center items-center text-text-color"
        >
          <div class="text-center">
            <h1 class="text-xl my-4">Are you sure you want to delete all Images?</h1>
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
                deleteMemoryImages();
                (isOpen = false), (isStarted = false);
              "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import useMemoryStorage from "@/modules/useMemoryStorage.js";
import useMemoryImages from "@/modules/useMemoryImages.js";
import { ref, onMounted } from "vue";

const isStarted = ref(false);
const isFirstImage = ref(true);
const isOpen = ref(false);
const { uploadFile } = useMemoryStorage();
const { memoryImages, getMemoryImages, deleteMemoryImages } = useMemoryImages();
const singleImage = ref(null);
onMounted(() => {
  getMemoryImages();
});

// Could technically be a part of the useMemoryImages module,
// or be the start of a new module with logic related to the images.
const startGame = () => {
  isStarted.value = true;
  singleImage.value =
    memoryImages.value[Math.floor(Math.random() * memoryImages.value.length)];
  setTimeout(() => (isFirstImage.value = false), 1000);
};

// Could technically be a part of the useMemoryImages module,
// or be the start of a new module with logic related to the images.
const checkImage = (image) => {
  if (image.id === singleImage.value.id) {
    alert("You won!");
    isStarted.value = false;
    isFirstImage.value = true;
  } else {
    alert("You lost!");
    isStarted.value = false;
    isFirstImage.value = true;
  }
};
</script>

<style lang="scss" scoped></style>

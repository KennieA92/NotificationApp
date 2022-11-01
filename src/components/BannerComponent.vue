<template>
  <section id="banner-section ">
    <div
      class="bg-banner min-h-[50vh] bg-cover bg-center flex justify-center align-center border-b border-accent"
    >
      <div
        class="flex flex-wrap place-content-center text-center backdrop-brightness-[0.95]"
      >
        <div class="w-auto">
          <h1 class="h-auto mt-20 text-5xl font-headers text-text-color font-bold">
            Welcome to the Sandbox!<br />
          </h1>
          <div
            class="button-container flex flex-row flex-wrap place-content-center pt-14"
          >
            <!-- Using a combination of Flex Basis and Margin/Padding to ensure the placement of the buttons.
               This allows me to have 2 on the top line and 1 on the bottom when WIP is hidden. 
               Otherwise I'll have 2 and 2. Which is what I desired. 
               This could have been done using column gaps(x) -->
            <button
              class="basis-1/4 bg-accent font-headers text-xl text-white py-2 mx-10 my-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
            >
              <router-link to="explore"> Explore</router-link>
            </button>
            <button
              class="basis-1/4 bg-accent font-headers text-xl text-white py-2 mx-10 my-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
            >
              <router-link to="shop"> Shop</router-link>
            </button>
            <button
              class="basis-1/4 bg-accent font-headers text-xl text-white py-2 mx-10 my-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
            >
              <router-link to="about"> About</router-link>
            </button>
            <button
              class="basis-1/4 hidden xl:block bg-accent font-headers text-xl text-white py-2 mx-10 my-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300"
            >
              <router-link to="workinprogress"> WIP</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

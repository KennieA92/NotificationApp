<template>
  <section id="home-section flex justify-center">
    <BannerComponent />
    <div class="w-full bg-gradient-to-b from-[#1E2939] to-[#28364A] h-[5vh]"></div>

    <div v-if="isAdmin()">
      <RightHomeInfoComponent />
    </div>
    <div v-else>
      <LeftHomeInfoComponent />
    </div>


  </section>
</template>

<script setup>
// @ is an alias to /src
import { onMounted } from '@vue/runtime-core';
import useRoles from '../modules/useRoles';
import BannerComponent from '@/components/BannerComponent.vue';
import RightHomeInfoComponent from '@/components/RightHomeInfoComponent.vue';
import LeftHomeInfoComponent from '@/components/LeftHomeInfoComponent.vue';

const { isAdmin, getAdminData } = useRoles();
onMounted(() => {
  getAdminData();

});






</script>

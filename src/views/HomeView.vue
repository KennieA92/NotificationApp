<template>
  <section id="home-section flex justify-center">
    <BannerComponent />
    <div class="w-full bg-gradient-to-b from-[#1E2939] to-[#28364A] h-[5vh]"></div>
    <LeftHomeInfoComponent :isRight="true" />
    <RightHomeInfoComponent :isRight="true" />
    <LeftHomeInfoComponent :isRight="false" />

  </section>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import LeftHomeInfoComponent from '@/components/RightHomeInfoComponent.vue';
import RightHomeInfoComponent from '@/components/RightHomeInfoComponent.vue';
// @ is an alias to /src

export default {
  components: { BannerComponent, LeftHomeInfoComponent, RightHomeInfoComponent }
}
</script>

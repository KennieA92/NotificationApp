<template>
  <div class="relative flex bg-primary">
    <NavigationComponent class="min-w-9/12 lg:w-2/12" />
    <Suspense>
      <router-view class="w-full lg:w-10/12" />
    </Suspense>
  </div>
</template>
<script>
import NavigationComponent from "./components/NavigationComponent.vue";
export default {
  name: "App",
  components: { NavigationComponent },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

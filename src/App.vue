<template>
  <div class="relative flex overflow-x-hidden">

    <NavigationComponent />
    <router-view />
  </div>
</template>
<script>
import NavigationComponent from "./components/NavigationComponent.vue";
export default {
  name: "App",
  components: { NavigationComponent }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
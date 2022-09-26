<template>
  <div v-for="role in roles" :key="role.Name">
    {{role.Name}}
  </div>
  <div v-for="restaurant in restaurants" :key="restaurant.Name">
    {{restaurant.Name}}
  </div>

</template>
<script setup>
import { onMounted } from '@vue/runtime-core';
import useRestaurants from '../modules/useRestaurants';
import useRoles from '../modules/useRoles';

const { restaurants, getRestaurantsData } = useRestaurants();
const { roles, getAdminData } = useRoles();

onMounted(() => {
  getRestaurantsData();
  getAdminData();
});




</script>
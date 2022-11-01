<template>
  <div class="h-screen w-full flex justify-center items-center flex-col">
    <h1 class="text-white text-2xl mb-3">Login</h1>
    <form
      @submit.prevent="login"
      class="flex w-10/12 :md-w-6/12 flex-col justify-center items-center gap-2"
    >
      <input
        class="w-10/12 py-2 text-center"
        type="text"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="w-10/12 py-2 text-center"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <div class="">
        <input
          type="submit"
          value="Login"
          class="bg-accent font-headers text-xl text-white px-4 py-3 mx-2 md:mx-10 my-4 rounded-md"
        />
        <RouterLink
          to="/register"
          class="bg-accent font-headers text-xl text-white px-4 py-3 mx-2 md:mx-10 my-4 rounded-md"
        >
          Register</RouterLink
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import useUsers from "../modules/useUsers";
const { login, email, password } = useUsers();
</script>

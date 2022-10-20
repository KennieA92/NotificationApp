<template>
    <div class="login h-100 flex justify-center items-center flex-col ">
        <h1 class="text-2xl text-text-color py-2">Register to access The Sandbox</h1>
        <form @submit.prevent="registerUser" class="flex w-10/12 :md-w-6/12 flex-col justify-center items-center gap-2">
            <input class="w-10/12 py-2 text-center " type="text" placeholder="Email" v-model="email" />
            <input class="w-10/12 py-2 text-center " type="password" placeholder="Password" v-model="password" />
            <div>
                <button
                    class="bg-accent font-headers text-xl text-white px-4 py-2 mx-10 my-4 rounded-md">Register</button>
                <router-link to="/" class="bg-accent font-headers text-xl text-white px-4 py-2 mx-10 my-4 rounded-md">
                    Go
                    Home
                </router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import useUsers from '@/modules/useUsers.js';

const { registerUser, email, password } = useUsers();
</script>

<style lang="scss" scoped>

</style>
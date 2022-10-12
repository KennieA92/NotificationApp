<template>
    <div class="login h-100 flex justify-center items-center flex-col">
        <h1>Login</h1>
        <form @submit.prevent="login" class="flex w-10/12 :md-w-6/12 flex-col justify-center items-center">
            <input class="w-10/12" type="text" placeholder="Email" v-model="email" />
            <input class="w-10/12" type="password" placeholder="Password" v-model="password" />
            <input type="submit" value="Login" class="btn-login" />
        </form>
    </div>
</template>

<script setup>
import useUsers from "../modules/useUsers";
const { login, email, password } = useUsers();
</script>

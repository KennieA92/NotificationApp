<template>
    <div class="login h-100 flex justify-center items-center flex-col">
        <h1>Login</h1>
        <form @submit.prevent="login" class="flex w-10/12 :md-w-6/12 flex-col justify-center items-center">
            <input class="w-10/12" type="text" placeholder="Email" v-model="email" />
            <input class="w-10/12" type="password" placeholder="Password" v-model="password" />
            <input type="submit" value="Login" class="btn-login">
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const email = ref('');
const password = ref('');
const router = useRouter();
const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            // Signed in 
            router.push('/');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
        });
}



</script>
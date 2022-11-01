import { auth } from '../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';



const useUsers = () => {
    const email = ref('');
    const password = ref('');
    const user = ref(null);
    const router = useRouter();

    const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                user.value = userCredential.user;
                router.push('/');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            user.value = null;
        }).catch((error) => {
            console.log(error);
        });
    }

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                // Signed in 
                router.push('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password or email.');
                } else if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use.');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email.');
                } else {
                    alert(errorMessage);
                }
            });
    }


    const isLoggedIn = ref(false);
    const isUserLoggedIn = () => {
        user.value = auth.currentUser
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
            } else {
                isLoggedIn.value = false;
            }
        });
    }

    return {
        login,
        logout,
        registerUser,
        isLoggedIn,
        isUserLoggedIn,
        email,
        password,
        user
    }
}

export default useUsers
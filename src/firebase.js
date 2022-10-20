// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDW8FKURNUPSqTv-S4YrCx9VP4HY4NT-nE",
    authDomain: "ka-notification-app.firebaseapp.com",
    projectId: "ka-notification-app",
    storageBucket: "ka-notification-app.appspot.com",
    messagingSenderId: "670253150559",
    appId: "1:670253150559:web:c11e8ec8951d1b192946ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export const auth = getAuth(app);
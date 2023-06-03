import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBY1Rmg7yRcrvbT1S0MwjdxQfnpNRGpolU",
    authDomain: "mealstogo-55c16.firebaseapp.com",
    projectId: "mealstogo-55c16",
    storageBucket: "mealstogo-55c16.appspot.com",
    messagingSenderId: "30916240113",
    appId: "1:30916240113:web:3273beafbbd0b01294ff50"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp)

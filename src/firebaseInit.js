// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4dzkIY5khyTLFrwnU7oNXnfdbzCPDSc8",
    authDomain: "buy-busy-1-ff4fb.firebaseapp.com",
    projectId: "buy-busy-1-ff4fb",
    storageBucket: "buy-busy-1-ff4fb.appspot.com",
    messagingSenderId: "594587004132",
    appId: "1:594587004132:web:9df2758509eef5915550f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);